import { type Store } from '@/app/types/common-types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { type NextRequest, NextResponse } from 'next/server'

// const supabase = createClientComponentClient()
const supabase = createServerComponentClient({ cookies })

async function getStoresUser (session: string): Promise<Store[]> {
  const { data: stores } = await supabase
    .from('stores')
    .select('*')
    .eq('created_by', session)
  if (stores !== null) {
    return stores
  } else {
    return []
  }
}

export async function GET (request: NextRequest, response: NextResponse) {
  let stores: Store[] = []
  const {
    data: { session }
  } = await supabase.auth.getSession()
  if (session === null) {
    redirect('/sign-up')
  }
  stores = await getStoresUser(session?.user?.id)
  // console.log('stores ', stores[0].id)
  stores?.length > 0
    ? NextResponse.redirect('/')
    : NextResponse.redirect('/')
}
