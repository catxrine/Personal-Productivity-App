import { configureStore } from "@reduxjs/toolkit";
import heroBarSlice from "./components/HeroBar/heroBarSlice";
import usersSlice from "./pages/login/loginSlice";

export const store = configureStore({
  reducer: {
    heroBar: heroBarSlice,
    users: usersSlice,
  },
});
