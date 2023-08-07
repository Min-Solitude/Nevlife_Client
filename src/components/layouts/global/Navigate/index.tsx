import IonIcon from '@reacticons/ionicons'
import View from 'components/shared/View'
import { NavLink } from 'react-router-dom'

const Navigate = () => {
    return (
        <div className='fixed bottom-0 w-full '>
            <View className='flex items-center justify-center gap-2  bg-white p-2 shadow-2xl'>
                <NavLink
                    to='/'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='home' className='translate-y-[0.2rem] text-2xl ' />
                </NavLink>
                <NavLink
                    to='/booking'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='book' className='translate-y-[0.2rem] text-2xl  ' />
                </NavLink>
                <NavLink
                    to='/about'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='information-circle' className='translate-y-[0.2rem] text-2xl ' />
                </NavLink>
                <NavLink
                    to='/health'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='body' className='translate-y-[0.2rem] text-2xl ' />
                </NavLink>
            </View>
        </div>
    )
}

export default Navigate
