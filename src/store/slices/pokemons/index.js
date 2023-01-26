import { createSlice } from "@reduxjs/toolkit";
// APIs fetchs
import { getAllPokemons, getPokemonByOption } from "./../../../api/index.js";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    list: {},
  },
  reducers: {
    setPokemonList: (state, action) => {
      state.list = action.payload;
    },
    setErrorData: (state, action) => {
      state.list = {
        pokemons: state.list.pokemons,
        success: action.payload.success,
        data: action.payload.payload,
      };
    },
  },
});

export const { setPokemonList } = pokemonSlice.actions;
export const { setErrorData } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export const fetchAllPokemons = () => (dispatch) => getAllPokemons(dispatch);
export const fetchPokemonByOption = (option, value) => (dispatch) =>
  getPokemonByOption({ dispatch, option, value });
