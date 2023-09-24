import React, { useRef } from 'react'
import { useSignUpSupabase } from '../hooks/useSignUpSupabase'

const ConfirmCode = ({ phone }: { phone: string }) => {
  const codeRef = useRef(null)
  const { handleCodeConfirm, errorCode } = useSignUpSupabase({})
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    handleCodeConfirm(codeRef, phone)
  }
  return (
    <div className="absolute inset-0 bg-slate-700/75 flex justify-center items-center">
      <div
        className="flex-col p-4 h-40 w-2/5
        justify-center items-center border border-red-400 rounded-xl bg-custom-black"
      >
        <form onSubmit={handleConfirm}>
          <div className="mb-2">
            <input
              type="tel"
              ref={codeRef}
              id="successCode"
              className="bg-green-50 border border-custom-dark-blue mb-2 text-custom-light-blue dark:text-custom-light-blue placeholder-custom-light-grey dark:placeholder-slate-400 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2 dark:bg-custom-black dark:border-custom-dark-blue"
              placeholder="ingresa tu numero de teléfono"
            />
            <label
              htmlFor="successCode"
              className="block mb-2 text-lg font-medium text-custom-black dark:text-custom-light-blue"
            >
              Ingresa el código que te llegara a tu celular
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium
                text-sm px-5 py-2.5 rounded dark:bg-custom-dark-blue dark:hover:bg-custom-light-blue"
            >
              Enviar
            </button>
          </div>
        </form>
        {errorCode && (<p>Algo ocurrió mal</p>)}
      </div>
    </div>
  )
}

export default ConfirmCode
