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
    <section
      id="contact"
      className="min-h-screen mt-10 flex flex-col items-center place-content-center relative"
    >
      <h1 className="text-center mt-16 flex flex-col items-center mb-6 text-5xl font-light name-span">
        Contact{" "}
        <hr className="w-[90%] border-2 border-yellow-400 mt-4 name-span" />
      </h1>
      <div className="flex justify-center relative w-full mb-10 gap-10 z-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex z-20 w-[400px] flex-col p-4 gap-2"
        >
          <label
            className="text-xs after:[content:'*'] after:text-red-600 after:ml-0.5 name-span text-slate-100/30 ml-2 font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            className="py-2 my-0 px-4  rounded-lg outline-none bg-slate-400/20 focus:bg-black transition-all shadow-inner shadow-black duration-300"
            type="text"
            required
            placeholder="Jhon Doe"
            {...register("name")}
          />
          <label
            className="text-xs after:[content:'*'] after:text-red-600 after:ml-0.5 name-span text-slate-100/30 ml-2 font-semibold"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            id="email"
            className="py-2 my-0 px-4  rounded-lg outline-none bg-slate-400/20 focus:bg-black transition-all shadow-inner shadow-black duration-300"
            type="email"
            required
            placeholder="jhondoe@somevalidemail.com"
            {...register("email")}
          />
          <label
            className="text-xs after:[content:'*'] after:text-red-600 after:ml-0.5 name-span text-slate-100/30 ml-2 font-semibold"
            htmlFor="text"
          >
            Message
          </label>
          <textarea
            id="text"
            required
            className="py-2 my-0 px-4  rounded-lg outline-none bg-slate-400/20 focus:bg-black transition-all 
              shadow-inner shadow-black duration-300 h-48 wra"
            placeholder="Your message..."
            {...register("text")}
          />
          <button
            disabled
            className=" text-slate-100 mt-4 w-full h-12 bg-slate-400/20 shadow-md shadow-black font-semibold text-lg rounded-lg transition duration-300 flex place-content-center items-center gap-2 "
          >
            <FaPaperPlane />
            Available Soon!
          </button>
        </form>
        <img
          src="images/Mailbox-pana.svg"
          className="z-10 max-lg:hidden max-h-[500px]"
        />
      </div>
      <button className="text-2xl goUpBtn  rounded-full p-2 bg-black text-slate-100 absolute bottom-4 right-5 transition-all duration-300">
        <NavLink onClick={() => Navigate("#home")} to="#home">
          <FaChevronUp />
        </NavLink>
      </button>
    </section>
  );
}

export default Contact;
