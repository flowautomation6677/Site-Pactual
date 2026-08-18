import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "SegMedic", logo: "/images/partners/segmedic.jpg" },
    { name: "Kirios Gráfica", logo: "/images/partners/kirios.jpg" },
    { name: "Amparo Assistência", logo: "/images/partners/amparo.png" },
    { name: "Full Pneus", logo: "/images/partners/full.jpg" },
    { name: "Leader Tracker", logo: "/images/partners/leadertracker.png" },
    { name: "Lux Produções", logo: "/images/partners/lux.png" },
  ];

  // We duplicate the array 4 times to ensure it covers even ultra-wide monitors, 
  // preventing the empty space at the end of the animation loop.
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-white py-16 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-slate-200 flex-1 max-w-[200px]"></div>
          <h3 className="text-slate-400 font-medium text-sm tracking-widest uppercase">Nossos Parceiros</h3>
          <div className="h-px bg-slate-200 flex-1 max-w-[200px]"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <div className="flex w-max animate-marquee gap-16 pr-16 hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="relative w-32 h-16 md:w-40 md:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
