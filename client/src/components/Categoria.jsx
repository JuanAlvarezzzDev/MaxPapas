import useQuisco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
  const { handleClickCategoria, categoriaActual } = useQuisco();
  const {id, nombre } = categoria;

  return (
    <div
      className={`${
        categoriaActual.id === id ? "bg-[#ffcc5e9b]" : "bg-transparent"
      } flex items-center gap-4  w-full p-3 hover:bg-[#ffcc5e32] cursor-pointer `}
      onClick={() => handleClickCategoria(id)}
    >
      <div className="text-lg capitalize text-pretty tracking-wider cursor-pointer truncate" type="button">
        {nombre}
      </div>
    </div>
  );
}
