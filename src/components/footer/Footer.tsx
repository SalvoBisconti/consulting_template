import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className=" bg-first text-white p-10 flex flex-col items-center gap-9 md:h-[250px] md:justify-between  "
      id="contatti"
    >
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className="flex flex-col items-center gap-9 md:flex-row md:justify-between md:w-[90vw] ">
          <h1 className="text-xl font-bold"> INVERTIR DI FABIO MASSI</h1>
          <div className="flex flex-col  items-center  gap-2">
            <h3>SOCIAL</h3>
            <ul className="flex gap-5 text-2xl  ">
              <li className="hover:text-gray ">
                <Link href="" target="_blank">
                  <AiFillLinkedin />
                </Link>
              </li>
              <li className="hover:text-gray">
                <Link href="mailto:fabio@gmail.com" target="_blank">
                  <SiGmail />
                </Link>
              </li>
              <li className="hover:text-gray">
                <Link href="" target="_blank">
                  <IoLogoWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  items-center  gap-2">
            <h3> INDIRIZZO</h3>
            <p className="text-zinc-400">
              Via delle strade 10 , Civitanova Marche
            </p>
          </div>
          <div className="flex flex-col  items-center  gap-2">
            <h3> RECAPITI TELEFONICI</h3>
            <p className="text-zinc-400">Cellulare: +39 3203030303</p>
          </div>
        </div>
        <p className="text-[14px]  text-center md:text-base md:mt-16">
          Copyright © 2023 | All rights reserved | Fabio Massi P.IVA: 4747494
        </p>
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;
