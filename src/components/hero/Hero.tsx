const Hero = () => {
  return (
    <div className="relative top-0 h-screen w-screen ">
      <div className="z-10 absolute top-0 right-0 w-screen h-screen bg-[#0000004d]"></div>
      <div className="w-screen h-screen absolute bg-fixed">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover bg-fixed object-right"
        >
          <source src="./video-hero.mp4" type="video/webm; codecs=vp9" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
