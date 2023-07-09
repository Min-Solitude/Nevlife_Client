import View from 'components/shared/View'

interface ItemTableProps {
    td1?: string | JSX.Element
    td2?: string | JSX.Element
    td3?: string | JSX.Element
    td4?: string | JSX.Element
    td5?: string | JSX.Element
}

export const ItemTable = ({ td1, td2, td3, td4, td5 }: ItemTableProps) => {
    return (
        <View
            className='flex cursor-pointer items-center rounded-lg bg-gray-100 p-4 hover:bg-gray-200'
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
        >
            <div className='flex-1 text-center text-[0.9rem] font-bold text-gray-700'>{td1}</div>
            <div className='flex-1 text-center text-[0.9rem] font-bold text-gray-700'>{td2}</div>
            <div className='flex-1 text-center text-[0.9rem] font-bold text-gray-700'>{td3}</div>
            <div className='flex-1 text-center text-[0.9rem] font-bold text-gray-700'>{td4}</div>
            <div className='flex-1 text-center text-[0.9rem] font-bold text-gray-700'>{td5}</div>
        </View>
    )
}
