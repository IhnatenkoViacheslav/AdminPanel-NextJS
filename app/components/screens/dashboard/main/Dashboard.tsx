import Layout from '@/components/ui/Layout/Layout'
import Heading from '@/components/ui/heading/Heading'
import {FC} from 'react'
import MainStatistics from './MainStatistics/MainStatistics'

const Dashboard: FC = () => {
  return (
    <Layout title="Dashboard">
        <MainStatistics/>
    </Layout>
  )
}

export default Dashboard
