import { useState } from "react";
import styles from "./InputFieldPL.module.css";

interface Props {
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
}

function InputFieldPL({ type, name, id, placeholder }: Props) {
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
          className={styles.wrapper}
          id={id}
        />
        <button
          type="button"
          className={styles.button}
          onClick={togglePasswordVisibility}
        >
          <svg
            width="22"
            height="auto"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00016 3.08333C8.61016 3.08333 9.91683 4.39 9.91683 6C9.91683 6.37917 9.841 6.735 9.70683 7.0675L11.4102 8.77083C12.291 8.03583 12.9852 7.085 13.411 6C12.4018 3.43917 9.911 1.625 6.99433 1.625C6.17766 1.625 5.396 1.77083 4.67266 2.03333L5.93266 3.29333C6.26516 3.15917 6.621 3.08333 7.00016 3.08333ZM1.16683 1.49083L2.49683 2.82083L2.76516 3.08917C1.79683 3.84167 1.0385 4.845 0.583496 6C1.59266 8.56083 4.0835 10.375 7.00016 10.375C7.90433 10.375 8.76766 10.2 9.55516 9.885L9.80016 10.13L11.5093 11.8333L12.2502 11.0925L1.90766 0.75L1.16683 1.49083ZM4.39266 4.71667L5.29683 5.62083C5.26766 5.74333 5.25016 5.87167 5.25016 6C5.25016 6.96833 6.03183 7.75 7.00016 7.75C7.1285 7.75 7.25683 7.7325 7.37933 7.70333L8.2835 8.6075C7.89266 8.8 7.461 8.91667 7.00016 8.91667C5.39016 8.91667 4.0835 7.61 4.0835 6C4.0835 5.53917 4.20016 5.1075 4.39266 4.71667ZM6.90683 4.26167L8.74433 6.09917L8.756 6.00583C8.756 5.0375 7.97433 4.25583 7.006 4.25583L6.90683 4.26167Z"
              fill="#146BEC"
            />
          </svg>
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
          className={styles.wrapper}
        />
      </>
    );
  }
}

export default InputFieldPL;
