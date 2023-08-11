import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonDetailProps } from "../../types/PokemonDetailProps";
import { SinglePokemonDetailProps } from "../../types/SinglePokemonDetailsProps";

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
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = {
        ...(state?.data ?? []),
        count: state.data?.count as number,
        next: state.data?.next as string,
        previous: state.data?.previous,

        results: [
          ...(state?.data?.results ?? []),
          ...(action?.payload?.results ?? []),
        ],
      };
    });
    builder.addCase(fetchPokemon.rejected, (state) => {
      state.isError = false;
    });
  },
});

export default pokemonSlice.reducer;
