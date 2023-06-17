import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import MainLayout, { MainLayoutProps } from './layouts/MainLayout/MainLayout'
import { Fragment, Suspense } from 'react'

function App() {
    return (
        <div className='App'>
            <Suspense fallback={'Loading...'}>
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout: React.FC<MainLayoutProps> = MainLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = (props: MainLayoutProps) => <>{props.children}</>
                            }
                            const Page = route.component
                            return (
                                <Route
                                    key={index}
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
