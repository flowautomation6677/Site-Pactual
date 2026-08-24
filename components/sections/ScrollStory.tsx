import ScrollImageCanvas from "../canvas/ScrollImageCanvas";
import Link from "next/link";

export default function ScrollStory() {
  return (
    <div className="relative w-full text-white overflow-hidden">
      <ScrollImageCanvas />
      
      {/* 1. A Base (0s - 2s / frames 000-025) */}
      <section className="flex flex-col items-center justify-center min-h-[150vh] px-6 text-center">
        <div className="sticky top-1/2 -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            Todos os dias você sai de casa<br/>com um destino em mente...
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-gray-200 font-medium">
            A rotina começa, a neblina lá fora esconde o caminho, mas a sua jornada não pode parar.
          </p>
        </div>
      </section>

      {/* 2. Tá Tranquilo (2s - 4s / frames 026-050) */}
      <section className="flex flex-col items-center justify-center min-h-[150vh] px-6 text-center">
        <div className="sticky top-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            No trânsito, imprevistos acontecem.
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-blue-300 drop-shadow-xl mt-4">
            Mas com a Pactual: Tá Tranquilo.
          </p>
        </div>
      </section>

      {/* 3. Tá Seguro (4s - 6s / frames 051-075) */}
      <section className="flex flex-col items-center justify-center min-h-[150vh] px-6 text-center">
        <div className="sticky top-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            Nossa proteção ilumina o seu caminho.
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-yellow-300 drop-shadow-xl mt-4">
            O sol rasga a neblina e você: Tá Seguro.
          </p>
        </div>
      </section>

      {/* 4. Tá Protegido (6s - 8s / frames 076-101) */}
      <section className="flex flex-col items-center justify-center min-h-[150vh] px-6 text-center">
        <div className="sticky top-1/2 -translate-y-1/2 pb-[20vh]">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
            Sua jornada com o céu azul.
          </h2>
          <p className="text-3xl md:text-5xl font-black mb-10 text-green-400 drop-shadow-2xl">
            Com a Pactual, você Tá Protegido.
          </p>
          <Link href="#cotacao" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-500 transition-all text-white rounded-full font-bold text-xl shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transform duration-300">
            Proteger meu veículo agora
          </Link>
        </div>
      </section>
    </div>
  );
}
