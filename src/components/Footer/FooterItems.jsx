import { FaPhone, FaTelegram } from "react-icons/fa";
import Logo from "../Header/Logo/Logo";
import { AiFillInstagram } from "react-icons/ai";
import BlurEffect from "../BlurEffect/BlurEffect";

export default function FooterItems() {
  return (
    <footer className="bg-glass p-4 mt-12 relative">
      <BlurEffect sideX="left-0" sideY="bottom-0" />

      <div className="flex items-center justify-between md:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-8">
          <Logo />

          <ul className="flex flex-col gap-4">
            <li className="text-base text-white text-opacity-60 font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="text-base text-white text-opacity-60 font-semibold">
              <a href="#">Leagues</a>
            </li>
            <li className="text-base text-white text-opacity-60 font-semibold">
              <a href="#">News</a>
            </li>
            <li className="text-base text-white text-opacity-60 font-semibold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h5 className="text-xl text-emerald-400 font-semibold">
            About Creator
          </h5>
          <ul className="flex flex-col gap-4">
            <li className="text-base text-white text-opacity-60 font-semibold flex items-center gap-2">
              <a href="tel:09051061529">Contact us</a>
              <FaPhone size={20} />
            </li>
            <li className="text-base text-white text-opacity-60 font-semibold flex items-center gap-2">
              <a
                href="https://www.instagram.com/amirkhanjani01"
                target="_blank"
              >
                Follow
              </a>
              <AiFillInstagram size={20} />
            </li>
            <li className="text-base text-white text-opacity-60 font-semibold flex items-center gap-2">
              <a href="https://t.me/TCODT" target="_blank">
                Telegram
              </a>
              <FaTelegram size={20} />
            </li>
          </ul>
        </div>

        <img
          src="/images/footer-1.png"
          alt="Footer Image"
          className="h-[300px] object-contain"
        />
      </div>
    </footer>
  );
}
