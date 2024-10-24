import ProgressBar from "src/components/progress/ProgressBar";
import styles from "./profile.module.css";
import profileData from "../../../../data/profile.json";

export default function Profile() {
  const eachLevel = 100;
  const level = Math.floor(profileData.xp / eachLevel);
  const xpUntilNext = 100 - (profileData.xp % eachLevel);
  return (
    <>
      <div className={styles.topWrapper}>
        <div className={styles.leftWrapper}>
          <img
            width={44}
            height={44}
            src={profileData.profilePicRel}
            style={{ borderRadius: "5px" }}
          ></img>
          <div className={styles.infoWrapper}>
            <p className={styles.name}>{profileData.name}</p>
            <p className={styles.role}>{profileData.role}</p>
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
          <p className={styles.leftText}>{profileData.xp}</p>
          <p className={styles.rightText}>{xpUntilNext} XP To Next Level</p>
        </div>
        <div className={styles.secondRow}>
          <ProgressBar progress={profileData.xp % eachLevel} />
        </div>
        <div className={styles.rowSpace}>
          <p className={styles.lvlText}>Lvl. {level}</p>
          <p className={styles.lvlText}>Lvl. {level + 1}</p>
        </div>
      </div>
    </>
  );
}
