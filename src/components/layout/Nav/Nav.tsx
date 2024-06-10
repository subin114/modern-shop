import { Link } from "react-router-dom";
import heartIcon from "../../../assets/icons/heart.svg";
import searchIcon from "../../../assets/icons/search.svg";
import shoppingBagIcon from "../../../assets/icons/shopping-bag.svg";
import userIcon from "../../../assets/icons/user.svg";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";

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
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder="search" />
          </span>
          <img src={heartIcon} alt="heart" />
          <img src={shoppingBagIcon} alt="person" />
          <img src={userIcon} alt="person" />

          <img src={userIcon} alt="moon" className={styles.mode} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
