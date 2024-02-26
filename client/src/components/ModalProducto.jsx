import { useState, useEffect } from "react";
import useQuisco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";
import { ModalAdicion } from "./ModalAdicion";
import ResumenProducto from "./ResumenProducto";
import { Link } from "react-router-dom";

export default function ModalProducto({producto}) {
  const {
    handleClickModal,
    handleAgregarPedido,
    pedido,
    handleClickModalAdicion,
    modalAdicion,
    pedidoAdiciones,
  } = useQuisco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);
  const [totalAdicion, setTotalAdicion] = useState(0);

  useEffect(() => {
    console.log(pedidoAdiciones)
    const nuevoTotal = pedidoAdiciones.reduce(
      (total, producto) => producto.precio + total,
      0
    );
    setTotalAdicion(nuevoTotal);
  }, [pedidoAdiciones]);

  console.log(totalAdicion)

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.filter(
        (pedidoState) => pedidoState.id === producto.id
      )[0];
      setCantidad(productoEdicion.cantidad);
      setEdicion(true);
    }
  }, [pedido]);


  return (
    <div
      className={`grid gap-4 p-5 ${
        modalAdicion
          ? " grid-cols-1 w-auto h-auto"
          : " grid-cols-3 w-[1200px] h-[700px]"
      } overflow-hidden `}
    >
      <div
        className={`overflow-y-scroll scrollbar ${
          modalAdicion ? "flex" : "flex-col"
        } col-span-1 items-center gap-10`}
      >
        <div className={`${modalAdicion ? "w-1/3" : "w-full "} `}>
          <img
            className={`${
              modalAdicion ? "w-full" : "object-cover h-48 w-96 "
            } `}
            alt={`Imagen producto ${producto.nombre}`}
            src={`/img/${producto.imagen}.jpg`}
          />
        </div>

        <div className={`${modalAdicion ? "w-2/3" : "w-full "} `}>
          <div className="absolute top-0 right-0 p-3 z-40">
            <Link to={`/`}>
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
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
          <div
            className={`${
              modalAdicion ? "" : "flex gap-8 items-center justify-center"
            } `}
          >
            <h1 className="text-3xl  font-bold mt-5">{producto.nombre}</h1>
            <p
              className={`mt-5 font-black text-3xl ${
                modalAdicion ? "text-black" : "text-amber-500"
              } `}
            >
              {formatearDinero(producto.precio + totalAdicion)}
            </p>
          </div>

          <div
            className={`flex gap-4 mt-5 ${
              modalAdicion ? "" : "w-full items-center justify-center"
            } `}
          >
            <button
              type="button"
              onClick={() => {
                if (cantidad <= 1) return;
                setCantidad(cantidad - 1);
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

            <p className="text-3xl">{cantidad}</p>

            <button
              type="button"
              onClick={() => {
                if (cantidad >= 5) return;
                setCantidad(cantidad + 1);
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

          <div>
            <p
              onClick={() => {
                handleClickModalAdicion();
              }}
            >
              {modalAdicion ? "Agregar Adiciones" : "Mis Adiciones"}
            </p>

            <div className="">
              {pedidoAdiciones.map((adicion) => (
                <ResumenProducto  key={adicion.id}
                producto={adicion} />
              ))}
            </div>
          </div>

          <Link
            to={`/`}
            className="bg-black px-5 py-2 mt-5 text-white font-bold uppercase rounded"
            onClick={() => {
              handleAgregarPedido({ ...producto, cantidad });
            }}
          >
            {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
          </Link>
        </div>
      </div>

      <div
        className={`${
          modalAdicion ? "hidden" : "grid"
        } overflow-y-scroll scrollbar col-span-2 `}
      >
        <ModalAdicion />
      </div>
    </div>
  );
}
