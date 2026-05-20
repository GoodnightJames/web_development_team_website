import Link from "next/link";

const links = [
  { href: "/automotive", label: "Automotive" },
  { href: "/detailing", label: "Detailing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-ocean-900/10 bg-sand-50/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            aria-hidden
            className="h-8 w-8 rounded-full bg-ocean-900 grid place-items-center text-sand-100 font-display text-sm"
          >
            S
          </span>
          <span className="font-display text-lg leading-none">
            Seaside Garage
            <span className="block text-[10px] tracking-[0.25em] uppercase text-ocean-700 mt-1">
              &amp; Detailing
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ocean-900/80 hover:text-copper-600 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-ocean-900 text-sand-50 px-4 py-2 text-sm hover:bg-ocean-700 transition-colors"
          >
            Book a service
          </Link>
        </nav>
        <nav className="md:hidden flex items-center gap-4 text-sm">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-ocean-900 text-sand-50 px-3 py-1.5 text-xs"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
