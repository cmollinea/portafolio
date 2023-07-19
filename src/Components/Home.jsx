import { FaLink, FaChevronDown } from "react-icons/fa";

function Home({ didScrolled }) {
  return (
    <section id="home" className="test h-screen  relative">
      <div className="absolute flex flex-col items-center place-content-center left-0 right-0 top-12 bottom-0">
        <img
          className="h-48 w-48 rounded-full hero"
          src="images/hero.JPG"
          alt="hero"
        />
        <h2 className="animated-heading overflow-hidden text-center text-4xl w-fit h-16 max-sm:text-xl font-semibold relative">
          {" "}
          <p className="name-span">
            Hello there! My name is{" "}
            <span className="text-amber-400  max-sm:text-3xl text-4xl">
              Carlos
            </span>
            .
          </p>
        </h2>

        <h3 className=" lg:text-xl name-span welcome">
          Welcome to my personal website.
        </h3>
        <div className="mt-8 flex max-sm:flex-col gap-4 sm:gap-6 animated-buttons opacity-0 translate-y-6 sm:translate-y-1/2">
          <a
            className="p-2 bg-slate-800 text-base font-semibold max-sm:w-32 place-content-center hover:bg-black rounded-md shadow-md shadow-black hover-1 transition duration-300 flex w-full h-full gap-2 justify-center"
            href="https://github.com/cmollinea/"
            target="blank"
          >
            GitHub
            <FaLink className=" my-auto" />
          </a>
          <a
            className="p-2 bg-slate-800 text-base font-semibold max-sm:w-32 place-content-center hover:bg-black rounded-md shadow-md shadow-black hover-1 transition duration-300 flex w-full h-full gap-2 justify-center"
            href="https://cu.linkedin.com/in/carlos-yoan-mollinea-43206827b"
            target="blank"
          >
            LinkedIn
            <FaLink className=" my-auto" />
          </a>
        </div>
      </div>
      <div
        className={`h-fit w-full opacity-0 scroll-hook text-xs name-span flex flex-col items-center absolute bottom-4 ${
          didScrolled ? " hidden" : ""
        }`}
      >
        <p className=" flex flex-col items-center gap-2 mr-4 ">
          Scroll Down! <FaChevronDown className=" animate-bounce scale-110" />
        </p>
      </div>
    </section>
  );
}

export default Home;
