import { ReactElement } from "react";
import styles from "./containerheader.module.css";

interface Props {
  text: string;
  svg: ReactElement;
}

export default function ContainerHeader({ text, svg }: Props) {
  return (
    <div className={styles.videoContainer_header}>
      <div className={styles.videoContainer_headerSVG}>{svg}</div>
      {text}
    </div>
  );
}
