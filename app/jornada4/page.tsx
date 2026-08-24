import ScrollStoryFrames from "@/components/sections/ScrollStoryFrames";
import CorporateGlassHeader from "@/components/header/CorporateGlassHeader";
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
const StickyMobileConversionFooter = dynamic(() => import("@/components/footer/StickyMobileConversionFooter"));

export default function Jornada4Page() {
  return (
    <main className="min-h-screen font-sans selection:bg-pactual-blue/30 selection:text-pactual-graphite">
      <FloatingWhatsApp />
      <CorporateGlassHeader />
      
      <div id="cota-agora">
        <ScrollStoryFrames 
          frameCount={70}
          startIndex={1}
          imagePrefix="/teste/frames_7fps/frame_"
          mobileImagePrefix="/teste/frames_7fps_9x16/frame_"
          mobileBreakpoint={768}
          imageExtension=".webp"
          padLength={3}
        />
      </div>
      
      {/* Container com fundo branco para sobrepor o canvas fixo ao rolar para o resto do site */}
      <div className="relative z-20 bg-white">
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
      </div>
      
      <div className="relative z-30">
        <StickyMobileConversionFooter />
      </div>
    </main>
  );
}
