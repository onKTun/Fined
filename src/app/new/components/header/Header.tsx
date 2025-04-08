import LogoutSVG from "../../svg/sidebar/LogoutSVG";
import styles from "./header.module.css";
export default function Header() {
  return (
    <section className={styles.container}>
      <button type="button" className={styles.backToButton}>
        Back to Units
      </button>
    </section>
  );
}
