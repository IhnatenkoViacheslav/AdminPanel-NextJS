import Loader from '@/components/ui/Loader'
import Heading from '@/components/ui/heading/Heading'
import { StatisticsService } from '@/services/statistics/statistics.service'
import { useQuery } from '@tanstack/react-query'
import {FC} from 'react'
import TotalFees from './total-fees/TotalFees'
import ViewsChart from './views-chart/ViewsChart'

import styles from './MiddleStatistics.module.scss'

const MiddleStatistics: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['get middle statistics'],
        queryFn: () => StatisticsService.getMiddle()

    })


  return (
    <div>
        <Heading>Deep information</Heading>
        {isLoading ? <Loader/> : data ? (
        <div className={styles.wrapper}>
            <TotalFees fees={data.totalFees}/>
            <ViewsChart views={data.viewsByMonth}/>
        </div>) : (
            <div>Error loading data</div>
            )
        }
    </div>
  )
}

export default MiddleStatistics
