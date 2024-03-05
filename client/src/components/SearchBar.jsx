import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="flex items-center rounded-2xl border border-sky-500 p-3">
      <FaSearch className="searchBar-icon" />
      <input
      className=""
        type="text"
        placeholder="Buscando Multimetro..."
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
