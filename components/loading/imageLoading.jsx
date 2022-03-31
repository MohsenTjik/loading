import styles from "../../styles/loadingAttributes/imageLoading.module.css";
import { useState, useEffect } from "react";

export default function LoadingImage(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
    return (
      loading &&
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    );
  });
  return (
    <div className={styles.parent_image}>
      <img
        className={loading ? styles.image : styles.image_default}
        src={props.src ? props.src : "/images/lion.jpg"}
        alt={props.alt ? props.alt : "image"}
      />
    </div>
  );
}
