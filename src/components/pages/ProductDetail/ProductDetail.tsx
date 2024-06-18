import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import { useRecoilValueLoadable } from "recoil";
import { fetchProductDetailSelector } from "../../../utils/atoms/productDetailState";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import QuantitySelector from "../../ui/QuantitySelector/QuantitySelector";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const productLoadable = useRecoilValueLoadable(fetchProductDetailSelector(id || ""));

  if (productLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productLoadable.state === "hasError") {
    return <div>Error loading product details</div>;
  }

  const product = productLoadable.contents;
  console.log("상품 상세 정보 하나씩", product);

  return (
    <div className={styles.ProductDetail}>
      <div className={styles.productImg}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h2>
          {product.title}
          <span className={styles.price}>${product.price}</span>
        </h2>

        <span className={styles.rating}>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
          {product.rating.rate}
        </span>
        <p>{product.description}</p>
        <QuantitySelector />
        <span className={styles.btnWrap}>
          <Button variant="outlined" color="secondary" className={styles.cartBtn}>
            ADD TO CART
          </Button>
          <Button variant="outlined" color="secondary" className={styles.heartBtn}>
            <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;
