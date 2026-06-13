import { socialLinks } from "../constants";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-white font-bold tracking-wide text-lg">
            BFE
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#trailer" className="hover:text-[#E8B93F] transition">
              Tráiler
            </a>
            <a href="#features" className="hover:text-[#E8B93F] transition">
              Características
            </a>
            <a href="#community" className="hover:text-[#E8B93F] transition">
              Comunidad
            </a>
            <a href="#media" className="hover:text-[#E8B93F] transition">
              Media
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={socialLinks.steam}
              target="_blank"
              rel="noreferrer"
              className="
                px-5 py-2 text-sm font-semibold
                rounded-lg
                border border-[#E8B93F]
                text-[#E8B93F]
                hover:bg-[#E8B93F]
                hover:text-black
                transition
              "
            >
              Jugar Gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
