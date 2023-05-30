import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users";
import { current } from "@reduxjs/toolkit";
const initialState = {
  users,
  canLogIn: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    checkForUser: (state, action) => {
      console.log(action.payload);
      console.log(current(state.users));
      state.users.map((user) => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.canLogIn = true;
        }
      });
    },
  },
});

export default usersSlice.reducer;
export const { addUser, checkForUser } = usersSlice.actions;
export const allUsers = (state) => state.users.users;
export const canLogIn = (state) => state.users.canLogIn;
