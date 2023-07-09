import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CardForum from 'components/customs/CardForum'
import Advertisement from './Advertisement'

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
}

const Forum = () => {
    const navigate = useNavigate()
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(!isOn)
    }
    return (
        <View
            className={
                isOn
                    ? 'relative flex flex-col items-center bg-gray-950'
                    : 'relative  flex flex-col items-center bg-white'
            }
        >
            <View className='fixed left-8 top-[50%] hidden translate-y-[-50%]  xl:block'>
                <Advertisement />
            </View>
            <View
                className='fixed bottom-8 right-8 hidden h-[5rem] w-[10rem] cursor-pointer overflow-hidden rounded-lg duration-300   focus:h-[10rem] focus:w-[20rem]  xl:block'
                whileTap={{ scale: 0.9 }}
                // CLICK SET WIDTH TO 100%
            >
                <video
                    src='https://cdn.loom.com/assets/marketing/bubbs/angelina.mp4'
                    autoPlay
                    loop
                    muted
                    className='h-full w-full object-cover'
                />
            </View>
            <View
                className=' relative flex w-full items-center justify-center py-4 '
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    className={
                        isOn
                            ? '  absolute left-4 flex items-center justify-center rounded-full border border-white px-6 py-1 text-white duration-300 hover:bg-white hover:text-gray-900 md:left-8'
                            : '  absolute left-4 flex items-center justify-center rounded-full border border-blue-600 px-6 py-1 text-blue-500 duration-300 hover:bg-blue-600 hover:text-white md:left-8'
                    }
                >
                    <IonIcon name='arrow-back' className='text-[1rem] md:text-[1.2rem]' />
                </motion.button>
                <h1
                    className={
                        isOn
                            ? 'text-[1rem] font-normal uppercase tracking-widest text-white md:text-[1.5rem]'
                            : 'text-[1rem] font-normal uppercase tracking-widest text-gray-700 md:text-[1.5rem]'
                    }
                >
                    Nevlife <span className='text-primary'>Forum</span>
                </h1>
                <div
                    className={
                        isOn
                            ? ' absolute right-4 flex h-[2rem] w-[4rem] cursor-pointer items-center justify-end rounded-full border border-white bg-transparent p-1 shadow-sm md:right-8 md:h-[2.5rem] md:w-[4.5rem]'
                            : ' absolute right-4 flex h-[2rem] w-[4rem] cursor-pointer items-center justify-start rounded-full bg-gray-200 p-1 shadow-sm md:right-8 md:h-[2.5rem] md:w-[4.5rem]'
                    }
                    onClick={toggleSwitch}
                >
                    <motion.div
                        className=' h-[1.5rem] w-[1.5rem]  rounded-[50%] bg-white md:h-[2rem] md:w-[2rem]'
                        layout
                        transition={spring}
                    />
                </div>
            </View>
            <View
                className={
                    isOn
                        ? 'flex min-h-screen w-full flex-col items-center justify-start gap-4 text-white md:w-[60%] lg:w-[40%] xl:w-[28%]'
                        : 'flex min-h-screen w-full flex-col items-center justify-start gap-4  text-black md:w-[60%] lg:w-[40%] xl:w-[28%]'
                }
            >
                <CardForum
                    name='Lian Miana'
                    specialist='tự kỹ'
                    image='https://i.pinimg.com/564x/b5/76/83/b5768343b66240de49687050f853ad33.jpg'
                    avatar='https://i.pinimg.com/564x/21/0a/ee/210aeed85f7c9896cc5508110b1d253b.jpg'
                    title='Có nên chia tay người yêu vì bị bệnh tâm lý?'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime beatae laudantium ratione.
                    Reprehenderit pariatur nam praesentium nesciunt voluptates vitae aliquam, nihil natus id officiis
                    placeat aspernatur saepe! Sequi, animi.
                </CardForum>
                <CardForum
                    name='Lian Miana'
                    specialist='tự kỹ'
                    image='https://i.pinimg.com/564x/b5/76/83/b5768343b66240de49687050f853ad33.jpg'
                    avatar='https://i.pinimg.com/564x/21/0a/ee/210aeed85f7c9896cc5508110b1d253b.jpg'
                    title='Có nên chia tay người yêu vì bị bệnh tâm lý?'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime beatae laudantium ratione.
                    Reprehenderit pariatur nam praesentium nesciunt voluptates vitae aliquam, nihil natus id officiis
                    placeat aspernatur saepe! Sequi, animi.
                </CardForum>
                <CardForum
                    name='Lian Miana'
                    specialist='tự kỹ'
                    image='https://i.pinimg.com/564x/b5/76/83/b5768343b66240de49687050f853ad33.jpg'
                    avatar='https://i.pinimg.com/564x/21/0a/ee/210aeed85f7c9896cc5508110b1d253b.jpg'
                    title='Có nên chia tay người yêu vì bị bệnh tâm lý?'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime beatae laudantium ratione.
                    Reprehenderit pariatur nam praesentium nesciunt voluptates vitae aliquam, nihil natus id officiis
                    placeat aspernatur saepe! Sequi, animi.
                </CardForum>
                <CardForum
                    name='Lian Miana'
                    specialist='tự kỹ'
                    image='https://i.pinimg.com/564x/b5/76/83/b5768343b66240de49687050f853ad33.jpg'
                    avatar='https://i.pinimg.com/564x/21/0a/ee/210aeed85f7c9896cc5508110b1d253b.jpg'
                    title='Có nên chia tay người yêu vì bị bệnh tâm lý?'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime beatae laudantium ratione.
                    Reprehenderit pariatur nam praesentium nesciunt voluptates vitae aliquam, nihil natus id officiis
                    placeat aspernatur saepe! Sequi, animi.
                </CardForum>
            </View>
        </View>
    )
}

export default Forum
