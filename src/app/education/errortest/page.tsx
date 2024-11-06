import styles from "./error.module.css";
import E404 from "./errorcomponents/E404";

export default function page() {
  return (
    <section className={styles.body}>
      <E404 />
    </section>
  );
}
