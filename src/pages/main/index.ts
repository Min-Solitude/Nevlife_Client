import React from 'react'

import GlobalLayout from '../../components/layouts/global'
import { Route } from '../../configs'

const routes: Route[] = [
    {
        path: '/',
        component: React.lazy(() => import('./Home')),
        layout: GlobalLayout
    },
    {
        path: '/store',
        component: React.lazy(() => import('./Store')),
        layout: GlobalLayout
    },
    {
        path: '/store/product/:id',
        component: React.lazy(() => import('./Store/DetailProduct')),
        layout: GlobalLayout
    },
    {
        path: '/booking',
        component: React.lazy(() => import('./Booking')),
        layout: GlobalLayout
    },
    {
        path: '/booking/detail/:id',
        component: React.lazy(() => import('./Booking/DetailBooking')),
        layout: GlobalLayout
    },
    {
        path: '/forum',
        component: React.lazy(() => import('./Forum')),
        layout: null
    },
    {
        path: '/profile/:id',
        component: React.lazy(() => import('./Profile')),
        layout: GlobalLayout
    },
    {
        path: '/health/:id',
        component: React.lazy(() => import('./Health')),
        layout: GlobalLayout
    }
]

export default routes
