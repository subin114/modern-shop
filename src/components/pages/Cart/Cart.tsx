// import "daisyui/dist/full.css";
import styles from "./Cart.module.scss";
import { IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantitySelector from "./../../ui/QuantitySelector/QuantitySelector";

const Cart = () => {
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
            <tr>
              <th className={styles.num}>1</th>
              <td className={styles.product}>Cy Ganderton</td>
              <td className={styles.title}>Quality Control Specialist</td>
              <td className={styles.count}>
                <QuantitySelector />
              </td>
              <td className={styles.price}>Blue</td>
              <td className={styles.delete}>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </td>
            </tr>
            <tr>
              <th className={styles.num}>1</th>
              <td className={styles.product}>Cy Ganderton</td>
              <td className={styles.title}>Quality Control Specialist</td>
              <td className={styles.count}>
                <QuantitySelector />
              </td>
              <td className={styles.price}>Blue</td>
              <td className={styles.delete}>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </td>
            </tr>
            <tr>
              <th className={styles.num}>1</th>
              <td className={styles.product}>Cy Ganderton</td>
              <td className={styles.title}>Quality Control Specialist</td>
              <td className={styles.count}>
                <QuantitySelector />
              </td>
              <td className={styles.price}>Blue</td>
              <td className={styles.delete}>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </td>
            </tr>
            <tr>
              <th className={styles.num}>1</th>
              <td className={styles.product}>Cy Ganderton</td>
              <td className={styles.title}>Quality Control Specialist</td>
              <td className={styles.count}>
                <QuantitySelector />
              </td>
              <td className={styles.price}>Blue</td>
              <td className={styles.delete}>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </td>
            </tr>
            <tr>
              <th className={styles.num}>1</th>
              <td className={styles.product}>Cy Ganderton</td>
              <td className={styles.title}>Quality Control Specialist</td>
              <td className={styles.count}>
                <QuantitySelector />
              </td>
              <td className={styles.price}>Blue</td>
              <td className={styles.delete}>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </td>
            </tr>
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
