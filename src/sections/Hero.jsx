import AnchorButton from "../components/ui/AnchorButton";
import { socialLinks } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <img
        src="/images/embolia-1.png"
        alt="Battle For Embolia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="relative">
          <img
            src="/images/embolia-logo.png"
            alt="Battle For Embolia"
            className="relative w-full max-w-4xl mx-auto"
          />
        </div>

        <h1 className="mt-6 text-2xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight">
          MMORPG indie de ritmo rápido con combate responsivo
          progresión significativa y actualizaciones constantes.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
          Explorá un mundo en expansión, enfrentate a jefes desafiantes y ayudá
          a dar forma al futuro de Embolia junto a la comunidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <AnchorButton href={socialLinks.steam}>
            Jugar Gratis
          </AnchorButton>
        </div>

        <div className="mt-16 text-zinc-500 text-sm tracking-widest uppercase">
          Descubrí más ↓
        </div>
      </div>
    </section>
  );
}
