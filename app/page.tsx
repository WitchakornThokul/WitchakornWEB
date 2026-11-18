import { CopyEmail, Reveal } from './components/Interactive';
import { SystemMap } from './components/SystemMap';

type Skill = { name: string; icon?: string };

const EMAIL = 'art992398@email.com';

const marqueeIcons = [
  'nextdotjs', 'react', 'typescript', 'supabase', 'postgresql', 'cloudflare', 'tailwindcss', 'vite',
  'threedotjs', 'nodedotjs', 'python', 'apacheecharts', 'firebase', 'expo', 'googleappsscript', 'github',
];

const heroBadges = [
  { icon: 'nextdotjs', name: 'Next.js', pos: '-left-10 top-6', delay: '0s' },
  { icon: 'supabase', name: 'Supabase', pos: '-right-12 top-16', delay: '1.2s' },
  { icon: 'cloudflare', name: 'Cloudflare', pos: '-left-14 bottom-10', delay: '2.1s' },
  { icon: 'react', name: 'React', pos: '-right-8 -bottom-4', delay: '0.6s' },
];

const migration = [
  { date: '16 Nov', title: 'DEMO on Cloudflare', body: 'Smart Logistics DEMO running on Cloudflare Workers.' },
  {
    date: '17 Nov',
    title: 'Production cut-over',
    body: 'Logistics PRD and scheduled jobs moved. Portal, DocAlert and both dashboards live on Cloudflare Pages.',
  },
  { date: '18 Nov', title: 'Legacy retired', body: 'Vercel project paused. The old app now points users to the new system.' },
  { date: 'Result', title: 'One domain, one sign-on', body: 'Every app verified end to end from the central portal.' },
];

const contactLinks = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: 'gmail' },
  { label: 'GitHub', value: 'WitchakornThokul', href: 'https://github.com/WitchakornThokul', icon: 'github' },
  { label: 'Facebook', value: 'tokki.once', href: 'https://web.facebook.com/tokki.once', icon: 'facebook' },
  { label: 'Instagram', value: 'mimosa_4103', href: 'https://www.instagram.com/mimosa_4103/', icon: 'instagram' },
];

const stats = [
  { value: '6', label: 'Production systems' },
  { value: '230+', label: 'Commits in Nov 2026' },
  { value: '1', label: 'Central sign-on for all apps' },
];

const S = {
  next: { name: 'Next.js', icon: 'nextdotjs' },
  react: { name: 'React', icon: 'react' },
  ts: { name: 'TypeScript', icon: 'typescript' },
  vite: { name: 'Vite', icon: 'vite' },
  tw: { name: 'Tailwind CSS', icon: 'tailwindcss' },
  supabase: { name: 'Supabase', icon: 'supabase' },
  pg: { name: 'PostgreSQL', icon: 'postgresql' },
  three: { name: 'Three.js', icon: 'threedotjs' },
  echarts: { name: 'ECharts', icon: 'apacheecharts' },
  py: { name: 'Python ETL', icon: 'python' },
  router: { name: 'React Router', icon: 'reactrouter' },
  sheets: { name: 'Google Sheets', icon: 'googlesheets' },
  workers: { name: 'Cloudflare Workers', icon: 'cloudflareworkers' },
  pages: { name: 'Cloudflare Pages', icon: 'cloudflarepages' },
} satisfies Record<string, Skill>;

const systems: { name: string; summary: string; stack: Skill[] }[] = [
  {
    name: 'Smart Logistics Platform',
    summary:
      'Transport planning from sales orders, vehicle booking calendar, weighbridge ticket matching and shipment status tracking.',
    stack: [S.next, S.ts, S.tw, S.supabase, S.three, S.workers],
  },
  {
    name: 'Central Portal (SSO)',
    summary: 'Single sign-on entry point and application launcher for every internal system, with SSO token exchange at the edge.',
    stack: [S.react, S.vite, S.tw, S.supabase, S.three, S.pages],
  },
  {
    name: 'DocAlert',
    summary: 'Document and contract renewal tracking with approval workflow and email notifications.',
    stack: [S.react, S.ts, S.vite, S.router, S.tw, S.supabase, S.pages],
  },
  {
    name: 'Smart Business Dashboard',
    summary: 'Company KPI dashboard with task-oriented navigation, fed by automated Python data collectors.',
    stack: [S.react, S.vite, S.tw, S.echarts, S.py, S.pg, S.pages],
  },
  {
    name: 'Mini Business Dashboard',
    summary: 'Lightweight KPI view with role-based manual overrides for automated metrics and Excel file support.',
    stack: [S.react, S.vite, S.tw, S.supabase, S.pages],
  },
  {
    name: 'ESG Disclosure Site',
    summary: 'Bilingual Thai and English ESG reporting across five categories.',
    stack: [S.react, S.vite, S.tw, S.supabase, S.sheets],
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

const projects: {
  title: string;
  category: string;
  description: string;
  stack: Skill[];
  posterImageUrl: string;
  videoUrl: string | null;
  repoUrl: string;
}[] = [
  {
    title: 'Smart Cow Tracker',
    category: 'Mobile application',
    description:
      'Dairy farm management app for tracking cows, health records, appointments and assistants.',
    stack: [
      { name: 'React Native', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
      { name: 'Firebase', icon: 'firebase' },
    ],
    posterImageUrl:
      'https://res.cloudinary.com/dgh4ndaru/image/upload/c_fill,g_north,w_900,h_560/v1778949911/Witchakorn_Poster_jbtl7j.jpg',
    videoUrl: 'https://youtu.be/uTIGElkRXKc',
    repoUrl: 'https://github.com/WitchakornThokul/ACRUX',
  },
  {
    title: 'PQS Logistics (v1)',
    category: 'Planning and booking system',
    description:
      'The original logistics planning and vehicle booking tool with approval and reporting flows, which preceded the Smart Logistics Platform.',
    stack: [
      { name: 'Google Apps Script', icon: 'googleappsscript' },
      { name: 'Google Sheets', icon: 'googlesheets' },
    ],
    posterImageUrl:
      'https://res.cloudinary.com/dgh4ndaru/image/upload/c_fill,g_north,w_900,h_560/v1778949911/InternshipPoster_Witchakorn_tunckf.jpg',
    videoUrl: null,
    repoUrl: 'https://github.com/WitchakornThokul/PQS',
  },
];

const skillGroups: { group: string; items: Skill[] }[] = [
  {
    group: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'PHP', icon: 'php' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Three.js', icon: 'threedotjs' },
      { name: 'ECharts', icon: 'apacheecharts' },
    ],
  },
  {
    group: 'Mobile',
    items: [
      { name: 'React Native', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
    ],
  },
  {
    group: 'Backend and Data',
    items: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    group: 'Cloud and Delivery',
    items: [
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'Cloudflare Workers', icon: 'cloudflareworkers' },
      { name: 'Cloudflare Pages', icon: 'cloudflarepages' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
  {
    group: 'Automation and Tools',
    items: [
      { name: 'Google Apps Script', icon: 'googleappsscript' },
      { name: 'Google Sheets', icon: 'googlesheets' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
];

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function Logo({ icon, name, size = 16 }: { icon?: string; name: string; size?: number }) {
  if (!icon) return null;
  return <img src={`/icons/${icon}.svg`} alt="" aria-hidden width={size} height={size} title={name} />;
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500">{intro}</p>}
    </div>
  );
}

function StackChip({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
      <Logo icon={skill.icon} name={skill.name} size={13} />
      {skill.name}
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-slate-900">
            <span className="sm:hidden">W. Thokul</span>
            <span className="hidden sm:inline">Witchakorn Thokul</span>
          </a>
          <nav className="flex items-center gap-4 text-[13px] font-medium text-slate-500 sm:gap-8 sm:text-sm">
            {NAV_LINKS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`transition-colors hover:text-slate-900 ${n.href === '#skills' ? 'hidden sm:inline' : ''}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-40 h-[360px] w-[360px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to opportunities
            </p>
            <div className="space-y-4">
              <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Witchakorn{' '}
                <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Thokul</span>
              </h1>
              <p className="text-lg font-medium text-slate-600 sm:text-xl">
                Full-Stack Developer <span className="text-slate-300">/</span> Enterprise Web Systems{' '}
                <span className="text-slate-300">/</span> Mobile
              </p>
            </div>
            <p className="max-w-2xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
              I build and operate internal business systems for a manufacturing and logistics organization, covering
              transport planning, KPI dashboards, document workflows and ESG disclosure. Recently led the move of five
              production systems from Vercel to Cloudflare under one company domain with central sign-on.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                View experience
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="relative order-first justify-self-start md:order-none md:justify-self-center">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-200/70 via-white to-indigo-200/70 blur-md" />
            <img
              src="/profile.jpg"
              alt="Witchakorn Thokul"
              width={640}
              height={640}
              className="relative h-28 w-28 rounded-3xl object-cover shadow-xl shadow-slate-900/10 ring-1 ring-white sm:h-36 sm:w-36 md:h-64 md:w-64"
            />
            {heroBadges.map((b) => (
              <span
                key={b.icon}
                className={`float absolute hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur md:inline-flex ${b.pos}`}
                style={{ animationDelay: b.delay }}
              >
                <img src={`/icons/${b.icon}.svg`} alt="" width={14} height={14} />
                {b.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-6 text-center sm:px-6">
              <p className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="marquee-wrap relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Shipping with</p>
          <div className="marquee flex w-max gap-12">
            {[...marqueeIcons, ...marqueeIcons].map((ic, i) => (
              <img
                key={`${ic}-${i}`}
                src={`/icons/${ic}.svg`}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-16 border-y border-slate-200/70 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Experience"
            title="Enterprise Systems Portfolio"
            intro="Six production systems used daily by operations, sales and management teams, sharing one company domain and a single sign-on portal. Five moved from Vercel to Cloudflare in November 2026."
          />

          <Reveal>
            <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8">
              <SystemMap />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s, i) => (
              <Reveal key={s.name} delay={i * 60} className="flex">
              <article className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-base font-semibold text-slate-900">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <StackChip key={t.name} skill={t} />
                  ))}
                </div>
              </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">Cloudflare migration, November 2026</h3>
              <p className="mt-1 text-sm text-slate-500">Five production systems moved in three days with no change to how staff sign in.</p>
              <ol className="relative mt-8 grid gap-6 sm:grid-cols-4 sm:gap-4">
                <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-slate-200 sm:left-0 sm:top-[7px] sm:h-px sm:w-full" />
                {migration.map((m, i) => (
                  <li key={m.date} className="relative pl-8 sm:pl-0 sm:pt-8">
                    <span
                      className={`absolute left-0 top-0.5 h-3.5 w-3.5 rounded-full border-2 sm:top-0 ${
                        i === migration.length - 1 ? 'border-emerald-500 bg-emerald-500' : 'border-sky-500 bg-white'
                      }`}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">{m.date}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{m.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{m.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal>
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">Smart Logistics Platform: recent work</h3>
            <p className="mt-1 text-sm text-slate-500">Replaced a Google Apps Script tool with a full web application.</p>
            <dl className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2">
              {logisticsHighlights.map((h) => (
                <div key={h.title} className="border-l-2 border-sky-500 pl-4">
                  <dt className="text-sm font-semibold text-slate-900">{h.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-500">{h.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Projects" title="Selected Projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
            <article
              className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="overflow-hidden border-b border-slate-100 bg-slate-50">
                <img
                  src={p.posterImageUrl}
                  alt={`${p.title} poster`}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">{p.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <StackChip key={t.name} skill={t} />
                  ))}
                </div>
                <div className="flex gap-5 pt-1 text-sm font-semibold">
                  {p.videoUrl && (
                    <a
                      href={p.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                    >
                      Watch demo
                    </a>
                  )}
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 underline decoration-slate-200 underline-offset-4 hover:text-slate-900 hover:decoration-slate-900"
                  >
                    Source code
                  </a>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-16 border-y border-slate-200/70 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="Skills" title="Tech Stack" />
          <div className="space-y-10">
            {skillGroups.map((g) => (
              <div key={g.group}>
                <h3 className="mb-4 text-sm font-semibold text-slate-900">{g.group}</h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
                  {g.items.map((s) => (
                    <div
                      key={`${g.group}-${s.name}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-100">
                        <Logo icon={s.icon} name={s.name} size={20} />
                      </span>
                      <span className="text-sm font-medium leading-snug text-slate-700">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/25 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Have a system that needs building?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
                Open to full-stack and mobile roles. I reply fastest by email.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-sky-100"
                >
                  <img src="/icons/gmail.svg" alt="" width={16} height={16} />
                  Email me
                </a>
                <CopyEmail email={EMAIL} />
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {contactLinks
                  .filter((c) => c.label !== 'Email')
                  .map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm text-slate-200 transition-colors hover:border-white/30 hover:bg-white/10"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                        <img src={`/icons/${c.icon}.svg`} alt="" width={15} height={15} />
                      </span>
                      <span className="font-medium">{c.label}</span>
                      <span className="text-slate-400">{c.value}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-xs text-slate-400 sm:flex-row sm:px-8">
          <p>&copy; 2026 Witchakorn Thokul</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
