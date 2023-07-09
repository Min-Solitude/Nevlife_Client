import View from 'components/shared/View'
import React from 'react'
import { motion } from 'framer-motion'

const Advertisement = () => {
    return (
        <View>
            <View className='flex flex-col gap-4'>
                <motion.span
                    className='h-[6rem] w-[6rem] overflow-hidden rounded-lg bg-yellow-500'
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src='https://i.pinimg.com/564x/b6/61/11/b66111daab973fcb1fd1791d82ab0295.jpg'
                        alt='nev'
                        className='h-full w-full object-cover'
                    />
                </motion.span>
                <motion.span
                    className='h-[6rem] w-[6rem] overflow-hidden rounded-lg bg-yellow-500'
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src='https://i.pinimg.com/564x/ab/eb/58/abeb584be9dae1f4deb94a001563443c.jpg'
                        alt='nev'
                        className='h-full w-full object-cover'
                    />
                </motion.span>
                <motion.span
                    className='h-[6rem] w-[6rem] overflow-hidden rounded-lg bg-yellow-500'
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src='https://i.pinimg.com/564x/99/6a/f9/996af9850419798a0b577c7a9a12cea9.jpg'
                        alt='nev'
                        className='h-full w-full object-cover'
                    />
                </motion.span>
                <motion.span
                    className='h-[6rem] w-[6rem] overflow-hidden rounded-lg bg-yellow-500'
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src='https://i.pinimg.com/564x/5c/85/8f/5c858f1235d1a6f3421db1013172c1c6.jpg'
                        alt='nev'
                        className='h-full w-full object-cover'
                    />
                </motion.span>
                <motion.span
                    className='h-[6rem] w-[6rem] overflow-hidden rounded-lg bg-yellow-500'
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src='https://i.pinimg.com/564x/62/10/35/621035db6efb2ea162a6ddffe470453c.jpg'
                        alt='nev'
                        className='h-full w-full object-cover'
                    />
                </motion.span>
            </View>
        </View>
    )
}

export default Advertisement
