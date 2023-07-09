import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { AuthReducer } from 'redux/reducers'

const reducer = combineReducers({
    auth: AuthReducer
})

const store = configureStore({
    reducer
})

export default store
