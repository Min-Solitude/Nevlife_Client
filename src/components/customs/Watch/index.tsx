import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'

interface WatchProps {
    video: string | null
    onClose: () => void
}

const Watch = ({ video, onClose }: WatchProps) => {
    return (
        <View
            className='fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                className='absolute right-4 top-4 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-gray-300'
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <IonIcon name='close' className='text-2xl text-gray-500' />
            </motion.button>
            {video && <video src={video} className='rounded-lg xl:w-[80%]' muted loop autoPlay />}
        </View>
    )
}

export default Watch
