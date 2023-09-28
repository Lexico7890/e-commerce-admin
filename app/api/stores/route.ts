import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET () {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data: stores } = await supabase
    .from('stores')
    .select('*')
    .eq('created_by', session?.user?.id)
  console.log(stores)
  return NextResponse.json({ result: stores })
}
