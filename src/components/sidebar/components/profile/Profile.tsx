import ProgressBar from "src/components/progress/ProgressBar";
import styles from "./profile.module.css";
interface Props {
  name: string;
  role: string;
  profile: string;
  xp: number;
}

export default function Profile({ name, role, profile, xp }: Props) {
  const level = () => {
    xp / 100;
  };
  const xpUntilNext = () => {
    xp % 100;
  };
  return (
    <>
      <div className={styles.topWrapper}>
        <div className={styles.leftWrapper}>
          <img width={44} height={44} src={profile}></img>
          <div className={styles.infoWrapper}>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
        <button type="button" className={styles.topButton}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </button>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.rowSpace}>
          <p className={styles.leftText}>{xp}</p>
          <p className={styles.rightText}>55 XP To Next Level</p>
        </div>
        <div className={styles.secondRow}>
          <ProgressBar progress={20} />
        </div>
        <div className={styles.rowSpace}>
          <p className={styles.lvlText}>Lvl. 19</p>
          <p className={styles.lvlText}>Lvl. 20</p>
        </div>
      </div>
    </>
  );
}
