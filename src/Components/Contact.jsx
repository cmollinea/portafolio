import { NavLink, Navigate } from "react-router-dom";
import { FaChevronUp, FaPaperPlane } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const handleSendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_e9w0kwi",
        "template_yc9r5a7",
        formRef.current,
        "XE6Ik-xKdueAIp44K"
      )
      .then(
        (result) => {
          setSending(false);
          console.log(result.text);
        },
        (error) => {
          setSending(false);
          console.log(error.text);
        }
      );
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
      <div className="flex justify-center max-sm:jus relative w-full max-sm:w-[80%] mb-10 gap-10 z-20">
        <form
          onSubmit={(e) => handleSendEmail(e)}
          ref={formRef}
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
            name="name"
            className="py-2 my-0 px-4  rounded-lg outline-none bg-slate-400/20 focus:bg-black transition-all shadow-inner shadow-black duration-300"
            type="text"
            required
            placeholder="Jhon Doe"
          />
          <label
            className="text-xs after:[content:'*'] after:text-red-600 after:ml-0.5 name-span text-slate-100/30 ml-2 font-semibold"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            className="py-2 my-0 px-4  rounded-lg outline-none bg-slate-400/20 focus:bg-black transition-all shadow-inner shadow-black duration-300"
            type="email"
            required
            placeholder="jhondoe@somevalidemail.com"
          />
          <label
            className="text-xs after:[content:'*'] after:text-red-600 after:ml-0.5 name-span text-slate-100/30 ml-2 font-semibold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="py-2 my-0 px-4  rounded-lg outline-none bg-slate-400/20 focus:bg-black transition-all 
              shadow-inner shadow-black duration-300 h-48 wra"
            placeholder="Your message..."
          />
          <button
            type="submit"
            disabled={sending}
            className={` mt-4 w-full h-12 ${
              sending
                ? "bg-amber-400 text-slate-950"
                : "bg-slate-400/20 text-slate-100"
            } shadow-md shadow-black font-semibold text-lg rounded-lg transition duration-300  hover:bg-amber-400 hover:text-slate-950`}
          >
            {sending ? (
              <p className="flex place-content-center items-center gap-2">
                {" "}
                <div className="border-2 border-black border-b-transparent animate-spin rounded-full p-2"></div>
                Sending...
              </p>
            ) : (
              <p className="flex place-content-center items-center gap-2">
                {" "}
                <FaPaperPlane />
                Send a Message
              </p>
            )}
          </button>
        </form>
        <img
          src="images/Mailbox-pana.svg"
          className="z-10 max-lg:hidden max-h-[500px]"
        />
      </div>
      <button className="text-2xl goUpBtn  rounded-full p-2 bg-black text-slate-100 absolute bottom-2 right-5 transition-all duration-300">
        <NavLink onClick={() => Navigate("#home")} to="#home">
          <FaChevronUp />
        </NavLink>
      </button>
    </section>
  );
}

export default Contact;
