import Link from "next/link";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Work from the shop and the compound — detailing, automotive, and the place itself.",
};

const hasRealPhotos = galleryItems.some((i) => i.src);

export default function Gallery() {
  return (
    <>
      <section className="bg-ocean-900 text-sand-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            Gallery
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            The shop, the work, the cars.
          </h1>
          <p className="mt-5 max-w-2xl text-sand-100/85 text-lg">
            A look at the compound and the work that comes through it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {!hasRealPhotos && (
          <div className="mb-10 rounded-xl border border-ocean-900/10 bg-white px-5 py-4 text-sm text-ocean-900/75">
            <span className="font-medium text-ocean-900">
              Photography is being added.
            </span>{" "}
            We&apos;re publishing fresh studio shots over the next few weeks.
            In the meantime, the categories below show what&apos;s coming.
          </div>
        )}

        <GalleryGrid items={galleryItems} />

        <div className="mt-16 rounded-2xl bg-ocean-900 text-sand-50 p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              See something you want done to your car?
            </h2>
            <p className="mt-2 text-sand-100/80 max-w-md">
              Send a few photos and we&apos;ll come back with a quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-copper-500 text-sand-50 px-6 py-3 text-sm hover:bg-copper-600 transition-colors self-start md:self-auto"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
