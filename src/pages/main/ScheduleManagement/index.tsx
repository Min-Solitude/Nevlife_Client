import View from 'components/shared/View'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBookingByIdDoctor } from 'redux/reducers/booking'

const ScheduleManagement = () => {
    const dispatch = useAppDispatch()
    const { _id } = useParams<{ _id: string }>()
    const listBooking = useAppSelector((state) => state.booking.listBooking)

    console.log(listBooking)

    useEffect(() => {
        if (_id) {
            dispatch(getBookingByIdDoctor(_id))
        }
    }, [])
    return <View className='mt-[6rem] min-h-screen'>ScheduleManagement</View>
}

export default ScheduleManagement
