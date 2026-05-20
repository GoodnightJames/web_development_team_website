import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about appointments, alignment, wheel repair, paint correction, and ceramic coatings at Seaside Garage and Detailing.",
  alternates: { canonical: "/faq" },
};

type FaqItem = { question: string; answer: string };
type FaqGroup = { heading: string; items: FaqItem[] };

const faqs: FaqGroup[] = [
  {
    heading: "Booking and visiting",
    items: [
      {
        question: "Do I need an appointment?",
        answer:
          "Yes. We work by appointment so each car gets focused time. The fastest way in is to send an inquiry from the Contact page, or call once we publish a number.",
      },
      {
        question: "What hours are you open?",
        answer:
          "Tuesday through Saturday, by appointment. We don't keep walk-in hours so the bays stay productive.",
      },
      {
        question: "Where are you located?",
        answer:
          "On the coast. We'll publish the exact address as we get closer to opening day. In the meantime, send an inquiry and we'll share details directly.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Card, bank transfer, and cash. For larger jobs we collect a deposit at booking and the balance at pickup.",
      },
    ],
  },
  {
    heading: "Automotive — alignment, wheels, tires",
    items: [
      {
        question: "How long does an alignment take?",
        answer:
          "Most cars are in and out the same day, usually 60–90 minutes on the rack. Lowered cars, aftermarket suspensions, or anything that needs adjustment-bolt work can run longer; we'll quote it when you arrive.",
      },
      {
        question: "Can you work on lowered, modified, or staggered-fitment cars?",
        answer:
          "Yes — this is most of what we do. Bring your alignment sheet if you have one and we'll match it.",
      },
      {
        question: "Can you repair a bent or cracked wheel?",
        answer:
          "In most cases, yes. We straighten, weld, and pressure-test alloy wheels, then refinish to factory or custom color. Severely damaged wheels (heat-cracked, deeply gouged on the inboard structure) sometimes can't be made safe — we'll tell you on inspection.",
      },
      {
        question: "Do you do TPMS sensors?",
        answer:
          "Yes. New sensors, service kits, programming, and relearns are part of any mount-and-balance job.",
      },
    ],
  },
  {
    heading: "Detailing — paint, coatings, interior",
    items: [
      {
        question: "How long does a ceramic coating last?",
        answer:
          "Depends on the coating and how the car is washed. Our 3-, 5-, and 7-year coatings are realistic with regular maintenance washes — coastal salt air and bird drops are the things that shorten coating life if left on the paint.",
      },
      {
        question: "What's the difference between paint correction and a coating?",
        answer:
          "Correction is the polishing work that removes swirls, scratches, and oxidation. Coating is the protective layer applied over corrected paint. We almost always do correction first, then coat — coating dirty or swirled paint just locks the defects in.",
      },
      {
        question: "How long does a full correction and coating take?",
        answer:
          "Usually 2–4 days. A one-step correction with a coating is faster; two-step correction on a darker color takes longer. We schedule one car per bay so the timeline is yours, not split.",
      },
      {
        question: "Will you tell me if a job isn't worth it?",
        answer:
          "Yes. If the paint can't hold a correction safely, or if a maintenance wash plus a sealant gets you 90% of the way for a quarter of the cost, we'll say so.",
      },
    ],
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: i.answer,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-ocean-900 text-sand-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            FAQ
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            The questions we get most.
          </h1>
          <p className="mt-5 max-w-2xl text-sand-100/85 text-lg">
            Don&apos;t see yours? Send us a note and we&apos;ll answer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 space-y-14">
        {faqs.map((group) => (
          <div key={group.heading}>
            <h2 className="font-display text-2xl md:text-3xl">
              {group.heading}
            </h2>
            <ul className="mt-6 divide-y divide-ocean-900/10 border-y border-ocean-900/10">
              {group.items.map((item) => (
                <li key={item.question}>
                  <details className="group py-4">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none [&::-webkit-details-marker]:hidden">
                      <span className="font-medium text-ocean-900">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="shrink-0 text-copper-600 transition-transform group-open:rotate-45 text-xl leading-none"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-ocean-900/75 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl bg-white border border-ocean-900/10 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="font-display text-xl">Still have a question?</h2>
            <p className="mt-1 text-ocean-900/75 text-sm">
              Tell us about the car and what you&apos;re trying to figure out.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-ocean-900 text-sand-50 px-5 py-2.5 text-sm hover:bg-ocean-700 transition-colors self-start"
          >
            Ask us
          </Link>
        </div>
      </section>
    </>
  );
}
