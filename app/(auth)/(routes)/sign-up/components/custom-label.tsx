type Props = {
  phone: string
  isError: string | null
  handleChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomLabel = ({ phone, isError, handleChangePhone }: Props) => {
  return (
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
        <p className="dark:text-red-400 dark:text-xs">{isError}</p>
      )}
    </div>
  )
}

export default CustomLabel
