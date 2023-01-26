import React from "react";
import { getAllPokemons, getPokemonByOption } from "./../api/index.js";

export const PokemonContext = React.createContext();

export const state = {
  pokemons: [],
  getAllPokemonsContext: async () => {
    const res = await getAllPokemons();
    state.pokemons = res;
  },
  
};
