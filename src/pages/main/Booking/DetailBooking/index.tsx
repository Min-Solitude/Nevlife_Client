import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import Section from 'motion/Section'
import history from 'redux/store/history'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useEffect, useState } from 'react'
import { getAppointmentById } from 'redux/reducers/appointment'
import { CreateBookingPayload, createBooking } from 'redux/reducers/booking'

const DetailBooking = () => {
    const { id: _id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const [chosenDate, setChosenDate] = useState<string>('')
    const [chosenTime, setChosenTime] = useState<string>('')
    const [chosenInfo, setChosenInfo] = useState<boolean>(true)
    const [chosenCard, setChosenCard] = useState<boolean>(false)

    const infoAccount = useAppSelector((state) => state.auth.user)
    const [usename, setUsername] = useState<string>(infoAccount?.username || '---')
    const [phoneNumber, setPhoneNumber] = useState<string>(infoAccount?.phoneNumber || '---')
    const [address, setAddress] = useState<string>(infoAccount?.address || '---')
    const [email, setEmail] = useState<string>(infoAccount?.email || '---')

    useEffect(() => {
        if (_id) {
            dispatch(getAppointmentById(_id))
        }
    }, [_id, dispatch])

    const infoAppointment = useAppSelector((state) => state.appointment)

    const [total, setTotal] = useState<number>(infoAppointment?.price || 0)

    const timeSlots = chosenDate && infoAppointment?.date[chosenDate]

    const handleOrder = async () => {
        const data: CreateBookingPayload = {
            userBookingId: infoAccount?._id,
            date: chosenDate,
            time: chosenTime,
            username: usename,
            phoneNumber: phoneNumber,
            address: address,
            email: email,
            PrintCard: chosenCard,
            total: total,
            appointmentId: infoAppointment?._id
        }

        dispatch(createBooking(data))
    }

    return (
        <Section>
            <View className='mt-[6rem] flex w-full flex-col items-start justify-start gap-8 md:flex-row'>
                <motion.button
                    className='flex items-center gap-2 duration-300 hover:gap-4 md:hidden'
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        history.back()
                    }}
                >
                    <IonIcon name='arrow-back' className='text-[1.4rem] text-gray-700' />
                    <span className='font-bold'>Chọn lịch khám</span>
                </motion.button>
                <View className='mt-4 xl:flex-[2]'>
                    <View className='rounded-lg bg-gray-100 p-4 shadow-md'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <IonIcon name='calendar' className='text-[1.4rem] text-gray-700' />
                            <span>Chọn ngày</span>
                            {chosenDate && <IonIcon name='checkmark-circle' className='text-[1.4rem] text-green-500' />}
                        </h2>
                        <View className='mt-8 flex flex-wrap items-center gap-4'>
                            {Object.keys(infoAppointment?.date || {}).map((dateKey) => {
                                return (
                                    <motion.button
                                        key={dateKey}
                                        className={
                                            chosenDate === dateKey
                                                ? 'flex items-center justify-center rounded-lg border border-gray-400 bg-blue-500 px-6 py-2 font-bold text-white'
                                                : 'flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                        }
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            setChosenDate(dateKey)
                                        }}
                                    >
                                        <p className='text-[0.9rem] font-bold'>{dateKey}</p>
                                    </motion.button>
                                )
                            })}
                        </View>
                    </View>
                    <View className='mt-8 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <h2 className=' flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <IonIcon name='time' className='text-[1.4rem] text-gray-700' />
                            <span>Chọn giờ</span>
                            {chosenTime && <IonIcon name='checkmark-circle' className='text-[1.4rem] text-green-500' />}
                        </h2>
                        <View className='mt-8 flex flex-wrap items-center gap-4'>
                            {chosenDate ? (
                                timeSlots &&
                                timeSlots.length > 0 &&
                                timeSlots.map((timeSlot) => (
                                    <motion.button
                                        key={timeSlot}
                                        className={
                                            chosenTime === timeSlot
                                                ? 'flex items-center justify-center rounded-lg border border-gray-400 bg-blue-500 px-6 py-2 font-bold text-white'
                                                : 'flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                        }
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            setChosenTime(timeSlot)
                                        }}
                                    >
                                        {timeSlot}
                                    </motion.button>
                                ))
                            ) : (
                                <p className='text-red-500'>Vui lòng chọn ngày</p>
                            )}
                        </View>
                    </View>

                    <View className='mt-8 flex flex-col items-start gap-4 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <h1 className=' flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            Thông tin cá nhân
                        </h1>
                        <View className='flex w-full flex-col gap-4'>
                            <View className='flex items-center gap-4'>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className={
                                        chosenInfo
                                            ? 'rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-[0.9rem] font-bold text-white'
                                            : 'rounded-lg border bg-white px-4 py-2 text-[0.9rem] font-bold text-gray-700'
                                    }
                                    onClick={() => {
                                        setChosenInfo(true)
                                    }}
                                >
                                    Thông tin tài khoản
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className={
                                        chosenInfo
                                            ? 'rounded-lg border bg-white px-4 py-2 text-[0.9rem] font-bold text-gray-700'
                                            : 'rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-[0.9rem] font-bold text-white'
                                    }
                                    onClick={() => {
                                        setChosenInfo(false)
                                    }}
                                >
                                    Thông tin khác
                                </motion.button>
                            </View>
                            <View className='flex w-full flex-col gap-2 '>
                                <input
                                    type='text'
                                    value={usename}
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                    disabled={chosenInfo}
                                    className='mt-4 w-full max-w-[25rem] rounded-lg border border-gray-400 p-2 text-[0.9rem] font-bold text-gray-800 outline-none'
                                />
                                <input
                                    type='text'
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    disabled={chosenInfo}
                                    className='mt-4 w-full max-w-[25rem] rounded-lg border border-gray-400 p-2 text-[0.9rem] font-bold text-gray-800 outline-none'
                                />
                                <input
                                    type='text'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    disabled={chosenInfo}
                                    className='mt-4 w-full max-w-[25rem] rounded-lg border border-gray-400 p-2 text-[0.9rem] font-bold text-gray-800 outline-none'
                                />
                            </View>
                        </View>
                    </View>

                    <View className='mt-8 flex items-start gap-4 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <View>
                            <input
                                type='checkbox'
                                className='h-4 w-4'
                                checked={chosenCard}
                                onChange={(e) => {
                                    setChosenCard(!chosenCard)
                                    if (chosenCard) {
                                        setTotal(total - 50000)
                                    } else {
                                        setTotal(total + 50000)
                                    }
                                }}
                            />
                        </View>
                        <View>
                            <p className='font-bold text-[1.2re] text-gray-700'>Cấp thẻ thông tin vật lý</p>
                            <span className='text-[0.9rem] text-gray-700'>Nhận qua bưu điện</span>
                        </View>
                    </View>
                    <View className='mt-8 flex items-start gap-4 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <View>
                            <IonIcon name='call' className='text-[1.4rem] text-gray-700' />
                        </View>
                        <View>
                            <p className='font-bold text-[1.2re] text-gray-700'>Số điện thoại di động</p>
                            <span className='text-[0.9rem] text-gray-700'>
                                Vui lòng nhập số điện thoại để kiểm tra thông tin.
                            </span>
                            <input
                                type='text'
                                className='mt-4 w-full max-w-[25rem] rounded-lg border border-gray-400 p-2 outline-none'
                                placeholder='Nhập số điện thoại'
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value)
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View className=' flex w-full flex-col gap-4 xl:flex-1'>
                    <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                        <span>Chi tiết lịch đặt</span>
                    </h2>
                    <View className='flex w-full flex-col gap-4 border-y border-gray-200 py-4'>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Khách hàng:</span>
                            <span>{usename}</span>
                        </View>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Số điện thoại:</span>
                            <span>{phoneNumber}</span>
                        </View>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Địa chỉ:</span>
                            <span>{address}</span>
                        </View>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Email:</span>
                            <span>{email}</span>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4 border-b border-gray-200 py-4'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <p>
                                Kiểm tra thông tin <span className='text-red-500'>*</span>{' '}
                            </p>
                        </h2>
                        <View className='flex flex-col justify-between gap-4  font-bold text-gray-700'>
                            <View className='flex justify-between'>
                                <p className='flex items-center gap-2'>Phòng:</p>
                                <p className='flex items-center gap-2'>{infoAppointment?.name}</p>
                            </View>
                            <View className='flex justify-between'>
                                <p className='flex items-center gap-2'>Địa chỉ:</p>
                                <p className='limit-1 flex max-w-[15rem] items-center gap-2 '>
                                    {infoAppointment?.address}
                                </p>
                            </View>
                            <View className='flex justify-between'>
                                <p className='flex items-center gap-2'>SDT:</p>
                                <p className='flex items-center gap-2'>{infoAppointment?.phoneNumber}</p>
                            </View>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4 border-b border-gray-200 py-4'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <p>
                                Thời gian và ngày <span className='text-red-500'>*</span>{' '}
                            </p>
                        </h2>
                        <View className='flex flex-col justify-between gap-2  font-bold text-gray-700'>
                            <View className='flex justify-between'>
                                <View className='flex items-center gap-2'>
                                    <IonIcon name='calendar' className='text-[1.4rem] text-gray-700' />
                                    <View className='flex items-center gap-2 text-[0.9rem]'>
                                        <span>{chosenDate ? chosenDate : 'dd/mm/yyyy'}</span> <span>-</span>
                                        <span>{chosenTime ? chosenTime : '0:00'}</span>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4 border-b border-gray-200 py-4'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <p>
                                Thẻ vật lý<span className='text-red-500'>*</span>{' '}
                            </p>
                        </h2>
                        <View className='flex flex-wrap gap-2 '>
                            <span className='rounded-full bg-blue-400 px-3 py-1 text-[0.9rem] text-white'>
                                {chosenCard ? 'Có' : 'Không'}
                            </span>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4  py-4'>
                        <View className='flex items-center justify-between'>
                            <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                                Tổng hóa đơn
                            </h2>
                            <span className='text-[1.2rem] font-bold'>
                                {total.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}
                            </span>
                        </View>
                        <motion.button
                            className='mt-4 rounded-lg bg-blue-600 py-4 font-bold text-white duration-300 hover:bg-blue-500'
                            whileTap={{ scale: 0.9 }}
                            onClick={handleOrder}
                        >
                            Thanh toán
                        </motion.button>
                    </View>
                    <View className='mt-4 flex w-full gap-4 rounded-lg  bg-gray-100 p-4'>
                        <IonIcon name='call' className='text-[4rem] text-gray-700' />
                        <View className='flex flex-col gap-2'>
                            <p className='text-[1.1rem] font-bold text-gray-700'>Chúng tôi có thể giúp gì cho bạn?</p>
                            <span className='text-[0.9rem] text-gray-700'>
                                Gọi tới +84 98 594 0157 hoặc trò chuyện qua kênh hỗ trợ để nhận tư vấn từ chúng tôi
                            </span>
                            <motion.button
                                className='mt-4 max-w-[15rem] rounded-lg border border-blue-500 bg-white px-4 py-2 text-blue-500'
                                whileTap={{ scale: 0.9 }}
                            >
                                Chat với chúng tôi
                            </motion.button>
                        </View>
                    </View>
                </View>
            </View>
        </Section>
    )
}

export default DetailBooking
