import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import { useNavigate } from 'react-router-dom'

const IntroStore = () => {
    const naviagte = useNavigate()
    return (
        <View className='relative m-auto mt-12  rounded-lg  xl:w-[80%]'>
            <video
                src='https://res.cloudinary.com/amie/video/upload/v1647368101/website/card-profile_s3tjyr.mp4'
                autoPlay
                loop
                muted
                className='h-full w-full rounded-lg object-cover  '
            />
            <motion.button
                className='absolute bottom-0 left-[50%] flex translate-x-[-50%] translate-y-[50%] items-center justify-center rounded-full bg-gray-200 px-16 py-3'
                initial={{ x: '-50%', y: '50%' }}
                whileHover={{ scale: 1.1, x: '-50%', y: '50%' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => naviagte('/store')}
            >
                <IonIcon name='arrow-forward' className='  text-gray-700 ' />
            </motion.button>
        </View>
    )
}

export default IntroStore
