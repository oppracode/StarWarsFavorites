import { createSlice } from "@reduxjs/toolkit";

export interface FavoritesState {
  names: string[];
}

const initialState: FavoritesState = {
  names: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: { payload: string }) {
      state.names.push(action.payload);
    },
    removeFavorite(state, action: { payload: string }) {
      state.names = state.names.filter((name) => name !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
