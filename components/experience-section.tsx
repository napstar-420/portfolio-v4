import { experience } from "@/lib/content";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-border bg-surface px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-label font-medium text-secondary">
          where I&apos;ve worked
        </p>
        <h2 className="mt-2 text-h2 font-medium tracking-tight text-primary">
          Experience
        </h2>
        <div className="mt-10">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.range}`}
              className={`py-8 first:pt-0 ${
                index > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                <h3 className="text-h3 font-medium text-primary">
                  {job.role}{" "}
                  <span className="font-medium text-secondary">
                    · {job.company}
                  </span>
                </h3>
                <p className="text-label font-medium text-secondary sm:text-right">
                  {job.range} · {job.location}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm leading-relaxed text-secondary">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
