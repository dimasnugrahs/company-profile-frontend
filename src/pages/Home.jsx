import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <AboutSection />
    </div>
  );
}
