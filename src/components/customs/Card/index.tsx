import { motion } from 'framer-motion'

import View from 'components/shared/View'
import IonIcon from '@reacticons/ionicons'
import { useNavigate } from 'react-router-dom'

interface CardProps {
    image: string[]
    title: string
    price: number
    id: string
}

const Card = ({ image, title, price, id }: CardProps) => {
    const navigate = useNavigate()

    return (
        <View className='rounded-lg border border-gray-200 bg-white p-4 duration-300 '>
            <View className='relative   rounded-lg'>
                <img src={image[0]} alt={title} className=' w-full rounded-lg object-cover' />
                {image.length > 1 && (
                    <span className='absolute bottom-0 left-4 h-[3rem] w-[3rem] translate-y-[50%] overflow-hidden rounded-full border-[0.2rem] border-white'>
                        <img src={image[1]} alt={title} className='h-full w-full object-cover' />
                    </span>
                )}
                {image.length > 2 && (
                    <span className='absolute bottom-0 left-6 h-[3rem] w-[3rem] translate-x-[50%] translate-y-[50%] overflow-hidden rounded-full border-[0.2rem] border-white'>
                        <img src={image[2]} alt={title} className='h-full w-full object-cover' />
                    </span>
                )}
                {image.length > 3 && (
                    <span className='absolute bottom-0 left-8 h-[3rem] w-[3rem] translate-x-[100%] translate-y-[50%] overflow-hidden rounded-full border-[0.2rem] border-white'>
                        <img src={image[3]} alt={title} className='h-full w-full object-cover' />
                    </span>
                )}
                <motion.span
                    className='absolute right-4 top-4 flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-gray-200 '
                    whileTap={{ scale: 0.9 }}
                >
                    <IonIcon name='ellipsis-vertical' className='text-[1.4rem] text-gray-700' />
                </motion.span>
            </View>
            <View className='mt-12 flex flex-col'>
                <h2 className='limit-1 text-[1.2rem] font-bold '>{title}</h2>
                <span className='mt-2 text-[0.9rem] text-gray-800'>{price}VND</span>
                <View className='flex justify-between gap-12'>
                    <motion.button
                        className='mt-8 flex-1 rounded-lg bg-gray-800 px-4 py-2 font-bold'
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate(`/store/product/${id}`)}
                    >
                        <span className=' text-[0.8rem] text-gray-200'>Xem</span>
                    </motion.button>
                    <motion.button
                        className='mt-8 flex-1  rounded-lg bg-gray-200 px-4 py-2 font-bold'
                        whileTap={{ scale: 0.9 }}
                    >
                        <IonIcon name='cart' className='text-[1.2rem] text-gray-800' />
                    </motion.button>
                </View>
            </View>
        </View>
    )
}

export default Card
