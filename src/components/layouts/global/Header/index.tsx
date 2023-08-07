import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import IonIcon from '@reacticons/ionicons'
import { useEffect, useState } from 'react'
import history from 'redux/store/history'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { AuthAction } from 'redux/reducers'

const Header = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [hideTimeout, setHideTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)
    const [checkAccountLogin, setCheckAccountLogin] = useState(false)
    const [isDropdownAccount, setIsDropdownAccount] = useState(false)

    const dispatch = useAppDispatch()
    const accessToken = useAppSelector((state) => state.auth.accessToken)
    const accountLogin = useAppSelector((state) => state.auth.user)

    const role = useAppSelector((state) => state.auth.user.role)

    useEffect(() => {
        if (accessToken) {
            setCheckAccountLogin(true)
        } else {
            setCheckAccountLogin(false)
        }
    }, [accessToken])

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

    const handleLogout = () => {
        dispatch(AuthAction.handleLogout())
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
                    <Link to={'/'} className='hover:underline' onClick={() => setIsDropdownAccount(false)}>
                        Trang chủ
                    </Link>
                    {/* <Link to={'/forum'} className='hover:underline'>
                        Diễn đàn
                    </Link> */}
                    <Link to={'/booking'} className='hover:underline' onClick={() => setIsDropdownAccount(false)}>
                        Đặt lịch khám
                    </Link>
                    <Link to={`/store`} className='hover:underline' onClick={() => setIsDropdownAccount(false)}>
                        Cửa hàng
                    </Link>
                    {/* <button className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                                    <Link
                                        to={`/health/2`}
                                        className='flex items-center gap-4 text-gray-500 hover:text-black'
                                    >
                                        <IonIcon
                                            name='briefcase'
                                            className='translate-y-[-0.1rem] text-[1.2rem] duration-300'
                                        />
                                        <p className='text-[0.9rem] text-black'>Theo dõi sức khỏe</p>
                                    </Link>
                                    <Link
                                        to={`/booking`}
                                        className='flex items-center gap-4 text-gray-500 hover:text-black'
                                    >
                                        <IonIcon
                                            name='briefcase'
                                            className='translate-y-[-0.1rem] text-[1.2rem] duration-300'
                                        />
                                        <p className='text-[0.9rem] text-black'>Booking</p>
                                    </Link>
                                </View>
                            </View>
                        )}
                    </button> */}
                    {/* <button className='hidden hover:underline lg:block'>Giới thiệu</button> */}
                </nav>
                <nav className='  flex gap-6 text-[0.9rem]'>
                    {checkAccountLogin ? (
                        <View className='relative '>
                            <View
                                className='h-[3rem] w-[3rem] cursor-pointer overflow-hidden rounded-full border border-gray-700'
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsDropdownAccount(!isDropdownAccount)}
                            >
                                {accountLogin.avatar ? (
                                    <img
                                        src={accountLogin.avatar}
                                        alt={accountLogin.username}
                                        className='h-full w-full object-cover'
                                    />
                                ) : (
                                    <img
                                        src='https://i.pinimg.com/564x/02/72/35/02723528ae01d17bbf67ccf6b8da8a6b.jpg'
                                        alt='nevsolit'
                                        className='h-full w-full object-cover'
                                    />
                                )}
                            </View>
                            {isDropdownAccount && (
                                <View
                                    className='absolute right-0 top-16 flex min-w-[20rem] flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4'
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <View className='flex w-full items-center gap-2 border-b border-gray-200 pb-4'>
                                        <View
                                            className='h-[3rem] w-[3rem] cursor-pointer overflow-hidden rounded-full border border-gray-700'
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setIsDropdownAccount(!isDropdownAccount)}
                                        >
                                            {accountLogin.avatar ? (
                                                <img
                                                    src={accountLogin.avatar}
                                                    alt={accountLogin.username}
                                                    className='h-full w-full object-cover'
                                                />
                                            ) : (
                                                <img
                                                    src='https://i.pinimg.com/564x/02/72/35/02723528ae01d17bbf67ccf6b8da8a6b.jpg'
                                                    alt='nevsolit'
                                                    className='h-full w-full object-cover'
                                                />
                                            )}
                                        </View>
                                        <View>
                                            <h2 className='font-bold text-gray-700'>{accountLogin.username}</h2>
                                            <span className='text-[0.8rem] text-gray-500'>{accountLogin.email}</span>
                                        </View>
                                    </View>
                                    <Link
                                        to={`/profile`}
                                        onClick={() => setIsDropdownAccount(false)}
                                        className='flex w-full items-center gap-2 rounded-lg py-2 text-gray-800 duration-200 hover:bg-blue-500  hover:px-4 hover:text-white'
                                    >
                                        <IonIcon
                                            name='person-circle-outline'
                                            className='-translate-y-[0.1rem]  text-[1.4rem]'
                                        />
                                        <span className='text-[1rem]'>Thông tin tài khoản</span>
                                    </Link>
                                    <Link
                                        to={`/health`}
                                        onClick={() => setIsDropdownAccount(false)}
                                        className='flex w-full items-center gap-2 rounded-lg py-2 text-gray-800 duration-200 hover:bg-blue-500  hover:px-4 hover:text-white'
                                    >
                                        <IonIcon
                                            name='heart-outline'
                                            className='-translate-y-[0.1rem]  text-[1.4rem]'
                                        />
                                        <span className='text-[1rem]'>Theo dõi sức khỏe</span>
                                    </Link>
                                    {role === 'user' ||
                                        (role === 'admin' && (
                                            <Link
                                                to={`/my-schedule/${accountLogin._id}`}
                                                onClick={() => setIsDropdownAccount(false)}
                                                className='flex w-full items-center gap-2 rounded-lg py-2 text-gray-800 duration-200 hover:bg-blue-500  hover:px-4 hover:text-white'
                                            >
                                                <IonIcon
                                                    name='file-tray-full-outline'
                                                    className='-translate-y-[0.1rem]  text-[1.4rem]'
                                                />
                                                <span className='text-[1rem]'>Lịch hẹn của bạn</span>
                                            </Link>
                                        ))}
                                    {role === 'doctor' && (
                                        <>
                                            <Link
                                                to={`/appointment`}
                                                onClick={() => setIsDropdownAccount(false)}
                                                className='flex w-full items-center gap-2 rounded-lg py-2 text-gray-800 duration-200 hover:bg-blue-500  hover:px-4 hover:text-white'
                                            >
                                                <IonIcon
                                                    name='file-tray-full-outline'
                                                    className='-translate-y-[0.1rem]  text-[1.4rem]'
                                                />
                                                <span className='text-[1rem]'>Phòng khám của bạn</span>
                                            </Link>
                                            <Link
                                                to={`/schedule-management/${accountLogin._id}`}
                                                onClick={() => setIsDropdownAccount(false)}
                                                className='flex w-full items-center gap-2 rounded-lg py-2 text-gray-800 duration-200 hover:bg-blue-500  hover:px-4 hover:text-white'
                                            >
                                                <IonIcon
                                                    name='calendar-outline'
                                                    className='-translate-y-[0.1rem]  text-[1.4rem]'
                                                />
                                                <span className='text-[1rem]'>Lịch khám của bạn</span>
                                            </Link>
                                        </>
                                    )}

                                    <button
                                        onClick={handleLogout}
                                        className='flex w-full items-center gap-2 rounded-lg border-t border-gray-200 pt-4 text-gray-800 duration-200 hover:text-blue-500 '
                                    >
                                        <IonIcon
                                            name='log-out-outline'
                                            className='-translate-y-[0.1rem]  text-[1.4rem]'
                                        />
                                        <span className='text-[1rem]'>Đăng xuất</span>
                                    </button>
                                </View>
                            )}
                        </View>
                    ) : (
                        <motion.button
                            className={
                                'flex items-center justify-center gap-2 rounded-full bg-gray-900 px-[1.5rem] py-[0.7rem] text-white'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                history.push('/register')
                            }}
                        >
                            <span>Đăng ký</span>
                            <IonIcon name='chevron-forward' className='ml-1 text-[1.2rem]' />
                        </motion.button>
                    )}
                </nav>
            </View>
        </View>
    )
}

export default Header
