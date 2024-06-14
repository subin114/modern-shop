import styles from "./All.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const All = () => {
  return (
    <div className={styles.All}>
      <div className={styles.category}>
        Category
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        All
      </div>
      <h2>All Products</h2>
      <Dropdown />
      <CategoryProduct />
    </div>
  );
};

export default All;
