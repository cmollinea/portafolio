import { useEffect, useRef } from "react";
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
        className="flex sm:text-base gap-0.5 items-center  rounded-lg text-3xl"
        href="#home"
      >
        <FaHome />
        Home
      </a>
      <a
        className="flex sm:text-base gap-0.5 items-center  rounded-lg text-3xl"
        href="#about-me"
      >
        <FaUserAstronaut />
        AboutMe
      </a>
      <a
        className="flex sm:text-base gap-0.5 items-center  rounded-lg text-3xl"
        href="#skills"
      >
        <FaCode />
        Skills
      </a>
      <a
        className="flex sm:text-base gap-0.5 items-center  rounded-lg text-3xl"
        href="#my-work"
      >
        <FaToolbox />
        MyWork
      </a>
      <a
        className="flex sm:text-base gap-0.5 items-center  rounded-lg text-3xl"
        href="#contact"
      >
        <FaAddressCard />
        Contact
      </a>
    </>
  );
}

export default Navigation;
