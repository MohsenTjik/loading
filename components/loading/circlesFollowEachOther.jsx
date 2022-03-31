import styles from "../../styles/loadingAttributes/circlesFollowEachOthe.module.css";
import { useState, useEffect } from "react";

export default function CirclesFollowEachOthe() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 0);
    return (
      loading &&
      setTimeout(() => {
        setLoading(false);
      }, 7000)
    );
  });
  return (
    <>
      {loading && (
        <div className={styles.parent_position}>
          <div className={styles.circle_1}></div>
          <div className={styles.circle_2}></div>
          <div className={styles.circle_3}></div>
          <div className={styles.circle_4}></div>
          <div className={styles.circle_5}></div>
        </div>
      )}
    </>
  );
}
