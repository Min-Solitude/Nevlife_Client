import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import IonIcon from '@reacticons/ionicons'

import View from 'components/shared/View'
import { toast } from 'react-toastify'

const Banner = () => {
    const [isCheckWidth, setIsCheckWidth] = useState(false)

    const handleCheckWidth = () => {
        if (window.innerWidth < 768) {
            setIsCheckWidth(true)
        } else {
            setIsCheckWidth(false)
        }
    }

    useEffect(() => {
        handleCheckWidth()
        window.addEventListener('resize', handleCheckWidth)

        return () => {
            window.removeEventListener('resize', handleCheckWidth)
        }
    }, [isCheckWidth])

    return (
        <View className='flex min-h-[40vh] w-full flex-col items-center justify-center md:min-h-[60vh] '>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-center text-[1.8rem] font-bold uppercase tracking-widest text-gray-800 md:max-w-[50rem] md:text-[2.2rem] xl:text-[3rem]'>
                    Welcome to nev<span className='text-primary'>life</span>
                </h1>
                <span className='mt-4 text-center text-[0.9rem] text-gray-400 md:mt-0 md:max-w-[40rem] xl:max-w-[30rem]'>
                    Hệ thống chăm sóc, theo dõi và quản lý sức khỏe của bạn. Dịch vụ chăm sóc tận tình và ổn áp nhất ở
                    Việt Nam.
                </span>
            </div>

            <div className='relative mt-8 text-[0.8rem] font-bold text-gray-300'>
                Bấm phím <span className='rounded-lg bg-slate-800 p-1 px-2 text-white'>A</span> để bắt đầu
                <motion.div
                    animate={{
                        y: [0, 10, 0, 10, 0]
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity
                    }}
                >
                    <IonIcon
                        name='caret-down'
                        className='absolute bottom-[-5rem] left-[50%] translate-x-[-50%] text-[2rem] text-gray-700 lg:translate-y-[100%]'
                    />
                </motion.div>
            </div>
        </View>
    )
}

export default Banner
