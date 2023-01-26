import React, { useEffect, useState } from "react";
import Card from "../molecules/Card";
import { PokemonContext } from "./../../contexts/pokemon.context.js";

const ListPokemons = () => {
  const context = React.useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);
  async function setData() {
    await context.getAllPokemonsContext()
    setPokemons(context.pokemons.pokemons)
    // console.log(pokemons)
  }
  useEffect(() => {
    setData()
  }, [])

  return (
    <section className="list-pokemon">
      <div className="list-pokemon__wrapper">
        {pokemons.map((poke) => (
          <Card key={poke.id} data={poke} />
        ))}
      </div>
    </section>
  );
};

export default ListPokemons;
