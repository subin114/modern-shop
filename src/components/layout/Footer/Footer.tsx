import styles from "./Footer.module.scss";
import FacebookIcon from "../../../assets/icons/facebook.svg?react";
import TwitterIcon from "../../../assets/icons/twitter.svg?react";
import InstagramIcon from "../../../assets/icons/instagram.svg?react";
import YoutubeIcon from "../../../assets/icons/youtube.svg?react";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLeft}>
        <h2>Modern Shop</h2>
        <ul>
          <li>SHOP</li>
          <li>REVIEW</li>
          <li>ABOUT</li>
          <li>COMMUNITY</li>
        </ul>
        <span>Copyright @ 2024 Modern Shop. ALL RIGHTS RESERVED.</span>
      </div>
      <div className={styles.FooterRight}>
        <FacebookIcon className={styles.icon} />
        <TwitterIcon className={styles.icon} />
        <InstagramIcon className={styles.icon} />
        <YoutubeIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
