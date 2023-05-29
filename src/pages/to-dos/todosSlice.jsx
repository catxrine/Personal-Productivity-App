import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  completedTasks: 0,
  todos: [
    {
      title: "Go to the gym",
      XP: 100,
      id: nanoid(),
      completed: false,
    },
    {
      title: "Dp your homework",
      XP: 200,
      id: nanoid(),
      completed: false,
    },
    {
      title: "Clean your room",
      XP: 300,
      id: nanoid(),
      completed: false,
    },
    {
      title: "Read",
      XP: 100,
      id: nanoid(),
      completed: false,
    },
    {
      title: "Work",
      XP: 200,
      id: nanoid(),
      completed: false,
    },
    {
      title: "Another task",
      XP: 100,
      id: nanoid(),
      completed: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload);
    },
    doneTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id != action.payload);
      state.completedTasks += 1;
      console.log(state.completedTasks);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((task) => task.id != action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { addTask, doneTask, deleteTask } = todosSlice.actions;
export const tasks = (state) => state.todos.todos;
