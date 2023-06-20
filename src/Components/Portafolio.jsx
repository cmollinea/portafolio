import { useState } from "react";
import Contact from "./Contact";
import Navigation from "./Navigation";
import { FaBars } from "react-icons/fa";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Skills from "./Skills";

function Portafolio() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setNavIsOpen((prev) => !prev)}
        className={`fixed sm:relative
         z-50 flex flex-col transition-all sm:w-52 w-full h-full duration-300 bg-amber-300 text-black place-items-center place-content-center top-0 rigth-0 left-0 bottom-0 text-3xl gap-10 ${
           !navIsOpen ? "left-full sm:hidden " : "left-0 sm:hidden "
         }`}
      >
        <Navigation />
      </div>
      <div className="test bg-slate-200 text-slate-900">
        <nav className="navbar  bg-amber-300/80 flex justify-between gap-4 items-center fixed h-12 z-40 left-0 top-0 right-0 backdrop-blur-sm">
          <h1 className="lg:text-xl text-base overflow-hidden  w-fit ml-4 flex font-extrabold items-center">
            <span className="w-10 overflow-hidden rounded-full">
              <img className="logo " src="../../public/Portafolio/CU.png" />
            </span>
            <span className="ml-2 text-xs">
              ReactJs Dev & Electrical Engineer ⚡
            </span>
          </h1>{" "}
          <div className="sm:flex font-extrabold gap-6 hidden mr-4">
            <Navigation />
          </div>
          <button
            className="sm:hidden mr-2"
            onClick={() => setNavIsOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        </nav>
        <section id="home" className="test h-screen  relative">
          <div className="absolute flex flex-col items-center place-content-center left-0 right-0 top-12 bottom-0">
            <img
              className="h-48 w-48 rounded-full hero"
              src="../public/hero.JPG"
              alt=""
            />
            <h2 className="animated-heading overflow-hidden text-center text-xl w-fit lg:text-4xl font-bold relative">
              {" "}
              Hello there! My name is Carlos.
            </h2>

            <h3 className=" lg:text-xl welcome">
              Welcome to my personal website.
            </h3>
          </div>
        </section>

        <AboutMe />
        <Skills />
        <MyWork />
        <Contact />
      </div>
    </>
  );
}

export default Portafolio;

//Intento de NavBar Dinamico
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav div a");

// window.onscroll = () => {
//   console.log("hola");
//   sections.forEach((sec) => {
//     const top = window.scrollY;
//     const offset = sec.offsetTop - 100;
//     const height = sec.offsetHeight;
//     const id = sec.getAttribute("id");
//     console.log(document.querySelector("nav div a[href*=" + id + "]"));
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((link) => {
//         link.classList.remove("activeLink");
//         document
//           .querySelector("nav div a[href*=" + id + "]")
//           .classList.add("activeLink");
//       });
//     }
//   });
// };
