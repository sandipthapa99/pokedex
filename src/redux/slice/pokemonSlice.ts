import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonDetailProps } from "../../types/PokemonDetailProps";

/**
 * Action to fetch all Pokémon listing
 */
export const fetchPokemon = createAsyncThunk(
  "fetchPokemon",
  async ({ offset, limit }: { offset: number; limit: number }) => {
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
  reducers: {
    reset: () => {
      return initialState;
    },
  },
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

export const { reset } = pokemonSlice.actions;
export default pokemonSlice.reducer;
