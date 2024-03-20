import useQuisco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { categorias, showSidebar, setShowSidebar } = useQuisco();
  const { logout, user } = useAuth({ middleware: "auth" });

  return (
    <aside
      className={`top-0  left-0 w-full h-screen flex z-50 ${showSidebar ? "fixed" : "hidden"} `}
    >
      <div
        className={`flex w-7/12 h-full justify-around flex-col items-center bg-white py-5`}
      >
        <p className=" text-xl text-center font-bold w-full ">
          ¡Max {user?.name}!
        </p>

        <div className=" w-full">
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </div>

        <div className="my-5 px-5 w-full">
          <button
            type="button"
            className="text-center rounded-lg bg-black w-full p-3 font-bold text-white"
            onClick={logout}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>

      <div
        className="w-5/12 h-full bg-black opacity-[0.50]"
        onClick={() => setShowSidebar(false)}
      ></div>
    </aside>
  );
}
