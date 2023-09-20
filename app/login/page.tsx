'use client'

import { useState } from 'react'
import AuthComponent from '../components/auth-component'

const Login = () => {
  const [createAccount, setCreateAccount] = useState<boolean>(false)
  return (
    <section className='h-screen'>
      {
        !createAccount && <AuthComponent />
      }
    </section>
  )
}

export default Login
