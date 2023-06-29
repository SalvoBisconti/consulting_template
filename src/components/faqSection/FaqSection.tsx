import FaqItem from "../faqItem";
import { faq } from "@/mocks/faq";

const FaqSection = () => {
  return (
    <div className="setPage" id="faq">
      <div className="setPageContent w-[85%] md:w-[70%] ">
        {faq.map((item) => (
          <FaqItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
