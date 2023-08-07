import View from 'components/shared/View'
import ProfileDocter from './components/ProfileDocter'
import RoomAppointmentDoctor from './components/RoomAppointmentDoctor'

const RoomAppointment = () => {
    return (
        <View className='mt-[6rem] flex flex-col gap-4 lg:flex-row lg:gap-8 '>
            <View>
                <ProfileDocter />
            </View>
            <View className='00 lg:w-full'>
                <RoomAppointmentDoctor />
            </View>
        </View>
    )
}

export default RoomAppointment
