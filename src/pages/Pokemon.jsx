import React, { useEffect, useState } from "react";
import "./../styles/global.css";
import Navbar from "../components/organisms/Navbar";
import InfoPokemon from "../components/organisms/InfoPokemon";
import { useLocation } from "react-router-dom";

const Pokemon = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    setData({ success: true, ...state });
  }, []);

  return (
    <div className="pokemon">
      <Navbar isPokemon={true} />
      <InfoPokemon data={data} />
    </div>
  );
};

export default Pokemon;
