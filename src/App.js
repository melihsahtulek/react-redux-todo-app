import styles from "App.module.scss";
import Input from "components/Input/index";
import Button from "components/Button/index";
import { useState } from "react";
import clsx from "clsx";
import { VscCheck, VscChromeMinimize } from "react-icons/vsc";

const App = () => {
  const [todo, setTodo] = useState("");

  const addNewToDo = () => {
    setTodo("");
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.todosInfo}>
          <h4>found 5 todo</h4>
          <button type="button">remove all</button>
        </div>
        <div className={styles.header}>
          <h1>to-do app react&redux</h1>
        </div>
        <div className={styles.newTodoContainer}>
          <div className={styles.newInpContainer}>
            <Input label="add new to-do" id="toDoLbl" val={todo} setTodo={setTodo} />
          </div>
          <div className={clsx(styles.addBtnContainer, todo.length > 0 && styles.showAddBtn)}>
            <Button event={addNewToDo} />
          </div>
        </div>

        <div className={styles.todos}>
          <div className={styles.todo}>
            <p>hey , i am first todo</p>
            <button type="button">
              <VscCheck />
            </button>
            <button type="button">
              <VscChromeMinimize />
            </button>
          </div>
        </div>

        <div className={styles.todos}>
          <div className={styles.todo}>
            <p className={styles.checked}>hey , i am first todo</p>
            <button type="button">
              <VscCheck />
            </button>
            <button type="button">
              <VscChromeMinimize />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
