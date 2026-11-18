const contactLinks = [
  { label: 'Email', value: 'art992398@email.com', href: 'mailto:art992398@email.com' },
  { label: 'GitHub', value: 'WitchakornThokul', href: 'https://github.com/WitchakornThokul' },
  { label: 'Facebook', value: 'tokki.once', href: 'https://web.facebook.com/tokki.once' },
  { label: 'Instagram', value: 'mimosa_4103', href: 'https://www.instagram.com/mimosa_4103/' },
];

const stats = [
  { value: '6', label: 'Production systems' },
  { value: '230+', label: 'Commits in Nov 2026' },
  { value: '1', label: 'Central sign-on for all apps' },
];

const systems = [
  {
    name: 'Smart Logistics Platform',
    summary:
      'Transport planning from sales orders, vehicle booking calendar, weighbridge ticket matching and shipment status tracking.',
    stack: ['Cloudflare Workers', 'Supabase', 'Realtime'],
  },
  {
    name: 'Central Portal (SSO)',
    summary: 'Single sign-on entry point and application launcher for every internal system.',
    stack: ['Cloudflare Pages', 'SSO'],
  },
  {
    name: 'DocAlert',
    summary: 'Document and contract renewal tracking with approval workflow and email notifications.',
    stack: ['Cloudflare Pages', 'Supabase'],
  },
  {
    name: 'Smart Business Dashboard',
    summary: 'Company KPI dashboard with task-oriented navigation and automated data collectors.',
    stack: ['Cloudflare Pages', 'KPI'],
  },
  {
    name: 'Mini Business Dashboard',
    summary: 'Lightweight KPI view with role-based manual overrides for automated metrics.',
    stack: ['Cloudflare Pages', 'RBAC'],
  },
  {
    name: 'ESG Disclosure Site',
    summary: 'Bilingual Thai and English ESG reporting across five categories.',
    stack: ['React', 'Vite'],
  },
];

const logisticsHighlights = [
  {
    title: 'Platform migration',
    body: 'Moved DEMO and PRD environments from Vercel to Cloudflare Workers and Pages, including scheduled jobs. The legacy app now redirects users to the new system.',
  },
  {
    title: 'Performance',
    body: 'Replaced 30-second polling with Supabase Realtime, throttled shared-data refresh and batched notification queries to reduce CPU usage.',
  },
  {
    title: 'Planning',
    body: 'Plan directly from sales orders with over-quantity warnings, provisional loading dates and storage jobs that do not require an order.',
  },
  {
    title: 'Operations',
    body: 'Automatic weighbridge ticket matching, per-trip shipment numbers with attachments, weekly summaries and bulk cancellation with reasons.',
  },
  {
    title: 'Reporting and visualization',
    body: 'Logistics and sales reports aligned to updated business rules, plus a 3D yard layout for three branches.',
  },
  {
    title: 'Security',
    body: 'Dedicated least-privilege database role for the web application, access logging and rotated SSO secrets.',
  },
];

const projects = [
  {
    title: 'Smart Cow Tracker',
    category: 'Mobile application',
    description:
      'Dairy farm management app for tracking cows, health records, appointments and assistants.',
    tags: ['React Native', 'Expo', 'Firebase'],
    posterImageUrl:
      'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/Witchakorn_Poster_jbtl7j.jpg',
    videoUrl: 'https://youtu.be/uTIGElkRXKc',
    repoUrl: 'https://github.com/WitchakornThokul/ACRUX',
  },
  {
    title: 'PQS Logistics (v1)',
    category: 'Planning and booking system',
    description:
      'The original logistics planning and vehicle booking tool with approval and reporting flows, which preceded the Smart Logistics Platform.',
    tags: ['Google Apps Script', 'Google Sheets'],
    posterImageUrl:
      'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/InternshipPoster_Witchakorn_tunckf.jpg',
    videoUrl: null,
    repoUrl: 'https://github.com/WitchakornThokul/PQS',
  },
];

const skillGroups = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Angular', 'Bootstrap'] },
  { group: 'Mobile', items: ['React Native', 'Expo'] },
  { group: 'Backend and Data', items: ['Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'MySQL', 'MongoDB', 'Slim Framework'] },
  { group: 'Cloud and Delivery', items: ['Cloudflare Workers', 'Cloudflare Pages', 'Vercel', 'Git'] },
  { group: 'Automation and Tools', items: ['Google Apps Script', 'Google Sheets', 'Postman', 'Figma'] },
];

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0b0d10]/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="text-sm font-semibold tracking-wide text-white">
            Witchakorn Thokul
          </a>
          <nav className="flex items-center gap-4 text-xs font-medium text-slate-400 sm:gap-6 sm:text-sm">
            {NAV_LINKS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`transition-colors hover:text-white ${n.href === '#skills' ? 'hidden sm:inline' : ''}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto w-full max-w-5xl space-y-20 px-4 py-12 sm:space-y-28 sm:px-6 sm:py-20">
        {/* Hero */}
        <section className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.06] px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to opportunities
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Witchakorn Thokul
              </h1>
              <p className="text-lg font-medium text-slate-300 sm:text-xl">
                Full-Stack Developer, Enterprise Web Systems and Mobile
              </p>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400">
              I build and operate internal business systems for a manufacturing and logistics organization,
              covering transport planning, KPI dashboards, document workflows and ESG disclosure. Recently led the
              migration of six production systems to Cloudflare under one company domain with central sign-on.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="#experience"
                className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
              >
                View experience
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                Get in touch
              </a>
            </div>
          </div>
          <img
            src="/profile.jpg"
            alt="Witchakorn Thokul"
            width={640}
            height={640}
            className="order-first h-28 w-28 rounded-2xl border border-white/10 object-cover sm:h-36 sm:w-36 md:order-none md:h-44 md:w-44 lg:h-52 lg:w-52"
          />
        </section>

        <section className="grid grid-cols-3 divide-x divide-white/[0.06] rounded-xl border border-white/[0.06] bg-white/[0.02]">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-5 text-center sm:px-6 sm:py-6">
              <p className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <SectionHeading eyebrow="Experience" title="Enterprise Systems Portfolio" />
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-400">
            Six production systems used daily by operations, sales and management teams. All moved from Vercel to
            Cloudflare in November 2026 and share a single sign-on portal.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s) => (
              <article
                key={s.name}
                className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/15"
              >
                <h3 className="text-base font-semibold text-white">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white">Smart Logistics Platform: recent work</h3>
            <p className="mt-1 text-sm text-slate-400">
              Replaced a Google Apps Script tool with a full web application.
            </p>
            <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {logisticsHighlights.map((h) => (
                <div key={h.title} className="border-l-2 border-sky-400/60 pl-4">
                  <dt className="text-sm font-semibold text-white">{h.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-400">{h.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <SectionHeading eyebrow="Projects" title="Selected Projects" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:border-white/15"
              >
                <img
                  src={p.posterImageUrl}
                  alt={`${p.title} poster`}
                  className="aspect-[4/3] w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="space-y-4 p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">{p.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="flex gap-5 pt-1 text-sm font-semibold">
                    {p.videoUrl && (
                      <a href={p.videoUrl} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline">
                        Watch demo
                      </a>
                    )}
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 underline-offset-4 hover:text-white hover:underline">
                      Source code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <SectionHeading eyebrow="Skills" title="Technical Skills" />
          <div className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.06]">
            {skillGroups.map((g) => (
              <div key={g.group} className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:items-center">
                <p className="text-sm font-semibold text-white">{g.group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <SectionHeading eyebrow="Contact" title="Get in Touch" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/20"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{c.label}</p>
                <p className="mt-1 truncate text-sm font-medium text-white">{c.value}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/[0.06] pt-6 text-center text-xs text-slate-500">
          &copy; 2026 Witchakorn Thokul
        </footer>
      </div>
    </main>
  );
}
