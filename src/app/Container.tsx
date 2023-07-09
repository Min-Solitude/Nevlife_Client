import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store/store'

type ContainerProps = {
    children?: React.ReactNode
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Provider store={store}>{children}</Provider>
        </React.Fragment>
    )
}

export default Container
