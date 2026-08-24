import ScrollImageCanvas from "../canvas/ScrollImageCanvas";
import Link from "next/link";

interface ScrollStoryFramesProps {
  frameCount: number;
  startIndex?: number;
  imagePrefix: string;
  mobileImagePrefix?: string;
  mobileBreakpoint?: number;
  imageExtension?: string;
  padLength?: number;
}

export default function ScrollStoryFrames({
  frameCount,
  startIndex = 1,
  imagePrefix,
  mobileImagePrefix,
  mobileBreakpoint = 768,
  imageExtension = ".webp",
  padLength = 3,
}: ScrollStoryFramesProps) {
  return (
    <div className="relative w-full text-white overflow-hidden z-0">
      
      <ScrollImageCanvas 
        frameCount={frameCount}
        startIndex={startIndex}
        imagePrefix={imagePrefix}
        mobileImagePrefix={mobileImagePrefix}
        mobileBreakpoint={mobileBreakpoint}
        imageExtension={imageExtension}
        padLength={padLength}
      />
      
      {/* Camada de escurecimento reduzida para deixar o fundo mais claro (20% em vez de 60%) */}
      <div className="fixed inset-0 z-0 bg-black/20 pointer-events-none" />
      
      {/* 1. A Base (0s - 2s) */}
      <section className="relative z-10 h-[150vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 drop-shadow-2xl leading-[1.1]">
            Todos os dias você sai de casa com um <span className="text-blue-500">destino em mente...</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md text-gray-200 font-medium tracking-tight mt-2">
            A rotina começa, a neblina lá fora esconde o caminho, mas a sua jornada não pode parar.
          </p>
          
          {/* Indicador Visual de Scroll / Interatividade */}
          <div className="mt-12 flex flex-col items-center animate-bounce opacity-90">
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] mb-3 text-white drop-shadow-md">
              Role para explorar
            </span>
            <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-white/60 rounded-full flex justify-center pt-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-sm">
              <div className="w-1 h-2 md:w-1.5 md:h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tá Tranquilo (2s - 4s) */}
      <section className="relative z-10 h-[150vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 drop-shadow-2xl leading-[1.1]">
            No trânsito, <span className="text-blue-500">imprevistos</span> acontecem.
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white drop-shadow-xl mt-6">
            Mas com a Pactual: <span className="text-blue-500">Tá Tranquilo.</span>
          </p>
        </div>
      </section>

      {/* 3. Tá Seguro (4s - 6s) */}
      <section className="relative z-10 h-[150vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 drop-shadow-2xl leading-[1.1]">
            Nossa proteção <span className="text-blue-500">ilumina</span> o seu caminho.
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white drop-shadow-xl mt-6">
            O sol rasga a neblina e você: <span className="text-blue-500">Tá Seguro.</span>
          </p>
        </div>
      </section>

      {/* 4. Tá Protegido (6s - 8s) */}
      <section className="relative z-10 h-[150vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto pb-[10vh]">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 drop-shadow-2xl leading-[1.1]">
            Sua jornada com o <span className="text-blue-500">céu azul.</span>
          </h2>
          <p className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 text-white drop-shadow-2xl">
            Com a Pactual, você <span className="text-blue-500">Tá Protegido.</span>
          </p>
          <Link href="#cotacao" className="inline-block px-8 md:px-10 py-4 md:py-5 bg-blue-600 hover:bg-blue-500 transition-all text-white rounded-full font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transform duration-300 tracking-tight">
            Proteger meu veículo agora
          </Link>
        </div>
      </section>
    </div>
  );
}
