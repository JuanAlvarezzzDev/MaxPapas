import { useEffect, useState } from "react";

const usePedido = (api)=>{
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);
  
    const handleSubmitNuevaOrden = async () => {
      const body = {
        total,
        productos: pedido.map((producto) => {
          return {
            id: producto.id,
            cantidad: producto.cantidad,
          };
        }),
      };
      try {
        const { data } = await api.post("pedidos", body);
        setPedido([]);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleClickCompletarPedido = async (id) => {
      try {
        await api.put("pedidos", id);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleEliminarProductoPedido = (id) => {
      const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
      setPedido(pedidoActualizado);
      toast.success("Eliminado del Pedido");
    };
  
    useEffect(() => {
      const nuevoTotal = pedido.reduce(
        (total, producto) => producto.precio * producto.cantidad + total,
        0
      );
      setTotal(nuevoTotal);
    }, [pedido]);
    return{pedido,handleSubmitNuevaOrden, total, handleEliminarProductoPedido, handleClickCompletarPedido, setPedido}
}

export default usePedido