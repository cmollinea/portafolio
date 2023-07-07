function Skills() {
  return (
    <section
      id="skills"
      className="min-h-fit py-16 flex flex-col  items-center"
    >
      <h1 className="text-center flex flex-col items-center mb-6 text-5xl font-light name-span">
        Current Stack{" "}
        <hr className="w-[90%] border-2 border-yellow-400 mt-4 name-span" />
      </h1>
      <hr className="w-fit name-span" />
      <div className=" grid grid-cols-2  gap-10 md:gap-20 p-6 md:grid-cols-4 lg:grid-cols-8 justify-center">
        <img
          src="../../public/Portafolio/html-5-svgrepo-com.svg"
          className=" w-20 hover:animate-pulse htmlIco"
        />
        <img
          src="../../public/Portafolio/css-svgrepo-com.svg"
          className=" w-20 hover:animate-pulse cssIco"
        />
        <img
          src="../../public/Portafolio/javascript-svgrepo-com 2.svg"
          className=" w-20 hover:animate-pulse jsIco"
        />
        <img
          src="../../public/Portafolio/react-svgrepo-com.svg"
          className=" w-20 hover:animate-spin reactIco"
        />
        <img
          src="../../public/Portafolio/vite-svgrepo-com.svg"
          className=" w-20 hover:animate-pulse viteIco"
        />
        <img
          src="../../public/Portafolio/tailwind-svgrepo-com.svg"
          className=" w-20 hover:animate-pulse tailwindIco"
        />
        <img
          src="../../public/Portafolio/git-icon-logo-svgrepo-com.svg"
          className=" w-20 hover:animate-pulse gitIco"
        />
        <img
          src="../../public/Portafolio/github-142-svgrepo-com.svg"
          className=" w-20 hover:animate-pulse fill-white githubIco"
        />
      </div>
    </section>
  );
}

export default Skills;
