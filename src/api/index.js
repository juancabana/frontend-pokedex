const URL = "http://localhost:3005/pokedex/pokemon/";

export const getAllPokemons = async () => {
  try {
    const pokemons = await fetch(URL).then((res) => res.json());
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPokemonByOption = async (option, value) => {
  try {
    const pokemon = await fetch(`${URL}/${option}/${value}`).then(res => res.json());
    return pokemon;
  } catch (error) {
    throw new Error(error);
  }
};
