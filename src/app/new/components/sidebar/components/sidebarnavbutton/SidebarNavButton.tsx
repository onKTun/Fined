import Link from "next/link";
import styles from "./sidebarnavbutton.module.css";

interface Props {
  text: string;
  svg: JSX.Element;
  enabled: boolean;
  selected: boolean;
  link: string;
}

export default function SidebarNavButton({
  text,
  svg,
  enabled,
  selected,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`${styles.container} ${
        selected && enabled
          ? styles.selectedOpen
          : selected && !enabled
          ? styles.selectedClosed
          : {}
      } ${enabled ? styles.containerOpen : styles.containerClosed}`}
    >
      <div className={styles.icon}>{svg}</div>
      <label
        className={`${styles.label} ${enabled ? styles.open : styles.closed}`}
      >
        {text}
      </label>
    </Link>
  );
}
