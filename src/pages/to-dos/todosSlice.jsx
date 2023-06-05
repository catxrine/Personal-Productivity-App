import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    usersTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todosSlice.reducer;
export const { addTask, usersTodos } = todosSlice.actions;
export const tasks = (state) => state.todos.todos;
