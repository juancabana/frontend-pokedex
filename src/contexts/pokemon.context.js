import React from "react";
import { getAllPokemons, getPokemonByOption } from "./../api/index.js";

export const PokemonContext = React.createContext();

export const state = {  
  pokemons: [],
  getAllPokemonsContext: async () => {
    const res = await getAllPokemons();
    state.pokemons = res.pokemons;
    return res
  },

  getPokemonByOption: async (option, value) => {
    state.pokemons = []
    const res = await getPokemonByOption(option, value);
    option === "id" || "name"
      ? (state.pokemons = [res.pokemon])
      : (state.pokemons = res.pokemons);
     console.log('getAllPokemons');


    return res
  },
};
