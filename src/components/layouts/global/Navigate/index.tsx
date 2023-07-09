import IonIcon from '@reacticons/ionicons'
import View from 'components/shared/View'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigate = () => {
    const navigate = useNavigate()
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
                    to='/store'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='storefront' className='translate-y-[0.2rem] text-2xl  ' />
                </NavLink>
                <NavLink
                    to='/forum'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='newspaper' className='translate-y-[0.2rem] text-2xl  ' />
                </NavLink>
                <NavLink
                    to='/profile/1'
                    className={(nav) =>
                        nav.isActive
                            ? 'background_gradient flex-1 rounded-full py-1 text-center text-white'
                            : 'flex-1 rounded-full py-1 text-center text-gray-700'
                    }
                >
                    <IonIcon name='person' className='translate-y-[0.2rem]  text-2xl ' />
                </NavLink>
            </View>
        </div>
    )
}

export default Navigate
