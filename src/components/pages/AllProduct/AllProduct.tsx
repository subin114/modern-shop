import styles from "./AllProduct.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "./../../ui/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "./../../../../node_modules/@fortawesome/free-solid-svg-icons";

const AllProduct = () => {
  return (
    <div className={styles.AllProduct}>
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

export default AllProduct;
