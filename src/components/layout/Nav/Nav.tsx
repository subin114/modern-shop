import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/icons/heart.svg?react";
import ShoppingBagIcon from "../../../assets/icons/shopping-bag.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { currentCategoryState } from "../../../utils/atoms/currentCategoryState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import SearchForm from "../SearchForm/SearchForm";
import { Badge } from "@mui/material";
import { cartItemCountState } from "../../../utils/atoms/cartItemCountState";

const Nav = () => {
  const navigate = useNavigate();
  const setCategory = useSetRecoilState(currentCategoryState);
  const cartItemCount = useRecoilValue(cartItemCountState);

  return (
    <div className={styles.Nav}>
      <div className={styles.NavTop}>Welcome to Modern Shop!</div>
      <div className={styles.NavBottom}>
        <div className={styles.menus}>
          <Link to="/all" className={styles.menu} onClick={() => setCategory("All")}>
            All
          </Link>
          <Link to="/fashion" className={styles.menu} onClick={() => setCategory("Fashion")}>
            Fashion
          </Link>
          <Link to="jewelery" className={styles.menu} onClick={() => setCategory("Jewelery")}>
            Jewelery
          </Link>
          <Link to="/digital" className={styles.menu} onClick={() => setCategory("Digital")}>
            Digital
          </Link>
        </div>
        <h1 onClick={() => navigate("/")}>Modern Shop</h1>

        <div className={styles.icons}>
          <span className={styles.searchBar}>
            <SearchForm />
          </span>
          <HeartIcon className={styles.icon} />
          <ShoppingBagIcon className={styles.icon} onClick={() => navigate("/cart")} />
          <Badge badgeContent={cartItemCount} className={styles.badge}></Badge>
          <UserIcon className={styles.icon} />
          <span className={styles.mode}>
            <DarkMode />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
