import { useEffect, useState } from "react";

const useAdicion = (api) => {
  const [adiciones, setAdiciones] = useState([]);
  const [pedidoAdiciones, setPedidoAdiciones] = useState([]);

  const obtenerAdiciones = async () => {
    try {
      const data = await api.fetch("adiciones");
      setAdiciones(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetAdicion = (cantidadAdicion, adicion) => {
    if (pedidoAdiciones.some((item) => item.id === adicion.id)) {
      const pedidoActualizado = pedidoAdiciones.map((item) => {
        if (item.id === adicion.id) {
          return { ...item, cantidad: item.cantidad + cantidadAdicion };
        }
        return item;
      });

      setPedidoAdiciones(pedidoActualizado);
    } else {
      const adicionConCantidad = { cantidad: cantidadAdicion, ...adicion };
      setPedidoAdiciones([adicionConCantidad, ...pedidoAdiciones]);
    }
  };
  useEffect(() => {
    obtenerAdiciones();
  }, []);

  return { adiciones, pedidoAdiciones, handleSetAdicion, setPedidoAdiciones };
};

export default useAdicion;
