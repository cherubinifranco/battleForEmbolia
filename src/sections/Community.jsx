export default function Community() {
  return (
    <section className="relative py-28 overflow-hidden" id="community">
      <img
        src="/images/embolia-2.png"
        alt="Embolia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="max-w-2xl mx-auto px-6">
        <div className="gap-10 items-center">
          <div
            className="
            relative group
            rounded-3xl
            p-10
            bg-zinc-900
            border border-zinc-800
            transition-all duration-300
            overflow-hidden
          "
          >
            <span className="text-[#E8B93F] text-sm tracking-[0.35em] uppercase relative">
              Desarrollo vivo
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6 leading-tight text-white relative">
              Creado junto a la comunidad
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-xl relative">
              Battle For Embolia evoluciona gracias al feedback de los
              jugadores. Cada sugerencia, reporte o idea moldea directamente el
              futuro del mundo.
            </p>

            <div className="space-y-5 relative">
              <ChecklistItem text="Actualizaciones constantes" />
              <ChecklistItem text="Desarrollo guiado por la comunidad" />
              <ChecklistItem text="Balance continuo del juego" />
              <ChecklistItem text="Contacto directo con el equipo" />
              <ChecklistItem text="Nuevo contenido en Early Access" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistItem({ text }) {
  return (
    <div className="flex items-center justify-center gap-4 text-zinc-300">
      <div className="w-2.5 h-2.5 rounded-full bg-[#E8B93F]" />

      <span className="tracking-wide w-72 text-left">{text}</span>
    </div>
  );
}
