import RoutingButton from "src/components/ui/routingbutton/RoutingButton";
import styles from "../error.module.css";

export default function E404() {
  return (
    <section className={styles.container}>
      <div className={styles.container_top}>404</div>
      <div className={styles.container_middle}>
        Looks like something went wrong!
        <p className={styles.subtext}>
          There could be a various of ways this have happened. Maybe you typed
          the wrong url?
        </p>
      </div>
      <div className={styles.container_bottom}>
        <RoutingButton
          style={"blue"}
          text={"Home"}
          ftSize={1}
          additonalStyles={{ width: "12em" }}
          url={"/education/home"}
        />
      </div>
      <div className={styles.header}>Error: WS8239SW92jsq92SJ</div>
    </section>
  );
}
