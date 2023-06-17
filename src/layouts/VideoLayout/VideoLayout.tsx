import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

interface VideoLayoutProps {
    children: React.ReactNode
}

const VideoLayout = (props: VideoLayoutProps) => {
    return (
        <div className='flex flex-col gap-8'>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default VideoLayout
