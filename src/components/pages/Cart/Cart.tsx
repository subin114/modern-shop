// import "daisyui/dist/full.css";
import styles from "./Cart.module.scss";
import { IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantitySelector from "./../../ui/QuantitySelector/QuantitySelector";
import { cartItemState } from "../../../utils/atoms/cartItemState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { cartItemCountState } from "../../../utils/atoms/cartItemCountState";
import { authState } from "../../../utils/atoms/authState";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const setCartItemCount = useSetRecoilState(cartItemCountState);
  const auth = useRecoilValue(authState);

  /** 로그인 상태 확인 */
  const handleProceedToCheckout = () => {
    if (!auth.isLogin) {
      alert("This service requires login.");
      navigate("/login");
      return;
    }
  };

  /** cart - quantity 값 변경 */
  const handleQuantityChange = (id: number, updateQuantity: number) => {
    const itemToUpdate = cartItems.find((item) => item.id === id);
    if (itemToUpdate) {
      /**
       * ※ 수량 변경 시, 그 차이만큼 cartItemCount를 업데이트 해줌
       * 수량 늘렸을 경우 : updateQuantity가 itemToUpdate.quantity보다 크기 때문에 차이값은 양수. 해당 값을 prevCount에 더해줌
       * 수량 줄였을 경우 : updateQuantity가 itemToUpdate.quantity보다 작기 때문에 차이값은 음수. 해당 값을 prevCount에서 빼줌
       */
      const quantityDifference = updateQuantity - itemToUpdate.quantity;
      setCartItemCount((prevCount) => prevCount + quantityDifference);

      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => (item.id === id ? { ...item, quantity: updateQuantity } : item))
      );
    }
  };

  /**cart - product 삭제 */
  const handleDelete = (id: number) => {
    const deletedItem = cartItems.find((item) => item.id === id);
    if (deletedItem) {
      setCartItemCount((prevCount) => prevCount - deletedItem.quantity);
    }

    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.Cart}>
      <div className={styles.cartTop}>
        <h2>Cart List</h2>
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th className={styles.num}>No.</th>
                <th className={styles.product}>Product</th>
                <th className={styles.title}>Title</th>
                <th className={styles.count}>Quantity</th>
                <th className={styles.price}>Price</th>
                <th className={styles.delete}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <th className={styles.num}>{idx + 1}</th>
                  <td className={styles.product}>
                    <span>
                      <img src={item.image} alt={item.title} />
                    </span>
                  </td>
                  <td className={styles.title}>{item.title}</td>
                  <td className={styles.count}>
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(updateQuantity) => handleQuantityChange(item.id, updateQuantity)}
                    />
                  </td>
                  <td className={styles.price}>${(item.price * item.quantity).toFixed(2)}</td>
                  <td className={styles.delete}>
                    <IconButton aria-label="delete" size="small" onClick={() => handleDelete(item.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.payment}>
          <div>
            <span>
              <b>Total :</b> ${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
            <span>
              <b>Discount :</b> $0
            </span>
            <span>
              <b>Total Amount :</b> ${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className={styles.btnWrap}>
            <Button variant="outlined" color="secondary" className={styles.cartBtn} onClick={handleProceedToCheckout}>
              Proceed to checkout
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={styles.shoppingBtn}
              onClick={() => navigate("/all")}
            >
              Continue shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
