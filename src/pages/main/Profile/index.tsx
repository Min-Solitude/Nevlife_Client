import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import Section from 'motion/Section'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { authUpdateAccount } from 'redux/reducers'

const Profile = () => {
    const [isTypeInput, setIsTypeInput] = useState(false)
    const account = useAppSelector((state) => state.auth.user)
    const [avatar, setAvatar] = useState(account.avatar)
    const [username, setUsername] = useState(account.username)
    const [email, setEmail] = useState(account.email)
    const [phoneNumber, setPhoneNumber] = useState(account.phoneNumber)
    const [address, setAddress] = useState(account.address)

    const dispatch = useAppDispatch()

    const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setAvatar(reader.result as string)
            }
        }
    }

    const handleUpdateAccount = async (e: any) => {
        e.preventDefault()

        const formData = {
            _id: account._id,
            username,
            phoneNumber,
            address,
            avatar
        }

        dispatch(authUpdateAccount(formData))
    }

    return (
        <Section>
            <View className='mt-[6rem] gap-8 lg:flex'>
                <form className=' md:m-auto md:max-w-[30rem]  lg:flex-1  ' onSubmit={handleUpdateAccount}>
                    <View className=' relative h-[10rem] w-full rounded-2xl md:h-[15rem] '>
                        <img
                            src='https://cdnb.artstation.com/p/assets/images/images/045/168/267/large/umeshu-lovers-bossa-stylelofigirl-logo.jpg?1642075727'
                            alt='nev'
                            className=' h-full w-full rounded-2xl  object-cover'
                        />
                        <View className=' absolute bottom-0 left-0 flex translate-y-[50%] items-center md:left-[50%] md:translate-x-[-50%]  '>
                            <View className='relative z-10 ml-8 h-[6rem] w-[6rem] overflow-hidden rounded-full border-4 border-white shadow-lg md:h-[8rem] md:w-[8rem]'>
                                {avatar ? (
                                    <img src={avatar} alt='' className='h-full w-full object-cover' />
                                ) : (
                                    <img
                                        src='https://i.pinimg.com/564x/02/72/35/02723528ae01d17bbf67ccf6b8da8a6b.jpg'
                                        alt='nevsolit'
                                        className='h-full w-full object-cover'
                                    />
                                )}
                                {isTypeInput && (
                                    <View className='absolute left-[50%] top-[50%] z-20 h-full w-full translate-x-[-50%] translate-y-[-50%] '>
                                        <input
                                            type='file'
                                            id='avatar'
                                            className='hidden'
                                            onChange={handleUploadImage}
                                        />
                                        <motion.label
                                            htmlFor='avatar'
                                            className='flex h-full w-full items-center justify-center bg-[#00000080]'
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IonIcon name='cloud-upload' className='text-2xl text-white' />
                                        </motion.label>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                    <View className='mt-20 '>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Email</label>
                            <input
                                disabled
                                type='email'
                                value={email || ''}
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Họ và tên</label>
                            <input
                                disabled={!isTypeInput}
                                type='text'
                                value={username || ''}
                                onChange={(e) => setUsername(e.target.value)}
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Số điện thoại</label>
                            <input
                                disabled={!isTypeInput}
                                type='text'
                                value={phoneNumber || ''}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='mt-4 flex flex-col gap-1'>
                            <label className='text-[0.9rem] font-bold text-gray-600'>Địa chỉ</label>
                            <input
                                disabled={!isTypeInput}
                                type='text'
                                value={address || ''}
                                onChange={(e) => setAddress(e.target.value)}
                                className='w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
                            />
                        </View>
                        <View className='flex items-center gap-4'>
                            <motion.button
                                className='mt-8 w-full rounded-lg border border-blue-600 py-2 font-bold text-blue-600 '
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsTypeInput(!isTypeInput)}
                                type={isTypeInput ? 'button' : 'submit'}
                            >
                                {isTypeInput ? 'Lưu' : 'Chỉnh sửa'}
                            </motion.button>
                            {isTypeInput && (
                                <motion.button
                                    className='mt-8 w-full rounded-lg border border-red-600 py-2 font-bold text-red-600 '
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsTypeInput(!isTypeInput)}
                                >
                                    Hủy
                                </motion.button>
                            )}
                        </View>
                    </View>
                </form>
                <View className='hidden flex-1 bg-pink-500  lg:block'>1</View>
            </View>
        </Section>
    )
}

export default Profile
