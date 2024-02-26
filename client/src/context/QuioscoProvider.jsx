import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";
import generateTicket from "../hooks/Printer/Ticket";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [adiciones, setAdiciones] = useState([]);
  const [pedidoAdiciones, setPedidoAdiciones] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [modalAdicion, setModalAdicion] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const obtenerCategorias = async () => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      const { data } = await clienteAxios("/api/categorias", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategorias(data.data);
      setCategoriaActual(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerAdiciones = async () => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      const response = await clienteAxios.get("api/adiciones", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAdiciones(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    obtenerCategorias();
    obtenerAdiciones();
  }, []);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  const handleClickModal = () => {
    setModal(!modal);
    setModalAdicion(true);
    setPedidoAdiciones([]);
  };

  const handleClickModalAdicion = () => {
    setModalAdicion(!modalAdicion);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
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

  const handleAgregarPedido = ({ categoria_id, ...producto }) => {
    setPedidoAdiciones([]);

    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
    }
  };

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    setProducto(productoActualizar);
    setModal(!modal);
  };

  const handleEliminarProductoPedido = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success("Eliminado del Pedido");
  };

  const handleSubmitNuevaOrden = async () => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      const { data } = await clienteAxios.post(
        "/api/pedidos",
        {
          total,
          productos: pedido.map((producto) => {
            return {
              id: producto.id,
              cantidad: producto.cantidad,
            };
          }),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPedido([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickCompletarPedido = async (id) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      await clienteAxios.put(`/api/pedidos/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickProductoAgotado = async (id) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      await clienteAxios.put(`/api/productos/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        adiciones,
        pedidoAdiciones,
        handleSetAdicion,
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleClickModalAdicion,
        modalAdicion,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total,
        handleSubmitNuevaOrden,
        handleClickCompletarPedido,
        handleClickProductoAgotado,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
