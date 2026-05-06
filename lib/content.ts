export const site = {
  name: "Zohaib",
  fullName: "Zohaib Ahmad Khan",
  title: "Full-stack developer",
  location: "Lahore, Pakistan",
  email: "dev-zohaib@proton.me",
  website: "https://zohaib.is-a.dev",
  github: "https://github.com/napstar-420",
  /** Add `public/resume.pdf` — link used in Contact */
  resumePath: "/resume.pdf",
};

export const hero = {
  lines: [
    { text: "Full-stack developer", emphasis: "primary" as const },
    { text: "building platforms that", emphasis: "secondary" as const },
    { text: "scale and ship.", emphasis: "primary" as const },
  ],
  intro:
    "MERN engineer focused on billing infrastructure, multi-tenant systems, and developer experience. I turn complex backend constraints into products teams can rely on.",
  stats: [
    { value: "45%", label: "faster APIs at Freedom" },
    { value: "4+", label: "years shipping web products" },
    { value: "100%", label: "focus on production readiness" },
  ],
  stack: [
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "MongoDB",
    "Stripe",
    "PostgreSQL",
    "Redis",
    "AWS",
  ],
};

export type SkillCategory = { title: string; skills: string };

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & frameworks",
    skills:
      "JavaScript, TypeScript, React, Next.js, Vue.js, Node.js, Nest.js, MySQL, MongoDB, Knex.js, Prisma, Drizzle",
  },
  {
    title: "Architecture & domains",
    skills:
      "Stripe, Webhooks & idempotency, Payment lifecycle, SaaS billing, Multi-tenant design, Event-driven systems",
  },
  {
    title: "Tools & platform",
    skills:
      "Git, GitHub, Docker, AWS, Linux, VS Code, Slack, YouTrack, Trello",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Multi-tenant billing platform",
    description:
      "Subscription management with proration, trials, and revenue sharing, backed by Stripe Connect Express.",
    tags: ["TypeScript", "Node.js", "Stripe", "MongoDB"],
    githubUrl: site.github,
  },
  {
    title: "Dynamic infrastructure provisioning",
    description:
      "Tier-based Mongo, SQL, and S3 resources provisioned on demand for each subscriber workspace.",
    tags: ["AWS", "S3", "Multi-tenant", "Automation"],
    githubUrl: site.github,
  },
  {
    title: "MongoDB & SQL admin suites",
    description:
      "In-app database GUIs with CRUD, row operations, and a raw SQL runner for provisioned instances.",
    tags: ["Knex.js", "MongoDB", "React", "Vue.js"],
    githubUrl: site.github,
  },
  {
    title: "S3-compatible storage API",
    description:
      "External-facing API for user buckets with secure access patterns for uploaded assets.",
    tags: ["Node.js", "S3", "API design"],
    githubUrl: site.github,
  },
  {
    title: "Real-time notification system",
    description:
      "Socket.IO-powered in-app notifications that lifted engagement by surfacing events instantly.",
    tags: ["Socket.IO", "Vue.js", "Redis", "Node.js"],
    githubUrl: site.github,
  },
  {
    title: "Wordfall",
    description:
      "Real-time multiplayer word game with Pixi.js, live leaderboard, and synchronized scoring.",
    tags: ["Pixi.js", "Socket.IO", "JavaScript"],
    githubUrl: site.github,
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  range: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "MERN Stack Developer",
    company: "Techeezy",
    location: "Lahore, PK",
    range: "Aug 2025 – Present",
    bullets: [
      "Owned a production multi-tenant billing system: subscriptions, proration, trials, and revenue sharing.",
      "Built monetization infrastructure with Stripe Connect Express so platform users can earn from their own customers.",
      "Shipped infrastructure modules (Mongo, SQL, S3) provisioned dynamically by subscription tier.",
      "Delivered MongoDB and SQL admin panels, plus an S3-compatible API for external bucket access.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Freedom",
    location: "Los Angeles, USA (remote)",
    range: "Jan 2023 – Feb 2025",
    bullets: [
      "Cut average Express API latency ~45% with profiling and Redis caching.",
      "Built a Socket.IO + Vue.js notification system that increased key user interactions ~20%.",
      "Improved front-end load ~40% via lazy loading, image compression, and preload tuning.",
      "Refactored MySQL schema ~35% less redundancy; streamlined staging deployments and onboarding (over 50% faster setup).",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Plotano",
    location: "Lahore, PK",
    range: "May 2022 – Jan 2023",
    bullets: [
      "Built Wordfall — a real-time multiplayer game with Pixi.js and Socket.IO, including scoring and leaderboards.",
      "Resolved race conditions in multiplayer logic for fair scoring across concurrent players.",
    ],
  },
];
