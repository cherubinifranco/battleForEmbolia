import { useState } from "react";

const media = [
  {
    type: "video",
    src: "https://www.youtube.com/embed/gLk-sGRQtic?si=-_Mt9bDb8eRTD9iA&amp;controls=0",
  },
  { type: "image", src: "/images/screenshots/1.png" },
  { type: "image", src: "/images/screenshots/2.png" },
  { type: "image", src: "/images/screenshots/3.png" },
  { type: "image", src: "/images/screenshots/4.png" },
  { type: "image", src: "/images/screenshots/5.png" },
  { type: "image", src: "/images/screenshots/6.png" },
];

export default function MediaGallery() {
  const [active, setActive] = useState(0);

  const item = media[active];

  return (
    <section className="py-28 bg-zinc-950" id="trailer">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-10">
          <span className="text-[#E8B93F]">Descubre</span> el mundo de Embolia
          en acción.
        </h2>

        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 mb-6">
          {item.type === "image" && (
            <img src={item.src} className="w-full object-cover aspect-video" alt="screenshot"/>
          )}

          {item.type === "video" && (
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gLk-sGRQtic?si=-_Mt9bDb8eRTD9iA&amp;controls=0"
                title="Battle For Embolia Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative w-28 h-20 overflow-hidden rounded-xl border
                ${active === i ? "border-[#E8B93F]" : "border-zinc-800"}
              `}
            >
              {m.type === "image" && (
                <img src={m.src} className="w-full h-full object-cover" alt="screenshot-selector"/>
              )}

              {m.type === "video" && (
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-xs text-zinc-400">
                  ▶ Trailer
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
