import {
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative text-xl flex flex-col place-content-center items-center bg-black/90 text-slate-100 gap-2 left-0 right-0 bottom-0 h-28">
      <div className="flex gap-3">
        <a
          href="https://www.twitter.com/on3on3"
          target="blank"
          className="cursor-pointer hover:text-amber-400 transition duration-300 text-3xl hover:-translate-y-1"
        >
          {" "}
          <FaTwitter />
        </a>
        <a
          href="https://t.me/Mouse_Potat0"
          target="blank"
          className="cursor-pointer hover:text-amber-400 transition duration-300 text-3xl hover:-translate-y-1"
        >
          {" "}
          <FaTelegram />
        </a>
        <a
          href="https://discord.com/users/On3On3#1080"
          target="blank"
          className="cursor-pointer hover:text-amber-400 transition duration-300 text-3xl hover:-translate-y-1"
        >
          {" "}
          <FaDiscord />
        </a>
        <a
          href="https://instagram.com/cymollinea?igshid=NTc4MTIwNjQ2YQ=="
          target="blank"
          className="cursor-pointer hover:text-amber-400 transition duration-300 text-3xl hover:-translate-y-1"
        >
          <FaInstagram />
        </a>
      </div>
      <a
        className="text-xs underline hover:text-yellow-400 transition-colors"
        href="https://stiryset.com/work"
      >
        Work ilustrations by Storyset
      </a>
      <p className="text-base flex gap-1 items-center font-semibold">
        <FaCopyright />
        2023 Made with 💛 by ProcastinatorDev
      </p>
    </footer>
  );
}

export default Footer;
