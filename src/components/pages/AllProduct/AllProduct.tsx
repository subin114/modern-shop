import styles from "./AllProduct.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";

const AllProduct = () => {
  return (
    <div className={styles.AllProduct}>
      <CategoryProduct />
    </div>
  );
};

export default AllProduct;
