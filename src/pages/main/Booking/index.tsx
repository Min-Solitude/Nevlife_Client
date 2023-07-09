import { useState } from 'react'

import View from 'components/shared/View'
import Section from 'motion/Section'
import Schuduled from './components/Schuduled'

const Booking = () => {
    const [checkVideo, setCheckVideo] = useState(false)

    return (
        <View className='flex min-h-screen flex-col items-center'>
            <Section>
                <View className='relative mt-[6rem] h-[50vh] w-full overflow-hidden rounded-lg bg-gray-200 md:h-[70vh]'>
                    <video
                        src='https://static.gleap.io/NewGleapMessenger.mp4'
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 h-full w-full object-cover'
                    />
                    <View
                        className={
                            checkVideo
                                ? 'absolute top-0 h-full w-full overflow-hidden rounded-lg bg-gray-200 duration-300 '
                                : 'absolute bottom-4 left-4 hidden h-[5rem] w-[10rem] cursor-pointer overflow-hidden rounded-lg shadow-2xl md:block'
                        }
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCheckVideo(true)}
                    >
                        <video
                            src='https://static.gleap.io/ButtonReport.mp4'
                            autoPlay
                            loop
                            muted
                            className=' h-full w-full object-cover'
                        />
                    </View>
                </View>
            </Section>
            <Section>
                <Schuduled />
            </Section>
        </View>
    )
}

export default Booking
