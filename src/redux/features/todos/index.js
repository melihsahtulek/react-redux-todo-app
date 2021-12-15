import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "myTodos",
  initialState: {
    value: [
      {
        id: 0,
        todo: "first todo",
        checked: true,
      },
    ],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.value.push(action.payload);
    },
    updateStatus: (state, action) => {
      let { filterResult, allTodos, index } = action.payload;
      let newArray = [...allTodos];
      newArray[index] = filterResult;
      state.value = newArray;
    },
    removeTodo: (state, action) => {
      let { allTodos, index } = action.payload;
      let newArray = [...allTodos];
      newArray.splice(index, 1);
      state.value = newArray;
    },
  },
});

export const { addNewTodo, updateStatus, removeTodo } = slice.actions;

export default slice.reducer;
