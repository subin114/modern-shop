import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { fetchProductDetailSelector } from "../../../utils/atoms/productDetailState";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import QuantitySelector from "../../ui/QuantitySelector/QuantitySelector";
import { cartItemState } from "../../../utils/atoms/cartItemState";
import { CartItem } from "../../../types/cartItem";
import { useState } from "react";
import { cartItemCountState } from "../../../utils/atoms/cartItemCountState";
import { authState } from "../../../utils/atoms/authState";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productLoadable = useRecoilValueLoadable(fetchProductDetailSelector(id || ""));

  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  console.log("cartItems", cartItems);
  const [quantity, setQuantity] = useState(1);

  const setCartItemCount = useSetRecoilState(cartItemCountState);

  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  const addToCart = () => {
    if (!auth.isLogin) {
      alert("This service requires login.");
      navigate("/login");
      return;
    }

    const newItem: CartItem = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: quantity,
    };

    const isItemExists = cartItems.some((item) => item.id === product.id);

    if (isItemExists) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }

    setCartItemCount((prevCount) => prevCount + quantity);
  };

  if (productLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productLoadable.state === "hasError") {
    return <div>Error loading product details</div>;
  }

  const product = productLoadable.contents;

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
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <span className={styles.btnWrap}>
          <Button variant="outlined" color="secondary" className={styles.cartBtn} onClick={addToCart}>
            Add to cart
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
