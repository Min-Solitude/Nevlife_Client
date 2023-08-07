import View from 'components/shared/View'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from 'redux/reducers/user'

const ProfileDocter = () => {
    const { id: userId } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const profileDocter = useAppSelector((state) => state.user)

    useEffect(() => {
        if (userId) {
            dispatch(getUserById(userId))
        }
    }, [dispatch, userId])

    return (
        <View>
            <View>
                <h1 className='text-[1.2rem] font-bold text-blue-500'>{profileDocter.specialized}</h1>
                <View className='relative mt-4 flex flex-col items-center overflow-hidden rounded-2xl rounded-2xl border border-gray-300 bg-gray-100 p-4'>
                    <View className='h-[6rem] w-[6rem] rounded-full border-[0.2rem] border-blue-500'>
                        <img
                            src={
                                profileDocter.avatar
                                    ? profileDocter.avatar
                                    : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                            }
                            alt={profileDocter.username}
                            className='h-full w-full rounded-full object-cover'
                        />
                    </View>
                    <View className='mt-4 flex w-full flex-col items-center text-[0.9rem] text-gray-700'>
                        <p>{profileDocter.username ? profileDocter.username : 'Chưa cập nhật'}</p>
                        <h2>{profileDocter.email}</h2>
                        <View className='mt-4 w-full rounded-lg border border-gray-300 bg-white p-4'>
                            <li className=' list-inside '>
                                <span className='mr-2 font-bold'>Địa chỉ:</span>
                                <span>{profileDocter.address ? profileDocter.address : '---'}</span>
                            </li>
                            <li className=' list-inside '>
                                <span className='mr-2 font-bold'>SDT:</span>
                                <span>{profileDocter.phoneNumber ? profileDocter.phoneNumber : '---'}</span>
                            </li>
                            <li className=' list-inside '>
                                <span className='mr-2 font-bold'>Kinh nghiệm:</span>
                                <span>
                                    {Number(profileDocter.experience) === 0
                                        ? 'Chưa có kinh nghiệm'
                                        : `${profileDocter.experience} năm`}{' '}
                                </span>
                            </li>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileDocter
