import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DictionarySection from "@/components/dictionarySection";
import AboutSection from "@/components/aboutSection";
import ServiceSection from "@/components/serviceSection";
import FaqSection from "@/components/faqSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DictionarySection />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </main>
  );
}
