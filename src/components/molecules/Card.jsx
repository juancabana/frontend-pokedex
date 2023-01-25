import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data } = props) => {
  return (
    <div className="card">
      <NavLink to={"/pokemon"} state={data} exact="true">
        <div className="card__wrapper__image">
          <div className="card__image__container">
            <img src={data.image} alt="image-pokemon" className="card__image" />
          </div>
          <div className="card__containt">
            <div className="card__containt__title">
              <h3 className="card__containt__title__text">{data.name}</h3>
              <p className="card__containt__paragraph">{data.category}</p>
            </div>
            <p className="card__description">{data.description}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
