import { useEffect, useState } from "react";

const useCategory = (api) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

  const obtenerCategorias = async () => {
    try {
      const data = await api.fetch("categorias");
      setCategorias(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);
  return { categorias, categoriaActual, handleClickCategoria };
};

export default useCategory;
