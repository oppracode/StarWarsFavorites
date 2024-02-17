import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favoritesSlice";

import { FavoritesState } from "../features/favoritesSlice";

export interface RootState {
  favorites: FavoritesState;
}

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
