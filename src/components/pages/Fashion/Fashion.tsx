import styles from "./Fashion.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Fashion = () => {
  return (
    <div className={styles.Fashion}>
      <div className={styles.category}>
        Category
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        Fashion
      </div>
      <h2>Fashion Products</h2>
      <Dropdown />
      <CategoryProduct />
    </div>
  );
};

export default Fashion;
