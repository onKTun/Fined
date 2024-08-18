import styles from "./Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Checkbox from "src/components/checkbox/Checkbox";
import Button from "src/components/button/Button";
import Link from "next/link";

import { signIn } from "aws-amplify/auth";
import type { FormEvent } from "react";

import { Amplify } from "aws-amplify";

import outputs from "amplify_outputs.json"; //if file is not here, run ampx sandbox
Amplify.configure(outputs); //configure amplify

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function LoginForm() {
  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault();
    const form = event.currentTarget;
    // ... validate inputs
    console.log("submitted");
    await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    });
  }

  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <p className={styles.subtitle}>Enter your username</p>
          <InputFieldPL type="email" id="email" />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.subtitle}>Enter your password</p>
          <InputFieldPL type="password" id="password" />
        </div>
        <div className={styles.extraContent}>
          <div className={styles.rememberMeWrapper}>
            <Checkbox />
            Remember me
          </div>
          <div className={styles.forgotPasswordText}>
            <Link href="/account/forgotpassword" className="highlightedText">
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button text="Sign in" type="submit" />
      </form>
    </div>
  );
}
