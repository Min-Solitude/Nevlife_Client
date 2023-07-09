import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import IonIcon from '@reacticons/ionicons'
import { useState } from 'react'
import { listService } from 'data/listService'

const Header = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [hideTimeout, setHideTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)
    const navigate = useNavigate()

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    })

    const handleMouseLeave = () => {
        // Set a timeout to hide the content after 500ms
        setHideTimeout(setTimeout(() => setIsHovered(false), 300))
    }

    const handleMouseEnter = () => {
        // Clear the hide timeout when the mouse enters the button
        if (hideTimeout) {
            clearTimeout(hideTimeout)
            setHideTimeout(null)
        }
        setIsHovered(true)
    }

    return (
        <View
            className='fixed left-0 top-4 z-50 w-full bg-transparent'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <View
                className={
                    isScroll
                        ? 'yellow-200 m-auto flex w-[90%] items-center  justify-between rounded-full border border-gray-200 bg-white p-2 pl-6 shadow-base duration-200 md:w-4/5 lg:w-3/5  xl:w-[60%]'
                        : 'm-auto flex w-[90%] items-center justify-between rounded-full  bg-transparent py-2 duration-200 xl:w-[80%]'
                }
            >
                <Link to='/' className={'text-[1.6rem] font-bold tracking-wider '}>
                    nev<span className='text-primary'>life</span>
                </Link>
                <nav className={'hidden flex-1 justify-center gap-12 text-[0.95rem] font-bold  text-gray-700 md:flex'}>
                    <Link to={'/'} className='hover:underline'>
                        Trang chủ
                    </Link>
                    <Link to={'/forum'} className='hover:underline'>
                        Diễn đàn
                    </Link>
                    <button className='relative  ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        Dịch vụ
                        {isHovered && (
                            <View
                                className='absolute left-0  top-4 mt-12  flex min-w-[30rem]  flex-col items-start gap-4   rounded-lg  bg-white p-6 shadow-base'
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <IonIcon
                                    name='caret-up'
                                    className='absolute left-8 top-0 ml-auto translate-x-[-50%] translate-y-[-70%] text-[2rem] text-white'
                                />
                                <label className='text-[0.9rem] uppercase text-gray-500'>Cung cấp</label>
                                <View className='grid grid-cols-2 gap-x-16 gap-y-4'>
                                    {listService.map((item, index) => (
                                        <Link
                                            to={item.link === 'profile' ? `/profile/1` : `/${item.link}`}
                                            key={index}
                                            className='flex items-center gap-4 text-gray-500 hover:text-black'
                                        >
                                            <IonIcon
                                                name={item.icon as any}
                                                className='translate-y-[-0.1rem] text-[1.2rem] duration-300'
                                            />
                                            <p className='text-[0.9rem] text-black'>{item.title}</p>
                                        </Link>
                                    ))}
                                </View>
                            </View>
                        )}
                    </button>
                    <button className='hidden hover:underline lg:block'>Giới thiệu</button>
                </nav>
                <nav className='  flex gap-6 text-[0.9rem]'>
                    <motion.button
                        className={
                            'flex items-center justify-center gap-2 rounded-full bg-gray-900 px-[1.5rem] py-[0.7rem] text-white'
                        }
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate('/register')}
                    >
                        <span>Đăng ký</span>
                        <IonIcon name='chevron-forward' className='ml-1 text-[1.2rem]' />
                    </motion.button>
                </nav>
            </View>
        </View>
    )
}

export default Header
