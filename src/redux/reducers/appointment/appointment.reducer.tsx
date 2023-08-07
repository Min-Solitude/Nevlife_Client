import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppointmentState } from './appointment.type'
import http from 'utils/http'
import { toast } from 'react-toastify'
import history from 'redux/store/history'

const initialState: AppointmentState = {
    _id: '',
    name: '',
    address: '',
    phoneNumber: '',
    timeOpen: '',
    timeClose: '',
    date: {},
    description: '',
    price: 0
}

export const createAppointMent = createAsyncThunk('appointment/create', async (payload: AppointmentState) => {
    const res = await http.post('/appointment/create', payload)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

export const getAppointmentById = createAsyncThunk('appointment/getAppointmentById', async (payload: string) => {
    const res = await http.get(`/appointment/get-appointment/${payload}`)
    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

const reducer = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAppointMent.fulfilled, (state, action) => {
            toast.success('Tạo phòng khám thành công')
            history.push('/')

            return action.payload
        })
        builder.addCase(getAppointmentById.fulfilled, (state, action) => {
            return {
                ...action.payload
            }
        })
    }
})

export const AppointmentAction = reducer.actions
export const AppointmentReducer = reducer.reducer
