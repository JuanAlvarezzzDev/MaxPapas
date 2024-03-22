import { formatearDinero } from "../helpers";
import useQuisco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";
import ResumenProducto from "./ResumenProducto";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";

export default function Resumen() {
  const { pedido, total, handleSubmitNuevaOrden } = useQuisco();
  const { logout } = useAuth({});
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [asideResumen, setAsideResumen] = useState(false);

  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit = (e) => {
    if (!pedidoEnviado) {
      e.preventDefault();
      setPedidoEnviado(true);
      handleSubmitNuevaOrden(logout);
    }
  };
  if (comprobarPedido() && pedidoEnviado) {
    setPedidoEnviado(false);
  }

  return (
    <>
      <aside
        className={`${
          asideResumen ? "fixed" : "hidden"
        } z-40 md:w-72 w-full bg-white md:h-screen h-full overflow-y-auto bottom-0 left-0 p-5 md:relative md:block`}
      >
        <h1 className="text-4xl font-black">Mi Pedido</h1>
        <p className="text-lg my-5">
          Aquí podrás ver el resumen y totales de tu pedido
        </p>

        <div className="py-10">
          {pedido.length === 0 ? (
            <p className="text-center text-2xl">
              No hay elementos en tu pedido aún
            </p>
          ) : (
            pedido.map((producto) => (
              <ResumenProducto key={producto.id} producto={producto} />
            ))
          )}
        </div>

        <div className="absolute bottom-0 right-0 p-5 w-full">
          <p className="text-xl mt-10 hidden md:block">
            Total: {""}
            {formatearDinero(total)}
          </p>
          <form className="w-full relative" onSubmit={handleSubmit}>
            <div className="mt-3 ">
              <input
                type="submit"
                className={`${
                  comprobarPedido() || pedidoEnviado
                    ? "bg-stone-400"
                    : "bg-black"
                } 
                            px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
                value={pedidoEnviado ? "Pedido Enviado" : "Confirmar Pedido"}
                disabled={comprobarPedido() || pedidoEnviado}
              />
            </div>
          </form>
        </div>
      </aside>

      <div className="fixed md:hidden bottom-0 left-0 w-full h-[60px] bg-white flex justify-around items-center z-20">
        <p className="text-lg">Total:{formatearDinero(total)}</p>{" "}
        <FaCartArrowDown
          onClick={() => setAsideResumen(!asideResumen)}
          className="text-4xl"
        />
      </div>
    </>
  );
}
