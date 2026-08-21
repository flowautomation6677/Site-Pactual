"use client";
import Link from "next/link";
import Image from "next/image";
import { pushToDataLayer } from "@/lib/analytics";
import { Globe, Phone, Mail, HeadphonesIcon } from "lucide-react";

export default function InstitutionalFooter() {
  const handleClickWhatsApp = () => {
    pushToDataLayer("click_to_whatsapp", {
      location: "footer_link"
    });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/teste/images/logos/logo-horizontal-normal.png" 
                alt="Pactual Associação de Benefícios Mútuos" 
                width={160} 
                height={50} 
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
              Proteção veicular inteligente, sem burocracia e com a agilidade que você precisa. Atuamos com base no mutualismo para entregar o melhor custo-benefício.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-pactual-graphite font-bold mb-5">Atendimento</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="https://wa.me/5521964648749" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleClickWhatsApp}
                  className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Suporte 24h: (21) 96464-8749
                </a>
              </li>
              <li>
                <a href="mailto:contato@pactualprotecaoveicular.com.br" className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contato@pactualprotecaoveicular.com.br
                </a>
              </li>
              <li>
                <a href="mailto:ouvidoria@pactual.com.br" className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2">
                  <HeadphonesIcon className="w-4 h-4" />
                  Ouvidoria: ouvidoria@pactual.com.br
                </a>
              </li>
              <li>
                <a href="https://instagram.com/pactual_abm" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram: @pactual_abm
                </a>
              </li>
              <li>
                <a href="https://facebook.com/pactualabm" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook: /pactualabm
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCSRwDwSrp9-6YYoKLDfhYTg" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  YouTube: Canal Pactual
                </a>
              </li>
              <li>
                <a href="https://www.pactual.org.br" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pactual-blue transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Site: www.pactual.org.br
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-pactual-graphite font-bold mb-5">Transparência e Credibilidade</h4>
            <div className="text-slate-600 text-xs space-y-3 leading-relaxed">
              <p>
                <strong>Razão Social:</strong> PACTUAL ASSOCIAÇÃO DE BENEFÍCIOS MÚTUOS
              </p>
              <p>
                <strong>CNPJ:</strong> 27.038.749/0001-84
              </p>
              <p>
                <strong>Sede Administrativa:</strong><br />
                Rua Carlos Marques Rollo, 131 - Loja<br />
                Presidente Juscelino – Nova Iguaçu, RJ
              </p>

              <div className="mt-6 flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Image 
                  src="/teste/images/selo-aaapv.png" 
                  alt="Selo de Filiação AAAPV" 
                  width={50} 
                  height={50} 
                  className="object-contain"
                />
                <div>
                  <p className="font-bold text-pactual-graphite text-sm">Filiada à AAAPV</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Agência de Autorregulamentação das Associações de Proteção Veicular</p>
                </div>
              </div>

              <p className="mt-6 opacity-80 italic">
                Entidade civil de direito privado, sem fins lucrativos. A proteção veicular não se confunde com seguro empresarial (SUSEP), operando sob o sistema de rateio (mutualismo) fundamentado na Constituição Federal (Art. 5º) e Código Civil (Art. 53).
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pactual Proteção Veicular. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="/termos" className="hover:text-pactual-blue transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-pactual-blue transition-colors">Política de Privacidade</a>
            <a href="/regulamento" className="hover:text-pactual-blue transition-colors">Regulamento</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
