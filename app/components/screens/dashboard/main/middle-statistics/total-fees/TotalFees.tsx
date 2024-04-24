import { FC } from 'react'

import styles from './TotalFees.module.scss'
import { MdOutlineQueryStats } from 'react-icons/md'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const TotalFees: FC<{fees: number}> = ({fees}) => {
  const worldsBiggestFees = 2138484377;
  
  return (
    <div className={styles.fees}>
       <ProgressBar percent={Math.round((fees * 100) / worldsBiggestFees)}/>
      <div className={styles.icon}>
        <MdOutlineQueryStats/>
      </div>
      <div className={styles.name}>
        Total Fees:
      </div>
      <div className={styles.count}>
        $<AnimatedCounter to={fees} />
      </div>
    </div>
  )
}

export default TotalFees
