import { serviceType } from "@/mocks/service";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const ServiceItem = (props: { data: serviceType }) => {
  const { data } = props;

  return (
    <div className="  w-screen flex flex-col content-baseline md:flex-row md:py-10 [&:nth-child(even)]:bg-second">
      <AnimationOnScroll
        animateIn="animate__bounceInLeft"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className="h-[300px] w-[100%] md:h-auto md:w-[100%] group overflow-hidden">
          <img
            src="https://picsum.photos/1200/900"
            alt=""
            className=" object-cover  md:rounded-r-lg group-hover:scale-125 transition-all duration-300 "
            id={data.linkWord}
          />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__bounceInRight"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className=" flex justify-center content-center h-[100%]  ">
          <div className="shadow-xl  w-[90vw] h-auto self-center bg-white rounded-lg z-10 -translate-y-12 md:translate-y-0 md:w-[50vw]  md:-translate-x-14 ">
            <h2 className="text-center text-3xl pt-5 font-bold">
              {data.title}
            </h2>
            <ul className=" p-8 ">
              {data.text.map((item) => {
                return (
                  <li key={item.id} className="pb-4 ">
                    {item.subtitle && (
                      <span className="-ml-4 text-xs mr-1">♦︎</span>
                    )}
                    <h3 className="font-bold w-[100%] inline">
                      {item.subtitle}{" "}
                    </h3>
                    <p className="inline">{item.content}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default ServiceItem;
