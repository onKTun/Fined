import styles from "./Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Checkbox from "src/components/checkbox/Checkbox";
import Button from "src/components/button/Button";
import Link from "next/link";

import  { login } from "src/app/account/login/actions";

//check if this is needed
interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

//check if this is needed
interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function LoginForm() {
  /*
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
 */

  return (
    <div className={styles.inputWrapper}>
      <form >
        <div className={styles.inputWrapper}>
          <p className={styles.subtitle}>Enter your username</p>
          <InputFieldPL type="email" name="email" id="email" />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.subtitle}>Enter your password</p>
          <InputFieldPL type="password" name="password"id="password" />
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
        
        <Button formAction={login} text="Sign in" type="submit" style={"blue"} ftSize={1}
                heightWidth={{}}/>
      </form>
    </div>
  );
}
