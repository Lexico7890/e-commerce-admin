import { type colorBorder, type colorText } from '../types/services-auth'

type Props = Readonly<{
  color: {
    text: colorText
    border: colorBorder
  }
  icon: JSX.Element
  title: string
  description: string
}>

const AlertWarning = ({ color, description, icon, title }: Props) => {
  return (
    <div
      className={
        `flex w-3/4 items-center p-4 mb-4 text-sm text-red-800 border
        border-red-300 rounded-lg bg-red-50 dark:bg-gray-800
        dark:${color.text} dark:${color.border}`
      }
      role="alert"
    >
      {icon}
      <div className='ml-2'>
        <span className="font-medium">{title} </span>{description}
      </div>
    </div>
  )
}

export default AlertWarning
