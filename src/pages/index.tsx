import AboutSection from "@/components/aboutSection";
import CarouselSection from "@/components/carouselSection";
import DictionarySection from "@/components/dictionarySection";
import FaqSection from "@/components/faqSection";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServiceSection from "@/components/serviceSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DictionarySection />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
      <CarouselSection />
    </main>
  );
}
