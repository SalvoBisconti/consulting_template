import { provaType } from "../carousel/Carousel";

const CarouselItem = (props: { data: provaType }) => {
  const { data } = props;

  return (
    <div className="flex h-full gap-10">
      <div className="h-full  border-l-4 border-gray"> </div>
      <div className="pb-12">
        <h2 className="text-gray drop-shadow-lg text-5xl pb-8">
          {" "}
          {data.id}. <span className="text-first text-2xl"> STEP</span>
        </h2>
        <p>{data.do}</p>
      </div>
    </div>
  );
};
export default CarouselItem;
