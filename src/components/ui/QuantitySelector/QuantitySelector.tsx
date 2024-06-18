import styles from "./QuantitySelector.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { QuantitySelectorProps } from "../../../types/QuantitySelectorProps";

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ value, onChange }) => {
  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div className={styles.QuantitySelector}>
      <button onClick={handleDecrement} disabled={value === 1}>
        <FontAwesomeIcon icon={faMinus} className={styles.quantityIcon} />
      </button>
      <span>{value}</span>
      <button onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlus} className={styles.quantityIcon} />
      </button>
    </div>
  );
};

export default QuantitySelector;
