import styles from "../../styles/loadingAttributes/FullCircle.module.css";

export default function FullCircle() {
  return (
    <div className={styles.circle_full}>
      <div className={styles.step_one_container}>
        <div id={styles.halfclip}>
          <div className={styles.step_one_halfcircle} id={styles.clipped}></div>
        </div>
        <div className={styles.step_one_halfcircle} id={styles.fixed}></div>
      </div>
    </div>
  );
}
