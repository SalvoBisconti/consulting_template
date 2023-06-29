import { faqType } from "@/mocks/faq";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

const FaqItem = (props: { data: faqType }) => {
  const { data } = props;
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  const onHandleShow = (): void => {
    setShowQuestion((prev) => !prev);
  };
  return (
    <div className="cursor-pointer" onClick={onHandleShow}>
      <div className="flex justify-between items-baseline ">
        <h3 className="flex flex-row-reverse items-center font-bold ">
          {data.question}
          <h4 className="-ml-4 text-xs mr-3 text-gray inline">♦︎</h4>
        </h3>
        <div className="px-4">
          <SlArrowDown
            className={`text-xl  "  ${showQuestion && "rotate-180 "} `}
          />
        </div>
      </div>
      <div
        className={`flex gap-4 pl-10 py-8 transition-all  ${
          !showQuestion && "hidden"
        }`}
      >
        <div className="bg-gray h-auto w-8 md:w-4"> </div>
        <p>{data.answer} </p>
      </div>
      <hr className="text-gray mt-2" />
    </div>
  );
};

export default FaqItem;
