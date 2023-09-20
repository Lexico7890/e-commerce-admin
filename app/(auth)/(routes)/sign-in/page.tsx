'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const SignIn = () => {
  const [isError, setError] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const supabase = createClientComponentClient()

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      phone: `+57${phoneNumber}`,
      password
    })
    if (error !== null) {
      setError(true)
    } else {
      redirect('/')
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }
  return (
    <section className="h-full flex flex-col justify-center items-center p-4">
      {isError && (
        <div className="flex flex-col p-4 justify-center items-center border border-red-400 rounded-xl bg-[#E85F5F80]">
          <span className="text-xl text-center">
            El numero ingresado o contraseña no son validos
          </span>
          <span className="text-xl text-center">Intenta de nuevo</span>
        </div>
      )}
      <span className="my-10 text-2xl text-center">
        Continua con tu numero de teléfono
      </span>
      <div className="h-96 w-80 flex flex-col justify-evenly bg-custom-light-grey rounded-lg xl:p-4 sm:p-2">
        <div className="mb-6">
          <label
            htmlFor="success"
            className="block mb-2 text-lg font-medium text-custom-black dark:text-white"
          >
            Numero de teléfono
          </label>
          <input
            type="tel"
            id="success"
            required
            onChange={(e) => { setPhoneNumber(e.target.value) }}
            className="bg-green-50 border border-custom-dark-blue text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-custom-dark-grey dark:border-custom-dark-blue"
            placeholder="ingresa tu numero de teléfono"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="success"
            className="block mb-2 text-lg font-medium text-custom-black dark:text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="success"
            required
            onChange={(e) => { setPassword(e.target.value) }}
            className="bg-green-50 border border-custom-dark-blue text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-custom-dark-grey dark:border-custom-dark-blue"
            placeholder="ingresa tu contraseña"
          />
        </div>
        <div>
          <Link href='/sign-up'>Registrarse</Link>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleLogin}
        >
          Continuar
        </button>
      </div>
    </section>
  )
}

export default SignIn
