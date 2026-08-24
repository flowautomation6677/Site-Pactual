import CorporateGlassHeader from "@/components/header/CorporateGlassHeader";
import HeroSection from "@/components/hero/HeroSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import dynamic from "next/dynamic";

// Abaixo da dobra: Lazy load forçado para não bloquear o FCP/LCP
const VehicleSelector = dynamic(() => import("@/components/sections/VehicleSelector"), { ssr: true });
const BenefitsBar = dynamic(() => import("@/components/sections/BenefitsBar"), { ssr: true });
const ComparisonTable = dynamic(() => import("@/components/sections/ComparisonTable"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"), { ssr: true });
const SocialProof = dynamic(() => import("@/components/sections/SocialProof"), { ssr: true });
const FaqAccordion = dynamic(() => import("@/components/sections/FaqAccordion"), { ssr: true });
const RiskSection = dynamic(() => import("@/components/sections/RiskSection"), { ssr: true });
const PricingPlans = dynamic(() => import("@/components/sections/PricingPlans"), { ssr: true });
const PartnersSection = dynamic(() => import("@/components/sections/PartnersSection"), { ssr: true });
const InstitutionalFooter = dynamic(() => import("@/components/footer/InstitutionalFooter"), { ssr: true });
const StickyMobileConversionFooter = dynamic(() => import("@/components/footer/StickyMobileConversionFooter"), { ssr: false });

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
