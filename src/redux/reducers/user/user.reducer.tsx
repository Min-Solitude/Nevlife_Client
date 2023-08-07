import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserState } from './user.type'
import http from 'utils/http'
import { toast } from 'react-toastify'

const initialState: UserState = {
    _id: '',
    username: '',
    email: '',
    phoneNumber: '',
    avatar: '',
    address: '',
    role: '',
    specialized: '',
    experience: '',
    evaluate: ''
}

export const getUserById = createAsyncThunk('user/getUserById', async (payload: string) => {
    const res = await http.get(`/user/detail/${payload}`)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data.data
})

const reducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserById.fulfilled, (state, action) => {
            return {
                ...action.payload
            }
        })
    }
})

export const UserActions = reducer.actions
export const UserReducer = reducer.reducer
