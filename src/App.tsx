import { Fragment, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './configs'

function App() {
    return (
        <div className='App overflow-x-hidden'>
            <Suspense fallback={'Loading...'}>
                <BrowserRouter>
                    <Routes>
                        {routes.map((route) => {
                            const Page = route.component
                            const Layout = route.layout || Fragment
                            // Lay is private or public | check no
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App
