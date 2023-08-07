import View from 'components/shared/View'
import addNotification from 'react-push-notification'

const About = () => {
    const handleSendMail = async () => {
        setTimeout(() => {
            addNotification({
                title: 'Notification',
                subtitle: 'This is a subtitle',
                message: 'This is a very long message',
                theme: 'darkblue',
                duration: 3000,
                icon: 'https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png',
                native: true // when using native, your OS will handle theming.
            })
        }, 2000)
    }

    return (
        <View className='flex min-h-screen items-center justify-center'>
            <button className='rounded-lg bg-blue-500 px-4 py-3 text-white' onClick={handleSendMail}>
                click
            </button>
        </View>
    )
}

export default About
