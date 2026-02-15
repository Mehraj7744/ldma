import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import StatsSection from "../components/home/StatsSection";
import ProcessSection from "../components/home/ProcessSection";
import PortfolioSection from "../components/home/PortfolioSection";
import TeamSection from "../components/home/TeamSection";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  return (
    <div className="bg-gray-900 text-yellow-400 overflow-hidden">

      <Hero />
      <StatsSection />
      <AboutSection />
      <ProcessSection/>
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <Testimonials />
      <FAQSection />
      <CTA />

    </div>
  );
}
