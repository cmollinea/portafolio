import {
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="absolute text-xl flex flex-col place-content-center items-center bg-amber-300/80 gap-2 left-0 right-0 bottom-0 h-20">
      <div className="flex gap-2">
        <a className="cursor-pointer hover:text-slate-100 transition duration-300 text-2xl">
          <FaLinkedin />
        </a>
        <a className="cursor-pointer hover:text-slate-100 transition duration-300 text-2xl">
          {" "}
          <FaTwitter />
        </a>
        <a className="cursor-pointer hover:text-slate-100 transition duration-300 text-2xl">
          {" "}
          <FaTelegram />
        </a>
        <a className="cursor-pointer hover:text-slate-100 transition duration-300 text-2xl">
          {" "}
          <FaDiscord />
        </a>
        <a className="cursor-pointer hover:text-slate-100 transition duration-300 text-2xl">
          <FaInstagram />
        </a>
      </div>
      <p className="text-base flex gap-1 items-center font-semibold">
        <FaCopyright />
        2023 Made with ❤ by ZanganatorDev
      </p>
    </footer>
  );
}

export default Footer;
