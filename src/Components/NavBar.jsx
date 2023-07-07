import Navigation from "./Navigation";
import { FaBars, FaBolt } from "react-icons/fa";

function NavBar({ navIsOpen, setNavIsOpen }) {
  return (
    <nav className="navbar  bg-black/80 text-gray-100 flex justify-between gap-4 items-center fixed h-12 z-40 left-0 top-0 right-0 backdrop-blur-sm">
      <h1 className="lg:text-xl text-base overflow-hidden  w-fit ml-4 flex font-extrabold items-center">
        <span className="w-10 overflow-hidden rounded-full">
          <img className="logo" src="../../public/Portafolio/CU.png" />
        </span>
        <p className="ml-2 flex items-center gap-1 font-semibold text-lg  max-lg:text-sm">
          ReactJs Dev & Electrical Engineer{" "}
          <FaBolt className="text-xl fill-amber-400 rotate-12" />
        </p>
      </h1>{" "}
      <div
        className={`max-md:fixed max-md:right-0 max-md:left-0 max-md:top-0 flex items-center max-md:flex-col place-content-center max-md:min-h-screen max-md:bg-black/80 max-md:backdrop-blur-lg max-md:text-3xl max-md:z-50 transition-all duration-300 md:gap-2 md:w-fit md:mr-4 ${
          navIsOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
        }`}
        onClick={() => setNavIsOpen((prev) => !prev)}
      >
        <Navigation />
      </div>
      <button
        className="md:hidden mr-2"
        onClick={() => setNavIsOpen((prev) => !prev)}
      >
        <FaBars />
      </button>
    </nav>
  );
}

export default NavBar;
