import Worditem from "../worditem";
import { words } from "@/mocks/words";
import { useState } from "react";

const WordsSection = () => {
  const [selected, setSelected] = useState<string>("Trasparente");

  return (
    <div className="py-10  px-12 flex flex-col gap-6  h-[85vh] md:h-screen bg-first text-white md:flex-row ">
      <div className=" flex flex-col gap-8 items-start md:justify-center   md:w-[35vw] md:relative md:gap-[4vw]">
        <h2 className="text-4xl md:absolute top-0">In tre parole.</h2>
        {words.map((word) => (
          <Worditem
            data={word}
            key={word.id}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <ul className="hidden overflow-hidden transition-all text-2xl md:flex md:flex-col w-[65vw] justify-center items-center">
        {words.map((word) => {
          return (
            <li className={` w-[80%]  ${selected !== word.title && " hidden"}`}>
              {word.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WordsSection;
