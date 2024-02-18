import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

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
    clearAllFavorites(state) {
      state.names = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearAllFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
