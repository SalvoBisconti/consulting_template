import CarouselItem from "../carouselItem";
import { useState } from "react";

export interface provaType {
  id: number;
  do: string;
}
const Carousel = () => {
  const prova: provaType[] = [
    {
      id: 1,
      do: "Check-up gratuito",
    },
    {
      id: 2,
      do: "Check-up pagamento",
    },
    {
      id: 3,
      do: "Check-up futtutu",
    },
    {
      id: 4,
      do: "Check-up futtutu",
    },
  ];
  const [carouselPosition, setCarouselPosition] = useState<number>(0);

  const next = (): void =>
    carouselPosition > 2
      ? setCarouselPosition(0)
      : setCarouselPosition((prev) => prev + 1);

  const prev = (): void =>
    carouselPosition === 0
      ? setCarouselPosition(3)
      : setCarouselPosition((prev) => prev - 1);

  console.log(carouselPosition);
  return (
    <div className="flex border-2 gap-4 ">
      <button className="text-3xl self-center" onClick={prev}>
        {"<"}
      </button>
      <div className="setPageContent border-2 h-[200px] border-red-500">
        <CarouselItem data={prova[carouselPosition]} />
      </div>
      <button className="text-3xl self-center" onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
