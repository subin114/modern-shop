import styles from "./Digital.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Digital = () => {
  return (
    <div className={styles.Digital}>
      <div className={styles.category}>
        Category
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        Digital
      </div>
      <h2>Digital Products</h2>
      <Dropdown />
      <CategoryProduct />
    </div>
  );
};

export default Digital;
