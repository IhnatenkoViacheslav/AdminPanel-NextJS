import { FC } from 'react'
import Logo from './Logo'
import LoginForm from './login-form/LoginForm'

import styles from './Header.module.scss'
import Search from './search/Search'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Search/>
      <LoginForm/>
    </header>
  )
}

export default Header
