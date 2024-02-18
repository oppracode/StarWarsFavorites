import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favoritesSlice";
import charactersReducer from "../features/charactersSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
