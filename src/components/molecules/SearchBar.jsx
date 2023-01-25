import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search here"
      onChange={handleChangeInput}
      value={searchInput}
    />
  );
};

export default SearchBar;
