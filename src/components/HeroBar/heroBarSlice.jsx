import { createSlice } from "@reduxjs/toolkit";
import { heroesData } from "../data";

const initialState = {
  heroData: heroesData,
};

const heroBarSlice = createSlice({
  name: "heroBar",
  initialState,
  reducers: {
    wonHero: (state, action) => {
      const el = state.heroData.find((hero) => hero.id === action.payload.id);
      if (el) {
        el.locked = false;
      }
    },
  },
});

export default heroBarSlice.reducer;
export const { wonHero } = heroBarSlice.actions;
export const allHeroData = (state) => state.heroBar.heroData;
