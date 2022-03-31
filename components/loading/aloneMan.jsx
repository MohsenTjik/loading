import styles from "../../styles/loadingAttributes/AloneMan.module.css";

export default function AloneMan() {
  return (
    <div className={styles.alone_man}>
      <div className={styles.head}></div>
      <div className={styles.body}></div>
      {/* <div className={styles.firsthand}></div>
      <div className={styles.secoundhand}></div> */}
      <div className={styles.firstleg}></div>
      <div className={styles.secoundleg}></div>
      <div className={styles.shadow}></div>
    </div>
  );
}
