import Layout from '@/components/ui/Layout/Layout'
import {FC} from 'react'
import MainStatistics from './MainStatistics'
import MiddleStatistics from './middle-statistics/MiddleStatistics'

const Dashboard: FC = () => {
  return (
    <Layout title="Dashboard">
        <MainStatistics/>
        <MiddleStatistics/>
    </Layout>
  )
}

export default Dashboard
