import IonIcon from '@reacticons/ionicons'
import Watch from 'components/customs/Watch'
import View from 'components/shared/View'
import { listInformation } from 'data/listInformation'
import { useState } from 'react'

const Information = () => {
    const [showWatch, setShowWatch] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    const handleClickVideo = (video: string) => {
        setSelectedVideo(video)
        setShowWatch(true)
    }

    return (
        <View className='mt-16 flex flex-col items-start'>
            <View className='flex w-full flex-col items-center'>
                <span className='mb-4 text-center text-[1.6rem] font-bold uppercase text-primary'>
                    Chuyên gia nghiên cứu
                </span>
                <h1 className='text-center text-[0.9rem] text-gray-600'>
                    Được chia sẽ bởi những chuyên gia có kinh nghiệm lâu năm trong lĩnh vực.
                </h1>
            </View>
            <View className='mt-16  flex w-full  gap-8 overflow-x-scroll xl:m-auto xl:mt-12 xl:w-[80%] '>
                {listInformation.map((item, index) => (
                    <View
                        className='min-w-[20rem] cursor-pointer rounded-2xl bg-gray-100 shadow-md  duration-300 hover:bg-gray-200'
                        key={index}
                        onClick={() => handleClickVideo(item.video)}
                    >
                        <View className='relative h-[15rem] overflow-hidden rounded-2xl'>
                            <video src={item.video} className='h-full w-full object-cover' />
                            <h1 className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[1.5rem] font-bold text-white'>
                                {item.title}
                            </h1>
                            <div className='absolute left-0 top-0 flex w-full justify-between p-4 text-[0.7rem] font-bold text-white'>
                                <span>
                                    {item.firstName} {item.lastName}
                                </span>
                                <span>Fouder & CEO</span>
                            </div>
                        </View>
                        <View className='p-4'>
                            <View className='flex items-center  gap-2 border-b border-gray-400 py-4'>
                                <IonIcon name='caret-forward-circle' className='text-[1.2rem]' />
                                <span className='text-[0.8rem] font-bold'>Watch {item.firstName} Story</span>
                            </View>
                            <View className='relative min-h-[8rem] py-4'>
                                <p className=''>{item.description}.</p>
                                <span className='absolute bottom-0 left-0 text-[0.7rem] font-bold'>
                                    Pipe of {item.lastName}
                                </span>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            {showWatch && <Watch video={selectedVideo} onClose={() => setShowWatch(false)} />}
        </View>
    )
}

export default Information
