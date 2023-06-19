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
      let hero = state.heroData.find((hero) => hero.id === action.payload.id);
      if (hero) {
        hero.locked = false;
      }
    },
  },
});

export default heroBarSlice.reducer;
export const { wonHero } = heroBarSlice.actions;
export const allHeroData = (state: any) => state.heroBar.heroData;
