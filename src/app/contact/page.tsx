import { Suspense } from "react";
import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote or book a service at Seaside Garage and Detailing.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-ocean-900 text-sand-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-300">
            Contact
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            Tell us about the car.
          </h1>
          <p className="mt-5 max-w-2xl text-sand-100/85 text-lg">
            We&apos;ll come back within one business day with a quote and the
            next open slot.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <aside className="md:col-span-1 space-y-8">
            <InfoBlock title="Hours">
              <div>Tue – Sat</div>
              <div className="text-ocean-900/70 text-sm">By appointment</div>
            </InfoBlock>
            <InfoBlock title="Phone">
              <a href="tel:" className="hover:text-copper-600">
                Coming soon
              </a>
            </InfoBlock>
            <InfoBlock title="Email">
              <a
                href="mailto:hello@seasidegarageanddetailing.com"
                className="hover:text-copper-600 break-all"
              >
                hello@seasidegarageanddetailing.com
              </a>
            </InfoBlock>
            <InfoBlock title="Address">
              <div className="text-ocean-900/70 text-sm">
                Address coming soon
              </div>
            </InfoBlock>
          </aside>

          <div className="md:col-span-2">
            <Suspense
              fallback={
                <div className="rounded-2xl bg-white border border-ocean-900/10 p-8 text-sm text-ocean-900/60">
                  Loading form…
                </div>
              }
            >
              <InquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-copper-600">
        {title}
      </div>
      <div className="mt-2 text-ocean-900">{children}</div>
    </div>
  );
}
