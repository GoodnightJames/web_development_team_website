import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detailing",
  description:
    "High-end detailing: paint correction, ceramic coatings, full interior restoration.",
};

const packages = [
  {
    key: "detailing-maintenance",
    name: "Maintenance Detail",
    tagline: "Keep a coated car looking new.",
    points: [
      "Two-bucket hand wash with pH-neutral soap",
      "Iron and tar decontamination",
      "Wheel face, barrel, and well cleaning",
      "Interior vacuum, wipe-down, and glass",
    ],
  },
  {
    key: "detailing-correction",
    name: "Paint Correction",
    tagline: "Bring the finish back to factory or better.",
    points: [
      "Paint depth measurement and inspection",
      "One- or two-step machine polish",
      "Swirl, hologram, and oxidation removal",
      "Documented before / after under inspection light",
    ],
  },
  {
    key: "detailing-ceramic",
    name: "Ceramic Coating",
    tagline: "Years of protection, climate-controlled application.",
    points: [
      "Multi-stage prep and panel wipe",
      "Pro-grade ceramic on paint, wheels, glass, trim",
      "3, 5, or 7-year coatings",
      "Maintenance plan and aftercare kit",
    ],
  },
  {
    key: "detailing-interior",
    name: "Interior Restoration",
    tagline: "Leather, carpet, headliner. Back to new.",
    points: [
      "Hot-water extraction on carpets and seats",
      "Leather clean, condition, and pH balance",
      "Headliner spot work and odor neutralization",
      "Trim and dash restoration",
    ],
  },
];

export default function Detailing() {
  return (
    <>
      <section className="relative overflow-hidden bg-ocean-950 text-sand-50">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, rgba(184,108,63,0.45), transparent 50%), radial-gradient(circle at 10% 80%, rgba(127,165,199,0.35), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            High-end detailing
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            The car you love, finished the way it deserves.
          </h1>
          <p className="mt-6 max-w-2xl text-sand-100/85 text-lg leading-relaxed">
            We are a separate operation from the garage. Climate-controlled
            bays, filtered air, and detailers who do this work for a living &mdash;
            not as an add-on between oil changes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((p) => (
            <article
              key={p.key}
              className="rounded-2xl bg-white border border-ocean-900/10 p-8 flex flex-col"
            >
              <h2 className="font-display text-2xl">{p.name}</h2>
              <p className="mt-2 text-copper-600 text-sm">{p.tagline}</p>
              <ul className="mt-5 space-y-2 text-sm text-ocean-900/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-copper-500 shrink-0"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href={{ pathname: "/contact", query: { service: p.key } }}
                className="mt-6 inline-flex items-center text-sm text-ocean-700 hover:text-copper-600 self-start"
              >
                Request a quote
                <span aria-hidden className="ml-1.5">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand-100/60 border-y border-ocean-900/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">
                Our standard
              </h2>
              <p className="mt-4 text-ocean-900/80 leading-relaxed">
                Every detail starts with measurement, ends with inspection, and
                is done by hand where it matters. We will tell you what the
                paint can handle before we touch it, and we will show you the
                result under the same light a judge would.
              </p>
            </div>
            <ul className="space-y-4 text-sm text-ocean-900/85">
              <Check>Single-detailer, single-car assignments &mdash; no pass-offs mid-job</Check>
              <Check>Paint depth and gloss readings recorded before correction</Check>
              <Check>Coatings cured in a dust-controlled, temp-controlled bay</Check>
              <Check>Documented service history for every coated car</Check>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-ocean-900 text-sand-50 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl max-w-lg">
              Quote in 24 hours.
            </h2>
            <p className="mt-3 text-sand-100/80 max-w-md">
              Send a few photos and what you&apos;re after. We&apos;ll come back
              with a recommendation and a price.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-copper-500 text-sand-50 px-6 py-3 text-sm hover:bg-copper-600 transition-colors self-start md:self-auto"
          >
            Start an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-1 h-5 w-5 rounded-full bg-ocean-900 text-sand-50 grid place-items-center text-[11px] shrink-0"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}
