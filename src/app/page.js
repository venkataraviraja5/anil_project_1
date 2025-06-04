import ChooseUs from "@/components/ChooseUs";
import IndustrySolutions from "@/components/IndustrySolutions";
import Services from "@/components/Services";
import TechnologiesSection from "@/components/Technologies";
import ContactBanner from "@/components/ContactUsBanner";
import HeroSection from "@/components/Hero";
// components/Benefits.js
export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <TechnologiesSection />
      <IndustrySolutions />
      <ChooseUs />
      <ContactBanner />
    </>
  );
}