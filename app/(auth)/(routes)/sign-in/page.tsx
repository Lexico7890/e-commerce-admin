'use client'
import { useRegister } from '@/app/hooks/useRegister'
import { useSignUpSupabase } from '../sign-up/hooks/useSignUpSupabase'
import AlertWarning from '@/app/components/alert-warning'
import InfoIcon from '@/public/icons/info-icon'
import ModalPassword from './components/modal-password'
import { useState } from 'react'

const SignIn = () => {
  const [isEnablePassword, setEnablePassword] = useState<boolean>(false)
  const { phone, setPhone, isError } = useRegister()
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value
    if (newPhone.startsWith(' ')) return
    setPhone(event.target.value)
  }
  const { handleValidatePhoneLogin, isAvailable } = useSignUpSupabase({
    phone
  })
  const handleSubmit = (event: any) => {
    event.preventDefault()
    handleValidatePhoneLogin(phone, setEnablePassword)
  }

  return (
    <section className="h-full flex flex-col justify-evenly items-center p-4">
      <div className='absolute bottom-0 right-4 flex justify-end items-center'>
      {!isAvailable && (
        <AlertWarning
          color={{ text: 'text-red-400', border: 'border-red-800' }}
          icon={<InfoIcon />}
          title="Lo sentimos!"
          description="Tu numero no aparece en nuestra base de datos, por favor valida la información"
        />
      )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 w-80">
          <label
            htmlFor="phone-input"
            className="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-white"
          >
            Numero de teléfono
          </label>
          <input
            type="tel"
            id="phone-input"
            value={phone}
            onChange={handleChangePhone}
            placeholder='Ingresa tu numero de teléfono'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {isError !== null && (
            <p className="dark:text-red-400 dark:text-xs mt-2">{isError}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={phone.length < 10 || isError !== null}
          className={`${
            phone.length < 10 || isError !== null
              ? 'bg-slate-500'
              : 'dark:bg-custom-dark-blue'
          }
          ${
            phone.length < 10 || isError !== null
              ? 'bg-slate-500'
              : 'dark:hover:bg-custom-light-blue'
          }
          text-white bg-custom-dark-blue focus:ring-1 focus:ring-blue-300 font-medium
          rounded-full text-sm px-5 py-2.5  focus:outline-none w-full`}
        >
          Continuar
        </button>
      </form>
      {isEnablePassword && <ModalPassword phone={phone} setEnablePassword={setEnablePassword}/>}
    </section>
  )
}

export default SignIn
