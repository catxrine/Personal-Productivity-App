import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentXP: 0,
  achievedRewards: [],
};

const XPSlice = createSlice({
  name: "currentXp",
  initialState,
  reducers: {
    addAchievdReward: (state, action) => {
      state.achievedRewards = state.achievedRewards.filter((reward) => {
        state.currentXP = state.currentXP + reward.XP;
        return reward.id !== action.payload.id;
      });
      state.achievedRewards.push(action.payload);
    },
  },
});

export default XPSlice.reducer;
export const curXP = (state) => state.currentXP.currentXP;
export const { addAchievdReward } = XPSlice.actions;
