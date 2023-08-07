import React from 'react'

import GlobalLayout from '../../components/layouts/global'
import { Route } from '../../configs'

const routes: Route[] = [
    {
        path: '/',
        component: React.lazy(() => import('./Home')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/store',
        component: React.lazy(() => import('./Store')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/store/product/:id',
        component: React.lazy(() => import('./Store/DetailProduct')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/booking',
        component: React.lazy(() => import('./Booking')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/booking/doctor/:id',
        component: React.lazy(() => import('./Booking/RoomAppointment')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/booking/order/:id',
        component: React.lazy(() => import('./Booking/DetailBooking')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/appointment',
        component: React.lazy(() => import('./Appointment')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/forum',
        component: React.lazy(() => import('./Forum')),
        layout: null,
        isPrivate: false
    },
    {
        path: '/profile',
        component: React.lazy(() => import('./Profile')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/health',
        component: React.lazy(() => import('./Health')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/about',
        component: React.lazy(() => import('./About')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/examination-schedule/:_id',
        component: React.lazy(() => import('./ExaminationSchedule')),
        layout: null,
        isPrivate: false
    },
    {
        path: '/schedule-management/:_id',
        component: React.lazy(() => import('./ScheduleManagement')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/my-schedule/:_id',
        component: React.lazy(() => import('./ScheduleManagement/components/MySchedule')),
        layout: GlobalLayout,
        isPrivate: false
    },
    {
        path: '/list/:_id',
        component: React.lazy(() => import('./List')),
        layout: GlobalLayout,
        isPrivate: false
    }
]

export default routes
