import { motion } from 'framer-motion'

import { useOutside } from '@/hooks/useOutside'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from './login-form-interface'
import { useAuth } from '@/hooks/useAuth'
import { FaRegUserCircle } from 'react-icons/fa'


import styles from './LoginForm.module.scss'
import Field from '@/components/ui/Field/Field'
import Button from '@/components/ui/Button/Button'
import { validEmail } from './login-auth.constants'
import UserAvatar from '@/components/ui/user-avatar/UserAvatar'
import { menuDropdown } from '@/utils/animation/fade'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'
import axios from 'axios'
import { IAuthResponse } from '@/shared/interfaces/user-interface'

const LoginForm: FC = () => {
  const { ref, setIsShow, isShow } = useOutside(false)
 
  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register,
    formState: { errors },
    handleSubmit, 
    reset
  } = useForm<IAuthFields>({
    mode: 'onChange'
  })

  const { user, setUser } = useAuth()


  const loginSync = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IAuthFields) => AuthService.login(data.email, data.password),
    onSuccess: (data) => {
      if (setUser) setUser(data.user)
        reset()
        setIsShow(false)
    }
  })
  const registerSync = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IAuthFields) => AuthService.register(data.email, data.password),
    onSuccess: (data) => {
      if (setUser) setUser(data.user)
        reset()
        setIsShow(false)
    }
  })
  
  const onSubmit: SubmitHandler<IAuthFields> = async (data) => {
    if (type === 'login') loginSync.mutate(data)
      else if (type === 'register') registerSync.mutate(data)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      {user ? 
        (<UserAvatar title='Go to admin panel' link='/dashboard' avatarPath={user.avatarPath || ''}/>)
       :
        (<button onClick={() => setIsShow(!isShow)} className={styles.button}>
          <FaRegUserCircle/>
        </button>)
      }
        <motion.div 
          initial={false}
          animate={isShow ? 'open' : 'closed'}
          variants={menuDropdown}
        >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: validEmail,
                message: 'Please enter a valid email address'
              }
            })}
            // @ts-ignore
            placeholder="Email"
            error={errors.email}
          ></Field>
          <Field
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Min length: 6 symbols'
              }
            })}
            // @ts-ignore
            placeholder="Password"
            error={errors.password}
            type={'password'}
          ></Field>
          <div className={styles.loginButton}>
            <Button onClick={() => setType('login')}>Login</Button>
          </div>
          <button
            className={styles.register}
            onClick={() => setType('register')}
          >Register</button>
        </form>
        </motion.div>
    </div>
  )
}

export default LoginForm
