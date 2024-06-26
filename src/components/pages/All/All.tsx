import styles from "./All.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";

const All = () => {
  return (
    <div className={styles.All}>
      <div className={styles.categoryTopSection}>
        <BreadCrumbs main={"Category"} sub={"All"} />
        <span>
          <h2>All Products</h2>
          <Dropdown />
        </span>
      </div>
      <CategoryProduct />
      <Outlet />
    </div>
  );
};

export default All;
