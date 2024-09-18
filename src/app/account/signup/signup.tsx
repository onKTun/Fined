import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Button from "src/components/button/Button";
import styles from "../login/Login.module.css";
import SecurityIndicator from "./components/securityIndicator/SecurityIndicator";
import TypeSelector from "src/app/account/signup/components/typeSelection/TypeSelector";

import { signup } from "src/app/account/login/actions";

export default function SignUpForm() {

  return (
    <form>
      <TypeSelector />
      <div className={styles.inputWrapper}>
        <p className={styles.subtitle}>Enter your email</p>
        <InputFieldPL type="email" id="email" name="email" />
      </div>
      <div className={styles.inputWrapper}>
        <p className={styles.subtitle}>Enter your password</p>
        <InputFieldPL type="password" id="password" name="password" />
      </div>
      <div className={styles.requirements}>
        <SecurityIndicator />
      </div>
      <Button
        formAction={signup}
        text="Sign up"
        type="submit"
        style={"blue"}
        ftSize={1}
        heightWidth={{}}
      />
    </form>
  );
}
