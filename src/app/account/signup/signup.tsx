import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Button from "src/components/button/Button";
import styles from "../login/Login.module.css";
import SecurityIndicator from "./components/securityIndicator/SecurityIndicator";
import AccountTypeSelector from "src/app/account/signup/components/typeSelection/TypeSelector";

import { signup } from "src/app/account/login/actions";
import { useState } from "react";
import { c } from "vite/dist/node/types.d-aGj9QkWt";

export default function SignUpForm() {
  const [accountType, setAccountType] = useState<AccountType>("student");

  async function handleSubmit(formData: FormData) {
    formData.append("account-type", accountType);
    signup(formData);
  }

  return (
    <form className={styles.inputWrapper}>
      <AccountTypeSelector
        selectedType={accountType}
        setSelectedType={setAccountType}
      />
      <div className={styles.inputWrapper}>
        <label htmlFor="first-name" className={styles.subtitle}>
          Enter your full name
        </label>
        <div className={styles.nameWrapper}>
          <InputFieldPL
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter your first name"
          />
          <InputFieldPL
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter your last name"
          />
        </div>

        <label htmlFor="email" className={styles.subtitle}>
          Enter your email
        </label>
        <InputFieldPL
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email or username"
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password" className={styles.subtitle}>
          Enter your password
        </label>
        <InputFieldPL
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <div className={styles.requirements}>
        <SecurityIndicator />
      </div>
      <Button
        formAction={handleSubmit}
        text="Sign up"
        type="submit"
        style={"blue"}
        ftSize={1}
        heightWidth={{}}
      />
    </form>
  );
}
