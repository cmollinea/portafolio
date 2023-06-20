function AboutMe() {
  return (
    <section
      id="about-me"
      className=" flex flex-col mt-12 items-center place-content-center test"
    >
      <div className="mt-16">
        <h1 className="text-center text-2xl">About Me </h1>
        <div className="flex place-content-center  flex-wrap text-center p-6 lg:flex-row gap-10 mx-4">
          <p className="lg:p-4 border-2 border-solid place-content-center  duration-300 border-amber-300 sm:w-2/5 hover:shadow-lg hover:shadow-amber-400/50 py-4 rounded-xl">
            {" "}
            <span className="text-4xl  place-content-center flex p-2 rounded-full icon  mx-auto w-14  h-fit ">
              <img src="../../public/Portafolio/../../public/Portafolio/university-svgrepo-com.svg" />
            </span>{" "}
            Mi nombre es Carlos Yoan Mollinea Perez,soy cubano, tengo 23 años,
            ingeniero electrico graduado en la Universidad central Marta Abreu
            de las Villas, pero mi pasion por la programacion y las IT me empujo
            a aprender desarrollo web de manera autodidacta
          </p>
          <p className="lg:p-4 border-2 border-solid duration-300 border-amber-400 sm:w-2/5 hover:shadow-lg hover:shadow-amber-400/50 py-4 rounded-xl">
            {" "}
            <span className="text-4xl  place-content-center flex p-2 rounded-full icon  mx-auto w-16 h-fit ">
              <img src="../../public/Portafolio/programming-code-signs-svgrepo-com.svg" />
            </span>
            Me fascina React, junto a el he aprendido a usar librerias como
            zustand, TanStack/react-query, React-Router, React-Hook-Form por
            mencionar algunas. Tambien he de agregar que soy muy fan de CSS y de
            las interfaces limpias y minuciosamente diseñadas.
          </p>
          <p className="lg:p-4 border-2 border-solid duration-300 border-amber-400 sm:w-2/5 hover:shadow-lg hover:shadow-amber-400/50 py-4 rounded-xl">
            {" "}
            <span className="text-4xl  place-content-center flex p-2 rounded-full icon  mx-auto w-16  h-fit ">
              <img src="../../public/Portafolio/communication-communication-svgrepo-com.svg" />
            </span>{" "}
            Actualmente poseo un nivel de ingles suficiente como para
            comunicarme con un equipo de trabajo, soy buen entendedor, todas las
            criticas las tomo como constructivas y solo me enfoco en limar
            asperezas. Estoy dispuesto a aprender nuevas tecnologias ya que el
            saber no ocupa espacio.
          </p>
          <p className="lg:p-4 border-2 border-solid duration-300 border-amber-400 sm:w-2/5 hover:shadow-lg hover:shadow-amber-400/50 py-4 rounded-xl">
            <span className="text-4xl  place-content-center flex p-2 rounded-full icon  mx-auto w-14  h-fit ">
              <img src="../../public/Portafolio/design-skills-svgrepo-com.svg" />
            </span>
            En un futuro cercano quiero aprender a usar TypeScript, asi como
            NextJS y alguna libreria de testing, siendo estos mis metas ahora
            mismo, dedico todo mi tiempo libre a aprender nuevas cosas, y
            navegar en la WWW buscando interfaces que me cautiven para intentar
            recrearlas por mi cuenta
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
