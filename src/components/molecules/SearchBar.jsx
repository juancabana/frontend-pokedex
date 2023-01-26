import React from "react";
import { useState } from "react";

const SearchBar = ({ handleChangeInput, getPokemon } = props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    handleChangeInput(e.target.value);
  };
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={() => getPokemon()} className="nav__button">Search</button>
    </>
  );
};

export default SearchBar;
