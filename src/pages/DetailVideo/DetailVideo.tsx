import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { VideoDataProp } from '../../types/detailVideo'
import { useParams } from 'react-router-dom'

const DetailVideo = () => {
    const [isDetailVideo, setIsDetailVideo] = useState<VideoDataProp>({
        file_type: '',
        fps: 0,
        height: 0,
        id: 0,
        link: '',
        quality: '',
        width: 0
    })

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.pexels.com/videos/videos/${id}`, {
                    headers: {
                        Authorization: 'lgyF8olfKpu21F7Vr27jJXX2kgYXr5tt8VdR3gTQTnk7dr8RVq8kZ19G'
                    }
                })
                setIsDetailVideo(response.data.video_files[0])
            } catch (error) {
                console.log(error)
                toast.error('Something went wrong')
            }
        }
        fetchData()
    }, [id])
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='m-auto flex h-[50rem] items-center justify-center md:w-[80%]'>
                <video
                    src={isDetailVideo.link}
                    controls
                    autoPlay
                    loop
                    muted
                    className='md:h-full  md:object-cover'
                ></video>
            </div>
        </div>
    )
}

export default DetailVideo
