"use client";
import styles from "./authbutton.module.css";
interface Props {
  text: string;
  formAction?: (formData: FormData) => Promise<void>;
}
export default function AuthButton({ text, formAction }: Props) {
  return (
    <button type="submit" formAction={formAction} className={styles.button}>
      {text}
    </button>
  );
}
