import Link from "next/link";
import { site } from "@/lib/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex h-auto min-h-[72px] max-w-[1100px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-3 md:flex-nowrap md:px-12 md:py-0">
        <Link
          href="#"
          className="text-body-lg font-medium tracking-tight text-primary transition-colors duration-150 ease-in-out hover:text-secondary focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
        >
          {site.name}.
        </Link>

        <nav
          className="order-3 flex w-full flex-wrap justify-center gap-x-8 gap-y-1 md:order-none md:flex-1 md:w-auto"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-label font-medium text-secondary transition-colors duration-150 ease-in-out hover:text-primary focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="order-2 rounded-md px-[18px] py-2 text-label font-medium text-primary transition-colors duration-150 ease-in-out hover:bg-border-subtle focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent md:order-none"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
