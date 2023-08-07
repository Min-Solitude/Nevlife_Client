import View from 'components/shared/View'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBookingById } from 'redux/reducers/booking'
import history from 'redux/store/history'

const ExaminationSchedule = () => {
    const dispatch = useAppDispatch()
    const { _id } = useParams<{ _id: string }>()
    const infoBooking: any = useAppSelector((state) => state.booking.booking)

    console.log(infoBooking)

    useEffect(() => {
        if (_id) dispatch(getBookingById(_id))
    }, [])

    return (
        <View className='flex min-h-screen flex-col gap-4 p-4 xl:items-center'>
            <h1 className='text-[1.2rem] font-bold uppercase text-blue-500'>Thông tin lịch khám</h1>
            <View className='flex  flex-col gap-4 xl:max-w-[40rem]   xl:rounded-lg xl:border xl:border-gray-300 xl:bg-gray-100 xl:p-4'>
                <View className='flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-100 p-2 xl:border-none xl:bg-white'>
                    <View className='flex gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>Địa chỉ khám:</h1>
                        <p>{infoBooking.address}</p>
                    </View>
                    <View className='flex gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>Thời gian khám:</h1>
                        <p>
                            {infoBooking.date} - {infoBooking.time}
                        </p>
                    </View>
                    <View className='flex gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>Email:</h1>
                        <p>{infoBooking.email}</p>
                    </View>
                    <View className='flex gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>SDT:</h1>
                        <p>{infoBooking.phoneNumber}</p>
                    </View>
                    <View className='flex gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>Giá tiền:</h1>
                        <p>
                            {infoBooking.total.toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND'
                            })}
                        </p>
                    </View>
                    <View className='flex items-center gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>Trạng thái:</h1>
                        {infoBooking.status === 'active' ? (
                            <p className='text-[0.8rem rounded-full bg-green-500 p-2 font-bold text-white'>
                                Đã xác nhận
                            </p>
                        ) : infoBooking.status === 'inactive' ? (
                            <p className='rounded-full bg-yellow-500 p-2 text-[0.8rem] font-bold text-white'>
                                Đang chờ xác nhận
                            </p>
                        ) : (
                            <p className='text-[0.8rem rounded-full bg-red-500 p-2 font-bold text-white'>Đã hủy</p>
                        )}
                    </View>
                    <View className='flex gap-2 text-[0.9rem] xl:text-[1rem]'>
                        <h1 className='font-bold text-gray-900'>Thẻ vật lý:</h1>
                        {infoBooking.PrintCard === true ? (
                            <span className='font-bold text-blue-500'>Có</span>
                        ) : (
                            <span className='font-bold text-red-500'>Không</span>
                        )}
                    </View>
                </View>

                <View className='flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-100 p-2'>
                    <h1 className='font-bold text-gray-900'>Thông tin tài khoản</h1>
                    <View className='h-[25rem] rounded-lg'>
                        <img
                            src={infoBooking.userBooking.avatar}
                            alt={infoBooking.userBooking.username}
                            className='h-full w-full rounded-lg object-cover'
                        />
                    </View>
                    <View className='flex items-center gap-2'>
                        <h1 className='font-bold text-gray-900'>Họ và tên:</h1>
                        <p>{infoBooking.userBooking.username}</p>
                    </View>
                    <View className='flex items-center gap-2'>
                        <h1 className='font-bold text-gray-900'>Email:</h1>
                        <p>{infoBooking.userBooking.email}</p>
                    </View>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className='rounded-lg bg-blue-500 py-2 font-bold text-white'
                        onClick={() => history.push('/')}
                    >
                        Quay về trang chủ
                    </motion.button>
                </View>
            </View>
        </View>
    )
}

export default ExaminationSchedule
