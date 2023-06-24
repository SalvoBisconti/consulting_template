import { useState, useEffect } from "react";
import List from "../list";
import Hamburger from "../hamburger";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onHandleClick = (): void => {
    setOpenMenu((prev) => !prev);
  };

  const [scroll, setScroll] = useState<number>(0);

  const onHandleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[60px] bg-trasparent fixed w-screen p-3  flex justify-between items-center transition-all duration-700 z-20 ${
        scroll > 0 && " md:bg-first  md:fixed "
      }`}
    >
      <h2 className="text-white">LOGO </h2>
      <button
        className={` group md:hidden z-30 ${
          scroll > 0 && "fixed top-4 right-3"
        }`}
        onClick={onHandleClick}
      >
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[48px] h-[48px] transform transition-all bg-slate-800  ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md ${
            scroll > 0 && " ring-4 ring-opacity-30 "
          } `}
        >
          <div className="flex flex-col justify-between w-[24px] h-[24px] transform transition-all duration-300 origin-center overflow-hidden ">
            <div
              className={`bg-background h-[3px] w-8 transform transition-all duration-300 origin-left ${
                openMenu && "rotate-[42deg]"
              }`}
            ></div>
            <div
              className={`bg-background h-[3px] w-1/2 rounded transform transition-all duration-300  0 ${
                openMenu && "hidden"
              } `}
            ></div>
            <div
              className={`bg-background h-[3px] w-8 transform transition-all duration-300 origin-left ${
                openMenu && "-rotate-[42deg]"
              }`}
            ></div>
          </div>
        </div>
      </button>
      <List
        display="hidden"
        direction="flex-row"
        gap=""
        height=""
        text={` ${scroll > 0 ? "text-lg" : "text-xl"} `}
        align=""
        setOpenMenu={setOpenMenu}
      />

      <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};
export default Navbar;
