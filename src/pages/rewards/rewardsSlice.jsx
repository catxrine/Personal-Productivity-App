import { createSlice } from "@reduxjs/toolkit";
import { rewardsData } from "../../rewardsData";

const initialState = {
  completedTasks: 0,
  rewards: rewardsData,
  show: false,
  completedRewards: [],
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    achievedReward: (state) => {
      state.completedTasks += 1;
      state.rewards.map((reward) => {
        if (state.completedTasks >= reward.needed) {
          reward.completed = true;
          state.show = true;
          state.completedRewards.push(reward);
        }
        state.rewards = state.rewards.filter(
          (reward) => reward.completed !== true
        );
      });
    },
    setShowToFalse: (state) => {
      state.show = false;
    },
  },
});

export default rewardsSlice.reducer;
export const { achievedReward, setShowToFalse } = rewardsSlice.actions;
export const rewards = (state) => state.rewards.rewards;
export const allCompleteTasks = (state) => state.rewards.completedTasks;
export const popup = (state) => state.rewards.show;
export const completedRewards = (state) => state.rewards.completedRewards;
