import IonIcon from '@reacticons/ionicons'
import View from 'components/shared/View'
import Section from 'motion/Section'
import React from 'react'

interface CardForumProps {
    children: React.ReactNode
    name: string
    avatar: string
    specialist: string
    image: string
    title: string
}

const CardForum = ({ children, name, avatar, specialist, image, title }: CardForumProps) => {
    return (
        <Section>
            <View className='m-auto mt-8 flex w-[90%] flex-col gap-4'>
                <View className='relative flex items-center gap-4'>
                    <View className='h-[3rem] w-[3rem] overflow-hidden rounded-full'>
                        <img src={avatar} alt='nev' className='h-full w-full object-cover' />
                    </View>
                    <View>
                        <h1 className='flex items-center font-bold'>
                            <span>@</span>
                            {name}
                        </h1>
                        <p className='text-[0.9rem] text-gray-400'>Bác sĩ khoa {specialist}</p>
                    </View>
                    <button className='absolute right-0'>
                        <IonIcon name='ellipsis-vertical' className='text-[1.5rem] text-gray-700' />
                    </button>
                </View>
                <View className='h-[15rem] overflow-hidden rounded-lg'>
                    <img src={image} alt='nev' className='h-full w-full object-cover' />
                </View>
                <View>
                    <h1 className='text-[1.2rem] font-bold'>{title}</h1>
                    <span className='text-[0.9rem]'>{children}</span>
                </View>
            </View>
        </Section>
    )
}

export default CardForum
