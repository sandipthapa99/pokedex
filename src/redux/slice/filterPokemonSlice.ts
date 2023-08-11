import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterPokemonProps } from "../../types/FilterPokemonProps";

export const filterPokemon = createAsyncThunk(
  "filterPokemon",
  async (id: string, thunkAPI) => {
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`);
    return response.json();
  }
);

const initialState: FilterPokemonProps = {
  name: "",
  pokemon_species: [],
  isLoading: false,

  isError: false,
};

const filterPokemonSlice = createSlice({
  name: "pokemonFilter",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filterPokemon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterPokemon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pokemon_species = action.payload.pokemon_species;
    });
    builder.addCase(filterPokemon.rejected, (state, action) => {
      state.isError = true;
      console.log("Error: ", action.payload);
    });
  },
});

export const { reset } = filterPokemonSlice.actions;
export default filterPokemonSlice.reducer;
