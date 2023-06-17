import Search from '../../../components/customs/Search/Search'
import { Link } from 'react-router-dom'

const ToolBar = () => {
    return (
        <div className='mt-28'>
            <div className='m-auto flex w-wd-tertiary items-center justify-between '>
                <Search />
                <div className='flex gap-8'>
                    <Link to='/video' className='underline hover:text-primary'>
                        Video
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ToolBar
