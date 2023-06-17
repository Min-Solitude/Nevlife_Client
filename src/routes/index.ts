import config from '../configs'
import MainLayout from '../layouts/MainLayout/MainLayout'
import VideoLayout from '../layouts/VideoLayout/VideoLayout'
import DetailVideo from '../pages/DetailVideo/DetailVideo'
import Home from '../pages/Home/Home'
import SearchPage from '../pages/SearchPage/SearchPage'
import Video from '../pages/Video/Video'

interface Route {
    path: string
    component: any
    layout: any
}

// All Page of Website
const publicRoutes: Route[] = [
    {
        path: config.routes.home,
        component: Home,
        layout: MainLayout
    },
    {
        path: config.routes.searchPage,
        component: SearchPage,
        layout: MainLayout
    },
    {
        path: config.routes.video,
        component: Video,
        layout: MainLayout
    },
    {
        path: config.routes.videoDetail,
        component: DetailVideo,
        layout: VideoLayout
    }
]
const privateRoutes: Route[] = []
export { privateRoutes, publicRoutes }
