import styles from "./button.module.css";

interface Props {
  text: string;
  styleType: string;
}
export default function Button({ text, styleType }: Props) {
  return (
    <button
      className={`${styles.container} ${styles[styleType] || ""}`}
      type="button"
    >
      {text}
    </button>
  );
}
