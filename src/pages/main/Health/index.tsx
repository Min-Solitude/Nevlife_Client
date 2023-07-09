import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import { ChartOptions, Time, createChart } from 'lightweight-charts'

import View from 'components/shared/View'
import Section from 'motion/Section'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const Health = () => {
    const navigate = useNavigate()
    const chartContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chartContainerRef.current) {
            const chartOptions = {
                layout: { textColor: 'black', background: { type: 'solid', color: 'white' } }
            } as ChartOptions
            const chart = createChart(chartContainerRef.current, chartOptions)
            const areaSeries = chart.addAreaSeries({
                lineColor: '#2962FF',
                topColor: '#2962FF',
                bottomColor: 'rgba(41, 98, 255, 0.28)'
            })
            const data = [
                { value: 0, time: 1642425322 },
                { value: 8, time: 1642511722 },
                { value: 10, time: 1642598122 },
                { value: 20, time: 1642684522 },
                { value: 3, time: 1642770922 },
                { value: 43, time: 1642857322 },
                { value: 41, time: 1642943722 },
                { value: 43, time: 1643030122 },
                { value: 56, time: 1643116522 },
                { value: 46, time: 1643202922 }
            ] as { value: number; time: Time }[]
            areaSeries.setData(data)

            return () => {
                chart.remove()
            }
        } else {
            throw new Error('chartContainerRef.current is null')
        }
    }, [])

    return (
        <Section>
            <View className='mt-[6rem] flex  flex-col gap-8 md:flex-row'>
                <motion.button
                    className='flex items-center gap-2 font-bold text-gray-500 md:hidden'
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(-1)}
                >
                    <IonIcon name='arrow-back' className='translate-y-[-0.1rem]' />
                    <span className='text-[0.9rem]'>Quay lại</span>
                </motion.button>
                <View className='mt-14 flex flex-col gap-4  md:min-w-[22rem]  '>
                    <View className='relative flex flex-col items-center rounded-lg bg-gray-50 p-8 shadow-md'>
                        <View className='absolute top-0 h-[8rem] w-[8rem] translate-y-[-50%] overflow-hidden rounded-full shadow-lg'>
                            <img
                                src='https://i.pinimg.com/564x/d7/72/aa/d772aa98d04fcd55dec3bff219194251.jpg'
                                alt='nev'
                                className='h-full w-full object-cover'
                            />
                        </View>
                        <View className='mt-16 text-center'>
                            <h1 className='text-[1.2rem] font-bold'>Kim so min</h1>
                            <p className='text-[0.9rem] text-gray-600'>20 tuổi, VietNam</p>
                        </View>
                        <View className='mt-12 grid grid-cols-3 gap-4'>
                            <p className='flex flex-col items-center gap-2 text-center text-[0.8rem] font-bold text-blue-400'>
                                <span>Nhóm máu</span>
                                <span className='text-[1.1rem] text-black'>---</span>
                            </p>
                            <p className='flex flex-col items-center gap-2 text-center text-[0.8rem] font-bold text-blue-400'>
                                <span>Chiều cao</span>
                                <span className='text-[1.1rem] text-black'>1m62</span>
                            </p>
                            <p className='flex flex-col items-center gap-2 text-center text-[0.8rem] font-bold text-blue-400'>
                                <span>Cân nặng</span>
                                <span className='text-[1.1rem] text-black'>48kg</span>
                            </p>
                        </View>
                    </View>
                    <View className='mt-8'>
                        <View className='flex items-center justify-between'>
                            <h1 className='text-[1.2rem] font-bold'>Thông báo</h1>
                            <span className='text-[0.9rem] font-bold text-gray-500'>21/06/2023</span>
                        </View>
                        <View className='mt-4 rounded-lg bg-gray-50  shadow-md'>
                            <View className='relative flex items-center gap-4 border-b border-gray-300 p-8'>
                                <h2>Thời gian:</h2>
                                <span className='rounded-full bg-blue-300 px-4 py-2 text-[0.8rem] font-bold uppercase text-white'>
                                    Mon
                                </span>{' '}
                                <span className='absolute right-8 text-gray-600'>10mg</span>
                            </View>
                            <View className='flex flex-col gap-4 p-8'>
                                <View className='flex items-center  gap-4'>
                                    <View className='h-[3.5rem] w-[3.5rem] overflow-hidden rounded-full'>
                                        <img
                                            src='https://i.pinimg.com/564x/03/b3/c2/03b3c2fd1428ec34cc80f4eefe74226b.jpg'
                                            alt='nev'
                                        />
                                    </View>
                                    <View>
                                        <h2 className='text-[1.1rem] font-bold text-gray-700'>Bác sĩ Cho Dong Suck</h2>
                                        <p className='text-[0.8rem] text-gray-500'>Bác sĩ khoa tự kỹ</p>
                                    </View>
                                </View>
                                <View>
                                    <View>
                                        <h1 className='font-bold'>Phòng</h1>
                                        <p className='text-[0.9rem] font-bold text-gray-600'>P.310</p>
                                    </View>
                                    <View className='mt-4 flex justify-between'>
                                        <View>
                                            <p className='font-bold'>Ngày</p>
                                            <span className='text-[0.9rem] font-bold text-gray-600'>21/06/2023</span>
                                        </View>
                                        <View>
                                            <p className='font-bold'>Thời gian</p>
                                            <span className='text-[0.9rem] font-bold text-gray-600'>12:00 PM</span>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className='mt-4 flex items-start justify-start gap-8 rounded-lg bg-gray-50 p-8 shadow-md'>
                            <View className='flex-1 rounded-lg bg-blue-400 p-4 font-bold text-white'>
                                <h2 className='text-[1.1rem]'>Kiểm tra định kì sức khỏe</h2>
                                <p className='mt-4 text-[0.8rem]  font-bold '>21/06/2023 - 12:00PM</p>
                            </View>
                            <motion.button
                                className='flex items-center justify-center rounded-lg border border-blue-500 bg-white p-4 '
                                whileTap={{ scale: 0.95 }}
                            >
                                <IonIcon name='add' className='text-blue-400' />
                            </motion.button>
                        </View>
                    </View>
                </View>
                <View className='mt-8 md:mt-0 md:flex-1  md:overflow-x-hidden '>
                    <View className='w-full '>
                        <h1 className='text-[1.2rem] font-bold text-gray-600'>Kết quả kiểm tra</h1>
                        <View className='mt-4 flex h-[10rem] gap-4 overflow-x-scroll  rounded-lg  '>
                            <View className='relative flex min-w-[20rem] flex-col justify-center gap-2 rounded-lg  border border-blue-400 bg-white p-4 pl-8 font-bold '>
                                <label className='text-[0.9rem] text-gray-700'>Kiểm tra sơ bộ / 20/06/2023</label>
                                <h2 className='text-[1.1rem] text-primary'>Tự kỉ giai đoạn cuối</h2>
                                <span className='text-[0.8rem] text-gray-800'>Kết quả khả thi</span>
                                <span className='background_gradient absolute bottom-2 left-2 top-2 w-2 rounded-lg bg-yellow-300'></span>
                                <motion.button
                                    className='absolute right-2 top-2 text-[1.4rem] text-gray-700'
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IonIcon name='ellipsis-vertical' />
                                </motion.button>
                            </View>
                            <View className='relative flex min-w-[20rem] flex-col justify-center gap-2  rounded-lg border border-blue-400 bg-white p-4 pl-8 font-bold'>
                                <label className='text-[0.9rem] text-gray-700'>Kiểm tra sơ bộ / 20/06/2023</label>
                                <h2 className='text-[1.1rem] text-primary'>Tự kỉ giai đoạn cuối</h2>
                                <span className='text-[0.8rem] text-gray-800'>Kết quả khả thi</span>
                                <span className='background_gradient absolute bottom-2 left-2 top-2 w-2 rounded-lg bg-yellow-300'></span>
                                <motion.button
                                    className='absolute right-2 top-2 text-[1.4rem] text-gray-700'
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IonIcon name='ellipsis-vertical' />
                                </motion.button>
                            </View>
                            <View className='relative flex min-w-[20rem] flex-col justify-center gap-2  rounded-lg border border-blue-400 bg-white p-4 pl-8 font-bold'>
                                <label className='text-[0.9rem] text-gray-700'>Kiểm tra sơ bộ / 20/06/2023</label>
                                <h2 className='text-[1.1rem] text-primary'>Tự kỉ giai đoạn cuối</h2>
                                <span className='text-[0.8rem] text-gray-800'>Kết quả khả thi</span>
                                <span className='background_gradient absolute bottom-2 left-2 top-2 w-2 rounded-lg bg-yellow-300'></span>
                                <motion.button
                                    className='absolute right-2 top-2 text-[1.4rem] text-gray-700'
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IonIcon name='ellipsis-vertical' />
                                </motion.button>
                            </View>
                        </View>
                    </View>

                    <View className='mt-8'>
                        <h1 className='text-[1.2rem] font-bold text-gray-600'>Biểu đồ sức khỏe</h1>
                        <div
                            className='mt-8 h-[20rem] w-full overflow-hidden rounded-lg border border-blue-600 bg-white shadow-2xl'
                            ref={chartContainerRef}
                        ></div>
                    </View>
                    <View className='mt-8 flex flex-col gap-8'>
                        <View>
                            <h1 className='text-[1.2rem] font-bold text-gray-600'>Điều trị thị lực</h1>
                            <View>
                                <label className='mt-4 flex items-center gap-2 text-[0.9rem] font-bold text-gray-600'>
                                    <span>08/2023</span>
                                    <IonIcon name='chevron-forward-outline' />
                                </label>
                                <View className='mt-4 flex items-center justify-around rounded-lg bg-white p-4 text-[0.9rem] font-bold text-gray-700 shadow-base lg:max-w-[30rem]'>
                                    <button>20</button>
                                    <button>21</button>
                                    <button>22</button>
                                    <button className='text-blue-600'>23</button>
                                    <button>24</button>
                                    <button>25</button>
                                    <button>26</button>
                                </View>
                            </View>
                        </View>
                        <View className='flex flex-col gap-4 text-[0.9rem] '>
                            <h1 className='text-[1.2rem] font-bold text-gray-600'>Lời khuyên</h1>
                            <p>
                                Ăn uống lành mạnh: Ăn một chế độ ăn uống lành mạnh có nghĩa là ăn đủ các loại thực phẩm
                                như rau, củ, quả, thịt, cá, trứng và các loại ngũ cốc để cung cấp đầy đủ dinh dưỡng cho
                                cơ thể. Tránh ăn quá nhiều đồ ăn nhanh, thức ăn có đường, chất béo và muối.
                            </p>
                            <p>
                                Tập thể dục thường xuyên: Tập thể dục giúp tăng cường sức khỏe tim mạch, giảm căng thẳng
                                và cải thiện tâm trạng. Bạn có thể tập thể dục bằng cách chạy bộ, đi bộ, bơi lội, đạp xe
                                hoặc tham gia các lớp thể dục.
                            </p>
                        </View>
                    </View>
                </View>
            </View>
        </Section>
    )
}

export default Health
