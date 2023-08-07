import View from 'components/shared/View'
import Banner from './components/Banner'
import Poster from './components/Poster'

import Section from 'motion/Section'
import Information from './components/Information'
import Health from './components/Health'
import IntroStore from './components/IntroStore'
import Tranning from './components/Trainning'
import { useEffect, useState } from 'react'
import Start from './components/Start'

const Home = () => {
    const [isStart, setIsStart] = useState(false)

    const handleStart = () => {
        setIsStart((prev) => !prev)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'KeyA') {
                handleStart()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
    }, [])
    return (
        <View className=' relative m-auto flex flex-col items-center'>
            {isStart && <Start />}
            <Section>
                <Banner />
            </Section>
            <Section>
                <Poster />
            </Section>
            <Section>
                <Information />
            </Section>
            <Section>
                <Health />
            </Section>
            <Section>
                <Tranning />
            </Section>
            <Section>
                <IntroStore />
            </Section>
        </View>
    )
}

export default Home
