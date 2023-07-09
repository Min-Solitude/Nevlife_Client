import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

import View from 'components/shared/View'
import IonIcon from '@reacticons/ionicons'
import Section from 'motion/Section'

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        }
    }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

const DetailProduct = () => {
    const [[page, direction], setPage] = useState([0, 0])
    const images = [
        'https://i.pinimg.com/564x/81/fc/db/81fcdb024ff07d33d8f5dc6ca15cbb7f.jpg',
        'https://i.pinimg.com/564x/54/5f/ea/545feaf6f4557cce90710eada1eb5d80.jpg',
        'https://i.pinimg.com/564x/81/d7/d0/81d7d0dac44a4689449748532aac9f37.jpg'
    ]
    const [isAmount, setIsAmount] = useState(1)
    const [isChangeTab, setIsChangeTab] = useState(1)

    const imageIndex: number = parseInt(page.toString()) % images.length

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    // STAR

    const evaluate = '4.5'

    const starCount = Math.floor(parseFloat(evaluate))
    const hasHalfStar = parseFloat(evaluate) - starCount >= 0.5
    const stars = Array.from({ length: starCount }, (_, index) => <IonIcon key={index} name='star' />)
    if (hasHalfStar) {
        stars.push(<IonIcon key='half-star' name='star-half' />)
    }

    return (
        <Section>
            <View className=' xl:m-auto xl:w-[80%]'>
                <View className='mt-[6rem] flex w-full flex-col gap-4 md:flex-row lg:gap-8'>
                    <View className='relative flex h-[40vh] items-center justify-center overflow-hidden rounded-3xl  md:min-w-[25rem] xl:h-[30rem] xl:w-[40rem]'>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={page}
                                src={images[imageIndex]}
                                custom={direction}
                                variants={variants}
                                initial='enter'
                                className='absolute h-full w-full cursor-pointer rounded-3xl object-cover'
                                animate='center'
                                exit='exit'
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag='x'
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x)
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1)
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1)
                                    }
                                }}
                            />
                        </AnimatePresence>
                        <View className='absolute bottom-4 left-[40%] z-10' onClick={() => paginate(-1)}>
                            <IonIcon
                                name='chevron-back-outline'
                                className='cursor-pointer text-[1.4rem] text-gray-200'
                            />
                        </View>
                        <View className='absolute bottom-4 right-[40%] z-10 ' onClick={() => paginate(1)}>
                            <IonIcon
                                name='chevron-forward-outline'
                                className='cursor-pointer text-[1.4rem] text-gray-200'
                            />
                        </View>
                    </View>
                    <View className='mt-4 '>
                        <View className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <p className='text-[1.2rem] font-bold'>
                                    Nev<span className='text-primary'>life</span>
                                </p>
                                <IonIcon name='checkmark-circle' className='text-[1.2rem] text-green-400' />
                            </div>
                            <div className='flex items-center gap-2'>
                                <motion.button
                                    className='flex h-[3rem] w-[3rem] items-center justify-center rounded-lg bg-gray-100'
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IonIcon name='share-social-outline' className='text-gray-800' />
                                </motion.button>
                                <motion.button
                                    className='flex h-[3rem] w-[3rem] items-center justify-center rounded-lg bg-gray-100'
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IonIcon name='ellipsis-vertical' className='text-gray-800' />
                                </motion.button>
                            </div>
                        </View>
                        <h1 className='mt-4 text-[1.6rem] font-bold text-gray-800'>ETH Me Outside</h1>
                        <div className='flex items-center justify-between'>
                            <span className='text-[0.9rem] text-gray-600'>200 VND</span>
                            <span className='flex gap-1 text-yellow-300'>{stars}</span>
                        </div>
                        <p className='mt-4 text-gray-600'>
                            Neque Aut Veniam Consectetur Magnam Libero, Natus Eius Numquam Reprehenderit Hic At,
                            Excepturi Repudiandae Magni Optio Odio Doloribus? Facilisi Lobortisal Morbi Fringilla Urna
                            Amet Sed Ipsum.
                        </p>
                        <input
                            type='number'
                            className='my-4 w-full rounded-lg bg-gray-100 p-4 outline-none md:w-auto'
                            value={isAmount}
                            onChange={(e) => setIsAmount(parseInt(e.target.value))}
                        />
                        <View className='mt-4 flex gap-8'>
                            <motion.button
                                className='flex items-center gap-4 rounded-lg bg-gray-800 px-8 py-3 text-white'
                                whileTap={{ scale: 0.9 }}
                            >
                                <span>Mua</span>
                                <IonIcon name='card-outline' className='text-[1.2rem] text-white' />
                            </motion.button>
                            <motion.button
                                className='flex items-center gap-4 rounded-lg bg-gray-100 px-8 py-3'
                                whileTap={{ scale: 0.9 }}
                            >
                                <IonIcon name='cart-outline' className='text-[1.2rem] text-gray-800' />
                            </motion.button>
                        </View>
                        <View className='mt-8 flex flex-wrap items-center gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='h-[3.5rem] w-[3.5rem] rounded-lg'>
                                    <img
                                        src='https://i.pinimg.com/564x/f2/5c/db/f25cdbd3564434cc22d7576e57f9b52c.jpg'
                                        alt='nev'
                                        className='h-full w-full rounded-lg object-cover'
                                    />
                                </div>
                                <div>
                                    <p>Creator 10% Royalties</p>
                                    <span className='text-[0.9rem] text-green-500'>@Creative_world</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='h-[3.5rem] w-[3.5rem] rounded-lg'>
                                    <img
                                        src='https://i.pinimg.com/564x/f2/5c/db/f25cdbd3564434cc22d7576e57f9b52c.jpg'
                                        alt='nev'
                                        className='h-full w-full rounded-lg object-cover'
                                    />
                                </div>
                                <div>
                                    <p>Creator 10% Royalties</p>
                                    <span className='text-[0.9rem] text-green-500'>@Creative_world</span>
                                </div>
                            </div>
                        </View>
                    </View>
                </View>
                <View className='mt-16 hidden flex-col gap-4 md:flex'>
                    <View className='flex items-center gap-4'>
                        <motion.button
                            className={
                                isChangeTab === 1
                                    ? 'flex items-center gap-2 rounded-lg bg-gray-400 px-8 py-3 text-white duration-300'
                                    : 'flex items-center gap-2 rounded-lg bg-gray-100 px-8 py-3'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsChangeTab(1)}
                        >
                            <IonIcon name='list-outline' className='text-[1.2rem] ' />
                            <span>Offer</span>
                        </motion.button>
                        <motion.button
                            className={
                                isChangeTab === 2
                                    ? 'flex items-center gap-2 rounded-lg bg-gray-400 px-8 py-3 text-white duration-300'
                                    : 'flex items-center gap-2 rounded-lg bg-gray-100 px-8 py-3'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsChangeTab(2)}
                        >
                            <IonIcon name='list-outline' className='text-[1.2rem]' />
                            <span>Properties</span>
                        </motion.button>
                        <motion.button
                            className={
                                isChangeTab === 3
                                    ? 'flex items-center gap-2 rounded-lg bg-gray-400 px-8 py-3 text-white duration-300'
                                    : 'flex items-center gap-2 rounded-lg bg-gray-100 px-8 py-3'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsChangeTab(3)}
                        >
                            <IonIcon name='newspaper-outline' className='text-[1.2rem]' />
                            <span>Detail</span>
                        </motion.button>
                        <motion.button
                            className={
                                isChangeTab === 4
                                    ? 'flex items-center gap-2 rounded-lg bg-gray-400 px-8 py-3 text-white duration-300'
                                    : 'flex items-center gap-2 rounded-lg bg-gray-100 px-8 py-3'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsChangeTab(4)}
                        >
                            <IonIcon name='swap-vertical-outline' className='text-[1.2rem]' />
                            <span>Activities</span>
                        </motion.button>
                        <motion.button
                            className={
                                isChangeTab === 5
                                    ? 'flex items-center gap-2 rounded-lg bg-gray-400 px-8 py-3 text-white duration-300'
                                    : 'flex items-center gap-2 rounded-lg bg-gray-100 px-8 py-3'
                            }
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsChangeTab(5)}
                        >
                            <IonIcon name='stats-chart-outline' className='text-[1.2rem]' />
                            <span>Price History</span>
                        </motion.button>
                    </View>
                    <View className='mt-4 flex min-h-[20rem] items-center justify-center rounded-lg bg-gray-100'>
                        {isChangeTab === 1 && <div>Tab1</div>}
                        {isChangeTab === 2 && <div>Tab2</div>}
                        {isChangeTab === 3 && <div>Tab3</div>}
                        {isChangeTab === 4 && <div>Tab4</div>}
                        {isChangeTab === 5 && <div>Tab5</div>}
                    </View>
                </View>
                <View className='mt-16 xl:max-w-[50rem]'>
                    <h1 className='text-[1.2rem] font-bold uppercase text-gray-600'>Đánh giá</h1>
                    <View className='mt-4 flex flex-col gap-4'>
                        <div className='flex min-h-[3.5rem] items-center gap-4 rounded-lg bg-gray-100 p-2'>
                            <span className='font-bold text-gray-900'>#111</span>
                            <p className='text-[0.9rem] text-gray-600'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci
                            </p>
                        </div>
                        <div className='flex min-h-[3.5rem] items-center gap-4 rounded-lg bg-gray-100 p-2'>
                            <span className='font-bold text-gray-900'>#111</span>
                            <p className='text-[0.9rem] text-gray-600'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci
                            </p>
                        </div>
                        <div className='flex min-h-[3.5rem] items-center gap-4 rounded-lg bg-gray-100 p-2'>
                            <span className='font-bold text-gray-900'>#111</span>
                            <p className='text-[0.9rem] text-gray-600'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci
                            </p>
                        </div>
                    </View>
                </View>
            </View>
        </Section>
    )
}

export default DetailProduct
