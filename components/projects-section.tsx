import Link from "next/link";
import { projects } from "@/lib/content";
import { IconBrandGithub, IconExternalLink } from "@/components/icons";

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-b border-border bg-surface px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-label font-medium text-secondary">
          what I&apos;ve built
        </p>
        <h2 className="mt-2 text-h2 font-medium tracking-tight text-primary">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-border bg-surface p-6 transition-colors duration-150 ease-in-out hover:bg-border-subtle"
            >
              <h3 className="text-h3 font-medium text-primary">{p.title}</h3>
              <p className="mt-2 text-body-sm text-secondary">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-border-subtle px-2.5 py-1 text-body-sm text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4 text-secondary">
                {p.githubUrl ? (
                  <Link
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 ease-in-out hover:text-accent focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
                    aria-label={`${p.title} on GitHub`}
                  >
                    <IconBrandGithub />
                  </Link>
                ) : null}
                {p.liveUrl ? (
                  <Link
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-150 ease-in-out hover:text-accent focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
                    aria-label={`${p.title} live demo`}
                  >
                    <IconExternalLink />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
