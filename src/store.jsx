import { configureStore } from "@reduxjs/toolkit";
import rewardsSlice from "./pages/rewards/rewardsSlice";
import todosSlice from "./pages/to-dos/todosSlice";
import XPSlice from "./XP/XPSlice";
import heroBarSlice from "./components/HeroBar/heroBarSlice";
import usersSlice from "./pages/login/loginSlice";
export const store = configureStore({
  reducer: {
    rewards: rewardsSlice,
    todos: todosSlice,
    currentXP: XPSlice,
    heroBar: heroBarSlice,
    users: usersSlice,
  },
});
