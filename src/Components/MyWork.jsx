import { FaReact, FaJs, FaHtml5, FaCss3, FaWind } from "react-icons/fa";
import {} from "react-icons/di";
import ProjectCard from "./ProjectCard";

function MyWork() {
  return (
    <section id="my-work" className="min-h-screen bg-slate-300/20  test">
      <div className="flex py-16 flex-col items-center p-4 place-content-center">
        <h1 className="text-center flex flex-col items-center mb-6 text-5xl font-light name-span">
          My Work{" "}
          <hr className="w-[90%] border-2 border-yellow-400 mt-4 name-span" />
        </h1>
        <div className="flex flex-wrap items-center place-content-center md:gap-10 md:px-16 mt-10 mb-16 h-full gap-10 ">
          <ProjectCard
            icons={[
              <FaHtml5 key="1" />,
              <FaCss3 key="2" />,
              <FaReact key="3" />,
              <FaJs key="4" />,
            ]}
            source="images/1.png"
            heading="Rick & Morty Explorer"
            description={
              <>
                A tiny web made with React and using <b>TheRickAndMortyAPI</b>{" "}
                to explore the characters of rick and morty TV series.
              </>
            }
            demo="https:///rick-and-morty-explorer.vercel.app"
          />
          <ProjectCard
            icons={[
              <FaHtml5 key="1" />,
              <FaCss3 key="2" />,
              <FaReact key="3" />,
              <FaJs key="4" />,
            ]}
            source="images/2.png"
            demo="https://fancy-movie-explorer.vercel.app"
            heading="The Movie Explorer DB"
            description={
              <>
                A fancy web made with react and consuming the <b>OMDB Api</b>{" "}
                for search information about movies and TV shows.
              </>
            }
          />
          <ProjectCard
            icons={[
              <FaHtml5 key="1" />,
              <FaCss3 key="2" />,
              <FaReact key="3" />,
              <FaJs key="4" />,
            ]}
            source="images/3.png"
            heading="Country Quiz"
            description={
              <>
                A tiny game made with react and tailwindCSS, using
                RestCountriesApi.
              </>
            }
          />
          <ProjectCard
            icons={[
              <FaHtml5 key="1" />,
              <FaCss3 key="2" />,
              <FaReact key="3" />,
              <FaJs key="4" />,
            ]}
            source="images/4.png"
            heading="Dummy E-Commerce"
            description={
              <>
                A responsive dummy-e-commerce using <b>JSON PLaceholder API</b>{" "}
                made with react, react router and tailwindCSS.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default MyWork;
