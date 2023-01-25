import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import Select from "react-select";
import SearchBar from "../molecules/SearchBar";
import imgLogo from "./../../assets/Logo-pokedex.webp";

const Navbar = ({ isPokemon } = props) => {
  const [selected, setSelected] = useState({});

  const handleChangeSelected = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <img height={150} src={imgLogo} alt="" className="nav__img" />
      </NavLink>
      {!isPokemon ? (
        <div className="nav__search">
          <Select
            className="nav__select"
            options={options}
            onChange={handleChangeSelected}
            defaultValue={"vanilla"}
          />
          <SearchBar />
        </div>
      ) : (
        false
      )}
    </nav>
  );
};

export default Navbar;
