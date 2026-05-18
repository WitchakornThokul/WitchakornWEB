const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/WitchakornThokul',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg',
    color: '#ffffff'
  },
  {
    label: 'Email',
    href: 'mailto:art992398@email.com',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg',
    color: '#EA4335'
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/tokki.once',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg',
    color: '#1877F2'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mimosa_4103/',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg',
    color: '#E1306C'
  }
];

const highlights = [
  // Frontend
  { title: 'HTML', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', category: 'Frontend' },
  { title: 'CSS', color: '#1572B6', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', category: 'Frontend' },
  { title: 'JavaScript', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Frontend' },
  { title: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg', href: 'https://react.dev/', category: 'Frontend' },
  { title: 'Next.js', color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg', href: 'https://nextjs.org/', category: 'Frontend' },
  { title: 'Tailwind CSS', color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg', href: 'https://tailwindcss.com/', category: 'Frontend' },
  { title: 'Angular', color: '#DD0031', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg', href: 'https://angular.dev/', category: 'Frontend' },
  { title: 'Bootstrap', color: '#7952B3', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg', href: 'https://getbootstrap.com/', category: 'Frontend' },
  // Backend
  { title: 'Node.js', color: '#339933', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg', href: 'https://nodejs.org/', category: 'Backend' },
  { title: 'PHP', color: '#8892BF', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg', href: 'https://www.php.net/', category: 'Backend' },
  { title: 'Slim Framework', color: '#74a045', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/composer.svg', href: 'https://www.slimframework.com/', category: 'Backend' },
  { title: 'Python', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg', href: 'https://www.python.org/', category: 'Backend' },
  // Mobile
  { title: 'React Native', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg', href: 'https://reactnative.dev/', category: 'Mobile' },
  { title: 'Expo', color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg', href: 'https://expo.dev/', category: 'Mobile' },
  // Database
  { title: 'Firebase', color: '#FFCA28', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg', href: 'https://firebase.google.com/', category: 'Database' },
  { title: 'MySQL', color: '#4479A1', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg', href: 'https://www.mysql.com/', category: 'Database' },
  { title: 'MongoDB', color: '#47A248', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg', href: 'https://www.mongodb.com/', category: 'Database' },
  // Tools
  { title: 'Figma', color: '#F24E1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg', href: 'https://www.figma.com/', category: 'Tools' },
  { title: 'Canva', color: '#00C4CC', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg', href: 'https://www.canva.com/', category: 'Tools' },
  { title: 'WordPress', color: '#21759B', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg', href: 'https://wordpress.org/', category: 'Tools' },
  { title: 'Google Apps Script', color: '#4285F4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg', href: 'https://developers.google.com/apps-script', category: 'Tools' },
  { title: 'Google Sheets', color: '#34A853', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlesheets.svg', href: 'https://www.google.com/sheets/about/', category: 'Tools' },
  { title: 'Postman', color: '#FF6C37', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg', href: 'https://www.postman.com/', category: 'Tools' }
];

const categoryConfig: Record<string, { color: string; accent: string }> = {
  Frontend: { color: '#22d3ee', accent: 'rgba(34,211,238,0.08)' },
  Backend:  { color: '#4ade80', accent: 'rgba(74,222,128,0.08)' },
  Mobile:   { color: '#a78bfa', accent: 'rgba(167,139,250,0.08)' },
  Database: { color: '#fbbf24', accent: 'rgba(251,191,36,0.08)'  },
  Tools:    { color: '#f472b6', accent: 'rgba(244,114,182,0.08)' },
};

const projects = [
  {
    title: 'SMART COW TRACKER',
    category: 'React Native + Firebase',
    description: 'A modern farm management app for tracking cows, health records, appointments, and assistants.',
    tags: ['Expo', 'Firebase', 'Mobile UI'],
    posterImageUrl: 'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/Witchakorn_Poster_jbtl7j.jpg',
    videoUrl: 'https://youtu.be/uTIGElkRXKc',
    repoUrl: 'https://github.com/WitchakornThokul/ACRUX'
  },
  {
    title: 'PQS Logistics',
    category: 'Planning & booking system',
    description: 'An intelligent logistics planning and vehicle booking system focused on approval and reporting flows.',
    tags: ['Google Apps Script', 'Calendar', 'Reports'],
    posterImageUrl: 'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/InternshipPoster_Witchakorn_tunckf.jpg',
    videoUrl: null,
    repoUrl: 'https://github.com/WitchakornThokul/PQS'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-16">

        {/* ── Header ── */}
        <header className="flex items-center justify-between border-b border-white/[0.06] pb-5 pt-2">
          <div className="flex items-center gap-3">
            <div
              className="h-5 w-1 rounded-full"
              style={{ background: 'linear-gradient(to bottom, #00d9ff, #a78bfa)' }}
            />
            <h1 className="font-['Space_Grotesk'] text-base font-semibold tracking-wide text-white">
              WITCHAKORN THOKUL
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/WitchakornThokul"
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm text-white/40 transition hover:text-[#00d9ff] sm:block"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WitchakornThokul"
              target="_blank"
              rel="noreferrer"
              title="Witchakorn Thokul"
              className="block overflow-hidden rounded-full ring-2 ring-white/10 transition hover:ring-[#00d9ff]/50"
            >
              <img
                src="https://avatars.githubusercontent.com/u/199068319?s=64&v=4"
                alt="Witchakorn Thokul"
                className="h-9 w-9 object-cover"
              />
            </a>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="space-y-7 py-6">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities
          </div>

          {/* Big title */}
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/30">
              Witchakorn Thokul
            </p>
            <h1
              className="font-['Space_Grotesk'] text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
              style={{
                background: 'linear-gradient(135deg, #00d9ff 0%, #a78bfa 50%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Aspiring Mobile Developer
            </h1>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-white/45">
            Building practical, user-focused experiences with React Native, Firebase, and modern web tech.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="rounded-full px-8 py-3 text-sm font-bold text-[#060a1a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,217,255,0.45)]"
              style={{ background: 'linear-gradient(135deg, #00d9ff, #0099cc)' }}
            >
              See Work
            </a>
            <a
              href="#connect"
              className="rounded-full border border-[#00d9ff]/40 px-8 py-3 text-sm font-bold text-[#00d9ff] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00d9ff] hover:bg-[#00d9ff]/5 hover:shadow-[0_0_16px_rgba(0,217,255,0.15)]"
            >
              Contact
            </a>
          </div>
        </section>

        {/* ── Languages & Tools ── */}
        <section>
          <h2 className="mb-8 font-['Space_Grotesk'] text-2xl font-bold text-white">
            Languages &amp; Tools
          </h2>
          <div className="space-y-8">
            {(['Frontend', 'Backend', 'Mobile', 'Database', 'Tools'] as const).map((category) => {
              const cfg = categoryConfig[category];
              return (
                <div key={category}>
                  {/* Category header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-6 rounded-full" style={{ backgroundColor: cfg.color }} />
                    <h3
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: cfg.color }}
                    >
                      {category}
                    </h3>
                    <div className="h-px flex-1 rounded-full" style={{ backgroundColor: `${cfg.color}18` }} />
                  </div>

                  {/* Skill cards */}
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-white/[0.06] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:-translate-y-px"
                          style={{ background: 'rgba(10, 14, 36, 0.5)' }}
                        >
                          {/* Colored icon badge */}
                          <div
                            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                            style={{
                              backgroundColor: `${item.color}18`,
                              border: `1px solid ${item.color}28`,
                            }}
                          >
                            <img
                              src={item.logo}
                              alt={item.title}
                              className="h-4 w-4 filter brightness-0 invert"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-sm font-medium text-white/70 transition group-hover:text-white">
                            {item.title}
                          </span>
                        </a>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects">
          <h2 className="mb-8 font-['Space_Grotesk'] text-2xl font-bold text-white">Projects</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
                style={{ background: 'rgba(10, 14, 36, 0.6)' }}
              >
                {/* Poster image */}
                {project.posterImageUrl && (
                  <div className="overflow-hidden">
                    <img
                      src={project.posterImageUrl}
                      alt={`${project.title} Poster`}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Card body */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#00d9ff]">
                      {project.category}
                    </p>
                    <h3 className="mt-1.5 font-['Space_Grotesk'] text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#00d9ff]/20 bg-[#00d9ff]/5 px-3 py-1 text-xs font-semibold text-[#4dd9ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex gap-4 pt-1">
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00d9ff] transition hover:text-white"
                      >
                        <span className="text-xs">▶</span> Watch Demo
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/40 transition hover:text-white"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section className="space-y-6">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">About</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Focus',     value: 'React Native & Firebase', icon: '📱' },
              { label: 'Interests', value: 'Mobile, Cloud, AgriTech',  icon: '🌱' },
              { label: 'Location',  value: 'Thailand 🇹🇭',             icon: '📍' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.06] p-5 transition hover:border-white/[0.1]"
                style={{ background: 'rgba(10, 14, 36, 0.5)' }}
              >
                <div className="mb-3 text-2xl">{item.icon}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                  {item.label}
                </p>
                <p className="mt-1.5 font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Connect ── */}
        <section id="connect" className="space-y-6 pb-4">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">Connect</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.06] px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14]"
                style={{ background: 'rgba(10, 14, 36, 0.5)' }}
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg transition-all"
                  style={{ backgroundColor: `${link.color}20` }}
                >
                  <img
                    src={link.logo}
                    alt={link.label}
                    className="h-4 w-4 filter brightness-0 invert opacity-80 transition group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/[0.05] py-8 text-center text-xs text-white/20">
          © 2026 Witchakorn Thokul. Built with Next.js on Vercel.
        </footer>

      </div>
    </main>
  );
}
