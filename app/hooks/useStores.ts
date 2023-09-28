import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

type Props = {
  userId?: number
}

export function useStoreSupabase ({ userId }: Props) {
  const [nameStore, setName] = useState<string>('')
  const supabase = createClientComponentClient()

  const handleInsertNewStore = async (event: any) => {
    event.preventDefault()
    const { error } = await supabase.from('stores').insert({ name: nameStore, created_by: userId })
    if (error !== null) {
      console.log(error)
    }
  }

  return { nameStore, setName, handleInsertNewStore }
}
