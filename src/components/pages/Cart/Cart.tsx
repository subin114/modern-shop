// import "daisyui/dist/full.css";
import styles from "./Cart.module.scss";
import { IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantitySelector from "./../../ui/QuantitySelector/QuantitySelector";
import { cartItemState } from "../../../utils/atoms/cartItemState";
import { useRecoilState } from "recoil";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemState);

  const handleQuantityChange = (id: number, updateQuantity: number) => {
    const updateCartItemsCount = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: updateQuantity } : item
    );

    setCartItems(updateCartItemsCount);
  };

  const handleDelete = (id: number) => {
    const updateCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateCartItems);
  };

  return (
    <div className={styles.Cart}>
      <div className={styles.cartTop}>
        <h2>Cart List</h2>
      </div>
      <div className={styles.cartBottom}>
        <table>
          <thead>
            <tr>
              <th className={styles.num}>No.</th>
              <th className={styles.product}>Product</th>
              <th className={styles.title}>Title</th>
              <th className={styles.count}>Count</th>
              <th className={styles.price}>Price</th>
              <th className={styles.delete}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <th className={styles.num}>{idx + 1}</th>
                <td className={styles.product}>
                  <img src={item.image} alt={item.title} />
                </td>
                <td className={styles.title}>{item.title}</td>
                <td className={styles.count}>
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(updateQuantity) => handleQuantityChange(item.id, updateQuantity)}
                  />
                </td>
                <td className={styles.price}>{item.price}</td>
                <td className={styles.delete}>
                  <IconButton aria-label="delete" size="small" onClick={() => handleDelete(item.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.payment}>
          <div>
            <span>
              <b>Total :</b> $1230
            </span>
            <span>
              <b>Discount :</b> $0
            </span>
            <span>
              <b>Total Amount :</b> $0
            </span>
          </div>
          <Button variant="outlined" color="secondary" className={styles.cartBtn}>
            PROCEED TO CHEACKOUT
          </Button>
          <Button variant="outlined" color="secondary" className={styles.heartBtn}>
            CONTINUE SHOPPING
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
