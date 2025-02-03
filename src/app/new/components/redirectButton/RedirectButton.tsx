import Link from "next/link";
import styles from "../buttonNew/button.module.css";

interface Props {
  text: string;
  redirectURL: string;
  styleType: string;
}

export default function RedirectButton({
  redirectURL,
  text,
  styleType,
}: Props) {
  return (
    <Link
      href={redirectURL}
      className={`${styles.container} ${styles[styleType] || ""}`}
    >
      {text}
    </Link>
  );
}
