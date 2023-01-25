import React from "react";
import { NavLink } from "react-router-dom";

const InfoPokemon = ({ data } = props) => {
  return (
    <>
      {data.id ? (
        <section className="info_pokemon">
          <div className="info_pokemon__main">
            <h1 className="info-pokemon__title">{data.name}</h1>

            <div className="pokemon__image__wrapper">
              <img src={data.image} alt="" className="info-pokemon__image" />
            </div>
          </div>
          <div className="info_pokemon__details">
            <p className="info_pokemon__details__description">
              {data.description}
            </p>
            <div className="info_pokemon__datails__wrapper">
              <div className="info_pokemon__datails__item">
                <div className="info_pokemon__datails__item__circle info_pokemon__datails__item__circle--ability">
                  <h3 className="info-pokemon__details__item__subtitle">
                    {"ability: "}
                  </h3>
                  <p className="info-pokemon__details__item__value">
                    {data.ability}
                  </p>
                </div>
                <div className="info_pokemon__datails__item__circle info_pokemon__datails__item__circle--speed">
                  <h3 className="info-pokemon__details__item__subtitle">
                    {"speed: "}
                  </h3>
                  <p className="info-pokemon__details__item__value">
                    {data.speed}
                  </p>
                </div>
                <div className="info_pokemon__datails__item__circle info_pokemon__datails__item__circle--attack">
                  <h3 className="info-pokemon__details__item__subtitle">
                    {"attack: "}
                  </h3>
                  <p className="info-pokemon__details__item__value">
                    {data.attack}
                  </p>
                </div>
                <div className="info_pokemon__datails__item__circle info_pokemon__datails__item__circle--defense">
                  <h3 className="info-pokemon__details__item__subtitle">
                    {"defense: "}
                  </h3>
                  <p className="info-pokemon__details__item__value">
                    {data.defense}
                  </p>
                </div>
                <div className="info_pokemon__datails__item__circle info_pokemon__datails__item__circle--category">
                  <h3 className="info-pokemon__details__item__subtitle">
                    {"category: "}
                  </h3>
                  <p className="info-pokemon__details__item__value">
                    {data.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <h1>Access through the home page</h1>
          <NavLink to={"/"}>Home</NavLink>
        </div>
      )}
    </>
  );
};

export default InfoPokemon;
