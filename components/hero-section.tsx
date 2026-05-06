import Link from "next/link";
import { hero } from "@/lib/content";
import { IconArrowRight, IconChevronDown } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-surface px-6 pb-16 pt-10 md:px-12 md:pb-[72px] md:pt-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[720px]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-muted px-3 py-1 text-label font-medium text-accent">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-success"
              aria-hidden
            />
            Available for new opportunities
          </p>

          <h1 className="text-h1 font-medium tracking-tight text-primary">
            {hero.lines.map((line, i) => (
              <span
                key={line.text}
                className={
                  line.emphasis === "secondary"
                    ? "text-secondary"
                    : "text-primary"
                }
              >
                {line.text}
                {i < hero.lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-body-lg text-secondary">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="rounded-md bg-primary px-[22px] py-2.5 text-body-sm font-medium text-surface transition-colors duration-150 ease-in-out hover:bg-tertiary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
            >
              View my work
            </Link>
            <Link
              href="/resume.pdf"
              className="inline-flex items-center gap-1 text-body-sm font-medium text-secondary transition-colors duration-150 ease-in-out hover:text-primary focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
            >
              Download CV
              <IconArrowRight className="shrink-0" />
            </Link>
          </div>

          <ul
            className="mt-12 flex flex-wrap gap-x-12 gap-y-4"
            aria-label="Career highlights"
          >
            {hero.stats.map((s) => (
              <li key={s.label}>
                <p className="text-[1.375rem] font-medium leading-none tracking-tight text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-[0.8125rem] leading-snug text-secondary">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-2">
            {hero.stack.map((t) => (
              <span
                key={t}
                className="rounded-md bg-border-subtle px-2.5 py-1 text-body-sm text-secondary"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-14 flex items-center gap-2 text-label font-medium text-secondary">
            <IconChevronDown className="shrink-0 opacity-70" aria-hidden />
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}
