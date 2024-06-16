import styles from "./ProductCard.module.scss";
import { ProductCardProps } from "../../../types/ProductCardProps";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.ProductCard} onClick={() => navigate(`/product/${product.id}`)}>
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

export default ProductCard;
