import styles from "../../styles/loadingAttributes/ToBeContinuedVTwo.module.css";
import { useState, useEffect } from "react";

export default function ToBeContinuedVTwo() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    return (
      loading &&
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    );
  });
  return (
    <div className={styles.to_be_continued_v_two}>
      <div className={loading ? styles.circle_1 : styles.circle}></div>
      <div className={loading ? styles.circle_2 : styles.circle}></div>
      <div className={loading ? styles.circle_3 : styles.circle}></div>
      <div className={loading ? styles.circle_4 : styles.circle}></div>
      <div className={loading ? styles.circle_5 : styles.circle}></div>
    </div>
  );
}
