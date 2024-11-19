import InputFieldPL from "src/components/preloginInputfield/InputFieldPL";
import Button from "src/components/button/Button";
import styles from "../login/Login.module.css";
import AccountTypeSelector from "src/app/account/signup/components/typeSelection/TypeSelector";
import { signup } from "src/app/account/login/actions";
import { useRef, useState } from "react";
import Modal from "src/components/preloginmodal/Modal";
import {
  isPasswordValid,
  isEmailValid,
  isUsernameValid,
} from "utils/verification";

export default function SignUpForm() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [accountType, setAccountType] = useState<AccountType>("student");
  const [isFirstPanel, setFirstPanel] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(formData: FormData) {
    if (isFirstPanel) {
      toggleFirstPanel();
      return;
    }
    // Check if password is valid
    const passwordValid = isPasswordValid(formData.get("password") as string);
    const passwordsMatch =
      (formData.get("password") as string) ===
      (formData.get("confirmPassword") as string);

    let errorMessage = "";

    // Password validation
    if (!passwordValid) {
      if (formValues.password.length < 8) {
        errorMessage += "Password must be at least 8 characters long.\n";
      }
      if (!/[A-Z]/.test(formValues.password)) {
        errorMessage +=
          "Password must contain at least one uppercase letter.\n";
      }
      if (!/\d/.test(formValues.password)) {
        errorMessage += "Password must contain at least one number.\n";
      }
      if (!/[!_.-]/.test(formValues.password)) {
        errorMessage +=
          "Password must contain at least one special character (! , _ , . , -).\n";
      }
    }

    // Confirm password validation
    if (!passwordsMatch) {
      errorMessage += "Passwords do not match.\n";
    }

    // If there are any errors, show modal with the message
    if (errorMessage) {
      setModalMessage(errorMessage);
      setShowModal(true);

      // Clear the previous timeout if it's still running
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Automatically close modal after 8 seconds
      timeoutRef.current = setTimeout(() => setShowModal(false), 8000);
    } else {
      formData.append("account-type", accountType);
      const error = await signup(formData);
      if (error) {
        setModalMessage(error.message);
        setShowModal(true);

        // Clear the previous timeout if it's still running
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Automatically close modal after 8 seconds
        timeoutRef.current = setTimeout(() => setShowModal(false), 8000);
      }
    }
  }

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
      const validEmail = isEmailValid(formValues.email);
      const validUsername = isUsernameValid(formValues.username);
      if (validEmail && validUsername) {
        setFirstPanel(false); // Proceed to the next panel
      } else {
        let errorMessage = "";
        if (!validEmail) {
          errorMessage += "Invalid email format.\n";
        }
        if (!validUsername) {
          errorMessage += "Username must be 5-14 characters long.";
        }
        setModalMessage(errorMessage);
        setShowModal(true);

        // Automatically close the modal after 8 seconds
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Automatically close modal after 8 seconds
        timeoutRef.current = setTimeout(() => setShowModal(false), 8000);
      }
    } else {
      setFirstPanel(true); // Go back to the first panel
    }
  };

  return (
    <>
      <Modal message={modalMessage} isShown={showModal} />
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
            arrow={true}
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
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter your password"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </section>
          <Button
            arrow={true}
            text="Sign up"
            style={"blue"}
            type="submit"
            ftSize={1}
            heightWidth={{}}
            formAction={handleSubmit}
          />
        </div>
      </form>
    </>
  );
}
