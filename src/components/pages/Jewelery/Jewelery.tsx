import styles from "./Jewelery.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Jewelery = () => {
  return (
    <div className={styles.Jewelery}>
      <div className={styles.category}>
        Category
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        Jewelery
      </div>
      <h2>Jewelery Products</h2>
      <Dropdown />
      <CategoryProduct />
    </div>
  );
};

export default Jewelery;
