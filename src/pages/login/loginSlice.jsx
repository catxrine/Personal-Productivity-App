import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users";

export function saveUserToLocalStorage(data) {
  let users = JSON.parse(localStorage.getItem("usersData")) || [];

  if (Object.keys(data).length > 1) {
    users.push(data);
  }
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
      state.users?.map((user) => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.canLogIn = true;
          state.currentUser = user;
        }
      });
    },
    addTodos: (state, action) => {
      state.currentUser.userInfo.tasks = [
        ...state.currentUser.userInfo.tasks,
        action.payload,
      ];
      state.users.map((user) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.tasks = state.currentUser.userInfo.tasks;
          localStorage.setItem("usersData", JSON.stringify(state.users)) || [];
        }
      });
    },
    addXPtoUser: (state, action) => {
      state.currentUser.userInfo.currentXP += action.payload;
      state.users.map((user) => {
        if (user.id === currentUser.id) {
          user.currentXP = state.currentUser.userInfo.currentXP;
          localStorage.setItem("usersData", JSON.stringify(state.users)) || [];
        }
      });
    },
    removeTask: (state, action) => {
      state.currentUser.userInfo.tasks =
        state.currentUser.userInfo.tasks.filter(
          (task) => task.id !== action.payload
        );
      state.users.map((user) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.tasks = state.currentUser.userInfo.tasks;
          localStorage.setItem("usersData", JSON.stringify(state.users)) || [];
        }
      });
    },

    addAchievedReward: (state, action) => {
      state.currentUser.userInfo.currentXP += action.payload;
      state.currentUser.userInfo.completed += 1;

      state.currentUser.userInfo.allRewards.forEach((reward) => {
        if (state.currentUser.userInfo.completed >= reward.needed) {
          reward.completed = true;
          state.currentUser.userInfo.currentXP += reward.XP;
          state.currentUser.userInfo.achievedRewards?.push(reward);
        }

        state.currentUser.userInfo.allRewards =
          state.currentUser.userInfo.allRewards.filter(
            (reward) => reward.completed !== true
          );
      });

      state.users.map((user) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.currentXP = state.currentUser.userInfo.currentXP;
          user.userInfo.completed = state.currentUser.userInfo.completed;

          user.userInfo.achievedRewards =
            state.currentUser.userInfo.achievedRewards;
          user.userInfo.allRewards = state.currentUser.userInfo.allRewards;
          localStorage.setItem("usersData", JSON.stringify(state.users)) || [];
        }
      });
    },
  },
});

export default usersSlice.reducer;
export const {
  addUser,
  checkForUser,
  addTodos,
  removeTask,
  addXPtoUser,
  addAchievedReward,
} = usersSlice.actions;
export const allUsers = (state) => state.users.users;
export const canLogIn = (state) => state.users.canLogIn;
export const currentUser = (state) => state.users.currentUser;
