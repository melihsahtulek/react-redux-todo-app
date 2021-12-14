import styles from "components/Button/index.module.scss";
import { VscAdd } from "react-icons/vsc";

const Button = ({ event }) => {
  return (
    <button type="button" className={styles.button} onClick={event}>
      <VscAdd className={styles.addIcon} />
    </button>
  );
};

export default Button;
