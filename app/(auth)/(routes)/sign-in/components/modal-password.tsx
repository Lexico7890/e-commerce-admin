import { useRegister } from '@/app/hooks/useRegister'
import { useSignUpSupabase } from '../../sign-up/hooks/useSignUpSupabase'
import AlertWarning from '@/app/components/alert-warning'
import InfoIcon from '@/public/icons/info-icon'

type Props = {
  setEnablePassword: (value: boolean) => void
  phone: string
}

const ModalPassword = ({ phone, setEnablePassword }: Props) => {
  const { setNewPassword, newPassword } = useRegister()
  const { handleLogin, errorLogin } = useSignUpSupabase({})

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value
    if (password.startsWith(' ')) return
    setNewPassword(event.target.value)
  }

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed flex justify-center items-center top-0 bg-slate-300/30 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-custom-black">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => {
              setEnablePassword(false)
            }}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Ingresar a nuestra plataforma
            </h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                handleLogin(phone, newPassword, e)
              }}
            >
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tu contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => {
                    handleChangePassword(e)
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={newPassword.length < 4 }
                className={`${
                  newPassword.length < 4
                    ? 'bg-slate-500'
                    : 'dark:bg-custom-dark-blue'
                    } ${
                  newPassword.length < 4
                    ? 'bg-slate-500'
                    : 'dark:hover:bg-custom-light-blue'
                    } text-white bg-custom-dark-blue focus:ring-1 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5  focus:outline-none w-full`}
              >
                Ingresar a mi cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-4 flex justify-end items-center'>
      {errorLogin && (
        <AlertWarning
        color={{ text: 'text-red-400', border: 'border-red-800' }}
        icon={<InfoIcon />}
        title="Contraseña incorrecta!"
        description="Valide nuevamente la contraseña y vuelva a intentarlo"
      />
      )}
      </div>
    </div>
  )
}

export default ModalPassword
