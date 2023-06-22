import { Dispatch } from "react";

const List = (props: {
  display: string;
  direction: string;
  gap: string;
  align: string;
  text: string;
  height: string;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { display, direction, gap, align, text, height, setOpenMenu } = props;

  const onHandleClose = (): void => {
    setOpenMenu(false);
  };

  return (
    <ul
      className={`${display} ${direction} ${gap} ${align} ${text} ${height} flex md:flex  justify-evenly   w-1/2 text-white font-bold transition-all duration-1000`}
    >
      <li onClick={onHandleClose}>
        <a
          className="text-black hover:underline underline-offset-8 "
          href="#home"
        >
          Home
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a className=" hover:underline underline-offset-8" href="#chiSono">
          Chi sono
        </a>
      </li>
      <li onClick={onHandleClose}>
        <a
          className="hover:underline underline-offset-8 relative"
          href="#servizi"
        >
          Servizi{" "}
          <span className="absolute rotate-180 -right-7 -top-1 md:-right-4  ">
            {" "}
            {"^"}
          </span>
        </a>
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
