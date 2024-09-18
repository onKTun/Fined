'use server'
import { createClient } from 'utils/supabase/server'

export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    console.log(error)
  }
  