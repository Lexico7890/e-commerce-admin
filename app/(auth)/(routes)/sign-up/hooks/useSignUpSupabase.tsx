'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { type MutableRefObject, useState } from 'react'

type Props = Readonly<{
  phone?: string
  newPassword?: string
}>

export function useSignUpSupabase ({ phone = '', newPassword = '' }: Props) {
  const [endPointError, setEndPointError] = useState<boolean>(false)
  const [isAvailable, setAvailable] = useState<boolean>(true)
  const [sendCode, setSendCode] = useState<boolean>(false)
  const [errorCode, setErrorCode] = useState<boolean>(false)
  const [errorLogin, setErrorLogin] = useState<boolean>(false)
  const router = useRouter()

  const supabase = createClientComponentClient()

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      phone: `+57${phone}`,
      password: newPassword
    })
    if (error !== null) {
      setEndPointError(true)
    } else {
      setSendCode(true)
    }
  }

  const handleCodeConfirm = async (
    code: MutableRefObject<null>,
    number: string
  ) => {
    // @ts-expect-error ignorar value
    const value = code.current?.value
    const { data, error } = await supabase.auth.verifyOtp({
      phone: `+57${number}`,
      token: value,
      type: 'sms'
    })
    if (error !== null) {
      setErrorCode(true)
    } else {
      router.push('/')
      console.log(data)
    }
  }

  const handleValidatePhone = async (phoneNumber: string) => {
    const { data: phone } = await supabase
      .from('auth-numbers')
      .select()
      .or(`number.eq.${phoneNumber}`)
    if (phone?.length === 0) {
      setAvailable(false)
    } else {
      setAvailable(true)
      await handleRegister()
    }
  }

  const handleValidatePhoneLogin = async (phoneNumber: string, setEnablePassword: (value: boolean) => void) => {
    const { data: phone } = await supabase
      .from('auth-numbers')
      .select()
      .or(`number.eq.${phoneNumber}`)
    if (phone?.length === 0) {
      setAvailable(false)
    } else {
      setAvailable(true)
      setEnablePassword(true)
    }
  }

  const handleLogin = async (phoneNumber: string, passwordParam: string, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('entro')
    const { error, data } = await supabase.auth.signInWithPassword({
      phone: `+57${phoneNumber}`,
      password: passwordParam
    })
    if (error !== null) {
      setErrorLogin(true)
    } else {
      router.push('/')
      console.log(data)
    }
  }

  return {
    handleRegister,
    sendCode,
    handleCodeConfirm,
    endPointError,
    handleValidatePhone,
    isAvailable,
    errorCode,
    handleValidatePhoneLogin,
    setAvailable,
    handleLogin,
    errorLogin
  }
}
