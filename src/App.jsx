import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen text-black bg-white dark:bg-gray-900 dark:text-white scroll-smooth">
        <ToastContainer />
        <div className="relative w-full mx-auto z-100">
          <Navbar />
        </div>
        <div className="">
          <MainRoutes />{" "}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
