import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'

import { listImageProps } from '../../types/listImage'
import { useParams } from 'react-router-dom'
import Loading from '../../components/shared/Loading/Loading'

import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

const SearchPage = () => {
    const [isImageSearch, setIsImageSearch] = useState<listImageProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [isKeyword, setIsKeyword] = useState<string | undefined>('')

    const [model, setModel] = useState<boolean>(false)
    const [tempImg, setTempImg] = useState<string>('')

    // get keyword from url
    const { keyword } = useParams<{ keyword: string | undefined }>()

    useEffect(() => {
        setIsKeyword(keyword)
    }, [keyword])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://api.pexels.com/v1/search?query=${isKeyword}&per_page=80`, {
                    headers: {
                        Authorization: 'lgyF8olfKpu21F7Vr27jJXX2kgYXr5tt8VdR3gTQTnk7dr8RVq8kZ19G'
                    }
                })
                setIsImageSearch(response.data.photos)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [isKeyword])

    if (isLoading) return <Loading />

    const detailImage = (image: string) => {
        setModel(true)
        setTempImg(image)
    }

    return (
        <div className='min-h-screen py-1'>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={
                    model
                        ? 'fixed bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center bg-white'
                        : 'hidden'
                }
            >
                <div className='w-full p-4 md:h-[50rem] md:w-[unset] md:translate-y-8'>
                    <img src={tempImg} alt='' className='h-full w-full rounded-lg object-cover' />
                </div>
                <div className='absolute top-[5rem] flex w-full justify-end  px-4 md:w-[80%] md:px-0'>
                    <IonIcon
                        name='close'
                        className=' cursor-pointer text-4xl text-gray-500'
                        onClick={() => {
                            setModel(false)
                        }}
                    />
                </div>
            </motion.div>

            <div className='columns-2 gap-5 sm:gap-8 md:columns-3 lg:columns-5 [&>img:not(:first-child)]:mt-8'>
                {isImageSearch.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className=' relative mb-8  cursor-pointer overflow-hidden rounded-lg bg-slate-200  filter duration-300 hover:brightness-75'
                        >
                            <LazyLoadImage
                                className='scale-110 '
                                src={item.src.original}
                                alt={item.alt}
                                effect='blur'
                                beforeLoad={() => setLoaded(false)}
                                afterLoad={() => setLoaded(true)}
                            />
                            {loaded && (
                                <h4 className='absolute bottom-2 left-2 font-bold text-white'>{item.photographer}</h4>
                            )}
                            <div
                                className='absolute left-0 top-0 h-full w-full'
                                onClick={() => {
                                    detailImage(item.src.original)
                                }}
                            ></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPage
