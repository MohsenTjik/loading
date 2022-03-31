import { useEffect, useState } from "react";
import styles from "../../styles/loadingAttributes/TypeWriter.module.css";

export default function TypeWriter(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    return (
      loading &&
      setTimeout(() => {
        setLoading(false);
      }, 6000)
    );
  });

  return (
    <div style={{ ...props }} className={styles.type_writer}>
      {loading && (
        <>
          <span className={styles.one}>L</span>
          <span className={styles.two}>o</span>
          <span className={styles.three}>a</span>
          <span className={styles.four}>d</span>
          <span className={styles.five}>i</span>
          <span className={styles.six}>n</span>
          <span className={styles.seven}>g</span>
          <span className={styles.eight}>.</span>
          <span className={styles.nine}>.</span>
          <span className={styles.ten}>.</span>
        </>
      )}
    </div>
  );
}
