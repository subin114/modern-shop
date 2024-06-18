import styles from "./QuantitySelector.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const QuantitySelector = () => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.QuantitySelector}>
      <button onClick={handleDecrement} disabled={count === 1}>
        <FontAwesomeIcon icon={faMinus} className={styles.quantityIcon} />
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlus} className={styles.quantityIcon} />
      </button>
    </div>
  );
};

export default QuantitySelector;
