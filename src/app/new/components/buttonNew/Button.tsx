import { ReactElement } from "react";
import styles from "./button.module.css";

interface Props {
  text: string;
  styleType: string;
  svg?: ReactElement;
  onClick?: () => void;
}
export default function Button({ text, styleType, svg, onClick }: Props) {
  return (
    <button
      className={`${styles.container} ${styles[styleType] || ""}`}
      type="button"
      onClick={onClick}
    >
      {svg != null && svg}
      {text} 
    </button>
  );
}
