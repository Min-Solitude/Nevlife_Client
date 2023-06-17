import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Search = () => {
    const [search, setSearch] = useState<string>('')
    const navigate = useNavigate()

    const handleSearch = (search: string) => () => {
        if (search) {
            navigate(`/search/${search}`)
            setSearch('')
        } else {
            toast.error('Vui lòng nhập từ khóa tìm kiếm')
        }
    }

    return (
        <div className='flex flex-col gap-4 md:flex-row'>
            <input
                type='text'
                placeholder='Tìm kiếm ảnh'
                className=' w-full  rounded-lg bg-gray-100 px-6 py-3 outline-primary md:w-96 '
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <motion.button
                className='mt-4 rounded-lg bg-gray-100 px-8 py-3 md:mt-0 '
                whileTap={{ scale: 0.9 }}
                onClick={handleSearch(search)}
            >
                Tìm kiếm
            </motion.button>
        </div>
    )
}

export default Search
