const Hero = () => {
  return (
    <div className="relative top-0 h-screen w-screen flex " id="home">
      <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#0000004d]"></div>
      <div className="w-full h-full absolute bg-fixed">
        <video
          preload="auto"
          autoPlay
          loop
          controls
          muted
          playsInline
          className="absolute w-full h-full object-cover bg-fixed object-right"
        >
          <source src="./video/hero.mp4" type="video/mp4" />
          <source src="./video/hero.mp4" type="video/webm" />
        </video>
      </div>
      <h1 className="z-10 self-end text-5xl text-white  p-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        dolore provident adipisci quod!
      </h1>
    </div>
  );
};

export default Hero;
