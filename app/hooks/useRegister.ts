import { useEffect, useRef, useState } from 'react'

export function useRegister () {
  const [phone, setPhone] = useState<string>('')
  const [firstLower, setFirstLower] = useState<boolean>(true)
  const [isEqual, setIsEqual] = useState<boolean>(true)
  const [minimumCharacters, setMinimumCharacters] = useState<boolean>(true)
  const [newPassword, setNewPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [isError, setError] = useState<string | null>(null)
  const isFirst = useRef(true)

  /* const handleNotControl = (event) => {
    const { value1, value2} = Object.entries(new window.FormData(event.target))
  } */

  useEffect(() => {
    const regex = /^[0-9]+$/
    if (newPassword.length >= 8) {
      setMinimumCharacters(false)
    } else {
      setMinimumCharacters(true)
    }
    if (newPassword.charAt(0).toLowerCase() !== newPassword.charAt(0) && newPassword.length > 0) {
      setFirstLower(false)
    } else {
      setFirstLower(true)
    }
    if (passwordConfirm === newPassword && newPassword.length > 0) {
      setIsEqual(false)
    } else {
      setIsEqual(true)
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
    minimumCharacters,
    isEqual
  }
}
