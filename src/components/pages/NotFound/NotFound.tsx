import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <strong>404</strong>
      <span>PAGE NOT FOUND</span>
      <p>The Page you are looking for doesn't exist or an other occurrred.</p>
    </div>
  );
};

export default NotFound;
