import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Footer from "./Footer";

const scroll = (sections, navLinks, didScrolled, setDidScrolled) => {
  addEventListener("scroll", () => {
    let about = document.querySelector("nav div a.about");
    if (!didScrolled && about.classList.contains("active-link")) {
      setDidScrolled(true);
    }
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          document
            .querySelector("nav div a[href*=" + id + "]")
            .classList.add("active-link");
        });
      }
    });
  });
};

function Portafolio() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [didScrolled, setDidScrolled] = useState(false);

  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav div a");
    scroll(sections, navLinks, didScrolled, setDidScrolled);
  });

  return (
    <>
      <div className="test bg-slate-900 text-slate-100">
        <NavBar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <Home didScrolled={didScrolled} />
        <AboutMe />
        <Skills />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Portafolio;
