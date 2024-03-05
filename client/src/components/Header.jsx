import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import SearchBar from "./SearchBar";
import useQuisco from "../hooks/useQuiosco";

export const Header = () => {
  const {listProductos, busqueda, handleChangeBusqueda} = useQuisco();
  return (
    <div className="bg-white px-3 w-full flex justify-between items-center">
      <div className="p-2 w-1/2 hidden">
        <img className="w-[80px]" src="img/logo.svg" alt="Imagen Logo" />
      </div>

      <div>
        <SearchBar
          value={busqueda}
          changeInput={handleChangeBusqueda}
        />
      </div>
      <div className="bg-[#F9AA00] p-1 rounded-sm">
        <LuMenuSquare className="text-4xl text-white" />
      </div>
    </div>
  );
};
