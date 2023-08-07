import IonIcon from '@reacticons/ionicons'
import View from 'components/shared/View'
import { Appointment } from 'types/appointment'
import { motion } from 'framer-motion'

type DetailAppointmentProps = {
    data: Appointment
    close: () => void
}

const DetailAppointment = ({ data, close }: DetailAppointmentProps) => {
    console.log(data)

    return (
        <View
            className='fixed right-0 top-[6rem] z-50 flex h-[83%] w-[90%] flex-col gap-3 rounded-l-2xl border border-gray-300 bg-white p-4 shadow-md xl:top-0 xl:h-full xl:max-w-[50rem] '
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className='text-[1.2rem] font-bold uppercase text-blue-500'>{data.name}</h1>
            <View className='flex gap-4'>
                <View className=' w-[10rem] rounded-lg bg-pink-300'>
                    <img
                        src={
                            data.doctor.avatar
                                ? data.doctor.avatar
                                : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1631799992/doctor-default-image_qxqj3h.png'
                        }
                        alt={data.doctor.username}
                        className='w-full  rounded-lg'
                    />
                </View>
                <View className='flex flex-1 flex-col gap-2 rounded-lg border border-gray-300 bg-gray-100 p-2 text-[0.9rem]'>
                    <View className='flex items-center gap-2'>
                        <label className='font-bold text-gray-800'>Tên:</label>
                        <p>{data.doctor.username}</p>
                    </View>
                    <View className='flex items-center gap-2'>
                        <label className='font-bold text-gray-800'>SDT:</label>
                        <p>{data.doctor.phoneNumber}</p>
                    </View>
                    <View className='flex items-center gap-2'>
                        <label className='font-bold text-gray-800'> Địa chỉ:</label>
                        <p>{data.doctor.address}</p>
                    </View>
                    <View className='flex items-center gap-2'>
                        <label className='font-bold text-gray-800'> Email:</label>
                        <p>{data.doctor.email}</p>
                    </View>
                    <View className='flex items-center gap-2'>
                        <label className='font-bold text-gray-800'> Kinh nghiệm:</label>
                        <p>{data.doctor.experience} năm</p>
                    </View>
                    <View className='flex items-center gap-2'>
                        <label className='font-bold text-gray-800'> Đánh giá:</label>
                        <p>
                            {data.doctor.evaluate} <IonIcon name='star' className='text-yellow-400' />{' '}
                        </p>
                    </View>
                </View>
            </View>
            <View className='mt-4 flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-100 p-2'>
                <h1 className='text-[1.1rem] font-bold text-blue-500'>Thông tin phòng khám</h1>
                <View className='flex items-center gap-2 text-[0.9rem]'>
                    <label className='font-bold text-gray-800'> Thời gian:</label>
                    <p>
                        {data.timeOpen} - {data.timeClose}
                    </p>
                </View>
                <View className='flex items-center gap-2 text-[0.9rem]'>
                    <label className='font-bold text-gray-800'> Địa chỉ:</label>
                    <p>{data.address}</p>
                </View>
                <View className='flex items-center gap-2 text-[0.9rem]'>
                    <label className='font-bold text-gray-800'> SDT:</label>
                    <p>{data.phoneNumber}</p>
                </View>
                <View className='flex items-center gap-2 text-[0.9rem]'>
                    <label className='font-bold text-gray-800'> Giá:</label>
                    <p>
                        {data.price.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        })}
                    </p>
                </View>
                <View className='flex items-center gap-2 text-[0.9rem]'>
                    <label className='font-bold text-gray-800'> Trạng thái:</label>
                    <p
                        className={`${
                            data.status === 'active'
                                ? 'text-green-500'
                                : data.status === 'block'
                                ? 'text-red-500'
                                : 'text-yellow-500'
                        }`}
                    >
                        {data.status === 'active' ? 'Đã duyệt' : data.status === 'block' ? 'Từ chối' : 'Chờ xác nhận'}
                    </p>
                </View>
            </View>
            <View className='mt-4 flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-100 p-2'>
                <h1 className='text-[1.1rem] font-bold text-blue-500'>Mô tả</h1>
                <p className='h-[8rem] overflow-y-scroll text-[0.9rem]'>{data.description}</p>
            </View>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={close}
                className='mt-4 rounded-lg bg-blue-500 py-2 font-bold text-white shadow-md hover:bg-blue-600'
            >
                Đóng
            </motion.button>
        </View>
    )
}

export default DetailAppointment
