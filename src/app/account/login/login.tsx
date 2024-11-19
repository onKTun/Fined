import styles from "./Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Checkbox from "src/components/checkbox/Checkbox";
import Button from "src/components/button/Button";
import Link from "next/link";

import { login } from "src/app/account/login/actions";

export default function LoginForm() {
  return (
    <div>
      <form className={styles.formContainer}>
        <div className={styles.inputWrapper}>
          <label htmlFor="username" className={styles.subtitle}>
            Enter your username or password
          </label>
          <InputFieldPL
            type="email"
            name="email"
            id="email"
            placeholder="Enter your username or email"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password" className={styles.subtitle}>
            Enter your password
          </label>
          <InputFieldPL
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
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
          <Button
            arrow={true}
            formAction={login}
            text="Sign in"
            type="submit"
            style={"blue"}
            ftSize={1}
            heightWidth={{}}
          />
        </div>
      </form>
    </div>
  );
}
