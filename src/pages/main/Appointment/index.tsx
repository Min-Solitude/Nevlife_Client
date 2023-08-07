import { motion } from 'framer-motion'
import { useState } from 'react'

import View from 'components/shared/View'
import Section from 'motion/Section'
import ListAppointment from './components/ListAppointment'
import CreateAppointment from './components/CreateAppointment'
import { useAppSelector } from 'hooks/useRedux'
import history from 'redux/store/history'

const Appointment = () => {
    const [choose, setChoose] = useState(true)
    const roleDoctor = useAppSelector((state) => state.auth.user.role)

    if (roleDoctor !== 'doctor') {
        history.back()
    }

    return (
        <Section>
            <View className='mt-[6rem] flex min-h-screen flex-col gap-4 '>
                <h1 className='text-[1.24rem] font-[800] text-gray-900'>
                    Phòng khám
                    {choose ? ' - Danh sách' : ' - Thêm mới'}
                </h1>
                <View className='mt-4 flex justify-between lg:justify-start lg:gap-4'>
                    <motion.button
                        className={
                            choose
                                ? 'rounded-lg border border-blue-600 bg-blue-500 px-4 py-2 text-[0.9rem] text-white duration-200'
                                : 'rounded-lg border border-blue-600 px-4 py-2 text-[0.9rem] text-blue-600 duration-200'
                        }
                        onClick={() => setChoose(true)}
                        whileTap={{ scale: 0.9 }}
                    >
                        Danh sách
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={
                            choose
                                ? 'rounded-lg border border-blue-600 px-4 py-2 text-[0.9rem] text-blue-600 duration-200'
                                : 'rounded-lg border border-blue-600 bg-blue-500 px-4 py-2 text-[0.9rem] text-white duration-200'
                        }
                        onClick={() => setChoose(false)}
                    >
                        Thêm mới
                    </motion.button>
                </View>
                <View className='mt-4'>{choose ? <ListAppointment /> : <CreateAppointment />}</View>
            </View>
        </Section>
    )
}

export default Appointment
