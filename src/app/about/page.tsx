import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Seaside Garage and Detailing — two specialties, one coastal shop.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="bg-ocean-900 text-sand-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            About
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            Two specialties. Same address. Same standard.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 prose-like text-ocean-900/85 leading-relaxed text-lg space-y-6">
        <p>
          Seaside Garage and Detailing is two shops under one roof. The garage
          side is a Special Automotive Project: laser alignment, wheel repair,
          and mounting and balancing. We do a small number of things, and we
          do them precisely. We&apos;re the shop other shops send hard cars to.
        </p>
        <p>
          The detailing side is separate &mdash; its own bays, its own air, its
          own detailers. We do high-end work: paint correction, ceramic
          coatings, full interior restoration. The kind of detail you do for
          the car you actually love.
        </p>
        <p>
          We&apos;re on the coast for a reason. Salt air is hard on cars.
          We&apos;ve seen what it does, and we&apos;ve built our process around
          protecting against it &mdash; whether that&apos;s a thrust angle that
          holds true after a year of pothole season, or a coating that still
          beads going into year five.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl bg-white border border-ocean-900/10 p-10">
          <h2 className="font-display text-2xl">Come see the shop</h2>
          <p className="mt-3 text-ocean-900/75 max-w-xl">
            We work by appointment. If you want to walk through the bays, talk
            about a job, or just see what we&apos;re working on, send a note
            and we&apos;ll set a time.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-ocean-900 text-sand-50 px-6 py-3 text-sm hover:bg-ocean-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
