import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ModalProvider from './providers/modal-provider'
import { redirect } from 'next/navigation'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  if (session === null) {
    redirect('sign-up')
  }
  return <ModalProvider />
}
