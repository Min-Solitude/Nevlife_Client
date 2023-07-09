import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import Section from 'motion/Section'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Profile = () => {
    const [isTypeInput, setIsTypeInput] = useState(false)

    const handleOpenCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            // Mở camera và truy cập vào video stream
            const video = document.createElement('video')
            video.srcObject = stream
            video.play()
            // Chuyển video stream thành canvas
            const canvas = document.createElement('canvas')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            const ctx = canvas.getContext('2d')
            ctx?.drawImage(video, 0, 0)
        } catch (error) {
            toast.error('Không thể mở camera')
        }
    }

    return (
        <Section>
            <View className='mt-[6rem] min-h-screen '>
                <h1 className='flex items-center font-bold   md:mb-8'>
                    <IonIcon name='code-working' className='mr-2 inline-block text-[1.2rem]' /> Profile
                </h1>
                <View className='gap-4   md:flex  xl:gap-16'>
                    <View className='mt-4 flex flex-col items-center gap-4  md:mt-0 xl:items-start '>
                        <View className='relative h-[20rem] w-full rounded-lg shadow-lg lg:h-[30rem] lg:w-[30rem]'>
                            <motion.button className='absolute left-4 top-4' whileTap={{ scale: 0.9 }}>
                                <IonIcon name='camera' className='text-[2rem] text-white opacity-[.6]' />
                            </motion.button>
                            <img
                                src='https://i.pinimg.com/564x/be/dc/f4/bedcf49cc068c166251e2251679a476e.jpg'
                                alt='nev'
                                className='h-full w-full rounded-lg object-cover'
                            />
                        </View>
                        <View className='mt-4 flex justify-center gap-4'>
                            <motion.button
                                className='flex items-center gap-2 rounded-lg border border-dashed border-blue-600 px-6 py-3 font-bold text-blue-600'
                                whileTap={{ scale: 0.9 }}
                                onClick={handleOpenCamera}
                            >
                                <IonIcon name='camera' className='  text-[1.2rem]' />
                                Chụp hình
                            </motion.button>
                            <motion.button
                                className='flex items-center gap-2 rounded-lg border border-dashed border-blue-600 px-6 py-3 font-bold text-blue-600'
                                whileTap={{ scale: 0.9 }}
                            >
                                <IonIcon name='cloud-upload' className='  text-[1.2rem] ' />
                                <span>Upload</span>
                            </motion.button>
                        </View>
                    </View>
                    <View className='mt-8 md:mt-0  md:max-w-[25rem] md:flex-1'>
                        <h2 className='text-xl font-bold text-gray-700'>Thông tin cá nhân</h2>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Họ và tên</label>
                            <input
                                disabled={!isTypeInput}
                                type='text'
                                placeholder='Kim soo min'
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Email</label>
                            <input
                                disabled={!isTypeInput}
                                type='email'
                                placeholder='minull1810@gmail.com'
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Số điện thoại</label>
                            <input
                                disabled={!isTypeInput}
                                type='text'
                                placeholder='0985940157'
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Địa chỉ</label>
                            <input
                                disabled={!isTypeInput}
                                type='text'
                                placeholder='958/3 Au Co, P.14, Q.Tan Binh, TP.HCM'
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <motion.button
                            className='mt-8 w-full rounded-lg border border-blue-600 py-3 font-bold text-blue-600 lg:max-w-[15rem]'
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsTypeInput(!isTypeInput)}
                        >
                            {isTypeInput ? 'Lưu' : 'Chỉnh sửa'}
                        </motion.button>
                    </View>
                </View>
            </View>
        </Section>
    )
}

export default Profile
