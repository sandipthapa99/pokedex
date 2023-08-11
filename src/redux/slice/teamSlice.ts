import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeamProps } from "../../types/TeamProps";
import { PokemonProps } from "../../types/PokemonDetailProps";
import { addToStorage, removeFromStorage } from "../../utils";

/**
 * Action to add a Pokémon to the team
 */
export const addToTeam = createAsyncThunk(
  "addToTeam",
  async (data: PokemonProps) => {
    return addToStorage(data);
  }
);
/**
 * Action to remove a Pokémon from the team
 */
export const removeFromTeam = createAsyncThunk(
  "removeFromTeam",
  async (url: string) => {
    return removeFromStorage(url);
  }
);

const teamInitialState: TeamProps = {
  data: JSON.parse(localStorage.getItem("myTeam") || "[]"),
};

export const teamSlice = createSlice({
  name: "team",
  initialState: teamInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToTeam.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(removeFromTeam.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default teamSlice.reducer;
