import IonIcon from '@reacticons/ionicons'
import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
    const [selectedIcon, setSelectedIcon] = useState<string>('home')

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName)
        if (iconName === 'notifications' || iconName === 'person') {
            toast.info('Chức năng đang được phát triển', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true
            })
        }
    }

    return (
        <div className='fixed bottom-0 z-50  w-screen bg-white shadow-sd-primary '>
            <div className='m-auto flex h-20 w-4/5 translate-y-1 items-center justify-between text-2xl'>
                <Link to='/video' onClick={() => handleIconClick('videocam')}>
                    <IonIcon
                        name='videocam'
                        className={
                            selectedIcon === 'videocam'
                                ? 'backgroud_gradient -translate-y-8 rounded-full border-4 border-solid border-white px-4 py-4 text-white duration-300'
                                : 'rounded-full border-2 border-white px-4 py-4 text-gray-500'
                        }
                    />
                </Link>
                <Link to='/' onClick={() => handleIconClick('home')}>
                    <IonIcon
                        name='home'
                        className={
                            selectedIcon === 'home'
                                ? ' backgroud_gradient -translate-y-8 rounded-full border-4 border-solid border-white px-4 py-4 text-white duration-300'
                                : ' rounded-full border-2 border-white px-4 py-4 text-gray-500'
                        }
                    />
                </Link>
                <button onClick={() => handleIconClick('notifications')}>
                    <IonIcon
                        name='notifications'
                        className={
                            selectedIcon === 'notifications'
                                ? ' backgroud_gradient -translate-y-8 rounded-full border-4 border-solid border-white px-4 py-4 text-white duration-300'
                                : 'rounded-full border-2 border-white px-4 py-4 text-gray-500'
                        }
                    />
                </button>
                <button onClick={() => handleIconClick('person')}>
                    <IonIcon
                        name='person'
                        className={
                            selectedIcon === 'person'
                                ? ' backgroud_gradient -translate-y-8 rounded-full border-4 border-solid border-white px-4 py-4 text-white duration-300'
                                : 'rounded-full border-2 border-white px-4 py-4 text-gray-500'
                        }
                    />
                </button>
            </div>
        </div>
    )
}

export default Navigation
