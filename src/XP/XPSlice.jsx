import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentXP: 0,
  achievedRewards: [],
};

const XPSlice = createSlice({
  name: "currentXp",
  initialState,
  reducers: {
    AddXP: (state, action) => {
      state.currentXP += action.payload;
    },
    AddAchievdReward: (state, action) => {
      state.achievedRewards = state.achievedRewards.filter((el) => {
        state.currentXP += el.XP;
        return el.id !== action.payload.id;
      });
      state.achievedRewards.push(action.payload);
    },
  },
});

export default XPSlice.reducer;
export const curXP = (state) => state.currentXP.currentXP;
export const { AddXP, AddAchievdReward } = XPSlice.actions;
