import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search here"
        onChange={handleChangeInput}
        value={searchInput}
      />
      <button className="nav__button">Search</button>
    </>
  );
};

export default SearchBar;
