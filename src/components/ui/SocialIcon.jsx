export default function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        w-10
        h-10
        rounded-full
        bg-zinc-900
        border
        border-zinc-800
        flex
        items-center
        justify-center
        text-zinc-400
        hover:text-[#E8B93F]
        hover:border-[#E8B93F]
        transition
      "
    >
      {icon}
    </a>
  );
}