import CorporateGlassHeader from "@/components/header/CorporateGlassHeader";
import HeroSection from "@/components/hero/HeroSection";
import VehicleSelector from "@/components/sections/VehicleSelector";
import BenefitsBar from "@/components/sections/BenefitsBar";
import ComparisonTable from "@/components/sections/ComparisonTable";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import FaqAccordion from "@/components/sections/FaqAccordion";
import RiskSection from "@/components/sections/RiskSection";
import PricingPlans from "@/components/sections/PricingPlans";
import PartnersSection from "@/components/sections/PartnersSection";
import InstitutionalFooter from "@/components/footer/InstitutionalFooter";
import StickyMobileConversionFooter from "@/components/footer/StickyMobileConversionFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-pactual-blue/30 selection:text-pactual-graphite">
      <FloatingWhatsApp />
      <CorporateGlassHeader />
      
      <div id="cota-agora">
        <HeroSection />
      </div>
      
      <RiskSection />
      
      <VehicleSelector />
      <div id="coberturas">
        <BenefitsBar />
      </div>
      
      <PricingPlans />
      
      <ComparisonTable />
      <div id="como-funciona">
        <HowItWorks />
      </div>
      <div id="depoimentos">
        <SocialProof />
      </div>
      <div id="faq">
        <FaqAccordion />
      </div>
      
      <PartnersSection />
      <InstitutionalFooter />
      <StickyMobileConversionFooter />
    </main>
  );
}
