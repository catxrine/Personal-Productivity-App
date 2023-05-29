import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentXP: 0,
};
const XPSlice = createSlice({
  name: "currentXp",
  initialState,
  reducers: {
    AddXP: (state, action) => {
      state.currentXP += action.payload;
    },
  },
});

export default XPSlice.reducer;
export const curXP = (state) => state.currentXP.currentXP;
export const { AddXP } = XPSlice.actions;
