import Heading from '@/components/ui/heading/Heading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'
import {FC} from 'react'
import {AiOutlineEye} from 'react-icons/ai'

const MainStatistics: FC = () => {
  return (
    <div>
        <Heading>Main Statistics</Heading>
        <div className='grid grid-cols-4 gap-6 px-2'>
            <StatisticItem item={{
                name: 'Views',
                value: 20000000,
                Icon: AiOutlineEye
            }}/>
            <StatisticItem item={{
                name: 'Views',
                value: 20000000,
                Icon: AiOutlineEye
            }}/>
            <StatisticItem item={{
                name: 'Views',
                value: 20000000,
                Icon: AiOutlineEye
            }}/>
            <StatisticItem item={{
                name: 'Views',
                value: 20000000,
                Icon: AiOutlineEye
            }}/>
        </div>
    </div>
  )
}

export default MainStatistics
