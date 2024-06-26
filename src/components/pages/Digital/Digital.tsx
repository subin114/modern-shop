import styles from "./Digital.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";

const Digital = () => {
  return (
    <div className={styles.Digital}>
      <div className={styles.categoryTopSection}>
        <BreadCrumbs main={"Category"} sub={"Digital"} />
        <span>
          <h2>Digital Products</h2>
          <Dropdown />
        </span>
      </div>
      <CategoryProduct />
      <Outlet />
    </div>
  );
};

export default Digital;
