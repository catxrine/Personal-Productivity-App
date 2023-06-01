import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users";

const initialState = {
  users,
  canLogIn: false,
  currentUser: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    checkForUser: (state, action) => {
      state.users.map((user) => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.canLogIn = true;
          state.currentUser = user;
        }
      });
    },
  },
});

export default usersSlice.reducer;
export const { addUser, checkForUser } = usersSlice.actions;
export const allUsers = (state) => state.users.users;
export const canLogIn = (state) => state.users.canLogIn;
export const currentUser = (state) => state.users.currentUser;
