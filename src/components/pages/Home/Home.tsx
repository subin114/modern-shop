import styles from "./Home.module.scss";
import Slider from "../../layout/Slider/Slider";
import MainProduct from "../../common/MainProduct/MainProduct";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Slider />
      <MainProduct />
    </div>
  );
};

export default Home;
