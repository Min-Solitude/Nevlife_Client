import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from 'redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

type ContainerProps = {
    children?: React.ReactNode
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </React.Fragment>
    )
}

export default Container
