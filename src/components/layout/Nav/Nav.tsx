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
import { authState } from "../../../utils/atoms/authState";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import { signOut } from "firebase/auth";
import { authService } from "../../../firebase/firebase";

const Nav = () => {
  const navigate = useNavigate();
  const setCategory = useSetRecoilState(currentCategoryState);
  const cartItemCount = useRecoilValue(cartItemCountState);
  const { isLogin } = useRecoilValue(authState);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (category: string) => {
    setCategory(category);
    setIsMobileMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut(authService);
      alert("로그아웃 되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error("Error during sign out: ", error);
    }
  };

  return (
    <div className={styles.Nav}>
      <div className={styles.NavTop}>Welcome to Modern Shop!</div>

      {/* mobile */}
      <div className={styles.NavBottomMobile}>
        <MenuIcon className={styles.menuIcon} onClick={toggleMobileMenu} />
        <h1 onClick={() => navigate("/")}>Modern Shop</h1>
        <span className={styles.mode}>
          <DarkMode />
        </span>
      </div>

      {isMobileMenuOpen && (
        <div
          className={clsx(styles.mobileOverlay, { [styles.open]: isMobileMenuOpen })}
          onClick={handleOverlayClick}
        ></div>
      )}

      {isMobileMenuOpen && (
        <div className={clsx(styles.mobileMenu, { [styles.open]: isMobileMenuOpen })}>
          <div className={styles.closeIconWrap}>
            <CloseIcon className={styles.closeIcon} onClick={toggleMobileMenu} />
          </div>
          <Link to="/all" className={styles.menu} onClick={() => handleLinkClick("All")}>
            All
          </Link>
          <Link to="/fashion" className={styles.menu} onClick={() => handleLinkClick("Fashion")}>
            Fashion
          </Link>
          <Link to="jewelery" className={styles.menu} onClick={() => handleLinkClick("Jewelery")}>
            Jewelery
          </Link>
          <Link to="/digital" className={styles.menu} onClick={() => handleLinkClick("Digital")}>
            Digital
          </Link>
          <span className={styles.searchBarMobile}>
            <SearchForm />
          </span>
          <span className={styles.icons}>
            <HeartIcon className={styles.icon} />
            <ShoppingBagIcon className={styles.icon} onClick={() => navigate("/cart")} />
            <Badge badgeContent={cartItemCount} className={styles.badge}></Badge>
            <UserIcon className={styles.icon} onClick={isLogin ? handleSignOut : () => navigate("/login")} />
          </span>
        </div>
      )}

      {/* pc */}
      <div className={styles.NavBottom}>
        <div className={styles.menus}>
          <Link to="/all" className={styles.menu} onClick={() => handleLinkClick("All")}>
            All
          </Link>
          <Link to="/fashion" className={styles.menu} onClick={() => handleLinkClick("Fashion")}>
            Fashion
          </Link>
          <Link to="jewelery" className={styles.menu} onClick={() => handleLinkClick("Jewelery")}>
            Jewelery
          </Link>
          <Link to="/digital" className={styles.menu} onClick={() => handleLinkClick("Digital")}>
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
          <UserIcon className={styles.icon} onClick={isLogin ? handleSignOut : () => navigate("/login")} />

          <span className={styles.mode}>
            <DarkMode />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
