import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustedPartner } from "@/components/home/TrustedPartner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <TrustedPartner />
    </>
  );
}
