import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="text-black bg-white dark:bg-gray-900 dark:text-white scroll-smooth">
        <ToastContainer />
        <div className="mx-auto ">
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
