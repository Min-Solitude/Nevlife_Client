import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'
import { useState } from 'react'

import View from 'components/shared/View'
import Read from 'components/shared/Read'

const Poster = () => {
    const [isCheckReadMore, setIsCheckReadMore] = useState(false)

    return (
        <View className='relative h-[50vh] w-full rounded-2xl bg-gray-100 shadow-md xl:h-[100vh]'>
            <img
                src='https://www.campsite.design/_next/image?url=%2Fimg%2Fhome%2Fapp-screenshot.png&w=1920&q=75'
                alt='nev'
                className='h-full w-full rounded-2xl object-cover'
            />
            <div className='absolute top-0 h-full w-full'>
                <motion.button
                    className='absolute bottom-4 right-4 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white shadow-xl'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCheckReadMore(!isCheckReadMore)}
                >
                    <IonIcon name='arrow-up' className='rotate-[-45deg]' />
                </motion.button>
            </div>
            {isCheckReadMore && (
                <Read
                    title='Diễn đàn chăm sóc sức khỏe Nevlife'
                    onClose={() => setIsCheckReadMore(false)}
                    image='https://www.campsite.design/_next/image?url=%2Fimg%2Fhome%2Fapp-screenshot.png&w=1920&q=75'
                    link='forum'
                >
                    <p>
                        Nevlife là một cộng đồng trực tuyến về chăm sóc sức khỏe, nơi mọi người có thể chia sẻ thông tin
                        và kinh nghiệm về chăm sóc sức khỏe của mình.
                    </p>
                    <p>
                        Nevlife cung cấp cho bạn một nền tảng để kết nối với những người có cùng quan tâm về sức khỏe và
                        chăm sóc sức khỏe. Bạn có thể tìm kiếm thông tin về các vấn đề sức khỏe, chia sẻ kinh nghiệm và
                        ý kiến của mình, và nhận được sự hỗ trợ của cộng đồng chăm sóc sức khỏe.
                    </p>
                    <p>
                        Nevlife cũng được thiết kế để giúp bạn tìm kiếm các bác sĩ và chuyên gia y tế địa phương, cũng
                        như nhận được các lời khuyên về chăm sóc sức khỏe từ các chuyên gia hàng đầu.
                    </p>
                    <p>
                        Nếu bạn quan tâm đến chăm sóc sức khỏe và muốn kết nối với những người có cùng quan tâm, hãy
                        đăng ký tham gia Nevlife ngay hôm nay. Cảm ơn bạn đã đọc và chúc bạn một ngày tốt lành!
                    </p>
                </Read>
            )}
        </View>
    )
}

export default Poster
