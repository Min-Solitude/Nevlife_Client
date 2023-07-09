import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

import View from 'components/shared/View'
import Card from 'components/customs/Card'

const ShowProducts = () => {
    return (
        <View className='mt-8 flex flex-col md:gap-4'>
            <View className='flex flex-col-reverse gap-8 md:flex-col '>
                <View className='flex gap-4'>
                    <View className='hidden items-center  gap-8 border-r border-gray-400 pr-4 md:flex'>
                        <h2 className='text-[1.1rem] font-bold'>Lựa chọn</h2>
                        <motion.select className='cursor-pointer rounded-lg border border-gray-300 bg-gray-200 p-3'>
                            <option value='#'>Showtime</option>
                            <option value='#'>Showtime</option>
                            <option value='#'>Showtime</option>
                        </motion.select>
                    </View>
                    <View className='flex w-full flex-col md:flex-[1.5] md:flex-row md:items-center md:justify-end md:gap-4'>
                        <input
                            type='text'
                            placeholder='Search'
                            className='rounded-lg border border-gray-300 bg-gray-200 px-4 py-3 outline-none focus:bg-gray-50 md:max-w-[30rem] md:flex-1'
                        />
                        <motion.button
                            className='mt-4 flex items-center justify-center rounded-lg bg-gray-900 py-3 text-gray-200 md:mt-0 md:px-8'
                            whileTap={{ scale: 0.9 }}
                        >
                            <IonIcon name='search' className='text-[1.4rem]' />
                        </motion.button>
                    </View>
                </View>
                <View className=' flex w-full gap-4 overflow-x-scroll md:my-4'>
                    <View
                        className='h-[3rem] min-w-[5rem] cursor-pointer overflow-hidden rounded-lg border border-gray-300  duration-300 hover:brightness-75'
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src='https://i.pinimg.com/736x/5b/74/0d/5b740d05e1c2d5736ec4a1ed06326dc8.jpg'
                            alt='nev'
                            className='h-full w-full object-cover'
                        />
                    </View>
                    <View
                        className='h-[3rem] min-w-[5rem] cursor-pointer overflow-hidden rounded-lg border border-gray-300  duration-300 hover:brightness-75'
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src='https://i.pinimg.com/564x/a5/c2/e3/a5c2e3a93878b80b5fc9460cae51739d.jpg'
                            alt='nev'
                            className='h-full w-full object-cover'
                        />
                    </View>
                    <View
                        className='h-[3rem] min-w-[5rem] cursor-pointer overflow-hidden rounded-lg border border-gray-300  duration-300 hover:brightness-75'
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src='https://i.pinimg.com/564x/5b/84/30/5b8430007ad926d8dc28078a0f259124.jpg'
                            alt='nev'
                            className='h-full w-full object-cover'
                        />
                    </View>
                    <View
                        className='h-[3rem] min-w-[5rem] cursor-pointer overflow-hidden rounded-lg border border-gray-300  duration-300 hover:brightness-75'
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src='https://i.pinimg.com/564x/c1/9c/f1/c19cf1e6b42437b48b389d20f8d444ec.jpg'
                            alt='nev'
                            className='h-full w-full object-cover'
                        />
                    </View>
                    <View
                        className='h-[3rem] min-w-[5rem] cursor-pointer overflow-hidden rounded-lg border border-gray-300  duration-300 hover:brightness-75'
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src='https://i.pinimg.com/564x/4d/ad/6a/4dad6ad07d3ed7476fc6982484642c29.jpg'
                            alt='nev'
                            className='h-full w-full object-cover'
                        />
                    </View>
                </View>
            </View>
            <View className=' mt-8 grid grid-cols-1 gap-4 md:mt-0 md:flex-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                <Card
                    title='Brighter Night Than My Room '
                    image={[
                        'https://i.pinimg.com/564x/d4/4f/c1/d44fc180df2e116619d9824b5ef0efb9.jpg',
                        'https://i.pinimg.com/564x/e7/6e/5d/e76e5d869e466f2fec5a249b3f365754.jpg',
                        'https://i.pinimg.com/564x/0d/96/2c/0d962c57e4a061a81a8ac19970410d68.jpg',
                        'https://i.pinimg.com/564x/77/a4/0a/77a40a91c2998625a9f1894f84d83248.jpg'
                    ]}
                    price={200}
                    id='1'
                ></Card>
                <Card
                    title='Brighter Night Than My Room '
                    image={[
                        'https://i.pinimg.com/564x/d4/4f/c1/d44fc180df2e116619d9824b5ef0efb9.jpg',
                        'https://i.pinimg.com/564x/e7/6e/5d/e76e5d869e466f2fec5a249b3f365754.jpg',
                        'https://i.pinimg.com/564x/0d/96/2c/0d962c57e4a061a81a8ac19970410d68.jpg',
                        'https://i.pinimg.com/564x/77/a4/0a/77a40a91c2998625a9f1894f84d83248.jpg'
                    ]}
                    price={200}
                    id='1'
                ></Card>
                <Card
                    title='Brighter Night Than My Room '
                    image={[
                        'https://i.pinimg.com/564x/d4/4f/c1/d44fc180df2e116619d9824b5ef0efb9.jpg',
                        'https://i.pinimg.com/564x/e7/6e/5d/e76e5d869e466f2fec5a249b3f365754.jpg',
                        'https://i.pinimg.com/564x/0d/96/2c/0d962c57e4a061a81a8ac19970410d68.jpg',
                        'https://i.pinimg.com/564x/77/a4/0a/77a40a91c2998625a9f1894f84d83248.jpg'
                    ]}
                    price={200}
                    id='1'
                ></Card>
                <Card
                    title='Brighter Night Than My Room '
                    image={[
                        'https://i.pinimg.com/564x/d4/4f/c1/d44fc180df2e116619d9824b5ef0efb9.jpg',
                        'https://i.pinimg.com/564x/e7/6e/5d/e76e5d869e466f2fec5a249b3f365754.jpg',
                        'https://i.pinimg.com/564x/0d/96/2c/0d962c57e4a061a81a8ac19970410d68.jpg',
                        'https://i.pinimg.com/564x/77/a4/0a/77a40a91c2998625a9f1894f84d83248.jpg'
                    ]}
                    price={200}
                    id='1'
                ></Card>
                <Card
                    title='Brighter Night Than My Room '
                    image={[
                        'https://i.pinimg.com/564x/d4/4f/c1/d44fc180df2e116619d9824b5ef0efb9.jpg',
                        'https://i.pinimg.com/564x/e7/6e/5d/e76e5d869e466f2fec5a249b3f365754.jpg',
                        'https://i.pinimg.com/564x/0d/96/2c/0d962c57e4a061a81a8ac19970410d68.jpg',
                        'https://i.pinimg.com/564x/77/a4/0a/77a40a91c2998625a9f1894f84d83248.jpg'
                    ]}
                    price={200}
                    id='1'
                ></Card>
                <Card
                    title='Brighter Night Than My Room '
                    image={[
                        'https://i.pinimg.com/564x/d4/4f/c1/d44fc180df2e116619d9824b5ef0efb9.jpg',
                        'https://i.pinimg.com/564x/e7/6e/5d/e76e5d869e466f2fec5a249b3f365754.jpg',
                        'https://i.pinimg.com/564x/0d/96/2c/0d962c57e4a061a81a8ac19970410d68.jpg',
                        'https://i.pinimg.com/564x/77/a4/0a/77a40a91c2998625a9f1894f84d83248.jpg'
                    ]}
                    price={200}
                    id='1'
                ></Card>
            </View>
        </View>
    )
}

export default ShowProducts
