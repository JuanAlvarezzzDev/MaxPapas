import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useQuisco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";
import Switch from "../components/UI/Switch";
import Selector from "../components/UI/Selector";

export const DetalleProducto = () => {
  const { idProducto } = useParams();
  const { obtenerProductoId } = useQuisco();
  const [stateEnvio, setStateEnvio] = useState(false);
  const [infoSeleccionada, setInfoSeleccionada] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await obtenerProductoId(idProducto);
        setData(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [idProducto]);
  const { nombre, imagen, precio } = data || {};

  return (
    <>
      {data && (
        <div className="flex w-full h-screen">
          <aside className="w-1/3  bg-white">
            <div className="relative w-full  h-1/5 bg-primary bg-opacity-90 drop-shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/background/maxpapas.webp)` }}
              ></div>
              <img
                src={`/img/${imagen}.webp`}
                alt={nombre}
                className="w-full h-full object-contain drop-shadow-product"
              />
            </div>
            <div className="p-5">
              <div className="flex w-full justify-between text-xl">
                <h3 className="text-center">{nombre}</h3>
                <p className="font-black text-black">
                  {formatearDinero(precio)}
                </p>
              </div>
              <hr className="mt-3" />
              <div className="mt-5 mb-10">
                <Switch
                  checked={stateEnvio}
                  onChange={(e) => setStateEnvio(e.target.checked)}
                  label="Para Llevar"
                />
              </div>
              <div className="grid gap-4 grid-cols-2">
                <Selector
                  img="/img/salsas.webp"
                  text="Salsas"
                  onClick={() => setInfoSeleccionada('Salsas Seccion')}
                />
                <Selector
                  img="/img/papas.webp"
                  text="Papas"
                  onClick={() => setInfoSeleccionada('Papas Seccion')}
                />
                <Selector
                  img="/img/adiciones.webp"
                  text="Adiciones"
                  onClick={() => setInfoSeleccionada('Adiciones Seccion')}
                />
                <Selector
                  img="/img/gaseosas.webp"
                  text="Gaseosas"
                  onClick={() => setInfoSeleccionada('Gaseosas Seccion')}
                />
              </div>
            </div>
          </aside>

          <div className="w-2/3 p-3">
          {infoSeleccionada}
          </div>
        </div>
      )}
    </>
  );
};
