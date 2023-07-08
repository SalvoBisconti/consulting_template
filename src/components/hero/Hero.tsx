const Hero = () => {
  return (
    <div className="relative top-0 h-screen w-screen " id="home">
      <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#0000004d]"></div>
      <div className="w-full h-full absolute bg-fixed">
        <video
          preload="true"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover bg-fixed object-right"
        >
          <source src="./video/hero.mp4" type="video/mp4" />
          <source src="./video/hero.mp4" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
