import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import SearchBar from "./SearchBar";
import useQuisco from "../hooks/useQuiosco";

export const Header = () => {
  const { busqueda, handleChangeBusqueda, showSidebar, setShowSidebar } =
    useQuisco();
  return (
    <div className="bg-[#f9aa0022] px-3 py-5 w-full flex justify-around items-center">
      <div>
        <SearchBar
          className="w-1/2"
          value={busqueda}
          changeInput={handleChangeBusqueda}
        />
      </div>
      <div className="bg-[#F9AA00] p-1 rounded-lg">
        <LuMenuSquare
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-4xl text-white"
        />
      </div>
    </div>
  );
};
