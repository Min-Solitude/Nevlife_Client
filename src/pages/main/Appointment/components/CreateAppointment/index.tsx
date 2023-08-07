import IonIcon from '@reacticons/ionicons'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { AppointmentState, createAppointMent } from 'redux/reducers/appointment'

const CreateAppointment = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [timeOpen, setTimeOpen] = useState('')
    const [timeClose, setTimeClose] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const _id = useAppSelector((state) => state.auth.user._id)

    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [timeStart, setTimeStart] = useState('0:00')
    const [timeEnd, setTimeEnd] = useState('0:00')

    const [dateAppointments, setDatAppointments] = useState<{ [date: string]: string[] }>({})

    const dispatch = useAppDispatch()

    const handleChooseDate = () => {
        const start = timeStart.trim()
        const end = timeEnd.trim()

        if (!start || !end) {
            alert('Please enter valid start and end times')
            return
        }

        const newDateAppointment = `${start} - ${end}`

        const appointmentsForDate = dateAppointments[date] || []
        const isConflict = appointmentsForDate.some((appointment) => {
            const [existingStart, existingEnd] = appointment.split(' - ')
            return start === existingStart && end === existingEnd
        })

        if (isConflict) {
            toast.error('Bạn đã có khung giờ khám này!')
            return
        }

        setDatAppointments((prevDateAppointments) => {
            const dateAppointmentsCopy = { ...prevDateAppointments }
            if (dateAppointmentsCopy[date]) {
                dateAppointmentsCopy[date].push(newDateAppointment)
            } else {
                dateAppointmentsCopy[date] = [newDateAppointment]
            }
            return dateAppointmentsCopy
        })

        // reset form
        setDate(date)
        setTimeStart(timeStart)
        setTimeEnd(timeEnd)
    }

    const handleCreateAppointment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.keys(dateAppointments).length === 0) {
            toast.error('Vui lòng chọn thời gian khám')
            return
        }

        if (!name || !address || !phoneNumber || !timeOpen || !timeClose || !description || !price) {
            toast.error('Vui lòng nhập đầy đủ thông tin')
            return
        }

        const data: AppointmentState = {
            _id,
            name,
            address,
            phoneNumber,
            timeOpen,
            timeClose,
            date: dateAppointments,
            description,
            price: Number(price)
        }

        dispatch(createAppointMent(data))
    }

    return (
        <View className='flex flex-col gap-4'>
            <form onSubmit={handleCreateAppointment} className='flex flex-col gap-4'>
                {dateAppointments && (
                    <View className='lg:mb-8'>
                        <h1 className='py-4 text-[1.2rem] font-bold text-blue-500'>Thời gian khám</h1>
                        <View className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
                            {Object.keys(dateAppointments).map((date) => (
                                <View
                                    key={date}
                                    className='flex flex-col gap-4  rounded-lg border border-gray-300 bg-gray-100 p-2'
                                >
                                    <h1 className='font-bold text-gray-500'>{date} :</h1>
                                    <View className='flex  flex-wrap gap-4'>
                                        {dateAppointments[date].map((time, indexTime) => (
                                            <View
                                                key={indexTime}
                                                className='flex items-center justify-between rounded-lg border border-gray-300 bg-white p-2'
                                            >
                                                <span>{time}</span>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
                <View className='flex flex-col  lg:flex-row lg:gap-4'>
                    <View className='flex flex-col gap-4  rounded-lg border border-gray-300 bg-gray-100 p-2 lg:p-4'>
                        <h1 className='py-2 font-bold text-blue-500 lg:text-[1.2rem]'>Chọn lịch khám</h1>
                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            type='date'
                            className='rounded-lg border border-gray-300 p-2 outline-blue-500'
                        />
                        <View className='flex items-center justify-between '>
                            <input
                                type='text'
                                value={timeStart}
                                onChange={(e) => setTimeStart(e.target.value)}
                                className=' max-w-[10rem] flex-1 rounded-lg border border-gray-300 p-2 text-center text-[0.9rem] font-bold  outline-blue-500'
                            />
                            <span className='flex items-center justify-center text-blue-500'>
                                <IonIcon name='remove' />
                            </span>
                            <input
                                type='text'
                                value={timeEnd}
                                onChange={(e) => setTimeEnd(e.target.value)}
                                className='felx max-w-[10rem] flex-1 rounded-lg border border-gray-300 p-2 text-center text-[0.9rem] font-bold outline-blue-500'
                            />
                        </View>
                        <motion.button
                            onClick={handleChooseDate}
                            type='button'
                            whileTap={{ scale: 0.9 }}
                            className='rounded-lg border bg-blue-500 py-2 text-white duration-200 hover:border-blue-500 hover:bg-white hover:text-blue-500'
                        >
                            Thêm
                        </motion.button>
                    </View>
                    <View className='lg:flex-1 '>
                        <h1 className='py-4 text-[1.2rem] font-bold text-blue-500 lg:hidden'>Thông tin phòng khám</h1>
                        <View className='flex flex-col gap-4 rounded-lg border border-gray-300 bg-gray-100 p-2 lg:p-4'>
                            <h1 className='hidden py-2 text-[1.2rem] font-bold text-blue-500 lg:block'>
                                Thông tin phòng khám
                            </h1>

                            <input
                                type='text'
                                placeholder='Tên phòng khám'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='rounded-lg border border-gray-300  p-2 outline-blue-500'
                            />
                            <input
                                type='text'
                                placeholder='Địa chỉ'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className='rounded-lg border border-gray-300  p-2 outline-blue-500'
                            />
                            <input
                                type='text'
                                placeholder='Số điện thoại'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className='rounded-lg border border-gray-300  p-2 outline-blue-500'
                            />
                            <input
                                type='text'
                                placeholder='0:00 (Thời gian mở cửa) '
                                value={timeOpen}
                                onChange={(e) => setTimeOpen(e.target.value)}
                                className='rounded-lg border border-gray-300  p-2 outline-blue-500'
                            />
                            <input
                                type='text'
                                placeholder='0:00 (Thời gian đóng cửa) '
                                value={timeClose}
                                onChange={(e) => setTimeClose(e.target.value)}
                                className='rounded-lg border border-gray-300  p-2 outline-blue-500'
                            />
                            <input
                                type='text'
                                value={price}
                                placeholder='Giá'
                                onChange={(e) => setPrice(e.target.value)}
                                className='rounded-lg border border-gray-300  p-2 outline-blue-500'
                            />
                            <textarea
                                placeholder='Mô tả'
                                onChange={(e) => setDescription(e.target.value)}
                                className='min-h-[15rem] rounded-lg border border-gray-300  p-2 outline-blue-500'
                                value={description}
                            ></textarea>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                type='submit'
                                className='mt-4 rounded-lg border bg-blue-500 py-2 text-white duration-200 hover:border-blue-500 hover:bg-white hover:text-blue-500 lg:max-w-[15rem]'
                            >
                                Tạo phòng khám
                            </motion.button>
                        </View>
                    </View>
                </View>
            </form>
        </View>
    )
}

export default CreateAppointment
