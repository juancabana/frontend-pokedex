import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import SearchBar from "../molecules/SearchBar";
import imgLogo from "./../../assets/Logo-pokedex.webp";
// import { PokemonContext } from "./../../contexts/pokemon.context.js";
import Swal from "sweetalert2";

const Navbar = ({ isPokemon } = props) => {
  // const context = React.useContext(PokemonContext);
  const [valueInput, setValueInput] = useState();

  const [selected, setSelected] = useState();

  const handleChangeSelected = (selectedOption) => {
    setSelected(selectedOption.value);
  };

  const options = [
    { value: "id", label: "ID" },
    { value: "name", label: "Name" },
    { value: "ability", label: "Ability" },
    { value: "weight", label: "Weight" },
    { value: "height", label: "Height" },
    { value: "speed", label: "Speed" },
    { value: "attack", label: "Attack" },
    { value: "defense", label: "Defense" },
    { value: "category", label: "Category" },
  ];
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "black",
      color: "white",
    }),
    option: (styles, { data, isDisable, isFocused, isSelected }) => {
      // console.log("option", data, isDisable, isFocused, isSelected);
      return { ...styles, color: "black" };
    },
  };
  const getPokemon = async () => {
    typeof selected !== "string"
      ? errorHandler({
          success: false,
          message: "You have not selected the filter",
        })
      : async () => {
          // const res = await context.state.getPokemonByOption(selected, valueInput);
          // console.log(res)
          // errorHandler(res);
        };
  };
  const errorHandler = (res) => {
    res.success
      ? false
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.message,
        });
  };
  const handleChangeInput = (value) => {
    setValueInput(value);
  };

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
            placeholder="Find by..."
          />
          <div className="nav__input">
            <SearchBar
              handleChangeInput={handleChangeInput}
              getPokemon={getPokemon}
            />
          </div>
        </div>
      ) : (
        false
      )}
    </nav>
  );
};

export default Navbar;
