import styles from "./Jewelery.module.scss";
import CategoryProduct from "../../common/CategoryProduct/CategoryProduct";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";

const Jewelery = () => {
  return (
    <div className={styles.Jewelery}>
      <div className={styles.categoryTopSection}>
        <BreadCrumbs main={"Category"} sub={"Jewelery"} />
        <span>
          <h2>Jewelery Products</h2>
          <Dropdown />
        </span>
      </div>
      <CategoryProduct />
      <Outlet />
    </div>
  );
};

export default Jewelery;
