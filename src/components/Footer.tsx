import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 bg-ocean-900 text-sand-100">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Seaside Garage &amp; Detailing</div>
          <p className="mt-3 text-sand-100/70 max-w-sm text-sm leading-relaxed">
            Precision automotive service and concours-grade detailing on the
            coast. Built for drivers who care how their car runs and how it
            looks rolling out of the shop.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-sand-300">
            Services
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/automotive" className="hover:text-copper-500">
                Automotive
              </Link>
            </li>
            <li>
              <Link href="/detailing" className="hover:text-copper-500">
                Detailing
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-copper-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-copper-500">
                Book a service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-sand-300">
            Visit
          </div>
          <address className="not-italic mt-3 text-sm text-sand-100/80 leading-relaxed">
            Address coming soon
            <br />
            Tue&ndash;Sat, by appointment
          </address>
        </div>
      </div>
      <div className="border-t border-sand-100/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-sand-100/60">
          <span>
            &copy; {new Date().getFullYear()} Seaside Garage and Detailing. All
            rights reserved.
          </span>
          <span>Made on the coast.</span>
        </div>
      </div>
    </footer>
  );
}
