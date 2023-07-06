import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const AboutSection = () => {
  return (
    <div className="setPage bg-second  " id="chiSono">
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className="setPageContent md:w-[65vw] text-center md:text-pDesk ">
          <h3 className="font-bold text-3xl text-first mb-10 md:text-titleDesk">
            {" "}
            Chi sono ?
          </h3>
          <p>
            Sono Fabio Massi, classe 88, da sempre appassionato di mercati
            finanziari ed innovazioni, la mia famiglia si occupa da oltre 40
            anni di consulenza assicurativa e finanziaria a privati ed aziende,
            ed è grazie a questa esperienza accumulata negli anni che sono
            diventato Broker assicurativo prima, e Consulente Finanziario
            Indipendente adesso. Conosco bene le dinamiche che stanno dietro la
            consulenza e la vendita di prodotti finanziari e se ho fatto la
            scelta di essere Consulente Fin. Indipendente è proprio per offrire
            ai miei clienti un'Indipendenza del Servizio ma soprattutto un'
            Indipendenza del Soggetto.
          </p>

          <h3 className="font-bold mt-5"> Percorso di studi:</h3>
          <ul className="md:flex justify-between ">
            <li>🎓 L. Economia Bancaria Finanziaria ed Assicurativa</li>
            <li>🎓 LM. Economia e Management</li>
          </ul>
          <img
            src="/profile.png"
            alt="Fabio Massi consulente finanziario"
            className="absolute -right-20 md:-right-80  bottom-2 md:-bottom-12 w-[400px] md:w-[450px] brightness-0 invert -z-10 "
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default AboutSection;
