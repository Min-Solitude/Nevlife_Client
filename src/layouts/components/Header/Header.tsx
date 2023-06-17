import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed z-50 flex w-screen items-center justify-center bg-white py-4 shadow-sd-primary'>
            <div className='flex w-[90%] items-center justify-between md:w-[80%]'>
                <Link to={'/'} className='  font-logo text-xl  font-bold uppercase md:text-2xl'>
                    nevart
                </Link>
                <nav className='flex translate-y-1 items-center gap-4 text-2xl'>
                    <Link to='https://www.facebook.com/kien.mon.33/' target='_blank' rel='noreferrer'>
                        <IonIcon name='logo-facebook' className='text-blue-500 duration-150 hover:scale-110' />
                    </Link>
                    <Link to='/' target='_blank' rel='noreferrer'>
                        <IonIcon name='logo-instagram' className='text-pink-500 duration-150 hover:scale-110' />
                    </Link>
                    <Link to='https://www.nevsolit.website/' target='_blank' rel='noreferrer'>
                        <IonIcon name='home' className='text-gray-500 duration-150 hover:scale-110' />
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header
