import styles from "./Login.module.css";
import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Checkbox from "src/components/checkbox/Checkbox";
import Button from "src/components/button/Button";
import Link from "next/link";

import { login } from "src/app/account/login/actions";

export default function LoginForm() {
  return (
    <div className={styles.inputWrapper}>
      <form>
        <div className={styles.inputWrapper}>
          <p className={styles.subtitle}>Enter your username</p>
          <InputFieldPL type="email" name="email" id="email" />
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.subtitle}>Enter your password</p>
          <InputFieldPL type="password" name="password" id="password" />
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
        <Button
          formAction={login}
          text="Sign in"
          type="submit"
          style={"blue"}
          ftSize={1}
          heightWidth={{}}
        />
      </form>
    </div>
  );
}
