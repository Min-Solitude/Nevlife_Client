import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import http from 'utils/http'
import history from 'redux/store/history'

type AppointmentProps = {
    address: string
    date: {
        [key: string]: string[]
    }
    description: string
    doctor: {
        address: string
        avatar: string
        email: string
        evaluate: string
        experience: string
        phoneNumber: string
        specialized: string
        username: string
    }
    name: string
    phoneNumber: string
    status: string
    timeClose: string
    timeOpen: string
    _id: string
}

const RoomAppointmentDoctor = () => {
    const { id: userId } = useParams<{ id: string }>()
    const [listAppointment, setListAppointment] = useState([])

    const getListAppointmentByDoctor = () => {
        const res = http.get(`/appointment/show-appointment-doctor/${userId}`)
        res.then((res) => {
            setListAppointment(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getListAppointmentByDoctor()
    }, [])

    if (listAppointment.length === 0) {
        return (
            <View className='mt-4 lg:mt-0'>
                <h1 className='font-bold'>Danh sách lịch khám</h1>
                <View className='mt-4 grid grid-cols-1 gap-4'>
                    <View className='rounded-lg border border-gray-300 p-2 text-center'>
                        <h1 className='font-bold uppercase text-gray-800'>Bạn chưa có lịch khám nào</h1>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className='mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white'
                            onClick={() => history.back()}
                        >
                            Trở về
                        </motion.button>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View className='mt-4 lg:mt-0'>
            <h1 className='font-bold'>Danh sách lịch khám</h1>
            <View className='mt-4 grid grid-cols-1 gap-4'>
                {listAppointment.map((item: AppointmentProps) => (
                    <View
                        key={item._id}
                        className='flex flex-col items-start justify-start rounded-lg border border-gray-300 bg-gray-100 p-2 lg:p-4'
                    >
                        <h1 className='font-bold uppercase text-gray-800'>{item.name}</h1>

                        <View className=' mt-2 text-[0.9rem]'>
                            <View>
                                <label className='mr-2'>Thời gian:</label>
                                <span className='rounded-full bg-blue-500 px-4 py-1 text-[0.8rem] font-bold text-white'>
                                    {item.timeOpen}
                                </span>
                                <span className='mx-2'>-</span>
                                <span className='rounded-full bg-blue-500 px-4 py-1 text-[0.8rem] font-bold text-white'>
                                    {item.timeClose}
                                </span>
                            </View>
                            <View className='mt-2'>
                                <label className='mr-2'>Địa chỉ:</label>
                                <span>{item.address}</span>
                            </View>
                            <View>
                                <label className='mr-2'>SDT:</label>
                                <span>{item.phoneNumber}</span>
                            </View>
                            <View className='py-4'>
                                <h1 className='font-bold uppercase text-blue-500'>Thời gian khám</h1>
                                <View className='mt-2 flex flex-col gap-2'>
                                    {Object.keys(item.date).map((key) => (
                                        <View key={key} className='flex flex-col gap-1'>
                                            <label className='font-bold text-gray-800'>{key}:</label>
                                            <View className='flex flex-wrap gap-2'>
                                                {item.date[key].map((time) => (
                                                    <span
                                                        key={time}
                                                        className='rounded-full bg-blue-500 px-4 py-1 text-[0.8rem] font-bold text-white'
                                                    >
                                                        {time}
                                                    </span>
                                                ))}
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                        <View>
                            <label className='mr-2'>Mô tả:</label>
                            <span className='limit text-[0.9rem] text-gray-800'>{item.description}</span>
                        </View>
                        <motion.button
                            className='mt-4 flex items-center justify-center rounded-lg bg-blue-800 px-4 py-2 font-bold text-white'
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                history.push(`/booking/order/${item._id}`)
                            }}
                        >
                            Đặt lịch khám
                        </motion.button>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default RoomAppointmentDoctor
