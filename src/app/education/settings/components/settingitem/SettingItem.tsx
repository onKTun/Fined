import Toggle from "src/components/toggle/Toggle";
import styles from "./settingitem.module.css";
interface Props {
  svgPath: string;
  title: string;
  desc: string;
}

export default function SettingItem({ svgPath, title, desc }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.title}>
          <img src={svgPath} />
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
