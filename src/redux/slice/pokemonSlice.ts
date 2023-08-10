import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonDetailProps } from "../../types/PokemonDetailProps";

export const fetchPokemon = createAsyncThunk(
  "fetchPokemon",
  async ({ offset, limit }: { offset: number; limit: number }, thunkAPI) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    return response.json();
  }
);

const initialState: PokemonDetailProps = {
  data: null,
  isLoading: false,
  isError: false,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchPokemon.rejected, (state) => {
      state.isError = false;
    });
  },
});

export default pokemonSlice.reducer;
