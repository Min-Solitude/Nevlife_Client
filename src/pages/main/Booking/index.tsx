import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import View from 'components/shared/View'
import http from 'utils/http'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

type DoctorProps = {
    avatar: string
    email: string
    evaluate: string
    experience: string
    specialized: string
    username: string
    _id: string
}

const Booking = () => {
    const [listDoctor, setListDoctor] = useState<DoctorProps[]>([])
    const [isSearch, setIsSearch] = useState(false)
    const [query, setQuery] = useState('')

    const GetAllDoctor = async () => {
        await http
            .get(`/user/doctor?q=${query}`)
            .then((res) => {
                setListDoctor(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleSearch = (e: any) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        if (query !== '') {
            const timer = setTimeout(() => {
                GetAllDoctor()
            }, 300)
            return () => clearTimeout(timer)
        }
        GetAllDoctor()
    }, [query])

    return (
        <View className='mt-[6rem] flex min-h-screen flex-col gap-4 '>
            <View className='relative h-[15rem] overflow-hidden rounded-2xl  border-[0.2rem] border-gray-200  lg:h-[20rem] xl:h-[30rem]'>
                <img
                    src='https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt='nev'
                    className='h-full w-full object-cover'
                />
            </View>
            <View className=' xl:mt-8'>
                <View className='lg:flex lg:items-center lg:gap-2'>
                    <View className='mt-4 flex items-center justify-between rounded-lg border border-gray-300 bg-gray-100 p-2 lg:mt-0 lg:justify-start lg:gap-4 lg:border-none lg:bg-white'>
                        <motion.button
                            className='flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2'
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                toast.error('Chức năng đang phát triển')
                            }}
                        >
                            <IonIcon name='filter' className='text-xl text-gray-500' />
                        </motion.button>
                        <motion.button
                            className={
                                isSearch
                                    ? 'flex items-center justify-center rounded-lg border border-gray-300 bg-blue-500 p-2 text-white duration-200'
                                    : 'flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-500 duration-200'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSearch(!isSearch)}
                        >
                            <IonIcon name='search' className='text-xl' />
                        </motion.button>
                    </View>
                    {isSearch && (
                        <View className='mt-8 flex gap-2 rounded-lg border border border-gray-300 p-2 lg:mt-0  lg:w-[30rem]'>
                            <input
                                type='text'
                                placeholder='Tìm kiếm khoa '
                                className='flex-1 text-[0.9rem] outline-none'
                                onChange={handleSearch}
                                value={query}
                            />
                        </View>
                    )}
                </View>
                <View className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    {listDoctor.map((doctor: DoctorProps, index) => (
                        <View
                            key={index}
                            className='relative flex cursor-pointer gap-4 rounded-lg border border-gray-300 bg-gray-100 p-2 duration-200 hover:border-blue-500 '
                        >
                            <View className='h-[12rem] w-[8rem] overflow-hidden rounded-lg lg:h-[15rem] lg:w-[10rem]'>
                                <img
                                    src={
                                        doctor.avatar
                                            ? doctor.avatar
                                            : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                                    }
                                    alt={doctor.username}
                                    className='h-full w-full object-cover'
                                />
                            </View>
                            <View className='flex flex-1 flex-col gap-2 rounded-lg  bg-white p-2 text-[0.9rem] lg:p-4 lg:text-[1rem]'>
                                <View className='flex gap-2'>
                                    <label className='font-bold text-gray-800'>Tên:</label>
                                    <p>{doctor.username}</p>
                                </View>
                                <View className='flex gap-2'>
                                    <label className='font-bold text-gray-800'>Email:</label>
                                    <p>{doctor.email}</p>
                                </View>
                                <View className='flex gap-2'>
                                    <label className='font-bold text-gray-800'>Kinh nghiệm:</label>
                                    <p>{doctor.experience} năm</p>
                                </View>
                                <View className='flex gap-2'>
                                    <label className='font-bold text-gray-800'>Chuyên khoa:</label>
                                    <p>{doctor.specialized}</p>
                                </View>
                                <Link to={`/booking/doctor/${doctor._id}`}>
                                    <motion.button
                                        className='mt-6 flex items-center justify-center rounded-lg bg-blue-500 px-8 py-1 text-white lg:py-2'
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IonIcon name='arrow-forward' className='text-[1.2rem] ' />
                                    </motion.button>
                                </Link>
                            </View>
                            <View className='right-2 top-2 flex flex-col items-center gap-2 '>
                                {Array.from({ length: Math.floor(parseFloat(doctor.evaluate)) }, (_, index) => (
                                    <IonIcon key={index} name='star' className='text-yellow-300' />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Booking
