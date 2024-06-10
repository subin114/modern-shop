import styles from "./MainProductCard.module.scss";
import { Product } from "../../types/Product";

const MainProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.MainProductCard}>
      <div className={styles.productImg}>
        <div className={styles.productImgHover}>
          <img src={product?.image} alt={product?.title} />
        </div>
      </div>
      <div className={styles.productInfo}>
        <span>{product?.title}</span>
        <span>${product?.price}</span>
      </div>
    </div>
  );
};

export default MainProductCard;
