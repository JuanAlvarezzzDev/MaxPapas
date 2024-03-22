import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import ModalProducto from "../components/ModalProducto";
import useQuisco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

Modal.setAppElement("#root");

export default function Layout() {
  useAuth({ middleware: "auth" });
  const { modal } = useQuisco();

  return (
    <>
      <div className="md:flex">
        <main className="flex-1 h-screen overflow-y-scroll bg-gray-50 relative scrollbar">
        <Header />
          <Outlet/>
          <Sidebar />
        </main>
        
        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
      <ToastContainer />
      
    </>
  );
}
