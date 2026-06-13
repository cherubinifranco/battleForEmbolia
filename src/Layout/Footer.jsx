import { FaSteam, FaDiscord, FaYoutube, FaXTwitter } from "react-icons/fa6";
import SocialIcon from "../components/ui/SocialIcon";
import { socialLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#E8B93F]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <img
              src="/images/embolia-logo.png"
              alt="Battle For Embolia"
              className="w-56 mb-6"
            />

            <div className="flex gap-4 mt-6">
              <SocialIcon href={socialLinks.steam} icon={<FaSteam />} />

              <SocialIcon href={socialLinks.discord} icon={<FaDiscord />} />

              <SocialIcon href={socialLinks.youtube} icon={<FaYoutube />} />

              <SocialIcon href={socialLinks.twitter} icon={<FaXTwitter />} />
            </div>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Juego</h3>

            <ul className="space-y-3">
              <FooterLink href={socialLinks.steam}>Jugar Gratis</FooterLink>

              {/* <FooterLink href="/roadmap">Roadmap</FooterLink> */}

              <FooterLink href={socialLinks.pressKit}>Kit de Prensa</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">
              Comunidad
            </h3>

            <ul className="space-y-3">
              <FooterLink href={socialLinks.discord}>Discord</FooterLink>

              {/* <FooterLink href="#">Reportar un Bug</FooterLink> */}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">Legal</h3>

            <ul className="space-y-3">
              <FooterLink href={legal.privacy}>Politica de Privacidad</FooterLink>

              <FooterLink href={legal.services}>Terminos de Servicio</FooterLink>

              <FooterLink href={legal.support}>Soporte</FooterLink>

              <FooterLink href={legal.contact}>Contacto</FooterLink>
            </ul>
          </div> */}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent my-10" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">
          <p>
            © battleforembolia.com @ 2006-2025 by{" "}
            <HelpAnchor href="https://x.com/AgerArg">Ager</HelpAnchor> &
            <HelpAnchor href="https://x.com/AgerArg"> Cesar Gozurreta</HelpAnchor>
          </p>

          <p>
            Power by
            <HelpAnchor href="https://www.AgerGames.com.ar"> Ager Games</HelpAnchor>
          </p>
        </div>
      </div>
    </footer>
  );
}

function HelpAnchor({ children, href }) {
  return (
    <a href={href} className="text-[#E8B93F] hover:text-[#E8A93F]" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-zinc-400 hover:text-[#E8B93F] transition"
      >
        {children}
      </a>
    </li>
  );
}
