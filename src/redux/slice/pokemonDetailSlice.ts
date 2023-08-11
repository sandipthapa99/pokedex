import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SinglePokemonDetailProps } from "../../types/SinglePokemonDetailsProps";

export const fetchPokemonDetail = createAsyncThunk(
  "fetchPokemonDetail",
  async (url: string) => {
    const response = await fetch(url);
    return response.json();
  }
);

const initialState: SinglePokemonDetailProps = {
  data: null,
  isLoading: false,
  isError: false,
};

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPokemonDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPokemonDetail.rejected, (state, action) => {
      state.isError = true;
      console.log("Error: ", action.payload);
    });
  },
});

export default pokemonDetailSlice.reducer;
