import React from "react";
import Card from "../molecules/Card";

const ListPokemons = () => {
  const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      description:
        "Bulbasaur es una especie de Pokémon de tipo Planta/Veneno en la franquicia Pokémon de Nintendo y Game Freak.",
      ability: "overgrow",
      weight: 60,
      speed: 20,
      attack: 15,
      defense: 47,
      category: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    },
    {
      id: 2,
      name: "ivysaur",
      description:
        "Ivysaur es un Pokémon común de tipo planta, evolución de Bulbasaur. Evoluciona en ivisasur",
      ability: "chlorophyll",
      weight: 130,
      speed: 40,
      attack: 15,
      defense: 38,
      category: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    },
  ];
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
