import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slice/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemonReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
