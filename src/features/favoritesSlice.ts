import { createSlice } from "@reduxjs/toolkit";

const initialState: FavoritesState = {
  names: [],
  male: 0,
  female: 0,
  other: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: { payload: Character }) {
      state.names.push(action.payload.name);
      if (action.payload.gender === "male") {
        state.male += 1;
      } else if (action.payload.gender === "female") {
        state.female += 1;
      } else {
        state.other += 1;
      }
    },
    removeFavorite(state, action: { payload: Character }) {
      state.names = state.names.filter((name) => name !== action.payload.name);
      if (action.payload.gender === "male") {
        state.male -= 1;
      } else if (action.payload.gender === "female") {
        state.female -= 1;
      } else {
        state.other -= 1;
      }
    },
    clearAllFavorites(state) {
      state.names = [];
      state.male = 0;
      state.female = 0;
      state.other = 0;
    },
  },
});

export const { addFavorite, removeFavorite, clearAllFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
