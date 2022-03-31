import styles from "../../styles/loadingAttributes/TransparentLoading.module.css";

export default function TransparentLoading() {
  return (
    <div className={styles.transparent_loading}>
      <img src='/images/loadings.png' alt='' />
    </div>
  );
}
