import { ReactElement } from "react";
import styles from "./button.module.css";

interface Props {
  text: string;
  styleType: string;
  svg?: ReactElement;
}
export default function Button({ text, styleType, svg }: Props) {
  return (
    <button
      className={`${styles.container} ${styles[styleType] || ""}`}
      type="button"
    >
      {svg != null && svg}
      {text} 
    </button>
  );
}
