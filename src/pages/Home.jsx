import Benefits from "../components/Benefits";
import FAQ from "../components/Faq";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import TrustNeuberg from "../components/TrustNeuberg";
import Location from "../components/Location";
import Accreditations from "../components/Accreditations";
import ScrollToTopButton from "../components/ScrollToTopButton";
import FloatingCTA from "../components/FloatingCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustNeuberg />
      <Services />
      <Benefits />
      <Testimonials />
      <Location />
      <Accreditations />
      <FAQ />
      <ScrollToTopButton />
      <FloatingCTA />
    </>
  );
}