import { Link } from "react-router-dom";
// import heartIcon from "../../../assets/icons/heart.svg";
// import searchIcon from "../../../assets/icons/search.svg";
// import shoppingBagIcon from "../../../assets/icons/shopping-bag.svg";
// import userIcon from "../../../assets/icons/user.svg";
// import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
// import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
// import { ReactComponent as ShoppingBagIcon } from "../../../assets/icons/shopping-bag.svg";
// import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import SearchIcon from "../../../assets/icons/heart.svg?react";
import HeartIcon from "../../../assets/icons/heart.svg?react";
import ShoppingBagIcon from "../../../assets/icons/heart.svg?react";
import UserIcon from "../../../assets/icons/heart.svg?react";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Nav}>
      <div className={styles.NavTop}>Welcome to Modern Shop!</div>
      <div className={styles.NavBottom}>
        <div className={styles.menus}>
          <Link to="/all" className={styles.menu}>
            All
          </Link>
          <Link to="/fashion" className={styles.menu}>
            Fashion
          </Link>
          <Link to="jewelry" className={styles.menu}>
            Jewelry
          </Link>
          <Link to="/digital" className={styles.menu}>
            Digital
          </Link>
        </div>
        <h1 onClick={() => navigate("/")}>Modern Shop</h1>

        <div className={styles.icons}>
          <span className={styles.searchBar}>
            <SearchIcon className={styles.icon} />
            <input type="text" placeholder="search" />
          </span>
          {/* <img src={heartIcon} alt="heart" /> */}
          <HeartIcon className={styles.icon} />

          <ShoppingBagIcon className={styles.icon} />
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
