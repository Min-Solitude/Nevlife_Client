import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './auth.type'

const initialState: AuthState = {
    access_token: '',
    refresh_token: '',
    user: {}
}

const reducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export const AuthAction = reducer.actions
export const AuthReducer = reducer.reducer
