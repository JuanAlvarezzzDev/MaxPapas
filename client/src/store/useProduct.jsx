import { useEffect, useState } from "react";

const useProduct = (api) => {
  const [producto, setProducto] = useState({});
  const [listProductos, setListProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const data = await api.fetch("productos");
      setListProductos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickProductoAgotado = async (id) => {
    try {
      await api.put("productos", id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);
  return {producto, setProducto, listProductos, obtenerProductos, handleClickProductoAgotado, handleSetProducto};
};

export default useProduct;
