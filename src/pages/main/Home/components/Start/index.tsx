import IonIcon from '@reacticons/ionicons'
import View from 'components/shared/View'
import { useAppSelector } from 'hooks/useRedux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import history from 'redux/store/history'

const Start = () => {
    const accessToken = useAppSelector((state) => state.auth.accessToken)
    const [isCheckLogin, setIsCheckLogin] = useState(false)

    useEffect(() => {
        if (accessToken) {
            setIsCheckLogin(true)
        }
    }, [])

    return (
        <View
            className='fixed bottom-0 left-0 right-0 top-0 z-40 flex items-center justify-center bg-[#ffffff90]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <View className='flex  w-[90%] max-w-[30rem] flex-col items-center rounded-2xl border border-gray-300 bg-gray-100 p-4 shadow-md'>
                <h1 className='text-[1.2rem] font-bold uppercase text-blue-500'>Đặt lịch khám</h1>
                <View className='mt-8 flex w-full flex-col items-center gap-4'>
                    {isCheckLogin ? (
                        <>
                            <View className='flex w-4/5 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2 text-[0.9rem] font-bold'>
                                <IonIcon name='checkmark-circle' className='text-[1.5rem] text-green-500' />
                                <span className='mt-1 text-green-500'>Đã đăng nhập</span>
                            </View>
                            <View className='h-[20rem] w-4/5 overflow-hidden rounded-lg border border-gray-300'>
                                <img
                                    src='https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    alt='nev'
                                    className='h-full w-full object-cover'
                                />
                            </View>
                            <Link
                                to={`/booking`}
                                className='mt-4 flex w-4/5 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2 text-[0.9rem] font-bold'
                            >
                                <IonIcon name='calendar' className='text-[1.5rem] text-blue-500' />
                                <span className='mt-1 text-blue-500'>Đặt lịch khám</span>
                            </Link>
                        </>
                    ) : (
                        <View
                            className='flex w-4/5 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-[0.9rem] font-bold'
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                history.push('/login')
                            }}
                        >
                            <IonIcon name='alert-circle' className='text-[1.5rem] text-red-500' />
                            <span className='mt-1 text-red-500'>Chưa đăng nhập</span>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default Start
