'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from 'utils/supabase/server'
//import type { FormEvent } from "react";

/*
//check if this is needed
interface SignInFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
  }
  
  //check if this is needed
  interface SignInForm extends HTMLFormElement {
    readonly elements: SignInFormElements;
  }
  */

export async function login(formData: FormData) {
  console.log("login function called")
  //console.log(formData.get('password') as string)
  const supabase = createClient()



  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  /*
  handle errors later
  if (error) {
    redirect('/error')
  }
    */

  if (error) {
    console.log("error")
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)


  if (error) {
    console.log("error in login")
  }
  /*
  handle errors later
  if (error) {
    redirect('/error')
  }
    */

  revalidatePath('/', 'layout')
  redirect('/')
}