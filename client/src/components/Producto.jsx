import { Link } from "react-router-dom";
import { formatearDinero } from "../helpers"
import useQuisco from "../hooks/useQuiosco"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado  } = useQuisco();
    const { nombre, imagen, precio} = producto

  return (
    <div className="border col-span-1 shadow bg-white">
        <img
            alt={`imagen ${nombre}`}
            className="w-full"
            src={`/img/${imagen}.webp`}
        />
        <div className="p-5">
            <h3 className="text-xl">{nombre}</h3>
            <p className="mt-5 font-black text-2xl text-black">
                {formatearDinero(precio)}
            </p>

            {botonAgregar && (
                <Link
                    to={`/pedido/${nombre}/`}
                    className="rounded-lg bg-black text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => {
                        // handleClickModal();
                        handleSetProducto(producto);
                    }}
                >
                    Agregar
                </Link>
            )}

            {botonDisponible && (
                <button
                    type="button"
                    className="rounded-lg bg-black text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => handleClickProductoAgotado(producto.id)}
                >
                    Producto Agotado
                </button>
            )}

        </div>

    </div>
  )
}
