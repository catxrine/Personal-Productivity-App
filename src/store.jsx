import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./pages/to-dos/todosSlice";
import heroBarSlice from "./components/HeroBar/heroBarSlice";
import usersSlice from "./pages/login/loginSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    heroBar: heroBarSlice,
    users: usersSlice,
  },
});
