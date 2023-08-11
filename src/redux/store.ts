import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slice/pokemonSlice";
import pokemonDetailReducer from "./slice/pokemonDetailSlice";

export const store = configureStore({
  reducer: {
    pokemonReducer,
    pokemonDetailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
