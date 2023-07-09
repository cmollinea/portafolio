import InfoCard from "./InfoCard";
import MarkedText from "./MarkedText";

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
        <div className="flex place-content-center flex-wrap text-center p-6 lg:flex-row gap-10 mx-4">
          <InfoCard imageSource={"images/university-svgrepo-com.svg"}>
            My name is Carlos Yoan, I am Cuban, 23 y/o,{" "}
            <MarkedText>electrical engineer </MarkedText>
            graduated from Marta Abreu de las Villas Central University, but my
            passion for <MarkedText>programming</MarkedText> and the ITs led me
            to learn web development <MarkedText>self-taught.</MarkedText>
          </InfoCard>
          <InfoCard
            imageSource={"images/programming-code-signs-svgrepo-com.svg"}
          >
            <MarkedText>Love React!</MarkedText> Along with it I have learned to
            use libraries such as zustand, react-query, React-Router,
            React-Hook-Form to name a few. Big fan of CSS, TailwindCSS,{" "}
            <MarkedText>clean interfaces</MarkedText>, as well as{" "}
            <MarkedText>great UXs.</MarkedText>
          </InfoCard>
          <InfoCard
            imageSource={"images/communication-communication-svgrepo-com.svg"}
          >
            Currently I have a <MarkedText>sufficient</MarkedText> level of
            <MarkedText> English</MarkedText> to communicate.{" "}
            <MarkedText>Proactive</MarkedText>,
            <MarkedText> good listener</MarkedText>, prepared to learn{" "}
            <MarkedText>new technologies</MarkedText> and give my best in the
            attempt.
          </InfoCard>
          <InfoCard imageSource={"images/design-skills-svgrepo-com.svg"}>
            My current goals are to add TypeScript, NextJS and some testing
            libraries to my stack. Spend all my free time{" "}
            <MarkedText>studying</MarkedText>, <MarkedText>learning</MarkedText>{" "}
            new things, and <MarkedText>practicing.</MarkedText>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
