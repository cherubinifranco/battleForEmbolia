import { useState } from "react";

export default function Features() {
  const [activeImage, setActiveImage] = useState("/images/feature-1.png");

  return (
    <section className="relative py-28 px-6 bg-zinc-950 overflow-hidden" id="features">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Forja tu <span className="text-[#E8B93F]">Aventura</span>
          </h2>

          <p className="text-zinc-400 mt-5 text-lg max-w-2xl mx-auto">
            Crea tu personaje, domina el combate y descubrí poderosas sinergias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <FeatureCard
            index="01"
            title="Arma tu camino"
            description="Tres personajes jugables, cuatro tipos de armas y una profunda personalización de builds."
            onHover={() => setActiveImage("/images/feature-1.png")}
          />

          <FeatureCard
            index="02"
            title="Explora Embolia"
            description="Regiones diseñadas a mano llenas de secretos, enemigos élite y eventos dinámicos en el mundo."
            onHover={() => setActiveImage("/images/feature-2.png")}
          />

          <FeatureCard
            index="03"
            title="Enfrenta Jefes de Raid"
            description="Coordínate con otros jugadores en tiempo real y derrota poderosos jefes de raid."
            onHover={() => setActiveImage("/images/feature-3.png")}
          />
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-zinc-800">
          <img
            src={activeImage}
            alt="Feature preview"
            className="w-full object-cover transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, index, onHover }) {
  return (
    <div
      onMouseEnter={onHover}
      className="
        relative group
        rounded-3xl
        p-8
        bg-zinc-900/60
        border border-zinc-800
        hover:border-[#E8B93F]
        transition-all duration-300
        overflow-hidden
        cursor-pointer
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(232,185,63,0.10),transparent_70%)]" />

      <div className="flex items-center justify-between mb-6 relative">
        <span className="text-[#E8B93F] text-2xl font-bold tracking-widest font-semibold">
          {title}
        </span>

        <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-xs text-zinc-400">
          {index}
        </div>
      </div>

      <p className="text-zinc-400 leading-relaxed relative">{description}</p>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B93F] to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}
