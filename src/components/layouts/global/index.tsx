import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Navigate from './Navigate'

type GlobalLayoutProps = {
    children: React.ReactNode
}

const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => {
    const [isWidth, setIsWidth] = useState(false)

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
