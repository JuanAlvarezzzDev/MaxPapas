import { formatearDinero } from "../helpers";
import useQuisco from "../hooks/useQuiosco"

const Adicion = ({ adicion, botonAgregar = false }) => {
  const {handleSetAdicion} =useQuisco();
  const { nombre, precio } = adicion;
  return (
    <div className="flex w-full gap-5 text-base">
      <p>{nombre}</p>
      <p>{formatearDinero(precio)}</p>
      {botonAgregar && (
        <button
          type="button"
          className="rounded-lg bg-black text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleSetAdicion(adicion);
          }}
        >
          Agregar
        </button>
      )}
    </div>
  );
};

export default Adicion;
