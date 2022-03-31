import styles from "../../styles/loadingAttributes/LinearLoading.module.css";
import { useState, useEffect } from "react";

export default function LinearLoading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    return (
      loading &&
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    );
  });
  return (
    <div className={styles.linear_loading}>
      <div className={styles.linear_gradiant}>
        {loading && <div className={styles.shadow}></div>}
      </div>
    </div>
  );
}
