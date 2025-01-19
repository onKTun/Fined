import Link from "next/link";
import styles from "./sidebarprofilebutton.module.css";

interface Props {
  username: string;
  email: string;
  svg: JSX.Element;
  enabled: boolean;
  selected: boolean;
}

export default function SidebarProfileButton({
  username,
  email,
  svg,
  enabled,
  selected,
}: Props) {
  const shrinkText = (text: string) => {
    const maxLength = 12;
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <Link
      href={""}
      className={`${styles.container} ${
        selected && enabled
          ? styles.selectedOpen
          : selected && !enabled
          ? styles.selectedClosed
          : {}
      } ${enabled ? styles.containerOpen : styles.containerClosed}`}
    >
      <div className={styles.icon}>{svg}</div>
      <div className={styles.textSection}>
        <label
          className={`${styles.username} ${
            enabled ? styles.open : styles.closed
          }`}
        >
          {shrinkText(username)}
        </label>
        <label
          className={`${styles.label} ${enabled ? styles.open : styles.closed}`}
        >
          {shrinkText(email)}
        </label>
      </div>
    </Link>
  );
}
