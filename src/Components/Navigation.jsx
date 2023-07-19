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
    <div className="flex max-md:flex-col max-md:gap-4 gap-2">
      <a
        className="active-link transition-all ease-in duration-200 flex gap-0.5 max-md:gap-3 p-1 items-center rounded-lg hover:-translate-y-1"
        href="#home"
      >
        <FaHome />
        Home
      </a>
      <a
        className="about transition-all ease-in duration-200 flex gap-0.5 max-md:gap-3 p-1 items-center rounded-lg hover:-translate-y-1 "
        href="#about-me"
      >
        <FaUserAstronaut />
        AboutMe
      </a>
      <a
        className="transition-all ease-in duration-200 flex gap-0.5 max-md:gap-3 p-1 items-center rounded-lg hover:-translate-y-1 "
        href="#skills"
      >
        <FaCode />
        Skills
      </a>
      <a
        className="transition-all ease-in duration-200 flex gap-0.5 max-md:gap-3 p-1 items-center rounded-lg hover:-translate-y-1 "
        href="#my-work"
      >
        <FaToolbox />
        MyWork
      </a>
      <a
        className="transition-all ease-in duration-200 flex gap-0.5 max-md:gap-3 p-1 items-center rounded-lg hover:-translate-y-1 "
        href="#contact"
      >
        <FaAddressCard />
        Contact
      </a>
    </div>
  );
}

export default Navigation;
