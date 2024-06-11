import styles from "./MainProductCard.module.scss";
import { Product } from "../../../types/Product";

interface MainProductCardProps {
  product: Product;
}

const MainProductCard = ({ product }: MainProductCardProps) => {
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
