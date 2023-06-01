import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users";

export function saveUserToLocalStorage(data) {
  let users = [];
  users = JSON.parse(localStorage.getItem("usersData")) || [];
  // if (data.length > 1) {
  users.push(data);

  // }
  localStorage.setItem("usersData", JSON.stringify(users));
  return users;
}

const initialState = {
  users: saveUserToLocalStorage(users),
  canLogIn: false,
  currentUser: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (action.payload) {
        state.users.push(action.payload);

        saveUserToLocalStorage(action.payload);
      }
    },
    checkForUser: (state, action) => {
      state.users.map((user) => {
        state.canLogIn = false;
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.canLogIn = true;
          state.currentUser = user;
        } else {
          state.canLogIn = false;
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
