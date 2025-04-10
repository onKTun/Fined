"use client";
import ProgressBar from "src/components/ui/progress/ProgressBar";
import styles from "./profile.module.css";
import profileData from "../../../../data/profile.json";
import { getUser } from "utils/supabase/client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Profile() {
  const [isUser, setIsUser] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    const isLoggedin = async () => {
      const user = await getUser();
      if (user) {
        setIsUser(true);
        if (user.email) {
          setName(user.email);
        }
      }
    };

    isLoggedin();
  });

  const displayName = () => {
    return name.length > 13 ? name.substring(0, 14) + "..." : name;
  };
  const eachLevel = 100;
  const level = Math.floor(profileData.xp / eachLevel);
  const xpUntilNext = 100 - (profileData.xp % eachLevel);

  if (isUser) {
    return (
      <>
        <div className={styles.topWrapper}>
          <div className={styles.leftWrapper}>
            <Image
              width={44}
              height={44}
              src={profileData.profilePicRel}
              alt={""}
              className={styles.borderRadius}
            ></Image>
            <div className={styles.infoWrapper}>
              <label className={styles.name}>{displayName()}</label>
              <label className={styles.role}>{profileData.role}</label>
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
            <label className={styles.leftText}>{profileData.xp}</label>
            <label className={styles.rightText}>
              {xpUntilNext} XP To Next Level
            </label>
          </div>
          <div className={styles.secondRow}>
            <ProgressBar progress={profileData.xp % eachLevel} />
          </div>
          <div className={styles.rowSpace}>
            <label className={styles.lvlText}>Lvl. {level}</label>
            <label className={styles.lvlText}>Lvl. {level + 1}</label>
          </div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}
