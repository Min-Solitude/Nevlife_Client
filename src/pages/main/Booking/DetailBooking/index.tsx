import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import Section from 'motion/Section'
import { useNavigate } from 'react-router-dom'

const DetailBooking = () => {
    const navigate = useNavigate()
    return (
        <Section>
            <View className='mt-[6rem] flex w-full flex-col items-start justify-start gap-8 md:flex-row'>
                <motion.button
                    className='flex items-center gap-2 duration-300 hover:gap-4 md:hidden'
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/booking')}
                >
                    <IonIcon name='arrow-back' className='text-[1.4rem] text-gray-700' />
                    <span className='font-bold'>Chọn lịch khám</span>
                </motion.button>
                <View className='mt-4 xl:flex-[2]'>
                    <View className='rounded-lg bg-gray-100 p-4 shadow-md'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <IonIcon name='calendar' className='text-[1.4rem] text-gray-700' />
                            <span>Chọn ngày</span>
                            <p className='text-gray-600'>- 12/7/2023</p>
                        </h2>
                        <View className='mt-8 flex flex-wrap items-center gap-4'>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-blue-500 p-4 text-white'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white p-4'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white p-4'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white p-4'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white p-4'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white p-4'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                            <motion.button
                                className='flex h-[5rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white p-4'
                                whileTap={{ scale: 0.9 }}
                            >
                                <p className='text-[0.9rem]'>FRI</p>
                                <span className='font-bold'>07</span>
                            </motion.button>
                        </View>
                    </View>
                    <View className='mt-8 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <h2 className=' flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <IonIcon name='time' className='text-[1.4rem] text-gray-700' />
                            <span>Chọn giờ</span>
                        </h2>
                        <View className='mt-8 flex flex-wrap items-center gap-4'>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-blue-500 px-6 py-2 font-bold text-white'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-gray-400 bg-white px-6 py-2 font-bold text-gray-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                08 - 09 AM
                            </motion.button>
                        </View>
                    </View>
                    <View className='mt-8 flex items-start gap-4 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <View>
                            <input type='checkbox' className='h-4 w-4' />
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
                            />
                        </View>
                    </View>
                    <View className='mt-8 flex items-start gap-4 rounded-lg bg-gray-100 p-4 shadow-md'>
                        <View>
                            <IonIcon name='people' className='text-[1.4rem] text-gray-700' />
                        </View>
                        <View>
                            <p className='font-bold text-[1.2re] text-gray-700'>Đặt phòng cho thành viên gia đình</p>
                            <span className='text-[0.9rem] text-gray-700'>
                                Danh sách thành viên gia đình đủ điều kiện nhận gói trên.
                            </span>
                            <View className='flex gap-4'>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className='mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white'
                                >
                                    Chỉ mình bạn
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className='mt-4 rounded-lg bg-white px-4 py-2 text-gray-700'
                                >
                                    Cả gia đình
                                </motion.button>
                            </View>
                        </View>
                    </View>
                </View>
                <View className=' flex w-full flex-col gap-4 xl:flex-1'>
                    <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                        <span>Chi tiết lịch đặt</span>
                    </h2>
                    <View className='flex w-full flex-col gap-4 border-y border-gray-200 py-4'>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Lịch đặt / kiểm tra </span>
                            <motion.button className='text-blue-500' whileTap={{ scale: 0.9 }}>
                                Chỉnh sửa
                            </motion.button>
                        </View>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Thông tin hoàn chỉnh</span>
                            <span>2x Rx.1700/-</span>
                        </View>
                        <View className='flex justify-between font-bold text-gray-700'>
                            <span>Kiểm tra sức khỏe</span>
                            <span>2x Rx.1700/-</span>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4 border-b border-gray-200 py-4'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <p>
                                Kiểm tra thông tin <span className='text-red-500'>*</span>{' '}
                            </p>
                        </h2>
                        <View className='flex flex-col justify-between gap-2  font-bold text-gray-700'>
                            <h2>Địa chỉ</h2>
                            <View className='flex justify-between'>
                                <p className='flex items-center gap-2'>
                                    958/3 Au co, P.14, Tan Binh
                                    <IonIcon name='checkmark-circle' className='text-[1.4rem] text-green-500' />
                                </p>
                                <motion.button className='text-blue-500' whileTap={{ scale: 0.9 }}>
                                    Thay đổi
                                </motion.button>
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
                                <p className='flex items-center gap-2'>
                                    <IonIcon name='calendar' className='text-[1.4rem] text-gray-700' />
                                    <span>06:00 AM Sat, 12 Jun 2023</span>
                                </p>
                            </View>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4 border-b border-gray-200 py-4'>
                        <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                            <p>
                                Đặt cho<span className='text-red-500'>*</span>{' '}
                            </p>
                        </h2>
                        <View className='flex flex-wrap gap-2 '>
                            <span className='rounded-full bg-blue-400 px-3 py-1 text-[0.9rem] text-white'>Cá nhân</span>
                            <span className='rounded-full bg-blue-400 px-3 py-1 text-[0.9rem] text-white'>
                                Người thân
                            </span>
                        </View>
                    </View>
                    <View className='flex w-full flex-col gap-4  py-4'>
                        <View className='flex items-center justify-between'>
                            <h2 className='flex items-center gap-2 text-[1rem] font-bold text-gray-800'>
                                Tổng hóa đơn
                            </h2>
                            <span className='text-[1.2rem] font-bold'>9.000.000đ</span>
                        </View>
                        <motion.button
                            className='mt-4 rounded-lg bg-blue-600 py-4 font-bold text-white duration-300 hover:bg-blue-500'
                            whileTap={{ scale: 0.9 }}
                        >
                            Quy trình thanh toán
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
