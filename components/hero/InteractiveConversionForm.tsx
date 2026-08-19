"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pushToDataLayer } from "@/lib/analytics";

export default function InteractiveConversionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [leadData, setLeadData] = useState({
    placa: "",
    tipoVeiculo: "carro",
    nome: "",
    whatsapp: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadData({ ...leadData, [e.target.name]: e.target.value });
  };

  const handleProgression = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep === 1 && leadData.placa.length >= 7) {
      setCurrentStep(2);
      pushToDataLayer("lead_form_start", {
        step: 1,
        form_name: "hero_multistep",
      });
    }
  };

  const handleFinalSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedMessage = `Olá, equipe Pactual! Desejo receber a cotação da proteção veicular para a placa ${leadData.placa}. Meu nome é ${leadData.nome}.`;
    const whatsappUrl = `https://wa.me/5521964648749?text=${encodeURIComponent(formattedMessage)}`;

    pushToDataLayer("lead_form_submit", {
      vehicle_type: leadData.tipoVeiculo,
    });
    window.open(whatsappUrl, "_blank");
  };

  const transitionVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-pactual-ice rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 border border-white/40 max-w-md w-full mx-auto relative min-h-[350px]">
      <div className="absolute top-0 left-0 right-0 h-2 bg-pactual-slate/20">
        <motion.div
          className="h-full bg-pactual-blue"
          initial={{ width: "50%" }}
          animate={{ width: currentStep === 1 ? "50%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="mt-4 mb-6">
        <h3 className="text-xl font-bold text-pactual-graphite leading-tight">
          {currentStep === 1 ? "Qual veículo vamos proteger hoje?" : "Para onde enviamos a tabela exata?"}
        </h3>
        <p className="text-sm text-pactual-navy/70 mt-2">
          {currentStep === 1 ? "Informe a placa para referenciar a Tabela FIPE." : "Você está a apenas um passo de finalizar a cotação."}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.form
            key="step-one"
            variants={transitionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={handleProgression}
            className="space-y-5"
          >
            <div>
              <label htmlFor="placa" className="block text-sm font-semibold text-pactual-navy mb-2">
                Placa do Veículo
              </label>
              <input
                id="placa"
                type="text"
                name="placa"
                required
                value={leadData.placa}
                onChange={handleInputChange}
                placeholder="AAA-0000 ou ABC1D23"
                className="w-full px-4 py-3.5 rounded-lg border border-pactual-slate/30 focus:ring-2 focus:ring-pactual-blue focus:border-pactual-blue uppercase transition-all text-pactual-graphite"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center py-4 px-4 rounded-lg text-base font-bold text-white bg-pactual-blue hover:bg-pactual-institutional transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pactual-blue shadow-md"
            >
              Cotar Agora <span className="ml-2">➔</span>
            </button>
          </motion.form>
        )}

        {currentStep === 2 && (
          <motion.form
            key="step-two"
            variants={transitionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={handleFinalSubmission}
            className="space-y-4"
          >
            <div>
              <div className="block text-sm font-semibold text-pactual-navy mb-2">
                Tipo de Veículo
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {['Carro', 'Moto', 'Aplicativo'].map((tipo) => (
                  <button
                    key={tipo}
                    type="button"
                    onClick={() => setLeadData({ ...leadData, tipoVeiculo: tipo })}
                    className={`py-2 px-1 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${
                      leadData.tipoVeiculo === tipo
                        ? 'bg-pactual-blue border-pactual-blue text-pactual-graphite shadow-md'
                        : 'bg-white border-pactual-slate/30 text-pactual-navy hover:border-pactual-blue/50'
                    }`}
                  >
                    {tipo}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-pactual-navy mb-1">
                Seu Nome
              </label>
              <input
                id="nome"
                type="text"
                name="nome"
                required
                value={leadData.nome}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-pactual-slate/30 focus:ring-2 focus:ring-pactual-blue focus:border-pactual-blue transition-all text-pactual-graphite"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-pactual-navy mb-2">
                WhatsApp com DDD
              </label>
              <input
                id="whatsapp"
                type="tel"
                name="whatsapp"
                required
                value={leadData.whatsapp}
                onChange={handleInputChange}
                placeholder="(21) 96464-8749"
                className="w-full px-4 py-3.5 rounded-lg border border-pactual-slate/30 focus:ring-2 focus:ring-pactual-blue focus:border-pactual-blue transition-all text-pactual-graphite"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="w-1/3 py-4 px-4 border border-pactual-slate/30 rounded-lg text-sm font-semibold text-pactual-navy bg-white hover:bg-pactual-ice transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="w-2/3 flex items-center justify-center py-4 px-4 rounded-lg text-sm font-bold text-white bg-pactual-institutional hover:bg-pactual-navy transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pactual-institutional"
              >
                Ver Valor Exato
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
