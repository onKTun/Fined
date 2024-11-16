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
  const [isFirstPanel, setFirstPanel] = useState(true);
  async function handleSubmit(formData: FormData) {
    formData.append("account-type", accountType);
    signup(formData);
  }
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const toggleFirstPanel = () => {
    if (isFirstPanel) {
      // Validate email and username before toggling to the next panel
      if (
        isEmailValid(formValues.email) &&
        isUsernameValid(formValues.username)
      ) {
        setFirstPanel(false); // Proceed to the next panel
      } else {
        alert("Please provide a valid email and username."); // Show error if validation fails
      }
    } else {
      setFirstPanel(true); // Go back to the first panel
    }
  };
  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isUsernameValid = (username: string): boolean => {
    return username.length >= 5 && username.length <= 14;
  };
  const isPasswordValid = (password: string) => {
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Check for special characters
    const hasNumber = /\d/.test(password); // Check for numbers
    const hasUppercase = /[A-Z]/.test(password); // Check for uppercase letters

    return (
      password.length > minLength && hasSpecialChar && hasNumber && hasUppercase
    );
  };

  return (
    <form className={styles.formContainer}>
      {/* This div is the content you see when page in initially loaded */}
      <div
        className={styles.input}
        style={isFirstPanel ? {} : { transform: "translateX(-40em)" }}
      >
        <AccountTypeSelector
          selectedType={accountType}
          setSelectedType={setAccountType}
        />
        <section className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.subtitle}>
              Enter your username
            </label>
            <InputFieldPL
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formValues.username}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.subtitle}>
              Enter your email
            </label>
            <InputFieldPL
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
        </section>
        <Button
          text="Next"
          type="button"
          style={"blue"}
          ftSize={1}
          heightWidth={{}}
          onClick={toggleFirstPanel}
        />
      </div>
      {/* This div is the content you see when the button is pressed to continue*/}
      <div
        className={styles.input}
        style={
          isFirstPanel
            ? { transform: "translate(40em)" }
            : { transform: "translateX(0)" }
        }
      >
        <section
          className={styles.inputContainer}
          style={{ paddingTop: "10px" }}
        >
          <button
            type="button"
            className={styles.backButton}
            onClick={toggleFirstPanel}
          >
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgba(0,0,0,0.4)"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              />
            </svg>
          </button>
          <div className={styles.nameWrapper}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputWrapper}>
                <label htmlFor="first-name" className={styles.subtitle}>
                  First Name
                </label>
                <InputFieldPL
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="last-name" className={styles.subtitle}>
                Last Name
              </label>
              <InputFieldPL
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
            </div>
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
          <div className={styles.inputWrapper}>
            <label htmlFor="password" className={styles.subtitle}>
              Confirm Password
            </label>
            <InputFieldPL
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </div>
        </section>
        <Button
          text="Sign up"
          style={"blue"}
          ftSize={1}
          heightWidth={{}}
          onClick={() => {
            if (isPasswordValid(formValues.password)) {
              alert("Password is valid! Proceeding with sign-up.");
            } else {
              alert(
                "Password is invalid. It must be at least 8 characters long, contain a special character, a number, and an uppercase letter."
              );
            }
          }}
        />
      </div>
    </form>
  );
}
