import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Api from "../service/apiService";
import {
  useSearch,
  useCategory,
  useAdicion,
  usePedido,
  useProduct,
} from "../store";

const api = new Api();

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const { handleChangeBusqueda, busqueda } = useSearch();

  const { categorias, categoriaActual, handleClickCategoria } =
    useCategory(api);

  const { adiciones, pedidoAdiciones, handleSetAdicion, setPedidoAdiciones } =
    useAdicion(api);

  /*--------contexto Pedido-------------*/

  const {
    pedido,
    setPedido,
    total,
    handleSubmitNuevaOrden,
    handleEliminarProductoPedido,
    handleClickCompletarPedido,
  } = usePedido(api);

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
  /*----------Modal---------------------*/

  const [modal, setModal] = useState(false);
  const [modalAdicion, setModalAdicion] = useState(false);

  const handleClickModal = () => {
    setModal(!modal);
    setModalAdicion(true);
    setPedidoAdiciones([]);
  };

  const handleClickModalAdicion = () => {
    setModalAdicion(!modalAdicion);
  };

  /*----------Context Producto -----------------*/

  const {
    producto,
    setProducto,
    listProductos,
    handleClickProductoAgotado,
    handleSetProducto,
  } = useProduct(api);

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    setProducto(productoActualizar);
    setModal(!modal);
  };

  /*---------Context Search-----------*/

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
        listProductos,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEliminarProductoPedido,
        total,
        handleSubmitNuevaOrden,
        handleClickCompletarPedido,
        handleClickProductoAgotado,
        handleEditarCantidad,
        handleChangeBusqueda,
        busqueda,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
