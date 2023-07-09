import React from 'react'

import { Route } from '../../configs'
import AuthLayout from '../../components/layouts/private'

const routes: Route[] = [
    {
        path: '/register',
        component: React.lazy(() => import('./Register')),
        layout: AuthLayout
    },
    {
        path: '/login',
        component: React.lazy(() => import('./Login')),
        layout: AuthLayout
    }
]

export default routes
