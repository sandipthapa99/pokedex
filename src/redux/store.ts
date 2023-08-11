import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slice/pokemonSlice";
import pokemonDetailReducer from "./slice/pokemonDetailSlice";
import filterPokemonReducer from "./slice/filterPokemonSlice";
import teamReducer from "./slice/teamSlice";

export const store = configureStore({
  reducer: {
    pokemonReducer,
    pokemonDetailReducer,
    filterPokemonReducer,
    teamReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
