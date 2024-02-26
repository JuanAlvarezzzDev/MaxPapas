import { useState } from "react";
import { formatearDinero } from "../helpers";
import useQuisco from "../hooks/useQuiosco";

const Adicion = ({ adicion, botonAgregar = false }) => {
  const { handleSetAdicion } = useQuisco();
  const { nombre, precio } = adicion;
  const [cantidadAdicion, setCantidadAdicion] = useState(1);
  return (
    <div className="border p-3 shadow bg-white flex flex-col justify-center items-center">
      <h3 className="text-xl">{nombre}</h3>
      <p className="mt-5 font-black text-2xl text-black">
        {formatearDinero(precio)}
      </p>
      <div className="flex gap-4 mt-5">
        <button
          type="button"
          onClick={() => {
            if (cantidadAdicion <= 1) return;
            setCantidadAdicion(cantidadAdicion - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <p className="text-3xl">{cantidadAdicion}</p>

        <button
          type="button"
          onClick={() => {
            if (cantidadAdicion >= 5) return;
            setCantidadAdicion(cantidadAdicion + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      {botonAgregar && (
        <button
          type="button"
          className=" rounded-lg bg-black text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleSetAdicion(cantidadAdicion, adicion);
          }}
        >
          Agregar
        </button>
      )}
    </div>
  );
};

export default Adicion;
