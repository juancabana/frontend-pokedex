import React from "react";
import { NavLink } from "react-router-dom";

import Atributes from "./Atributes";

const InfoPokemon = ({ data } = props) => {
  return (
    <>
      {data.id ? (
        <section className="info_pokemon">
          <div className="info_pokemon__main">
            <h1 className="info_pokemon__title">{data.name}</h1>

            <div className="info_pokemon__image__wrapper">
              <img src={data.image} alt="" className="info-pokemon__image" />
            </div>
          </div>
          <div className="info_pokemon__details">
            <p className="info_pokemon__details__description">
              {data.description}
            </p>
            <div className="info_pokemon__datails__wrapper">
              <Atributes data= {data}/>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <h1 className="error__pokemon__page">Access through the home page</h1>
          <br />
          <NavLink to={"/"} id='error__pokemon__page__link'>Home</NavLink>
        </div>
      )}
    </>
  );
};

export default InfoPokemon;
