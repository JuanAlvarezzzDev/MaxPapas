import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Switch } from '@tremor/react'
import useQuisco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

export const DetalleProducto = () => {
  const { idProducto } = useParams();
  const { obtenerProductoId } = useQuisco();
  const [stateEnvio, setStateEnvio] = useState(false);
  const [data, setData] = useState(null);

  const handleSwitchChange = (value) => {
    setStateEnvio(value);
  };

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
  }, []);
  const { nombre, imagen, precio } = data || {};

  return (
    <>
      {data && (
        <div className="flex w-full h-screen">
          <aside className="w-1/3  bg-white">
            <div className="relative w-full  h-2/6 bg-[#f9aa002b] drop-shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/background/maxpapas.webp)` }}
              ></div>
              <img
                src={`/img/${imagen}.webp`}
                alt={nombre}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5">
              <div className="flex w-full justify-between text-xl">
                <h3 className="text-center">{nombre}</h3>
                <p className="font-black text-black">
                  {formatearDinero(precio)}
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-5">
                <Switch
                  id="switch"
                  name="switch"
                  className="rounded-tremor-full"
                  checked={stateEnvio}
                  onChange={handleSwitchChange}
                />
                <label
                  htmlFor="switch"
                  className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                >
                  Para Llevar
                </label>
              </div>
            </div>
          </aside>

          <div className="w-2/3">Section Salsas, adiciones mas info....</div>
        </div>
      )}
    </>
  );
};
