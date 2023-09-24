const TEXT_COLOR = [
  'text-red-400',
  'text-yellow-300',
  'text-blue-400',
  'text-green-400',
  'text-gray-300'
] as const
const BORDER_COLOR = [
  'border-red-800',
  'border-blue-800',
  'border-green-800',
  'border-yellow-800',
  'border-gray-600'
] as const

export type colorText = (typeof TEXT_COLOR)[number]
export type colorBorder = (typeof BORDER_COLOR)[number]
