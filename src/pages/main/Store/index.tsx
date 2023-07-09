import View from 'components/shared/View'
import BannerStore from './components/BannerStore'
import Section from 'motion/Section'
import ShowProducts from './components/ShowProducts'

const Store = () => {
    return (
        <View className=' min-h-screen'>
            <Section>
                <BannerStore />
            </Section>
            <Section>
                <ShowProducts />
            </Section>
        </View>
    )
}

export default Store
