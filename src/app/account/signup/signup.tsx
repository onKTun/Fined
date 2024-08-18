import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Button from "src/components/button/Button";
import styles from "../login/Login.module.css";
import SecurityIndicator from "./components/securityIndicator/SecurityIndicator";
import TypeSelector from "src/app/account/signup/components/typeSelection/TypeSelector";

import { signUp } from "aws-amplify/auth"
import type { FormEvent } from "react"

import { Amplify } from "aws-amplify";

import outputs from "amplify_outputs.json"; //if file is not here, run ampx sandbox
Amplify.configure(outputs) //configure amplify

interface SignUpFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
  }
  
interface SignUpForm extends HTMLFormElement {
    readonly elements: SignUpFormElements
  }

export default function SignUpForm(){

    async function handleSubmit(event: FormEvent<SignUpForm>) {
        event.preventDefault()
        const form = event.currentTarget
        // ... validate inputs
        console.log("submitted");
        const {nextStep} = await signUp({
          username: form.elements.email.value,
          password: form.elements.password.value,
        })
        
      }

    return(
    <form onSubmit={handleSubmit}>
            <TypeSelector />
          <div className={styles.inputWrapper}>
            <p className={styles.subtitle}>Enter your email</p>
            <InputFieldPL type="email" id="email" />
          </div>
          <div className={styles.inputWrapper}>
            <p className={styles.subtitle}>Enter your password</p>
            <InputFieldPL type="password" id="password" />
          </div>
          <div className={styles.requirements}>
            <SecurityIndicator />
          </div>
          <Button text="Sign up" type="submit" />
          </form>)
}