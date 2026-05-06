import Link from "next/link";
import { site } from "@/lib/content";
import {
  IconBrandGithub,
  IconExternalLink,
  IconFileText,
  IconMail,
} from "@/components/icons";

const links = [
  {
    href: `mailto:${site.email}`,
    label: "Email",
    icon: IconMail,
    external: false,
  },
  {
    href: site.github,
    label: "GitHub",
    icon: IconBrandGithub,
    external: true,
  },
  {
    href: site.website,
    label: "Website",
    icon: IconExternalLink,
    external: true,
  },
  {
    href: site.resumePath,
    label: "Resume",
    icon: IconFileText,
    external: false,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-surface px-6 py-20 md:px-12 md:py-[80px]"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-h2 font-medium tracking-tight text-primary">
          Let&apos;s build something solid
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-body-lg text-secondary">
          Open to roles where backend depth, payments, and platform design
          matter. Reach out by email or GitHub.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 rounded-md bg-border-subtle px-5 py-3 text-body-sm font-medium text-primary transition-colors duration-150 ease-in-out hover:bg-border focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
            >
              <Icon />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
