import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookingState, CreateBookingPayload } from './booking.type'
import http from 'utils/http'
import { toast } from 'react-toastify'
import history from 'redux/store/history'

type BookingProps = {
    booking: BookingState[]
    listBooking: BookingState[]
    myBooking: BookingState[]
}

const initialState: BookingProps = {
    booking: [],
    listBooking: [],
    myBooking: []
}

export const createBooking = createAsyncThunk('booking/createBooking', async (payload: CreateBookingPayload) => {
    const res = await http.post('/booking/create', payload)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

export const getBookingById = createAsyncThunk('booking/getBookingById', async (_id: string) => {
    const res = await http.get(`/booking/${_id}`)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

export const getBookingByIdDoctor = createAsyncThunk('booking/getBookingByIdDoctor', async (_id: string) => {
    const res = await http.get(`/booking/doctor/${_id}`)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

export const getBookingByUserId = createAsyncThunk('booking/getBookingByUserId', async (_id: string) => {
    const res = await http.get(`/booking/user/${_id}`)

    console.log(res)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

const reducer = createSlice({
    name: 'booking',
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer.addCase(createBooking.fulfilled, (state, action: any) => {
            toast.success('Đặt phòng thành công')
            history.push(`/examination-schedule/${action.payload._id}`)
        })
        builer.addCase(getBookingById.fulfilled, (state, action) => {
            state.booking = action.payload
        })
        builer.addCase(getBookingByIdDoctor.fulfilled, (state, action) => {
            state.listBooking = action.payload
        })
        builer.addCase(getBookingByUserId.fulfilled, (state, action) => {
            state.myBooking = action.payload
        })
    }
})

export const BookingActions = reducer.actions
export const BookingReducer = reducer.reducer
