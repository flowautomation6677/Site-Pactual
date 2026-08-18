import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Bike, Navigation, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function VehicleSelector() {
  const vehicles = [
    {
      id: "carro",
      title: "Carros de Passeio",
      description: "Proteção completa para o seu dia a dia.",
      icon: <Car className="w-6 h-6 text-pactual-blue" />,
      image: "/images/card-carro.jpg",
    },
    {
      id: "moto",
      title: "Motocicletas",
      description: "Segurança para quem vive sobre duas rodas.",
      icon: <Bike className="w-6 h-6 text-pactual-blue" />,
      image: "/images/card-moto.jpg",
    },
    {
      id: "aplicativo",
      title: "Veículos de App",
      description: "Aceitação sem restrição para motoristas e entregadores.",
      icon: <Navigation className="w-6 h-6 text-pactual-blue" />,
      image: "/images/card-app.jpg",
    },
    {
      id: "caminhao",
      title: "Caminhões",
      description: "Proteção robusta para quem vive na estrada.",
      icon: <Truck className="w-6 h-6 text-pactual-blue" />,
      image: "/images/card-caminhao.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pactual-graphite">
            Escolha o seu tipo de veículo
          </h2>
          <p className="mt-3 text-slate-600">
            Seja qual for a sua jornada, temos a proteção certa para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v, idx) => (
            <Reveal key={v.id} delay={idx * 0.1}>
              <Link href="#cota-agora" className="h-full group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5] shadow-lg border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pactual-blue/40 block">
                <Image 
                  src={v.image.replace('.jpg', '-light.jpg')} 
                  alt={v.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="bg-white/80 backdrop-blur-md p-3 rounded-xl inline-block mb-4 border border-white group-hover:bg-pactual-blue/10 transition-colors shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-pactual-graphite mb-2 group-hover:text-pactual-blue transition-colors lg:min-h-[72px] flex items-start">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 mb-6 font-medium text-sm md:text-base lg:min-h-[48px]">
                    {v.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-pactual-blue font-bold group-hover:translate-x-2 transition-transform bg-white/90 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-pactual-blue/20 shadow-sm">
                    Cotar Agora <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
