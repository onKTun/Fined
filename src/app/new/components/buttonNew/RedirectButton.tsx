import { ReactElement } from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface Props {
  text: string;
  styleType: string;
  svg?: ReactElement;
  redirectURL: string;
}
export default function RedirectButton({
  text,
  styleType,
  svg,
  redirectURL,
}: Props) {
  return (
    <Link
      className={`${styles.container} ${styles[styleType] || ""}`}
      type="button"
      href={redirectURL}
    >
      {svg != null && svg}
      {text} 
    </Link>
  );
}
