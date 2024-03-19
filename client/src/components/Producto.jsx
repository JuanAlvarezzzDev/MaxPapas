import { Link } from "react-router-dom";
import { formatearDinero } from "../helpers"
import useQuisco from "../hooks/useQuiosco"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado  } = useQuisco();
    const { nombre, imagen, precio} = producto

  return (
    <div className="rounded-md col-span-1 shadow bg-white aspect-square relative overflow-hidden">
        <div className="w-full h-2/6">
        <img
            alt={`imagen ${nombre}`}
            className="w-full h-full object-cover"
            src={`/img/${imagen}.webp`}
        />

        </div>

        <div className="w-full h-4/6  flex justify-start flex-col items-center">
            <h3 className="text-base text-center mt-2">{nombre}</h3>
            <div className="absolute bottom-0 right-0 w-full h-20 text-center mt-3">
            <p className="font-black text-lg text-black">
                {formatearDinero(precio)}
            </p>

            {botonAgregar && (
                <Link
                    to={`/pedido/${nombre}/`}
                    className=" bg-black text-white w-full p-3 uppercase font-bold text-center absolute bottom-0 right-0"
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
                    className="rounded-lg bg-black text-white w-full p-3 uppercase font-bold"
                    onClick={() => handleClickProductoAgotado(producto.id)}
                >
                    Producto Agotado
                </button>
            )}
            </div>
            

        </div>

    </div>
  )
}
