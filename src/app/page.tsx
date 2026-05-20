import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-700" />

        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-sand-100/15 blur-3xl mix-blend-screen animate-float-slow"
        />
        <div
          aria-hidden
          className="absolute -top-40 right-[-10rem] w-[36rem] h-[36rem] rounded-full bg-copper-500/25 blur-3xl mix-blend-screen animate-float-slower"
        />

        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full text-sand-100/30"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g
            stroke="url(#hero-line)"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M -50 300 Q 300 250, 600 320 T 1250 290" />
            <path d="M -50 420 Q 300 380, 600 440 T 1250 410" />
            <path d="M -50 540 Q 300 500, 600 560 T 1250 530" />
            <path d="M -50 660 Q 300 620, 600 680 T 1250 650" />
            <path d="M -50 760 Q 300 720, 600 780 T 1250 750" />
          </g>
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-sand-50 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-sand-300/60" />
            Coastal automotive craft
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            Two shops.
            <br />
            One standard.
            <br />
            <span className="text-sand-300">The coast&apos;s.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sand-100/85 text-lg leading-relaxed">
            Seaside Garage and Detailing is two specialties under one roof:
            precision mechanical work for the cars you drive hard, and high-end
            detailing for the cars you show off.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-full bg-copper-500 text-sand-50 px-6 py-3 text-sm hover:bg-copper-600 transition-colors"
            >
              Book a service
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center rounded-full border border-sand-100/30 text-sand-50 px-6 py-3 text-sm hover:bg-sand-50/10 hover:border-sand-100/50 transition-colors"
            >
              See the work
              <span
                aria-hidden
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <a
          href="#shops"
          aria-label="Scroll to services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand-100/70 hover:text-sand-50 animate-scroll-cue"
        >
          <svg
            aria-hidden
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </section>

      <section id="shops" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-20">
        <div className="grid gap-8 md:grid-cols-2">
          <ShopCard
            kicker="The garage"
            title="Special Automotive Project"
            blurb="Laser alignment, wheel repair, mounting and balancing. Specialty work for owners who care about how the car actually drives."
            href="/automotive"
            cta="Automotive services"
          />
          <ShopCard
            kicker="The detailing shop"
            title="High-end detailing"
            blurb="Paint correction, ceramic coatings, full interior restoration. The kind of detail you reserve for the car you love."
            href="/detailing"
            cta="Detailing services"
          />
        </div>
      </section>

      <section className="bg-ocean-50/60 border-y border-ocean-900/10">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-3">
          <ValueProp
            title="Calibrated, not eyeballed"
            body="Hunter-grade alignment, runout-checked wheels, balanced to grams. The numbers are on the sheet you take home."
          />
          <ValueProp
            title="Finishes that hold up"
            body="We coat in a clean booth, not a dusty bay. Coatings, films, and interiors that look right in year three, not just week one."
          />
          <ValueProp
            title="Straight answers"
            body="If a job isn&apos;t worth it on your car, we&apos;ll tell you. We&apos;d rather earn the next service than oversell this one."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-ocean-900 text-sand-50 px-8 md:px-12 py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl max-w-lg">
              Ready when you are.
            </h2>
            <p className="mt-3 text-sand-100/80 max-w-md">
              Tell us about the car and what you want done. We&apos;ll come back
              with a quote and the next open slot on the calendar.
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

function ShopCard({
  kicker,
  title,
  blurb,
  href,
  cta,
}: {
  kicker: string;
  title: string;
  blurb: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-ocean-900/10 bg-white p-8 hover:border-copper-500/60 hover:shadow-lg transition-all"
    >
      <div className="text-xs uppercase tracking-[0.25em] text-copper-600">
        {kicker}
      </div>
      <h3 className="mt-3 font-display text-3xl">{title}</h3>
      <p className="mt-4 text-ocean-900/75 leading-relaxed">{blurb}</p>
      <div className="mt-6 inline-flex items-center text-sm text-ocean-700 group-hover:text-copper-600">
        {cta}
        <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </div>
    </Link>
  );
}

function ValueProp({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="h-px w-10 bg-copper-500" />
      <h3 className="mt-4 font-display text-xl">{title}</h3>
      <p className="mt-2 text-ocean-900/75 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
