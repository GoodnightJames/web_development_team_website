import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive",
  description:
    "Special Automotive Project: laser alignment, wheel repair, mounting and balancing.",
};

const services = [
  {
    title: "Laser wheel alignment",
    summary:
      "Four-wheel laser alignment on a Hunter-class rack. Set to factory spec or a custom street/track sheet you can take home.",
    bullets: [
      "Toe, camber, caster, thrust",
      "Pre- and post-alignment readouts",
      "Suspension inspection included",
    ],
  },
  {
    title: "Wheel repair",
    summary:
      "Straightening, weld repair, and refinishing for alloy wheels that have met a curb, a pothole, or a bad day.",
    bullets: [
      "Bend and runout correction",
      "Crack weld and pressure test",
      "Color-match refinish and clear",
    ],
  },
  {
    title: "Mounting and balancing",
    summary:
      "Touchless mounting and Road Force balancing for performance and OEM wheels. The tire shop you call when the other one gave up.",
    bullets: [
      "Touchless / clamp-free mounting",
      "Road Force matching",
      "TPMS service and replacement",
    ],
  },
];

export default function Automotive() {
  return (
    <>
      <section className="bg-ocean-900 text-sand-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            Special Automotive Project
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            How the car drives is not a guess.
          </h1>
          <p className="mt-6 max-w-2xl text-sand-100/85 text-lg leading-relaxed">
            We focus on a narrow set of jobs and do them precisely: laser
            alignment, wheel repair, and mounting and balancing. If it touches
            the contact patch, it is what we work on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-ocean-900/10 bg-white p-8"
            >
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="mt-3 text-ocean-900/75 leading-relaxed">
                {s.summary}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ocean-900/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-copper-500 shrink-0"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ocean-50/60 border-y border-ocean-900/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              Built for performance owners
            </h2>
            <p className="mt-4 text-ocean-900/80 leading-relaxed max-w-lg">
              Track days, lowered cars, aftermarket wheels, staggered fitments.
              We work with setups other shops turn away. If you have an
              alignment sheet from another shop you trust, bring it &mdash;
              we&apos;ll match it.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-ocean-900/10 p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-copper-600">
              Typical turnaround
            </div>
            <dl className="mt-4 divide-y divide-ocean-900/10">
              <Row term="Alignment" value="Same day" />
              <Row term="Mount & balance (set of 4)" value="Same day" />
              <Row term="Wheel repair (cosmetic)" value="2–3 days" />
              <Row term="Wheel repair (straighten / weld)" value="3–5 days" />
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl max-w-xl">
            Got a job in mind? Send the details and we&apos;ll get back with a
            quote.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-ocean-900 text-sand-50 px-6 py-3 text-sm hover:bg-ocean-700 transition-colors self-start"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 text-sm">
      <dt className="text-ocean-900/75">{term}</dt>
      <dd className="font-medium text-ocean-900">{value}</dd>
    </div>
  );
}
