import View from 'components/shared/View'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useEffect } from 'react'
import QRCode from 'react-qr-code'
import { useParams } from 'react-router-dom'
import { getBookingByUserId } from 'redux/reducers/booking'

const MySchedule = () => {
    const dispatch = useAppDispatch()
    const { _id } = useParams<{ _id: string }>()
    const booking: any = useAppSelector((state) => state.booking.myBooking)

    useEffect(() => {
        if (_id) dispatch(getBookingByUserId(_id))
    }, [])
    return (
        <View className='my-[6rem]  min-h-screen '>
            <View className='flex gap-4 rounded-lg border border-gray-300 bg-gray-100 p-4'>
                {booking.map((item: any, index: any) => (
                    <View
                        key={index}
                        className='flex flex-col items-center gap-2 rounded-lg border border-gray-300 bg-white p-4'
                    >
                        <QRCode value={`http://172.16.85.168:3000/list/${item._id}`} />
                        <span className='mt-4 rounded-full bg-blue-500 px-4 py-2 text-white'>{item.date}</span>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default MySchedule
