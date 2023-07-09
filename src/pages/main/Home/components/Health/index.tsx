import IonIcon from '@reacticons/ionicons'
import { ItemTable } from 'components/customs/ItemTable'
import View from 'components/shared/View'

const Health = () => {
    return (
        <View className='mt-16 flex flex-col items-center '>
            <View className='flex flex-col items-center'>
                <h1 className='text-center text-[1.6rem] font-bold uppercase text-gray-700'>
                    Hệ thống quản lý sức khỏe tiên tiến
                </h1>
                <p className='mt-4 max-w-[30rem] text-center text-[0.9rem] text-gray-600'>
                    Chúng tôi mô phỏng toàn bộ cơ thể của bạn để từ đó đưa ra tư vấn và phương thức quản lý phù hợp
                    nhất.
                </p>
            </View>
            <View className=' mt-8 flex w-full flex-col gap-4 text-center xl:max-w-[80%]'>
                <ItemTable td2='Chất lượng' td3='Chuyên nghiệp' td4='Quy mô' td5='Thân thiện' />
                <ItemTable
                    td1='VS MARKET'
                    td2={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td3={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td4={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td5={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                />
                <ItemTable
                    td1='Min hiang'
                    td2={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td3={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td4={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td5={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                />
                <ItemTable
                    td1='Bay max'
                    td2={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td3={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td4={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td5={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                />
                <ItemTable
                    td1='Tiger'
                    td2={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td3={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td4={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                    td5={<IonIcon name='checkmark' className='text-[1.2rem] text-gray-700' />}
                />
            </View>
        </View>
    )
}

export default Health
