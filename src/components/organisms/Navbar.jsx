import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const colorStyles = {
    control: (styles) => ({...styles, backgroundColor: 'black', color: 'white'}),
    option: (styles, {data, isDisable, isFocused, isSelected}) => {
      console.log('option', data, isDisable, isFocused, isSelected)
      return {...styles, color: 'black'}
    }
  }
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
            styles={colorStyles}
          />
          <SearchBar />
          <button className="nav__button">Search</button>
        </div>
      ) : (
        false
      )}
    </nav>
  );
};

export default Navbar;
