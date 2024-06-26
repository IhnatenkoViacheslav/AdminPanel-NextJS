import { createContext, useEffect, useState } from "react";
import { IContext, TypeUserState } from "./auth-interface";

export const AuthContext = createContext({} as IContext)

import { FC, PropsWithChildren } from 'react'
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AuthService } from "@/services/auth/auth.service";

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  const [user, setUser] = useState<TypeUserState>(null)

  const { pathname } = useRouter()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if(accessToken) {
      const user = JSON.parse(localStorage.getItem('user') || '')

      setUser(user)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (!accessToken && !user) {
      AuthService.logout()
      setUser(null)
    }
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider value={{ user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider



