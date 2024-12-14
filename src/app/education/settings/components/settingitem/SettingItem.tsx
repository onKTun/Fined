import Toggle from "src/components/ui/toggle/Toggle";
import styles from "./settingitem.module.css";

interface Props {
  svgObject: React.ReactNode;
  title: string;
  desc: string;
}

export default function SettingItem({ svgObject, title, desc }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>
          {svgObject}
          {title}
        </div>
        <div className={styles.description}>{desc}</div>
      </div>
      <div className={styles.right}>
        <Toggle />
      </div>
    </div>
  );
}
