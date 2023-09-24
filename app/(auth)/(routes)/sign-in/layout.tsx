import ArrowLeftIcon from '@/public/icons/arrow-left-icon'
import Link from 'next/link'
import React from 'react'

const LayoutSignIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='border-b-2 p-4 flex'>
        <Link href='/sign-up'><span className='flex font-bold gap-4 absolute'>{<ArrowLeftIcon />} Volver</span></Link>
        <div className='w-full flex justify-center font-extrabold text-xl'>CAMISHOP</div>
      </div>
      <div className='h-96 '>
      {children}
      </div>
    </div>
  )
}

export default LayoutSignIn
