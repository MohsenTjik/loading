import styles from "../../styles/loadingAttributes/LoadingSize.module.css";

export default function LoadingSize(props) {
  return (
    <div className={styles.loading_size}>
      <h2 style={{ ...props }}>Please Wait ...</h2>
    </div>
  );
}
