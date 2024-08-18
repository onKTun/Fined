import Link from "next/link";
import styles from "./button.module.css";
interface Props {
  style: string;
  text: string;
  ftSize: number;
  additonalStyles: React.CSSProperties;
  url: string;
}
export default function RoutingButton({
  style,
  text,
  url,
  ftSize = 1,
  additonalStyles = {},
}: Props) {
  return (
    <Link
      href={url}
      className={`${styles.wrapper} ${styles[style]}`}
      style={{
        fontSize: `${ftSize}rem`,
        ...additonalStyles,
      }}
    >
      {text}
    </Link>
  );
}
