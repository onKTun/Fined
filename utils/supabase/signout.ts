'use server'
import { createClient } from 'utils/supabase/server'

//call this function to sign out the user
//TODO create signout button component that implements this to call from anywhere on site
export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    console.log(error)
  }
  