import { FC } from 'react'

import styles from './Header.module.scss'
import Link from 'next/link'

const Logo: FC = () => {
  return (
    <Link href='/'>
      <div className={styles.logo}>
        Cinefy
      </div>
    </Link>
  )
}

export default Logo
