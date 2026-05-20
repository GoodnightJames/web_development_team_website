import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ocean-900 text-sand-50">
      <div className="mx-auto max-w-3xl px-6 py-32 md:py-40 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-sand-300">404</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
          Wrong turn.
        </h1>
        <p className="mt-6 text-sand-100/85 text-lg max-w-xl mx-auto">
          The page you&apos;re looking for isn&apos;t here. Try one of the
          shops, or head back to the front of the lot.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-copper-500 text-sand-50 px-6 py-3 text-sm hover:bg-copper-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-sand-100/30 text-sand-50 px-6 py-3 text-sm hover:bg-sand-50/10 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
