import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (!state.todos) {
        state.todos = [];
      }
      state.todos.push(action.payload);
    },
    doneTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id != action.payload);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id != action.payload);
    },
    usersTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todosSlice.reducer;
export const { addTask, doneTask, deleteTask, usersTodos } = todosSlice.actions;
export const tasks = (state) => state.todos.todos;
