'use client'

import { useRegister } from '@/app/hooks/useRegister'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SignUp = () => {
  const [endPointError, setEndPointError] = useState<any>(null)
  const {
    phone,
    setPhone,
    isError,
    newPassword,
    setNewPassword,
    passwordConfirm,
    setPasswordConfirm,
    firstLower,
    minimumCharacters
  } = useRegister()
  const supabase = createClientComponentClient()

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      phone: `+57${phone}`,
      password: newPassword
    })
    if (error !== null) {
      setEndPointError(error)
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value
    if (newPhone.startsWith(' ')) return
    setPhone(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    if (password.startsWith(' ')) return
    setNewPassword(event.target.value)
    console.log(event.target.value)
  }

  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirm = event.target.value
    if (confirm.startsWith(' ')) return
    setPasswordConfirm(event.target.value)
  }
  return (
    <section className="h-screen flex justify-center items-center py-14 px-36">
      {endPointError !== null && (
        <div className="flex flex-col p-4 justify-center items-center border border-red-400 rounded-xl bg-[#E85F5F80]">
          <span className="text-xl text-center">
            Algo salio mal, vuelve a intentarlo en un momento
          </span>
          <span className="text-xl text-center">Intenta de nuevo</span>
        </div>
      )}
      <article className="h-full w-full flex flex-col bg-custom-light-grey rounded-lg xl:p-10 sm:p-20">
        <form onSubmit={handleSubmit} className="h-full flex flex-col ">
          <div className="mb-2">
            <label
              htmlFor="successPhone"
              className="block mb-2 text-lg font-medium text-custom-black dark:text-custom-light-blue"
            >
              Numero de teléfono
            </label>
            <input
              type="tel"
              value={phone}
              id="successPhone"
              onChange={(e) => {
                handleChangePhone(e)
              }}
              className="bg-green-50 border border-custom-dark-blue mb-2 text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2 dark:bg-custom-black dark:border-custom-dark-blue"
              placeholder="ingresa tu numero de teléfono"
            />
            {isError !== null && (
              <p className="dark:text-custom-dark-yellow dark:text-xs">
                {isError}
              </p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-custom-black dark:text-custom-light-blue"
            >
              Contraseña
            </label>
            <input
              type="text"
              value={newPassword}
              id="password"
              onChange={(e) => {
                handleChangePassword(e)
              }}
              className="bg-green-50 border border-custom-dark-blue mb-2 text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2 dark:bg-custom-black dark:border-custom-dark-blue"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="passwordConfirm"
              className="block mb-2 text-lg font-medium text-custom-black dark:text-custom-light-blue"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={passwordConfirm}
              id="passwordConfirm"
              onChange={(e) => {
                handleChangeConfirm(e)
              }}
              className="bg-green-50 border border-custom-dark-blue mb-2 text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2 dark:bg-custom-black dark:border-custom-dark-blue"
              placeholder="ingresa tu numero de teléfono"
            />
          </div>
          <div className='h-full flex flex-col leading-loose items-center justify-center'>
            <p className='my-4'>Todas las caritas deben estar felices para continuar con el registro</p>
            <p>Primera letra en mayúscula {firstLower ? '😡' : '😀'}</p>
            <p>Mínimo 8 caracteres {minimumCharacters ? '😡' : '😀'}</p>
            <p>Confirmar contraseña {minimumCharacters ? '😡' : '😀'}</p>
          </div>
          <div className="flex flex-col h-full justify-end">
            <button
              disabled={firstLower || minimumCharacters}
              onClick={() => { console.log('clic') }}
              type="submit"
              className={`${firstLower || minimumCharacters ? 'bg-slate-500' : 'dark:bg-custom-dark-blue'} text-white bg-custom-dark-blue focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:hover:bg-custom-light-blue focus:outline-none`}
            >
              Continuar
            </button>
          </div>
        </form>
        <div className="my-2 flex items-center justify-center font-bold">
          <Link href="/sign-in">Login</Link>
        </div>
      </article>
      <article className="h-full w-full flex flex-col justify-center items-center">
        <Image
          src="/image/logoCamishop.png"
          alt="logo aplicación"
          width={150}
          height={150}
        />
        <span className="my-10 text-2xl text-center ">
          Regístrate con tu numero de teléfono
        </span>
      </article>
    </section>
  )
}

export default SignUp

/**
 * <div className="mb-4">
            <label
              htmlFor="successPassword"
              className="block mb-2 text-lg font-medium text-custom-black dark:text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="successPassword"
              name='password'
              className="bg-green-50 border border-custom-dark-blue text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-custom-dark-grey dark:border-custom-dark-blue"
              placeholder="ingresa tu contraseña"
            />
          </div>
          {passwordValidate && (
            <div className="mb-4">
              <p className="text-red-800 dark:text-red-400">
                Contraseña incorrecta
              </p>
            </div>
          )}
          <div>
            <label
              htmlFor="success"
              className="block mb-2 text-lg font-medium text-custom-black dark:text-white"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="success"
              name='passwordConfirm'
              className="bg-green-50 border border-custom-dark-blue text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-custom-dark-grey dark:border-custom-dark-blue"
              placeholder="ingresa tu contraseña"
            />
          </div>
          {passwordValidate && (
            <div className="mb-4">
              <p className="text-red-800 dark:text-red-400">
                Valide las contraseñas
              </p>
            </div>
          )}
 */
