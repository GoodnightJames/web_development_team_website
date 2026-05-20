import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-700" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(184,108,63,0.4), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-sand-50">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            Coastal automotive craft
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Two shops. One standard. The coast&apos;s.
          </h1>
          <p className="mt-6 max-w-xl text-sand-100/85 text-lg leading-relaxed">
            Seaside Garage and Detailing is two specialties under one roof:
            precision mechanical work for the cars you drive hard, and high-end
            detailing for the cars you show off.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-copper-500 text-sand-50 px-6 py-3 text-sm hover:bg-copper-600 transition-colors"
            >
              Book a service
            </Link>
            <Link
              href="/automotive"
              className="inline-flex items-center rounded-full border border-sand-100/30 text-sand-50 px-6 py-3 text-sm hover:bg-sand-50/10 transition-colors"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
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
