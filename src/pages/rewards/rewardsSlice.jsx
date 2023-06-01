import { createSlice } from "@reduxjs/toolkit";
import { rewardsData } from "../../rewardsData";

const initialState = {
  completedTasks: 0,
  rewards: rewardsData,
  completedRewards: [],
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    achievedReward: (state) => {
      state.completedTasks += 1;
      state.rewards.forEach((reward) => {
        if (state.completedTasks >= reward.needed) {
          reward.completed = true;
          state.completedRewards.push(reward);
        }
        state.rewards = state.rewards.filter(
          (reward) => reward.completed !== true
        );
      });
    },
  },
});

export default rewardsSlice.reducer;
export const { achievedReward } = rewardsSlice.actions;
export const rewards = (state) => state.rewards.rewards;
export const allCompleteTasks = (state) => state.rewards.completedTasks;
export const popup = (state) => state.rewards.show;
export const completedRewards = (state) => state.rewards.completedRewards;
