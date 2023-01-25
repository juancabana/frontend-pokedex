import React from "react";
import { NavLink } from "react-router-dom";

const pokeball = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png";

const Card = ({ data } = props) => {
  return (
    <div className="card">
      <NavLink to={"/pokemon"} state={data} exact="true">
        <div className="card_wrapper">
          <div className="card__image__container">
            <img src={data.image} alt="image-pokemon" className="card__image" />
          </div>
          <div className="card__container_info">
            <h3 className="card__containt__title__text">{data.name}</h3>
            <p className="card__description">{data.description}</p>
            <div className="card__containt_detail">
              <img width={30} src={pokeball} alt="" className="card__containt__pokeball" />
              <p className="card__containt__paragraph">{data.category}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
