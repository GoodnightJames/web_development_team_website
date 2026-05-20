import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { categoryLabels } from "@/data/gallery";

const aspectClass: Record<GalleryItem["aspect"], string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

const placeholderGradient: Record<GalleryItem["category"], string> = {
  compound:
    "from-ocean-900 via-ocean-700 to-ocean-500",
  detailing:
    "from-ocean-950 via-ocean-800 to-copper-600",
  automotive:
    "from-ocean-900 via-ocean-700 to-sand-300",
};

export function GalleryTile({ item }: { item: GalleryItem }) {
  return (
    <figure
      className={`relative ${aspectClass[item.aspect]} overflow-hidden rounded-xl border border-ocean-900/10 bg-ocean-900 group`}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${placeholderGradient[item.category]}`}
        >
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.45), transparent 50%)",
            }}
          />
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-sand-50">
        <div className="text-[10px] uppercase tracking-[0.25em] text-sand-300">
          {categoryLabels[item.category]}
        </div>
        {item.caption && (
          <div className="mt-1 font-display text-sm md:text-base">
            {item.caption}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
