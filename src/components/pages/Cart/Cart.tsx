// import "daisyui/dist/full.css";
import styles from "./Cart.module.scss";
import { IconButton, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantitySelector from "./../../ui/QuantitySelector/QuantitySelector";
import { cartItemState } from "../../../utils/atoms/cartItemState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { cartItemCountState } from "../../../utils/atoms/cartItemCountState";
import { authState } from "../../../utils/atoms/authState";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const setCartItemCount = useSetRecoilState(cartItemCountState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const auth = useRecoilValue(authState);

  /** 로그인 상태 확인 */
  const handleProceedToCheckout = () => {
    if (!auth.isLogin) {
      alert("This service requires login.");
      navigate("/login");
      return;
    } else {
      handleOpen();
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

  /** modal - cancel */
  const handleCancel = () => {
    handleClose();
  };

  /** modal - institute */
  const handleInstitute = () => {
    setCartItems([]);
    setCartItemCount(0);
    handleClose();
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
            <div className={styles.modalBtnWrap}>
              <Button variant="outlined" color="secondary" className={styles.cartBtn} onClick={handleProceedToCheckout}>
                Proceed to checkout
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Would you like to purchase the product?
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 1, fontFamily: "'Nunito Sans', sans-serif" }}>
                    All products in your shopping cart will be deleted.
                  </Typography>
                  <Stack spacing={2} direction="row" sx={{ justifyContent: "flex-end", mt: 3 }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "12.5px", borderRadius: "2px" }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        boxShadow: "none",
                        fontSize: "12.5px",
                        borderRadius: "2px",
                      }}
                      onClick={handleInstitute}
                    >
                      Institute
                    </Button>
                  </Stack>
                </Box>
              </Modal>
            </div>
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
