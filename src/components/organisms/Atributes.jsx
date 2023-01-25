import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Atributes = ({ data } = props) => {
  const BorderLinearProgress = styled(LinearProgress)({
    
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: "#1440ff",
    },
  });
  // console.log(BorderLinearProgress.__emotion_styles)
  return (
    <div className="info_pokemon__datails__item">
      <div className="info_pokemon__datails__item__circle ">
        <h3 className="info-pokemon__details__item__subtitle">
          {"Category: "}
        </h3>
        <p className="info-pokemon__details__item__value">{data.category}</p>
      </div>
      <div className="info_pokemon__datails__item__circle ">
        <h3 className="info-pokemon__details__item__subtitle">{"Ability: "}</h3>
        <p className="info-pokemon__details__item__value">{data.ability}</p>
      </div>
      <div className="info_pokemon__datails__item__circle ">
        <h3 className="info-pokemon__details__item__subtitle">{"Speed: "}</h3>
        <p className="info-pokemon__details__item__value">{data.speed}</p>
      </div>
        <BorderLinearProgress variant="determinate" value={data.speed} />
      <div className="info_pokemon__datails__item__circle ">
        <h3 className="info-pokemon__details__item__subtitle">{"Attack: "}</h3>
        <p className="info-pokemon__details__item__value">{data.attack}</p>
      </div>
        <BorderLinearProgress variant="determinate" value={data.attack} />
      <div className="info_pokemon__datails__item__circle ">
        <h3 className="info-pokemon__details__item__subtitle">{"Defense: "}</h3>
        <p className="info-pokemon__details__item__value">{data.defense}</p>
      </div>
        <BorderLinearProgress variant="determinate" value={data.defense} />
    </div>
  );
};

export default Atributes;
