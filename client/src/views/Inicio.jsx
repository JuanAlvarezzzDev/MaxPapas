import useSWR from "swr";
import Producto from "../components/Producto";
import clienteAxios from "../config/axios";
import useQuisco from "../hooks/useQuiosco";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

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
    <Header/>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-3">
        {filterProduct.map((producto) => (
          <Producto
            key={producto.imagen}
            producto={producto}
            botonAgregar={true}
          />
        ))}
      </div>
      <SideBar/>
    </>
  );
}
