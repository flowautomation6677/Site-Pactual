"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { pushToDataLayer } from "@/lib/analytics";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vocês consultam SPC ou Serasa?",
      answer: "Não. Acreditamos que seu histórico de crédito não define sua capacidade de proteger seu patrimônio. A aprovação não depende de análise financeira."
    },
    {
      question: "Aceitam carros de aplicativo (Uber, 99)?",
      answer: "Sim! Somos especialistas na proteção de veículos de aplicativo, oferecendo cobertura completa sem sobretaxas abusivas ou restrições."
    },
    {
      question: "Como funciona a proteção 100% da Tabela FIPE?",
      answer: "Em caso de perda total por colisão, furto ou roubo não recuperado, você é indenizado no valor integral do seu veículo conforme a cotação da Tabela FIPE do mês do pagamento."
    },
    {
      question: "Existe período de carência?",
      answer: "A proteção para acidentes, furto, roubo e assistência 24h é ativada no mesmo instante em que o contrato é assinado e a vistoria digital é aprovada."
    },
    {
      question: "Preciso pagar multa se quiser cancelar?",
      answer: "O Modelo Pactual não tem fidelidade abusiva. Você é livre para cancelar a qualquer momento, sem taxas ocultas ou multas rescisórias."
    }
  ];

  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    
    if (isOpening) {
      pushToDataLayer("faq_interaction", {
        question_id: `faq_${index + 1}`
      });
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pactual-graphite mb-4 leading-tight">
              Quer entender melhor como a Pactual funciona?
            </h2>
            <p className="text-pactual-slate mb-10 text-base md:text-lg">
              Veja as respostas para as dúvidas mais comuns e descubra como é fácil garantir a proteção ideal para o seu dia a dia.
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold text-pactual-graphite mb-6 leading-tight">
              Não encontrou a informação que procura ou ainda tem dúvidas?
            </h3>
            
            <a 
              href="https://wa.me/5521964648749" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-pactual-blue hover:bg-pactual-institutional text-white font-bold py-4 px-8 rounded-lg transition-colors w-full sm:w-auto shadow-sm"
            >
              Falar com um Consultor
            </a>
          </div>

          {/* Right Column (Accordion) */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const num = String(index + 1).padStart(2, '0');
              
              return (
                <div 
                  key={faq.question} 
                  className={`bg-[#F4F4F4] rounded-lg overflow-hidden transition-all duration-300`}
                >
                  <button
                    type="button"
                    className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-[#EAEAEA] transition-colors"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="text-[#A0A0A0] font-bold text-sm">{num}</span>
                      <span className="font-bold text-pactual-graphite text-sm md:text-base">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-pactual-graphite flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  
                  <div 
                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-[2.1rem] text-pactual-slate text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
