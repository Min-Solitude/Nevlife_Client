import View from 'components/shared/View'
import Banner from './components/Banner'
import Poster from './components/Poster'

import Section from 'motion/Section'
import Information from './components/Information'
import Health from './components/Health'
import IntroStore from './components/IntroStore'
import Tranning from './components/Trainning'

const Home = () => {
    return (
        <View className=' m-auto flex flex-col items-center '>
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
