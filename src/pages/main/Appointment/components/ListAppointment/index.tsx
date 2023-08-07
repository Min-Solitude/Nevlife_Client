import axios from 'axios'
import { useEffect, useState } from 'react'

import View from 'components/shared/View'
import { useAppSelector } from 'hooks/useRedux'
import { Appointment } from 'types/appointment'
import { motion } from 'framer-motion'
import DetailAppointment from '../DetailAppointment'

const ListAppointment = () => {
    const _id = useAppSelector((state) => state.auth.user._id)
    const [listAppointment, setListAppointment] = useState([])
    const [isDetail, setIsDetail] = useState(false)
    const [isDetailAppointment, setIsDetailAppointment] = useState<Appointment>()

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/appointment/get-appointment-doctor/${_id}`)
            .then((res) => {
                setListAppointment(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <View className='grid grid-cols-1 gap-4 lg:grid-cols-2 '>
            {listAppointment ? (
                listAppointment.map((item: Appointment, index) => {
                    return (
                        <View key={index} className='rounded-2xl border border-gray-200 bg-gray-100 p-4'>
                            <View className='flex justify-between'>
                                <h1 className='font-bold uppercase text-gray-800'>{item.name}</h1>
                                <View className='flex items-center gap-2'>
                                    <span
                                        className={
                                            item.status === 'inactive'
                                                ? 'rounded-lg bg-yellow-500 p-1 text-[0.8rem] font-bold text-white'
                                                : item.status === 'active'
                                                ? 'rounded-lg bg-green-500 p-1 text-[0.8rem] font-bold text-white'
                                                : 'rounded-lg bg-red-500 p-1 text-[0.8rem] font-bold text-white'
                                        }
                                    >
                                        {item.status === 'inactive'
                                            ? 'Chờ duyệt'
                                            : item.status === 'active'
                                            ? 'Đã duyệt'
                                            : 'Từ chối'}
                                    </span>
                                    <span
                                        className={
                                            item.status === 'inactive'
                                                ? 'rounded-lg bg-yellow-500 p-1 text-[0.8rem] font-bold text-white'
                                                : item.status === 'active'
                                                ? 'rounded-lg bg-green-500 p-1 text-[0.8rem] font-bold text-white'
                                                : 'rounded-lg bg-red-500 p-1 text-[0.8rem] font-bold text-white'
                                        }
                                    ></span>
                                </View>
                            </View>
                            <View className='mt-4 flex flex-col gap-4'>
                                <View className='flex items-center gap-2'>
                                    <label className='text-[0.9rem] font-bold text-gray-900'>Thời gian:</label>
                                    <span className='text-[0.9rem] font-bold text-blue-500'>
                                        {item.timeOpen} - {item.timeClose}
                                    </span>
                                </View>
                                <View className='flex items-center gap-2'>
                                    <label className='text-[0.9rem] font-bold text-gray-900'>Địa chỉ:</label>
                                    <span className='text-[0.9rem] '>{item.address}</span>
                                </View>
                                <View className='flex items-center gap-2'>
                                    <label className='text-[0.9rem] font-bold text-gray-900'>Số điện thoại:</label>
                                    <span className='text-[0.9rem] '>{item.phoneNumber}</span>
                                </View>
                                <View className='flex items-center gap-2'>
                                    <label className='text-[0.9rem] font-bold text-gray-900'>Giá:</label>
                                    <span className='text-[0.9rem] '>
                                        {item.price.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}
                                    </span>
                                </View>
                            </View>
                            <View className='mb-6 mt-4  rounded-lg bg-white p-4'>
                                <p className='limit text-[0.9rem]'>{item.description}</p>
                            </View>
                            <motion.button
                                className=' w-full rounded-lg border border-blue-500 bg-white px-4 py-2 text-[0.9rem] duration-200 hover:bg-blue-500  hover:text-white xl:w-[10rem] xl:w-auto'
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    setIsDetailAppointment(item)
                                    setIsDetail(true)
                                }}
                            >
                                Xem
                            </motion.button>
                        </View>
                    )
                })
            ) : (
                <h1>Không có phòng khám nào</h1>
            )}

            {isDetail && isDetailAppointment && (
                <DetailAppointment
                    data={isDetailAppointment}
                    close={() => {
                        setIsDetail(false)
                        setIsDetailAppointment(undefined)
                    }}
                />
            )}
        </View>
    )
}

export default ListAppointment
