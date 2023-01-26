import React, { useEffect, useState } from "react";
import Card from "../molecules/Card";
import CircularProgress from "@mui/material/CircularProgress";
// Redux
import { fetchAllPokemons } from "./../../store/slices/pokemons/index.js";
import { useDispatch, useSelector } from "react-redux";

const ListPokemons = () => {
  const { list: pokelist } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, [dispatch]);
  pokelist.success ? console.log(pokelist) : console.log(pokelist.pokemons);
  // console.log(pokelist);
  return (
    <section className="list-pokemon">
      <div className="list-pokemon__wrapper">
        {pokelist.success !== true ? (
          <CircularProgress />
        ) : (
          pokelist.pokemons.map((item) => <Card key={item.id} data={item} />)
        )}
      </div>
    </section>
  );
};

export default ListPokemons;
