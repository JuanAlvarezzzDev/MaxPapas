import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="flex items-center rounded-2xl border border-[#F9AA00] px-5 py-3 gap-5">
      <FaSearch className="searchBar-icon text-2xl text-[#F9AA00]" />
      <input
      className=" placeholder:text-black bg-transparent w-full focus:outline-none  focus:border-none focus:bg-transparent text-lg"
        type="text"
        placeholder="Buscar..."
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
