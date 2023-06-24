function Skills() {
  return (
    <section
      id="skills"
      className="test flex flex-col place-content-center items-center"
    >
      <h1 className="text-center mt-16 text-2xl">Skills </h1>
      <div className=" grid grid-cols-2 max-md:w-2/3 gap-10 p-6 md:grid-cols-4 lg:grid-cols-8 lg:mx-28">
        <img
          src="../../public/Portafolio/html-5-svgrepo-com.svg"
          className=" w-fit hover:animate-pulse htmlIco"
        />
        <img
          src="../../public/Portafolio/css-svgrepo-com.svg"
          className=" w-fit hover:animate-pulse cssIco"
        />
        <img
          src="../../public/Portafolio/javascript-svgrepo-com 2.svg"
          className=" w-fit hover:animate-pulse jsIco"
        />
        <img
          src="../../public/Portafolio/react-svgrepo-com.svg"
          className=" w-fit hover:animate-spin reactIco"
        />
        <img
          src="../../public/Portafolio/vite-svgrepo-com.svg"
          className=" w-fit hover:animate-pulse viteIco"
        />
        <img
          src="../../public/Portafolio/tailwind-svgrepo-com.svg"
          className=" w-fit hover:animate-pulse tailwindIco"
        />
        <img
          src="../../public/Portafolio/git-icon-logo-svgrepo-com.svg"
          className=" w-fit hover:animate-pulse gitIco"
        />
        <img
          src="../../public/Portafolio/github-142-svgrepo-com.svg"
          className=" w-fit hover:animate-pulse  githubIco"
        />
      </div>
    </section>
  );
}

export default Skills;
