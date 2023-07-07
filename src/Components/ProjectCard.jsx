/* eslint-disable react/prop-types */
function ProjectCard({ icons, source, heading, description }) {
  return (
    <div className="h-52 rounded-2xl relative overflow-hidden max-w-[380px] w-full md:h-48 projectCard transition-all shadow-lg shadow-black/80">
      <img className="h-full w-full transition-all duration-500" src={source} />
      <div className="absolute bg-gradient-to-t from-slate-900/90 to-slate-950/90 text-slate-100 h-full w-full sm:translate-y-full bottom-0">
        <h2 className="text-left text-2xl name-span font-semibold absolute bottom-28 p-4">
          {heading}
        </h2>
        <p className="text-left text-base name-span p-4 absolute bottom-8">
          {description}
        </p>
        <div className="flex gap-2 absolute left-4 bottom-2">
          {icons.map((ico, index) => (
            <div
              key={index}
              className=" w-14 h-8 items-center text-xl flex justify-center  bg-black text-amber-300 rounded-2xl transition duration-500  hover:text-slate-100 hover:bg-slate-900"
            >
              {ico}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
