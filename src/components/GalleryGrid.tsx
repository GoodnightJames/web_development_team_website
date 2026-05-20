"use client";

import { useState } from "react";
import { GalleryTile } from "@/components/GalleryTile";
import {
  categoryLabels,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

type Filter = GalleryCategory | "all";

const filterOptions: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "compound", label: categoryLabels.compound },
  { id: "detailing", label: categoryLabels.detailing },
  { id: "automotive", label: categoryLabels.automotive },
];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map((opt) => {
          const active = filter === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFilter(opt.id)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-ocean-900 text-sand-50"
                  : "bg-white border border-ocean-900/15 text-ocean-900/80 hover:border-copper-500/60 hover:text-copper-700"
              }`}
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {visible.map((item) => (
          <GalleryTile key={item.id} item={item} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-ocean-900/60 text-sm">
          Nothing in this category yet.
        </p>
      )}
    </>
  );
}
