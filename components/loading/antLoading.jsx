import { LoadingOutlined } from "@ant-design/icons";
import styles from "../../styles/loadingAttributes/AntLoading.module.css";
export default {
  LodingTowLine: ({}) => {
    return (
      <div className={styles.relative}>
        <div className={styles.parent_loading}></div>
        <LoadingOutlined className={styles.ant_loading} />
        <div className={styles.child_loading}></div>
      </div>
    );
  },
  loadingOnLine: ({}) => {
    return (
      <div className={styles.relative}>
        <div className={styles.parent_loading_on_line}></div>
        <LoadingOutlined className={styles.ant_loading} />
      </div>
    );
  },
  loadingUnderLine: ({}) => {
    return (
      <div className={styles.relative}>
        <div className={styles.parent_loading_under_line}></div>
        <LoadingOutlined className={styles.ant_loading} />
      </div>
    );
  },
  LoadingAboveLine: ({}) => {
    return (
      <div className={styles.relative}>
        <div className={styles.parent_loading_above_line}></div>
        <LoadingOutlined className={styles.ant_loading} />
      </div>
    );
  },
};
