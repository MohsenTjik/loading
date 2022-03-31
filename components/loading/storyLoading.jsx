import styles from "../../styles/loadingAttributes/StoryLoading.module.css";

export default function StoryLoading() {
  return (
    <img
      className={styles.loading_icon}
      src='/images/loading_icon.jpg'
      alt=''
    />
  );
}
