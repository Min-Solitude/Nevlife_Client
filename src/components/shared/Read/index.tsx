import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import View from '../View'

interface ReadProps {
    children: React.ReactNode
    onClose: () => void
    title?: string
    image?: string
    link?: string
    video?: string
}

const Read = ({ children, onClose, title, image, link, video }: ReadProps) => {
    return (
        <View
            className='fixed bottom-0 left-0 right-0 top-0 z-[100] overflow-y-scroll bg-[#ffffff] text-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <View
                className='m-auto flex w-[90%] flex-col items-center gap-8 py-8  md:w-[60%]'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <View
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.button
                        className='flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border border-gray-300 bg-slate-200 duration-300'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                    >
                        <IonIcon name='close' className='text-[1.2rem] text-gray-400' />
                    </motion.button>
                </View>
                {title && <h1 className=' text-center text-[1.5rem] font-bold'>{title}.</h1>}
                {video && (
                    <View className='flex w-full justify-center overflow-hidden rounded-lg xl:h-[30rem]'>
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            className='w-full rounded-lg object-cover xl:h-full xl:w-auto'
                        />
                    </View>
                )}
                {image && (
                    <View className='w-full overflow-hidden rounded-lg bg-gray-100 xl:max-h-[30rem]'>
                        <img src={image} alt='nev' className='w-full object-cover xl:h-full' />
                    </View>
                )}
                {children}
                {link && (
                    <Link to={`/${link}`}>
                        <motion.button
                            className='mt-4 rounded-full border border-gray-300 bg-gray-200 px-16 py-3'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Let's go
                        </motion.button>
                    </Link>
                )}
            </View>
        </View>
    )
}

export default Read
