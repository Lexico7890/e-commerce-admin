import { useEffect, useRef, useState } from 'react'

export function useRegister () {
  const [phone, setPhone] = useState<string>('')
  const [firstLower, setFirstLower] = useState<boolean>(true)
  const [minimumCharacters, setMinimumCharacters] = useState<boolean>(true)
  const [newPassword, setNewPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [isError, setError] = useState<string | null>(null)
  const isFirst = useRef(true)

  /* const handleNotControl = (event) => {
    const { value1, value2} = Object.entries(new window.FormData(event.target))
  } */

  useEffect(() => {
    const pru = newPassword
    const regex = /^[0-9]+$/
    if (newPassword.length >= 8) {
      setMinimumCharacters(false)
    } else {
      setMinimumCharacters(true)
    }
    if (pru.charAt(0).toLowerCase() !== pru.charAt(0) && pru.length > 0) {
      setFirstLower(false)
      return
    } else {
      setFirstLower(true)
    }
    if (isFirst.current) {
      isFirst.current = phone === ''
      return
    }
    if (phone === '') {
      setError('Debe ingresarse un numero de teléfono')
      return
    }

    if (!regex.test(phone)) {
      setError('Debe ingresarse solo valores numéricos')
      return
    }

    if (phone.length < 10) {
      setError('El numero de teléfono debe tener al menos 10 dígitos')
      return
    }
    setError(null)
  }, [phone, newPassword, passwordConfirm])
  return {
    phone,
    setPhone,
    isError,
    newPassword,
    setNewPassword,
    passwordConfirm,
    setPasswordConfirm,
    firstLower,
    minimumCharacters
  }
}
