export default function AnchorButton({
  children,
  href = "#",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 rounded-xl transition font-semibold";

  const styles = {
    primary:
      "border border-[#E8B93F] text-[#E8B93F] hover:bg-[#E8B93F] hover:text-black",

    secondary:
      "border border-zinc-700 bg-zinc-950/60 text-zinc-200 hover:border-[#E8B93F] hover:text-[#E8B93F]",
  };

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}
