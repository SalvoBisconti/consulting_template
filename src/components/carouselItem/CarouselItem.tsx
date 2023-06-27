const CarouselItem = () => {
  const prova = {
    title: "Fase 1",
    do: "Check-up gratuito",
  };

  return (
    <div>
      <h2> {prova.title}</h2>
      <p>{prova.do}</p>
    </div>
  );
};
export default CarouselItem;
