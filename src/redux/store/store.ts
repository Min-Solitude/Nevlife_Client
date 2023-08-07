import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { AuthReducer } from 'redux/reducers'
import history from './history'
import { routerMiddleware } from 'connected-react-router'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    PersistConfig
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { AppointmentReducer } from 'redux/reducers/appointment'
import { UserReducer } from 'redux/reducers/user'
import { BookingReducer } from 'redux/reducers/booking'

const rootReducer = combineReducers({
    auth: AuthReducer,
    appointment: AppointmentReducer,
    user: UserReducer,
    booking: BookingReducer,
    router: connectRouter(history)
})

type RootState = ReturnType<typeof rootReducer>

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }).concat(routerMiddleware(history))
})

export const persistor = persistStore(store)

export default store
