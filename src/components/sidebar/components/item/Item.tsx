import styles from "./item.module.css";
interface Props {
  text: string;
  topvalue: number;
  leftvalue: number;
  src: string;
}
export default function Item({ topvalue, leftvalue, src, text }: Props) {
  const style = {
    top: topvalue + "px",
    left: leftvalue + "px",
  };
  return (
    <button className={styles.wrapper}>
      <div className={styles.svgBox}></div>
      <img src={src} style={style} className={styles.svg}></img>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
