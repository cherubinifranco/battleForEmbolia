import { useState } from "react";
import AnchorButton from "../components/ui/AnchorButton";
import { socialLinks } from "../constants";

const images = [
  "/images/embolia-5.png",
  "/images/embolia-4.png",
  "/images/embolia-3.png",
  "/images/embolia-2.png",
  "/images/embolia-1.png",
];

export default function PressKit() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="py-28 bg-zinc-900 relative overflow-hidden" id="media">
      <div className="max-w-6xl mx-auto px-6 relative text-center">
        <div className="text-[#E8B93F] uppercase tracking-[0.35em] text-xs mb-4">
          Terminal de Prensa
        </div>

        <h2 className="text-5xl font-bold mb-6">Recursos oficiales</h2>

        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
          Descarga el kit oficial de Battle For Embolia con capturas, arte y
          materiales para prensa y creadores.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src={images[index]}
              alt="Press Kit"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <button
              onClick={prev}
              className="
        absolute left-4 top-1/2 -translate-y-1/2
        w-10 h-10
        rounded-full
        bg-black/60
        border border-zinc-700
        text-zinc-300
        hover:border-[#E8B93F]
        hover:text-[#E8B93F]
        transition
        flex items-center justify-center
      "
            >
              ‹
            </button>

            <button
              onClick={next}
              className="
        absolute right-4 top-1/2 -translate-y-1/2
        w-10 h-10
        rounded-full
        bg-black/60
        border border-zinc-700
        text-zinc-300
        hover:border-[#E8B93F]
        hover:text-[#E8B93F]
        transition
        flex items-center justify-center
      "
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-12">
          <AnchorButton href={socialLinks.pressKit} variant="secondary">
            Descargar Kit de Prensa
          </AnchorButton>
        </div>
      </div>
    </section>
  );
}
