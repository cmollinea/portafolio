import InfoCard from "./InfoCard";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="test bg-slate-300/20 flex flex-col max-sm:mt-12 items-center place-content-center "
    >
      <div className="py-16 flex flex-col items-center">
        <h1 className="text-center flex flex-col items-center mb-6 text-5xl font-light name-span">
          About Me{" "}
          <hr className="w-[90%] border-2 border-yellow-400 mt-4 name-span" />
        </h1>
        <div className="flex place-content-center  flex-wrap text-center p-6 lg:flex-row gap-10 mx-4">
          <InfoCard
            imageSource={
              "../../public/Portafolio/../../public/Portafolio/university-svgrepo-com.svg"
            }
          >
            Mi nombre es Carlos Yoan, soy cubano, tengo 23 años, ingeniero
            electrico graduado en la Universidad central Marta Abreu de las
            Villas, pero mi pasion por la programacion y las IT me condujo a
            aprender desarrollo web de manera autodidacta
          </InfoCard>
          <InfoCard
            imageSource={
              "../../public/Portafolio/programming-code-signs-svgrepo-com.svg"
            }
          >
            Me fascina React, junto a el he aprendido a usar librerias como
            zustand, react-query, React-Router, React-Hook-Form por mencionar
            algunas. Tambien he de agregar que soy muy fan de CSS y de las
            interfaces limpias y minuciosamente diseñadas.
          </InfoCard>
          <InfoCard
            imageSource={
              "../../public/Portafolio/communication-communication-svgrepo-com.svg"
            }
          >
            Actualmente poseo un nivel de ingles suficiente como para
            comunicarme, soy buen entendedor, todas las criticas las tomo como
            constructivas. Estoy dispuesto a aprender nuevas tecnologias ya que
            el saber no ocupa espacio.
          </InfoCard>
          <InfoCard
            imageSource={
              "../../public/Portafolio/design-skills-svgrepo-com.svg"
            }
          >
            Mis actuales metas son añadir a mi stack TypeScript, NextJS y alguna
            libreria de testing. Dedico todo mi tiempo libre a estudiar,
            aprender nuevas cosas, y practicar creando pequeños proyectos.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
