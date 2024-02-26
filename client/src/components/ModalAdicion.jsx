import React, { useState } from "react";
import Adicion from "./Adicion";
import useQuisco from "../hooks/useQuiosco";

export const ModalAdicion = () => {
  const { adiciones, handleClickModalAdicion } = useQuisco();
  const [busqueda, setBusqueda] = useState("");
  const handleChangeBusqueda = (e) => setBusqueda(e.target.value);

  let productos = adiciones;
  if (busqueda.trim() !== "") {
    productos = adiciones.filter((adicion) =>
      adicion.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }
  return (
    <div className="relative">
      <div className=" p-2 fixed top-0 right-0 w-2/3 h-1/6  bg-white">
          <input
            type="text"
            placeholder="Buscar Adicion..."
            value={busqueda}
            onChange={handleChangeBusqueda}
            className=" p-2 border border-gray-300 rounded mt-10 w-full"
          />
      
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-20 ">
        {productos.map((adicion) => (
          <Adicion key={adicion.id} adicion={adicion} botonAgregar={true} />
        ))}
      </div>
    </div>
  );
};
