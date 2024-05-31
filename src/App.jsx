import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";

function App() {
  return (
    <>
      <div className="text-black bg-white dark:bg-gray-900 dark:text-white">
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
