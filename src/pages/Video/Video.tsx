import { useEffect, useState } from 'react'

import axios from 'axios'
import { videoProps } from '../../types/video'
import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Video = () => {
    const [isListVideo, setIsListVideo] = useState<videoProps[]>([])
    const [isPage, setIsPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.pexels.com/v1/videos/popular/?page=${isPage}&per_page=80`,
                    {
                        headers: {
                            Authorization: 'lgyF8olfKpu21F7Vr27jJXX2kgYXr5tt8VdR3gTQTnk7dr8RVq8kZ19G'
                        }
                    }
                )
                setIsListVideo(response.data.videos)
            } catch (error) {
                console.log(error)
                toast.error('Something went wrong')
            }
        }
        fetchData()
    }, [isPage])

    return (
        <div className='mt-[4rem] md:mt-0'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {isListVideo.map((item, index) => {
                    return (
                        <Link to={`/video/watch/${item.id}`} key={index} className='relative'>
                            <div className='relative h-[15rem] cursor-pointer duration-300 hover:brightness-75 md:overflow-hidden md:rounded-lg'>
                                <img src={item.image} alt='' className='h-full w-full object-cover' />
                                <IonIcon
                                    name='play'
                                    className='absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-4xl text-white'
                                />
                            </div>
                            <div className='absolute bottom-0  p-4'>
                                <h3 className='font-bold text-white'>{item.user.name}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='mt-8 flex justify-center gap-4 '>
                {isPage > 1 && (
                    <button className='rounded-lg bg-slate-200 px-6 py-4' onClick={() => setIsPage(isPage - 1)}>
                        {isPage - 1}
                    </button>
                )}
                <button className='backgroud_gradient rounded-lg px-6 py-4 text-white'>{isPage}</button>
                <button className='rounded-lg bg-slate-200 px-6 py-4' onClick={() => setIsPage(isPage + 1)}>
                    {isPage + 1}
                </button>
            </div>
        </div>
    )
}

export default Video
