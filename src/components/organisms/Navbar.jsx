import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import SearchBar from "../molecules/SearchBar";
import imgLogo from "./../../assets/Logo-pokedex.webp";
import Swal from "sweetalert2";
// Redux
import { fetchPokemonByOption, fetchAllPokemons } from "./../../store/slices/pokemons/index.js";
import {useDispatch, useSelector} from 'react-redux'

const Navbar = ({ isPokemon } = props) => {
  const {list: state} = useSelector(state => state.pokemons)
  useEffect(()=> {
    state.success === false? errorHandler(state.data) : false;
    dispatch(fetchAllPokemons())
  }, [state.success])
  const dispatch = useDispatch()

  const [valueInput, setValueInput] = useState('');
  const [selected, setSelected] = useState(null);

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
    valueInput === ''
      ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'you have not written anything',
      }) : selected === null ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'You have not selected the filter',
      })
      : dispatch(fetchPokemonByOption(selected, valueInput))
  };
  const errorHandler = (res) => {
    state.success
      ? false
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.message,
        });
  };
  const handleChangeInput = (value) => {
    setValueInput(value);
    // console.log(valueInput.length)
    valueInput.length === 1 ? dispatch(fetchAllPokemons()) : false

  };
  // console.log(selected)
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
