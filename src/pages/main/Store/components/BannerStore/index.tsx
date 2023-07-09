import { useState } from 'react'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import Read from 'components/shared/Read'
import IonIcon from '@reacticons/ionicons'

const BannerStore = () => {
    const [checkAdvise, setCheckAdvise] = useState(false)

    return (
        <View className='relative mt-[6rem] flex flex-col  items-center justify-center gap-4 rounded-lg bg-gray-100 shadow-md xl:mt-0 xl:rounded-none  xl:shadow-none '>
            <View className='flex-1'>
                <video
                    src='https://res.cloudinary.com/amie/video/upload/v1647367902/website/intro-short_o4nfbw.mp4'
                    autoPlay
                    loop
                    muted
                    className='h-full w-full rounded-lg object-cover xl:rounded-none'
                />
            </View>
            <View className='absolute bottom-4 right-4 flex items-center gap-4'>
                <motion.button
                    className=' flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-white text-[1.2rem] font-bold shadow-lg '
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCheckAdvise(true)}
                >
                    <IonIcon name='arrow-up' className='-rotate-45' />
                </motion.button>
            </View>
            {checkAdvise && (
                <Read
                    video='https://cdn.loom.com/assets/marketing/home/hero-bubb.mp4'
                    onClose={() => setCheckAdvise(false)}
                >
                    Tư vấn dịch vụ mua trực tuyến Nevlife
                </Read>
            )}
        </View>
    )
}

export default BannerStore
