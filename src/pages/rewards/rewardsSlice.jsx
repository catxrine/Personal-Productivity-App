import { createSlice } from "@reduxjs/toolkit";
import { rewardsData } from "../../rewardsData";

const initialState = {
  rewards: rewardsData,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    random: () => {
      console.log("hey!");
    },
  },
});

export default rewardsSlice.reducer;
export const { random } = rewardsSlice.actions;
export const rewards = (state) => state.rewards.rewards;
