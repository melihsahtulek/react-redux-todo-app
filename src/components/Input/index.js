import styles from "components/Input/index.module.scss";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import clsx from "clsx";

const Input = ({ label, id, val, setTodo }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={clsx(styles.inputContainer, isFocused && styles.inputContainerActive)}>
        <input
          value={val}
          type="text"
          id={id}
          className={styles.txtInp}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          name="newTodo"
          onChange={(e) => setTodo(e.target.value)}
          autoFocus
        />
        {val.length > 0 && <VscClose className={clsx(styles.closeIcon, isFocused ? styles.iconActive : styles.iconNoActive)} onClick={() => setTodo("")} />}
      </div>
    </div>
  );
};

export default Input;
