import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "redux/features/todos/index";

const store = configureStore(
  {
    reducer: {
      myTodos: todosReducer,
    },
  },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
