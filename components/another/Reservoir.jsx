import styles from "../../styles/ReservoirAttributes/Reservoir.module.css";

export default function Reservoir({ data }) {
  return (
    <div className={styles.reservoir}>
      {data ? data : "New Loading Is Comming ..."}
    </div>
  );
}
