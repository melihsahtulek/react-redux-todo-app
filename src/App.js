import styles from "App.module.scss";
import Input from "components/Input/index";
import Button from "components/Button/index";
import { useState } from "react";
import clsx from "clsx";
import { VscCheck, VscChromeMinimize } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, updateStatus, removeTodo } from "redux/features/todos/index";

const App = () => {
  const [todo, setTodo] = useState("");
  const allTodos = useSelector((state) => state.myTodos.value);
  const dispatch = useDispatch();

  const addNewToDo = () => {
    let newID = allTodos.length > 0 ? allTodos[allTodos.length - 1].id + 1 : 0;
    dispatch(addNewTodo({ id: newID, todo: todo, checked: false }));
    setTodo("");
  };

  const check = (id) => {
    let index = 0;
    let filterResult = {
      ...allTodos.filter((todo, i) => {
        if (todo.id === id) {
          index = i;
          return todo;
        }
      })[0],
    };
    filterResult.checked = !filterResult.checked;
    dispatch(updateStatus({ filterResult, allTodos, index }));
  };

  const remove = (id) => {
    let index = 0;
    let filterResult = {
      ...allTodos.filter((todo, i) => {
        if (todo.id === id) {
          index = i;
        }
      })[0],
    };
    dispatch(removeTodo({ allTodos, index }));
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {allTodos.length > 0 && (
          <div className={styles.todosInfo}>
            <h4>found {allTodos.length} todo</h4>
            <button type="button">remove all</button>
          </div>
        )}
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
          {allTodos.map((t) => (
            <div className={styles.todo} key={t.id}>
              <p className={clsx(t.checked && styles.checked)}>{t.todo}</p>
              <button type="button" onClick={() => check(t.id)}>
                <VscCheck />
              </button>
              <button type="button" onClick={() => remove(t.id)}>
                <VscChromeMinimize />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
