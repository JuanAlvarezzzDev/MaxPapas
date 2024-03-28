import { useEffect, useState } from "react";

const useProduct = (api) => {
  const [producto, setProducto] = useState({});
  const [listProductos, setListProductos] = useState([]);
  const [adiciones, setAdiciones] = useState([])
  const [salsas, setSalsas] = useState([])
  const [gaseosas, setGaseosas] = useState([])
  
  const obtenerProductos = async () => {
    try {
      const data = await api.fetch("productos");
      // console.log(data.data)
      setListProductos(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerProductosCategoria = async ({id, setState})=>{
    try{
      const data = await api.fetch(`productos/categoria/${id}`)
      setState(data.data)
    } catch (error){
      console.log(error)
    }
  }

  const obtenerProductoId = async (id)=>{
    try{
      const data = await api.fetch(`productos/${id}`);
      // console.log(data)
      return data
      
    } catch (error){
      console.log(error)
    }
  }

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
    obtenerProductosCategoria({ id: 7, setState: setAdiciones });
    obtenerProductosCategoria({ id: 8, setState: setSalsas });
    obtenerProductosCategoria({ id: 9, setState: setGaseosas});
  }, []);
  return {producto, setProducto, listProductos, obtenerProductos, handleClickProductoAgotado, handleSetProducto, obtenerProductoId, adiciones, salsas, gaseosas};
};

export default useProduct;
