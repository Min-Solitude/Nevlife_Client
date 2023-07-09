import View from 'components/shared/View'
import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

type AuthLayoutProps = {
    children: React.ReactNode
}
const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
    return (
        <View className='h-screen bg-black p-2'>
            <View
                className='relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100 p-2'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <motion.img
                    src='https://app.pipe.com/static/assets/auth-login-img.png'
                    alt='nev'
                    className='absolute bottom-0 right-0 hidden w-[30%] translate-x-[25%] translate-y-[25%] md:block'
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    animate={{ opacity: 1, y: 50, x: 0 }}
                    exit={{ opacity: 0, y: 100, x: 100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                />
                {children}
            </View>
        </View>
    )
}

export default AuthLayout
