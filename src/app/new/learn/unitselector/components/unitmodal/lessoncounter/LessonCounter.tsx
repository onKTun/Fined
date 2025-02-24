import styles from "./lessoncounter.module.css";
interface Props {
  text: string;
}

export default function LessonCounter({ text }: Props) {
  return <div className={styles.container}>{text}</div>;
}
