import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Spinner;
