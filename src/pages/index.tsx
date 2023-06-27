import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DictionarySection from "@/components/dictionarySection";
import AboutSection from "@/components/aboutSection";
import CarouselItem from "@/components/carouselItem";
import ServiceSection from "@/components/serviceSection";
export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <DictionarySection />
      <AboutSection />
      <ServiceSection />
    </main>
  );
}
