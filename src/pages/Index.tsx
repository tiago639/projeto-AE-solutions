import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <MarqueeStrip />
      <PortfolioSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <VideoSection />
      <PricingSection />
      <AboutSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
