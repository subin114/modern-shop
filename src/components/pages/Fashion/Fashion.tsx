import styles from "./Fashion.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";

const Fashion = () => {
  return (
    <div className={styles.Fashion}>
      <div className={styles.categoryTopSection}>
        <BreadCrumbs main={"Category"} sub={"Fashion"} />
        <span>
          <h2>Fashion Products</h2>
          <Dropdown />
        </span>
      </div>
      <CategoryProduct />
      <Outlet />
    </div>
  );
};

export default Fashion;
