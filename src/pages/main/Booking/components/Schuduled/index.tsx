import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import CardDocter from 'components/customs/CardDoctor'

const Schuduled = () => {
    return (
        <View className='mt-12 flex flex-col items-center gap-8 '>
            <View className='flex w-full justify-between'>
                <span className='mb-2 text-center text-[1.2rem] font-bold uppercase text-gray-700 md:text-[1.6rem] '>
                    Đặt lịch khám
                </span>
                <motion.button whileTap={{ scale: 0.9 }}>
                    <IonIcon name='briefcase-outline' className='text-[1.4rem]' />
                </motion.button>
            </View>
            <View className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4'>
                <CardDocter
                    name='Kim Tae Hyung'
                    specialized='Chuyên khoa nội'
                    image='https://i.pinimg.com/564x/08/61/59/086159ab7ce964cc30889614edc3e962.jpg'
                    experience='5 năm'
                    evaluate='2.5'
                />
                <CardDocter
                    name='Kim Tae Hyung'
                    specialized='Chuyên khoa nội'
                    image='https://i.pinimg.com/564x/08/61/59/086159ab7ce964cc30889614edc3e962.jpg'
                    experience='5 năm'
                    evaluate='2.5'
                />
                <CardDocter
                    name='Kim Tae Hyung'
                    specialized='Chuyên khoa nội'
                    image='https://i.pinimg.com/564x/08/61/59/086159ab7ce964cc30889614edc3e962.jpg'
                    experience='5 năm'
                    evaluate='2.5'
                />
                <CardDocter
                    name='Kim Tae Hyung'
                    specialized='Chuyên khoa nội'
                    image='https://i.pinimg.com/564x/08/61/59/086159ab7ce964cc30889614edc3e962.jpg'
                    experience='5 năm'
                    evaluate='2.5'
                />
                <CardDocter
                    name='Kim Tae Hyung'
                    specialized='Chuyên khoa nội'
                    image='https://i.pinimg.com/564x/08/61/59/086159ab7ce964cc30889614edc3e962.jpg'
                    experience='5 năm'
                    evaluate='2.5'
                />
                <CardDocter
                    name='Kim Tae Hyung'
                    specialized='Chuyên khoa nội'
                    image='https://i.pinimg.com/564x/08/61/59/086159ab7ce964cc30889614edc3e962.jpg'
                    experience='5 năm'
                    evaluate='2.5'
                />
            </View>
        </View>
    )
}

export default Schuduled
