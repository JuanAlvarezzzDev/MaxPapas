import useQuisco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
  const { handleClickCategoria, categoriaActual } = useQuisco();
  const { icono, id, nombre } = categoria;

  return (
    <div
      className={`${
        categoriaActual.id === id ? "bg-amber-400" : "bg-white"
      } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
    >
      <img
        alt="Imagen Icono"
        src={`/img/icono_${icono}.svg`}
        className="w-12"
      />
      <div className="text-lg font-bold cursor-pointer truncate" type="button">
        {nombre}
      </div>
    </div>
  );
}
