import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import { useNavigate } from 'react-router-dom'

type CardDocterProps = {
    name: string
    image: string
    specialized: string
    experience: string
    evaluate: string
}

const CardDocter = ({ name, image, specialized, experience, evaluate }: CardDocterProps) => {
    const navigate = useNavigate()
    const starCount = Math.floor(parseFloat(evaluate))
    const hasHalfStar = parseFloat(evaluate) - starCount >= 0.5
    const stars = Array.from({ length: starCount }, (_, index) => <IonIcon key={index} name='star' />)
    if (hasHalfStar) {
        stars.push(<IonIcon key='half-star' name='star-half' />)
    }
    return (
        <View className='flex flex-col rounded-lg  '>
            <View className='h-[15rem] overflow-hidden rounded-lg bg-yellow-50'>
                <img src={image} alt={name} className='h-full w-full object-cover' />
            </View>
            <View className='flex flex-col items-start justify-start gap-2 py-4'>
                <h2 className='text-[1.2rem] font-bold text-gray-800'>{name}</h2>
                <span className='mt-2 text-[0.9rem] text-gray-800'>Chuyên môn: {specialized}</span>
                <span className='text-[0.9rem] text-gray-800'>Kinh nghiệm: {experience}</span>
                <span className='text-[1.2rem] text-yellow-300'>{stars}</span>
                <motion.button
                    className='mt-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-700 px-8 py-2'
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/booking/detail/1')}
                >
                    <IonIcon name='arrow-forward' className='text-[1.2rem] text-gray-200' />
                </motion.button>
            </View>
        </View>
    )
}

export default CardDocter
