import useQuisco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"

export default function Sidebar() {

    const { categorias } = useQuisco()
    const {logout, user} = useAuth({middleware: 'auth'})

    return (
        <aside className="md:w-72 flex justify-center flex-col items-center bg-[#F9AA00]">

            <p className=" text-xl text-center font-bold w-full bg-black text-white p-2 mb-2">¡Max {user?.name}!</p>

            <div className=" w-full">
                {categorias.map( categoria => (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                    />
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
        </aside>
    )
}
