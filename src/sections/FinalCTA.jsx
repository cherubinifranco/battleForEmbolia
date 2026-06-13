import AnchorButton from "../components/ui/AnchorButton";
import { socialLinks } from "../constants";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <span className="text-[#E8B93F] uppercase tracking-[0.35em] text-xs">
          Unite a la Aventura
        </span>

        <h2 className="text-6xl font-bold mt-6 mb-6 leading-tight">
          El mundo de Embolia te espera
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Forma parte del desarrollo, explora un MMORPG en constante evolución y
          ayuda a dar forma al futuro del juego.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <AnchorButton href={socialLinks.steam}>Jugar Ahora</AnchorButton>
        </div>
      </div>
    </section>
  );
}
