import { useState } from "react";
import styles from "./inputfieldauth.module.css";
import EyeSVG from "../../svg/login/EyeSVG";

interface Props {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFieldAuth({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (type === "password") {
    return (
      <div className={styles.container}>
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          className={styles.textInput}
          id={id}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className={styles.button}
          onClick={togglePasswordVisibility}
        >
          <EyeSVG />
        </button>
      </div>
    );
  } else {
    return (
      <>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={styles.textInput}
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
}
