import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../users";

export function saveUserToLocalStorage(data: object) {
  let users = JSON.parse(`${localStorage.getItem("usersData")}`) || [];

  if (Object.keys(data).length > 1) {
    users.push(data);
  }
  localStorage.setItem("usersData", JSON.stringify(users));
  return users;
}

type userTypes = {
  username: string;
  password: string;
  id: number;
  userInfo: {
    currentXP: 0;
    achievedRewards: [];
    completed: 0;
    tasks: [];
    allRewards: object[];
  };
};
// type stateTypes = {
//   users: [];
//   canLogIn: boolean;
//   currentUser: userTypes | string;
// };

type taskTypes = {
  title: string;
  XP: number;
  id: number;
  completed: boolean;
};

type rewardsTypes = {
  description: string;
  needed: number;
  completed: boolean;
  image: string;
  XP: number;
  id: number;
};

const initialState = {
  users: saveUserToLocalStorage(users),
  canLogIn: false,
  currentUser: JSON.parse(`${localStorage.getItem("currUser")}`),
};

type usersType = {
  users: typeof initialState;
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
      state.users?.map((user: userTypes): void => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.canLogIn = true;
          state.currentUser = user;

          localStorage.setItem("currUser", JSON.stringify(user));
        }
      });
    },
    addTodos: (state, action) => {
      state.currentUser.userInfo.tasks = [
        ...state.currentUser.userInfo.tasks,
        action.payload,
      ];
      state.users.map((user: userTypes) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.tasks = state.currentUser.userInfo.tasks;

          localStorage.setItem("usersData", JSON.stringify(state.users));
          localStorage.setItem("currUser", JSON.stringify(user));
        }
      });
    },
    addXPtoUser: (state, action) => {
      state.currentUser.userInfo.currentXP += action.payload;
      state.users.map((user: userTypes) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.currentXP = state.currentUser.userInfo.currentXP;

          localStorage.setItem("usersData", JSON.stringify(state.users));
          localStorage.setItem("currUser", JSON.stringify(user));
        }
      });
    },
    removeTask: (state, action) => {
      state.currentUser.userInfo.tasks =
        state.currentUser.userInfo.tasks.filter(
          (task: taskTypes) => task.id !== action.payload
        );
      state.users.map((user: userTypes) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.tasks = state.currentUser.userInfo.tasks;

          localStorage.setItem("usersData", JSON.stringify(state.users));
          localStorage.setItem("currUser", JSON.stringify(user));
        }
      });
    },

    addAchievedReward: (state, action) => {
      state.currentUser.userInfo.currentXP += action.payload;
      state.currentUser.userInfo.completed += 1;

      state.currentUser.userInfo.allRewards.forEach((reward: rewardsTypes) => {
        if (state.currentUser.userInfo.completed >= reward.needed) {
          reward.completed = true;
          state.currentUser.userInfo.currentXP += reward.XP;
          state.currentUser.userInfo.achievedRewards?.push(reward);
        }

        state.currentUser.userInfo.allRewards =
          state.currentUser.userInfo.allRewards.filter(
            (reward: rewardsTypes) => reward.completed !== true
          );
      });

      state.users.map((user: userTypes) => {
        if (user.id === state.currentUser.id) {
          user.userInfo.currentXP = state.currentUser.userInfo.currentXP;
          user.userInfo.completed = state.currentUser.userInfo.completed;

          user.userInfo.achievedRewards =
            state.currentUser.userInfo.achievedRewards;
          user.userInfo.allRewards = state.currentUser.userInfo.allRewards;

          localStorage.setItem("currUser", JSON.stringify(user));
          localStorage.setItem("usersData", JSON.stringify(state.users));
        }
      });
    },
    exitProfile: (state) => {
      state.currentUser = "";
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
  exitProfile,
} = usersSlice.actions;
export const allUsers = (state: typeof initialState) => state.users.users;
export const canLogIn = (state: typeof initialState) => state.users.canLogIn;
export const currentUser = (state: typeof initialState) =>
  state.users.currentUser;
