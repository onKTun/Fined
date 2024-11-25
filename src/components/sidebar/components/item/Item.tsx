import Link from "next/link";
import styles from "./item.module.css";
import Image from "next/image";
interface Props {
  text: string;
  svgObject: React.ReactNode;
  link: string;
  isOn: boolean;
}
export default function Item({ svgObject, text, link, isOn }: Props) {
  return (
    <Link href={link}>
      <button className={`${styles.wrapper} ${isOn ? styles.selected : {}}`}>
        <div className={styles.svgBox}></div>
        {svgObject}
        <span className={styles.text}>{text}</span>
      </button>
    </Link>
  );
}
