import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaHackerNewsSquare,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";

function MyWork() {
  return (
    <section id="my-work" className="min-h-screen test">
      <div className="flex flex-col items-center p-4 place-content-center">
        <h1 className="text-center mt-16 text-2xl">My Work </h1>
        <div className="flex flex-wrap items-center place-content-center flex-col md:grid-cols-2 md:grid max-md:grid max-md:grid-cols-1 md:gap-10 md:p-10  h-full gap-10 mt-10 ">
          <ProjectCard
            icons={[
              <FaHtml5 key="1" />,
              <FaCss3 key="2" />,
              <FaReact key="3" />,
              <FaJs key="4" />,
            ]}
            source="../../public/1.JPG"
            heading="Rick & Morty Explorer"
            description={
              <>
                A tiny web made with React and using <b>TheRickAndMortyAPI</b>{" "}
                to explore the characters of rick and morty TV series.
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
            source="../../public/2.JPG"
            heading="The Movie Explorer DB"
            description={
              <>
                A fancy web made with react and consuming the <b>OMDB Api</b>{" "}
                for search movies and TV sows and et som information about them
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
            source="../../public/3.JPG"
            heading="Star Wars miniPedia"
            description={
              <>
                A tiny web made with react and react router inspired on{" "}
                <i>@moureDev month challenge</i> consuming <b>SWAPI</b>. Styled
                with tailwindcss.
              </>
            }
          />
          <ProjectCard
            icons={[
              <FaHtml5 key="1" />,
              <FaCss3 key="2" />,
              <FaReact key="3" />,
              <FaJs key="4" />,
              <FaHackerNewsSquare key="5" />,
            ]}
            source="../../public/4.JPG"
            heading="Dummy E-Commerce"
            description={
              <>
                A responsive e-commerce using <b>JSON PLaceholder API</b> made
                with react, react router and tailwindcss. Filters, Pop-ups and
                cart were includes.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default MyWork;
