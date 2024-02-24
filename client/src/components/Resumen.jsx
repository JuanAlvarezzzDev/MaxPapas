import { formatearDinero } from "../helpers";
import useQuisco from "../hooks/useQuiosco"
import { useAuth } from "../hooks/useAuth";
import ResumenProducto from "./ResumenProducto";
import { useState } from "react";

export default function Resumen() {
    const {pedido, total, handleSubmitNuevaOrden} = useQuisco();
    const { logout} = useAuth({})
    const [pedidoEnviado, setPedidoEnviado] = useState(false);

    const comprobarPedido = () => pedido.length === 0;

    const handleSubmit = e => {
        if(!pedidoEnviado){
            e.preventDefault();
             setPedidoEnviado(true)
            handleSubmitNuevaOrden(logout);
        }

    }
    if (comprobarPedido() && pedidoEnviado) {
        setPedidoEnviado(false);
    }

    return (
        <aside className="w-72 h-screen overflow-y-scroll p-5 relative">
            <h1 className="text-4xl font-black">
                Mi Pedido
            </h1>
            <p className="text-lg my-5">
                Aquí podrás ver el resumen y totales de tu pedido
            </p>

            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">
                        No hay elementos en tu pedido aún
                    </p>
                ) : (
                    pedido.map(producto => (
                        <ResumenProducto 
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
            </div>

            <p className="text-xl mt-10">
                Total: {''}
                {formatearDinero(total)}
            </p>

            <form 
                className="w-full relative"
                onSubmit={handleSubmit}
            >
                <div className="mt-5 ">
                    <input
                        type="submit"
                        className={`${comprobarPedido() || pedidoEnviado ? 
                            'bg-stone-400' : 
                            'bg-black' } 
                            px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
                        value={pedidoEnviado ? "Pedido Enviado" : "Confirmar Pedido"}
                        disabled={comprobarPedido() || pedidoEnviado}
                    />
                </div>
            </form>
        </aside>
    )
}
