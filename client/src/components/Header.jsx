import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import SearchBar from "./SearchBar";
import useQuisco from "../hooks/useQuiosco";

export const Header = () => {
  const { busqueda, handleChangeBusqueda, showSidebar, setShowSidebar } =
    useQuisco();
  return (
    <div className="bg-white py-2 px-5 w-full flex items-center justify-between gap-5 sticky top-0 left-0 z-40 shadow-md">

      <div className="w-20"><img  className="w-full " src="/img/logo.svg" alt="Logo Maxpapas"/></div>
      
      <div className="w-3/4 md:w-2/4 ">
        <SearchBar
          className="w-full"
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
