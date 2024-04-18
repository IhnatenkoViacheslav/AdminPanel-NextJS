import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'
import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'

import styles from './Layout.module.scss'
import Sidebar from './sidebar/Sidebar'
import { useAuth } from '@/hooks/useAuth'

const Layout: FC<PropsWithChildren<IMeta>> = ({children, ...meta}) => {
  const {user} = useAuth()
  
  return (
    <>
      <Meta {...meta}/>
      <section className={user ? styles.wrapper : ''}>
        {user && <Sidebar/>}
        <div className={styles.content}>
          <Header/>
          <main className={styles.main}>{children}</main>
        </div>
      </section>
    </>
  )
}

export default Layout
