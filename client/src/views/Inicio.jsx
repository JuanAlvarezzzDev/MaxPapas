import useSWR from "swr";
import Producto from "../components/Producto";
import clienteAxios from "../config/axios";
import useQuisco from "../hooks/useQuiosco";
import { useEffect, useState } from "react";

export default function Inicio() {
  const { categoriaActual, listProductos, busqueda, handleClickCategoria } = useQuisco();
  const [filterProduct, setFilterProduct] = useState([]);
  const applyFilters = () => {
    let productos = listProductos;

    if (categoriaActual.id > 0) {
      productos = listProductos.filter(
        (producto) => producto.categoria_id === categoriaActual.id
      );
    }
    if (busqueda) {
      productos = listProductos.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    }

    setFilterProduct(productos);
  };

  useEffect(() => {
    applyFilters();
  }, [categoriaActual, busqueda, handleClickCategoria]);
 

  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-[60px]">
        {filterProduct.map((producto) => (
          <Producto
            key={producto.imagen}
            producto={producto}
            botonAgregar={true}
          />
        ))}
      </div>
    </>
  );
}
