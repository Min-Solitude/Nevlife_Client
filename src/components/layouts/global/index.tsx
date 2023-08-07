import React, { FunctionComponent, useEffect, useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import Navigate from './Navigate'
import { useAppSelector } from 'hooks/useRedux'
import history from 'redux/store/history'
import { routes } from 'configs'
import { toast } from 'react-toastify'

type GlobalLayoutProps = {
    children: React.ReactNode
}

const checkPathExistInRoutes = (path: string) => {
    let isExist = false
    routes.forEach((route) => {
        if (route.path === path && route.isPrivate) {
            isExist = true
        }
    })
    return isExist
}

const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => {
    const [isWidth, setIsWidth] = useState(false)
    const accessToken = useAppSelector((state) => state.auth.accessToken)

    const location = history.location.pathname

    useEffect(() => {
        if (!accessToken && checkPathExistInRoutes(location)) {
            toast.error('Bạn cần đăng nhập để truy cập trang này', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true
            })
            // BACK PAGE
            history.back()
        }
    }, [accessToken, location])

    const handleCheckWidth = () => {
        if (window.innerWidth > 768) {
            setIsWidth(true)
        } else {
            setIsWidth(false)
        }
    }

    useEffect(() => {
        handleCheckWidth()
        window.addEventListener('resize', handleCheckWidth)
        return () => {
            window.removeEventListener('resize', handleCheckWidth)
        }
    }, [isWidth])

    return (
        <div className='min-h-screen'>
            <div className='m-auto w-[90%]  lg:w-[80%]'>
                <Header />
                {children}
            </div>
            <Footer />
            {isWidth ? null : <Navigate />}
        </div>
    )
}

export default GlobalLayout
