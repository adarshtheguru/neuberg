import FAQ from "../components/Faq";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import TrustNeuberg from "../components/TrustNeuberg";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustNeuberg />
      <Services />
      <FAQ />
    </>
  );
}