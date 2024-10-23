import Toggle from "src/components/toggle/Toggle";
import styles from "./settingitem.module.css";
interface Props {
  svgPath: string;
  title: string;
  desc: string;
  onToggle: () => void;
}

export default function SettingItem({ svgPath, title, desc, onToggle }: Props) {
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
        <Toggle onChange={onToggle} />
      </div>
    </div>
  );
}
