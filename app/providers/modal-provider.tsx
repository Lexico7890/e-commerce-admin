'use client'
import React, { useEffect, useState } from 'react'
import ModalCreateStore from '../components/modal-generic'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ModalCreateStore />
    </>
  )
}

export default ModalProvider
