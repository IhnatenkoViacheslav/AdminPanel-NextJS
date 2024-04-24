import Loader from '@/components/ui/Loader'
import Heading from '@/components/ui/heading/Heading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'
import { StatisticsService } from '@/services/statistics/statistics.service'
import { useQuery } from '@tanstack/react-query'
import {FC} from 'react'

const MainStatistics: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['get main statistics'],
        queryFn: () => StatisticsService.getMain()

    })


  return (
    <div>
        <Heading>Main Statistics</Heading>

        {isLoading ? <Loader/> : data?.length ? 
        <div className='grid grid-cols-4 gap-8 px-2'>
            {data.map(item => (
                <StatisticItem item={item} key={item.id}/>
            ))}
        </div> : <div>Error loading data</div>
        }
    </div>
  )
}

export default MainStatistics
