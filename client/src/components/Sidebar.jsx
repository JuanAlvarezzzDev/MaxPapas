import useQuisco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export const SideBar = () => {
  const { categorias, showSidebar, setShowSidebar } = useQuisco();
  const { logout, user } = useAuth({ middleware: "auth" });

  return (
    <aside
      className={`top-0  left-0 w-screen h-screen flex z-50 ${showSidebar ? "fixed" : "hidden"} `}
    >
      <div
        className={`flex h-full w-[500px] md:w-1/3 justify-around flex-col items-center bg-white py-5`}
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
        className=" w-screen h-full bg-black opacity-[0.50]"
        onClick={() => setShowSidebar(false)}
      ></div>
    </aside>
  );
}
