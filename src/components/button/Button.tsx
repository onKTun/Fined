import styles from "./button.module.css";
interface Props {
  style: string;
  text: string;
  ftSize: number;
  heightWidth: React.CSSProperties;
  onClick: () => void;
}
export default function Button({
  style,
  text,
  onClick,
  ftSize = 1,
  heightWidth = { width: "fit-content", height: "fit-content" },
}: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.wrapper} ${styles[style]}`}
      style={{
        fontSize: `${ftSize}rem`,
        width: heightWidth.width,
        height: heightWidth.height,
      }}
    >
      {text}
    </button>
  );
}
