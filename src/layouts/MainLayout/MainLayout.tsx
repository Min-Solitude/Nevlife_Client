import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import ToolBar from '../components/ToolBar/ToolBar'
import Search from '../../components/customs/Search/Search'

export interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
    const [checkWidth, setCheckWidth] = useState<boolean>(false)
    const location = useLocation()

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setCheckWidth(true)
        } else {
            setCheckWidth(false)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Kiểm tra nếu URL chứa "/video", ẩn thanh tìm kiếm
    const hideSearchBar = location.pathname.includes('/video')

    return (
        <div className='main-layout flex  flex-col gap-4 overflow-x-hidden md:gap-8'>
            <Header />
            {checkWidth ? <Navigation /> : <ToolBar />}
            {!hideSearchBar && checkWidth ? (
                <div className='m-auto mt-24 w-[90%] '>
                    <Search />
                </div>
            ) : null}
            <main className='mb-16 mt-8 md:mt-0'>
                <div className='m-auto w-wd-secondary  md:w-wd-tertiary'>{props.children}</div>
            </main>
            {checkWidth ? null : <Footer />}
        </div>
    )
}

export default MainLayout
