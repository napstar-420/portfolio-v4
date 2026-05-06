import { skillCategories } from "@/lib/content";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-border bg-surface px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-label font-medium text-secondary">what i use</p>
        <h2 className="mt-2 text-h2 font-medium tracking-tight text-primary">
          Skills
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-md bg-border-subtle px-5 py-4 text-body-sm text-primary"
            >
              <h3 className="text-h3 font-medium text-primary">{cat.title}</h3>
              <p className="mt-3 leading-relaxed text-secondary">{cat.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
