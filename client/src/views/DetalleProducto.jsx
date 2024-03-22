import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr'
import clienteAxios from '../config/axios'
import useQuisco from '../hooks/useQuiosco';

export const DetalleProducto = () => {
    const {idProducto} = useParams();
    const {obtenerProductoId} = useQuisco()
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

    }, []);
    const {nombre, imagen, precio} = data || {};

    return (
      <>
      {data && (
        <>
          <p>Nombre: {nombre}</p>
          <img src={imagen} alt={nombre} />
          <p>Precio: {precio}</p>
        </>
      )}
    </>
    );
};
