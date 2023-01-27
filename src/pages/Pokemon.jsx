import React, { useEffect, useState } from "react";
import "./../styles/global.css";
import "./../styles/pokemon.css";
import Navbar from "../components/organisms/Navbar";
import InfoPokemon from "../components/organisms/InfoPokemon";
import { NavLink, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Pokemon = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    setData({ success: true, ...state });
  }, []);

  return (
    <div className="pokemon">
      <div className="back__icon">
        <NavLink to={'/'}>
          <ArrowBackIcon sx={{ fontSize: 70 }} />
        </NavLink>
      </div>
      <Navbar isPokemon={true} />
      <InfoPokemon data={data} />
    </div>
  );
};

export default Pokemon;
