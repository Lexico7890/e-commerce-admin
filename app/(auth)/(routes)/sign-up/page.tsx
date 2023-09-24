'use client'

import { useRegister } from '@/app/hooks/useRegister'
import Image from 'next/image'
import Link from 'next/link'
import { useSignUpSupabase } from './hooks/useSignUpSupabase'
import ConfirmCode from './confirm-code/page'
import AlertWarning from '@/app/components/alert-warning'
import InfoIcon from '@/public/icons/info-icon'
import CustomLabel from './components/custom-label'

const SignUp = () => {
  const {
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
  } = useRegister()
  const {
    sendCode,
    endPointError,
    handleValidatePhone,
    isAvailable
  } = useSignUpSupabase({
    phone,
    newPassword
  })
  const handleSubmit = (event: any) => {
    event.preventDefault()
    handleValidatePhone(phone)
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
  }

  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirm = event.target.value
    if (confirm.startsWith(' ')) return
    setPasswordConfirm(event.target.value)
  }
  return (
    <section className="h-screen grid grid-cols-5 py-14 xl:px-36 lg:px-24 md:px-14">
      {sendCode && <ConfirmCode phone={phone}/>}
      <article
        className="col-start-1 col-end-3 h-full w-full flex flex-col
        bg-custom-light-grey rounded-lg p-6"
      >
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col min-w-min"
        >
          <CustomLabel phone={phone} isError={isError} handleChangePhone={handleChangePhone} />
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
          <div className="h-full flex flex-col leading-loose items-center justify-center">
            <p className="my-4 text-center">
              Todas las caritas deben estar felices para continuar con el
              registro
            </p>
            <p>Primera letra en mayúscula {firstLower ? '😡' : '😀'}</p>
            <p>Mínimo 8 caracteres {minimumCharacters ? '😡' : '😀'}</p>
            <p>Confirmar contraseña {isEqual ? '😡' : '😀'}</p>
          </div>
          <div className="flex flex-col h-full justify-end">
            <button
              disabled={
                firstLower || minimumCharacters || isEqual || isError !== null
              }
              type="submit"
              className={`${
                firstLower || minimumCharacters || isEqual || isError !== null
                  ? 'bg-slate-500'
                  : 'dark:bg-custom-dark-blue'
              }
                ${
                  firstLower || minimumCharacters || isEqual || isError !== null
                    ? 'bg-slate-500'
                    : 'dark:hover:bg-custom-light-blue'
                }
                text-white bg-custom-dark-blue focus:ring-1 focus:ring-blue-300 font-medium
                rounded-lg text-sm px-5 py-2.5  focus:outline-none`}
            >
              Continuar
            </button>
          </div>
        </form>
        <div className="my-2 flex items-center justify-center font-bold">
          <Link href="/sign-in">Ya tengo cuenta</Link>
        </div>
      </article>
      <article className="col-start-3 col-end-6 h-full w-full flex flex-col justify-center items-center">
        <Image
          src="/image/logoCamishop.png"
          alt="logo aplicación"
          width={300}
          height={300}
        />
        <span className="my-10 text-2xl text-center ">
          Regístrate con tu numero de teléfono
        </span>
        {endPointError && (
          <AlertWarning
            color={{ text: 'text-red-400', border: 'border-red-800' }}
            icon={<InfoIcon />}
            title='Ocurrió un error!'
            description='por favor valide
            que los datos ingresados son correctos'
          />
        )}
        {!isAvailable && <AlertWarning
            color={{ text: 'text-red-400', border: 'border-red-800' }}
            icon={<InfoIcon />}
            title='Upssssss!'
            description='Al parecer no tienes permisos para el registro, ponte en contacto con el administrador'
          />}
      </article>
    </section>
  )
}

export default SignUp
