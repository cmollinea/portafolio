function Skills() {
  return (
    <section
      id="skills"
      className=" flex place-content-center items-center test"
    >
      <div className="">
        <h1 className="text-center mt-16 text-2xl">Skills </h1>
        <div className="grid grid-cols-2 lg:mx-40 sm:grid-cols-4 place-items-center sm:gap-4 sm:p-16">
          <img
            src="../../public/Portafolio/html-5-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-pulse htmlIco"
          />
          <img
            src="../../public/Portafolio/css-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-pulse cssIco"
          />
          <img
            src="../../public/Portafolio/javascript-svgrepo-com 2.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-pulse jsIco"
          />
          <img
            src="../../public/Portafolio/react-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-spin reactIco"
          />
          <img
            src="../../public/Portafolio/vite-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 hover:animate-pulse viteIco"
          />
          <img
            src="../../public/Portafolio/tailwind-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-pulse tailwindIco"
          />
          <img
            src="../../public/Portafolio/git-icon-logo-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-pulse gitIco"
          />
          <img
            src="../../public/Portafolio/github-142-svgrepo-com.svg"
            className="sm:w-fit w-40 sm:p-4 md:p-10 lg:p-6 p-6 hover:animate-pulse  githubIco"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
