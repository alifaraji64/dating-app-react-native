import { supabase } from '@/lib/supabase'
import { Database } from '../lib/database.types'
import { useAuth } from '@/context/auth-context'
export const checkDetailsExist = async ({
  id
}: {
  id: string
}): Promise<any | Error> => {
    console.log(id);

  const { data, error } = await supabase
    .from('user')
    .select('*')
    .returns()
  console.log('data')

  console.log(data)

  if (error) {
    console.log(error)
    throw new Error('error checkDetailsExist: ' + error)
  }
  return data
}
