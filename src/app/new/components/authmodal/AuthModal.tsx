import ErrorXSVG from "../../svg/login/ErrorXSVG";
import styles from "./authmodal.module.css";
interface Props {
  message: string;
  isShown: boolean;
}

export default function AuthModal({ message, isShown }: Props) {
  return (
    <div
      className={`${styles.modalContent} ${
        isShown ? styles.shown : styles.hidden
      }`}
    >
      <ErrorXSVG />
      <label className={styles.paragraph}>{message}</label>
    </div>
  );
}
