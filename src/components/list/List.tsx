import { Dispatch } from "react";
import { useState } from "react";

const List = (props: {
  display: string;
  direction: string;
  gap: string;
  align: string;
  text: string;
  height: string;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
  scroll: number;
}) => {
  const { display, direction, gap, align, text, height, setOpenMenu, scroll } =
    props;

  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);

  const onHandleClose = (): void => {
    setOpenMenu((prev) => !prev);
  };

  const onHandleChangeStatus = (): void => {
    setShowSubtitle((prev) => !prev);
  };

  const someFunction = (): void => {
    setOpenMenu((prev) => !prev);
    setShowSubtitle((prev) => !prev);
  };

  return (
    <ul
      className={`${display} ${direction} ${gap} ${align} ${text} ${height} flex md:flex  justify-evenly   w-1/2 text-white font-bold transition-all duration-1000`}
    >
      <li onClick={onHandleClose}>
        <a className=" hover:underline underline-offset-8 " href="#home">
          Home
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className=" hover:underline underline-offset-8" href="#chiSono">
          Chi sono
        </a>
      </li>
      <li>
        <div className="" onClick={onHandleChangeStatus}>
          <a className="hover:underline underline-offset-8 relative">
            Servizi
            <span
              className={`absolute  -right-7 top-1 md:-right-4  md:top-0 transition-all ${
                showSubtitle && "rotate-180 -translate-y-2 "
              } `}
            >
              {"^"}
            </span>
          </a>
        </div>
        <ul
          className={`  text-xl flex flex-col items-end gap-1 mt-2 transition-all md:items-start md:absolute    ${
            !showSubtitle && " hidden"
          } ${scroll > 0 && "md:bg-first md:p-2 rounded"}`}
        >
          <li onClick={someFunction}>
            <a
              className="hover:underline underline-offset-8 relative z-30 "
              href="#analisi"
            >
              Area analisi
            </a>
          </li>
          <li onClick={someFunction}>
            <a
              className="hover:underline underline-offset-8 relative z-30 "
              href="#pianificazione"
            >
              Pianificazione
            </a>
          </li>
          <li onClick={someFunction}>
            <a
              className="hover:underline underline-offset-8 relative z-30 "
              href="#investimenti"
            >
              Investimenti
            </a>
          </li>
          <li onClick={someFunction}>
            <a
              className="hover:underline underline-offset-8 relative z-30 "
              href="#altro"
            >
              Altro
            </a>
          </li>
        </ul>
        <div
          className={`absolute top-0 left-0 w-screen h-screen z-20  bg-transparent ${
            !showSubtitle && "hidden"
          }`}
          onClick={onHandleChangeStatus}
        ></div>
      </li>
      <li onClick={onHandleClose}>
        <a className="hover:underline underline-offset-8" href="#faq">
          FAQ
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className="hover:underline underline-offset-8" href="#contatti">
          Contatti
        </a>
      </li>
    </ul>
  );
};

export default List;
