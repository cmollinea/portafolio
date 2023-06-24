import { NavLink, Navigate } from "react-router-dom";
import { FaChevronUp, FaPaperPlane } from "react-icons/fa";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="min-h-screen test relative">
      <div className="flex flex-col items-center place-content-center">
        <h1 className=" text-2xl mt-16">Contact </h1>{" "}
        <div className="flex justify-center w-full gap-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-4 gap-2"
          >
            <label
              className="text-xs text-slate-700 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              className="py-2 my-0 px-4 w-80  rounded-lg outline-none bg-slate-300 focus:bg-amber-300/50 transition-all duration-300"
              type="text"
              placeholder="Jhon Doe"
              {...register("name")}
            />
            <label
              className="text-xs text-slate-700 font-semibold"
              htmlFor="email"
            >
              E-Mail
            </label>
            <input
              id="email"
              className="py-2 my-0 px-4 w-80  rounded-lg outline-none bg-slate-300 focus:bg-amber-300/50 transition-all duration-300"
              type="email"
              placeholder="jhondoe@somevalidemail.com"
              {...register("email")}
            />
            <label
              className="text-xs text-slate-700 font-semibold"
              htmlFor="text"
            >
              Message
            </label>
            <textarea
              id="text"
              className="py-2 my-0 px-4 w-80  rounded-lg outline-none bg-slate-300 focus:bg-amber-300/50 transition-all duration-300 h-48 wra"
              placeholder="Your message..."
              {...register("text")}
            />
            <button className="border-2 border-solid border-amber-300 mt-4 w-full h-12 bg-amber-300 shadow  hover:bg-amber-400 hover:shadow hover:shadow-black font-semibold text-lg rounded-lg transition flex place-content-center items-center gap-2 ">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
        <button className="text-2xl goUpBtn border rounded-full p-2 bg-amber-300 absolute bottom-24 right-5 transition-all duration-300">
          <NavLink onClick={() => Navigate("#home")} to="#home">
            <FaChevronUp />
          </NavLink>
        </button>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
