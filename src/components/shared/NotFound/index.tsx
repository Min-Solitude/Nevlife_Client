import Section from 'motion/Section'
import View from '../View'

const NotFound = () => {
    return (
        <Section>
            <View className='h-screen w-screen bg-black p-2'>
                <View className='flex h-full items-center justify-center rounded-2xl border border-gray-300 bg-gray-100'>
                    <View className='flex flex-col items-center justify-center gap-2'>
                        <View className='text-9xl font-bold text-gray-400'>404</View>
                        <View className='text-2xl font-bold text-gray-400'>Page Not Found</View>
                    </View>
                </View>
            </View>
        </Section>
    )
}

export default NotFound
