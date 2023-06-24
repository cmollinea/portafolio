import {} from "react";
import {
  FaHome,
  FaUserAstronaut,
  FaCode,
  FaToolbox,
  FaAddressCard,
} from "react-icons/fa";

function Navigation() {
  return (
    <>
      <a
        className=" active-link transition-all duration-300 rounded-lg flex gap-0.5 p-1 items-center "
        href="#home"
      >
        <FaHome />
        Home
      </a>
      <a
        className="  transition-all duration-300 flex gap-0.5 p-1 items-center rounded-lg "
        href="#about-me"
      >
        <FaUserAstronaut />
        AboutMe
      </a>
      <a
        className="  transition-all duration-300 flex gap-0.5 p-1 items-center  rounded-lg "
        href="#skills"
      >
        <FaCode />
        Skills
      </a>
      <a
        className="  transition-all duration-300 flex gap-0.5 p-1 items-center  rounded-lg "
        href="#my-work"
      >
        <FaToolbox />
        MyWork
      </a>
      <a
        className="  transition-all duration-300 flex gap-0.5 p-1 items-center  rounded-lg "
        href="#contact"
      >
        <FaAddressCard />
        Contact
      </a>
    </>
  );
}

export default Navigation;
