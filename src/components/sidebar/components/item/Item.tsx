import Link from "next/link";
import styles from "./item.module.css";
interface Props {
  text: string;
  topvalue: number;
  leftvalue: number;
  src: string;
  link: string;
  isOn: boolean;
}
export default function Item({
  topvalue,
  leftvalue,
  src,
  text,
  link,
  isOn,
}: Props) {
  const style = {
    top: topvalue + "px",
    left: leftvalue + "px",
  };
  return (
    <Link href={link}>
      <button className={`${styles.wrapper} ${isOn ? styles.selected : {}}`}>
        <div className={styles.svgBox}></div>
        <img src={src} style={style} className={styles.svg}></img>
        <span className={styles.text}>{text}</span>
      </button>
    </Link>
  );
}
