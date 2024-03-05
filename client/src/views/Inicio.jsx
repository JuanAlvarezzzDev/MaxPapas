import useSWR from "swr";
import Producto from "../components/Producto";
import clienteAxios from "../config/axios";
import useQuisco from "../hooks/useQuiosco";

export default function Inicio() {
  const { categoriaActual, listProductos, busqueda } = useQuisco();

  
  let productos = listProductos.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );

  if (busqueda.trim() !== "") {
    productos = listProductos.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map((producto) => (
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
