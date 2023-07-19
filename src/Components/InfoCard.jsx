function InfoCard({ children, imageSource }) {
  return (
    <div className=" max-sm:h-fit min-h-60 lg:p-4 border-2 bg-slate-900/40 p-6 border-solid border-amber-300/20 md:w-2/5 cursor-default shadow-black/50 shadow-lg transition-all duration-300 hover:bg-slate-950 hover:border-amber-300  py-4 flex flex-col gap-4 rounded-xl infocard">
      {" "}
      <span className="text-4xl place-content-center flex p-2 rounded-full bg-amber-400 mt mx-auto  w-14 h-14 ">
        <img src={imageSource} />
      </span>{" "}
      <p className="text-lg">{children}</p>
    </div>
  );
}

export default InfoCard;
