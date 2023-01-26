import React, { useEffect, useState } from "react";
import Card from "../molecules/Card";
import { PokemonContext } from "./../../contexts/pokemon.context.js";
import CircularProgress from "@mui/material/CircularProgress";

const ListPokemons = () => {
  const [pokelist, setPokelist] = useState([]);

  const context = React.useContext(PokemonContext);

  const setData = async () => {
    context.pokemons.length === 0
      ? await context.getAllPokemonsContext()
      : setPokelist(context.pokemons);
    setPokelist(context.pokemons);
  };

  useEffect(() => {
    setData();
  }, [context.pokemons, pokelist]);
  // console.log(context.pokemons);
  // console.log("pokelist" + pokelist);

  return (
    <section className="list-pokemon">
      <div className="list-pokemon__wrapper">
        {context.pokemons.length === 0 ? (
          <CircularProgress />
        ) : (
          context.pokemons.map((poke) => <Card key={poke.id} data={poke} />)
        )}
      </div>
    </section>
  );
};

export default ListPokemons;
