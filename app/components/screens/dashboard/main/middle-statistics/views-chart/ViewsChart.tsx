import { FC } from "react";

import styles from './ViewsChart.module.scss'
import { IViewsByMonth } from "@/services/statistics/statistics.interface";

import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { options } from "./chart.options";

ChartJS.register(CategoryScale, BarElement, LinearScale, Tooltip)

const ViewsChart: FC<{views: IViewsByMonth[]}> = ({views}) => {
    return <div className={styles.chart}>
        <Bar className={styles.bars} options={options} data={{
            labels: views.map(item => item.month),
            datasets: [
                {
                    label: '',
                    data: views.map((item) => item.views),
                    backgroundColor: '#7a94fe',
                }
            ]
        }}/>
    </div>
}

export default ViewsChart