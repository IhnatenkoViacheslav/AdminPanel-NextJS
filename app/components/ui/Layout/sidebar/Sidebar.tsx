import { FC } from 'react'

import cn from 'classnames'

import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { menu } from './menu.data'

const Sidebar: FC = () => {
  const { asPath } = useRouter()

  return (
    <aside className={styles.sidebar}>
      <Link href='/'>
        <div className={styles.logo}>
          C
        </div>
      </Link>

      <nav className={styles.menu}>
        <ul>
          {menu.map(item => (
            <li 
              key={item.link}
              className={cn(styles.item, {
                [styles.active]: item.link === asPath
              })}
            >
              <Link href={item.link} >
                <div >
                  <item.Icon/>
                </div>
              </Link>
            </li>    
            ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
