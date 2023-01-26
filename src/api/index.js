import {
  setPokemonList,
  setErrorData,
} from "./../store/slices/pokemons/index.js";

const URL = "http://localhost:3005/pokedex/pokemon/";

export const getAllPokemons = async (dispatch) => {
  try {
    const pokemons = await fetch(URL)
      .then((res) => res.json())
      .then((res) => dispatch(setPokemonList(res)))
      .catch((error) => dispatch(setErrorData(error)));
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPokemonByOption = async ({ dispatch, option, value }) => {
  try {
    const response = await fetch(`${URL}/${option}/${value}`);
    const res = response.json();
    const pokemon = await res.then((res) => {
      res.success
        ?  dispatch(setPokemonList({ ...res, pokemons: res.pokemons }))
        : dispatch(setErrorData(res));
      console.log(res);
    });
    
    return pokemon;
  } catch (error) {
    throw new Error(error);
  }
};
