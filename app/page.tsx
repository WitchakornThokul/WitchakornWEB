'use client';

import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';

const profileLinks = [
  { label: 'GitHub',    href: 'https://github.com/WitchakornThokul',          logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg',    color: '#ffffff' },
  { label: 'Email',     href: 'mailto:art992398@email.com',                    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg',     color: '#EA4335' },
  { label: 'Facebook',  href: 'https://web.facebook.com/tokki.once',           logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg',  color: '#1877F2' },
  { label: 'Instagram', href: 'https://www.instagram.com/mimosa_4103/',        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg', color: '#E1306C' },
];

const highlights = [
  { title: 'HTML',               color: '#E34F26', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg',        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',       category: 'Frontend' },
  { title: 'CSS',                color: '#1572B6', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg',         href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',        category: 'Frontend' },
  { title: 'JavaScript',         color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg',   href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Frontend' },
  { title: 'React',              color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',        href: 'https://react.dev/',                                      category: 'Frontend' },
  { title: 'Next.js',            color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',    href: 'https://nextjs.org/',                                     category: 'Frontend' },
  { title: 'Tailwind CSS',       color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg',  href: 'https://tailwindcss.com/',                                category: 'Frontend' },
  { title: 'Angular',            color: '#DD0031', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg',      href: 'https://angular.dev/',                                    category: 'Frontend' },
  { title: 'Bootstrap',          color: '#7952B3', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg',    href: 'https://getbootstrap.com/',                               category: 'Frontend' },
  { title: 'Node.js',            color: '#339933', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg',    href: 'https://nodejs.org/',                                     category: 'Backend'  },
  { title: 'PHP',                color: '#8892BF', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg',          href: 'https://www.php.net/',                                    category: 'Backend'  },
  { title: 'Slim Framework',     color: '#74a045', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/composer.svg',     href: 'https://www.slimframework.com/',                          category: 'Backend'  },
  { title: 'Python',             color: '#3776AB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg',       href: 'https://www.python.org/',                                 category: 'Backend'  },
  { title: 'React Native',       color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',        href: 'https://reactnative.dev/',                                category: 'Mobile'   },
  { title: 'Expo',               color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg',         href: 'https://expo.dev/',                                       category: 'Mobile'   },
  { title: 'Firebase',           color: '#FFCA28', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg',     href: 'https://firebase.google.com/',                            category: 'Database' },
  { title: 'MySQL',              color: '#4479A1', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg',        href: 'https://www.mysql.com/',                                  category: 'Database' },
  { title: 'MongoDB',            color: '#47A248', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg',      href: 'https://www.mongodb.com/',                                category: 'Database' },
  { title: 'Figma',              color: '#F24E1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',        href: 'https://www.figma.com/',                                  category: 'Tools'    },
  { title: 'Canva',              color: '#00C4CC', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg',        href: 'https://www.canva.com/',                                  category: 'Tools'    },
  { title: 'WordPress',          color: '#21759B', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg',    href: 'https://wordpress.org/',                                  category: 'Tools'    },
  { title: 'Google Apps Script', color: '#4285F4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg',       href: 'https://developers.google.com/apps-script',               category: 'Tools'    },
  { title: 'Google Sheets',      color: '#34A853', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlesheets.svg', href: 'https://www.google.com/sheets/about/',                    category: 'Tools'    },
  { title: 'Postman',            color: '#FF6C37', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg',      href: 'https://www.postman.com/',                                category: 'Tools'    },
];

const categoryConfig: Record<string, { color: string }> = {
  Frontend: { color: '#22d3ee' },
  Backend:  { color: '#4ade80' },
  Mobile:   { color: '#a78bfa' },
  Database: { color: '#fbbf24' },
  Tools:    { color: '#f472b6' },
};

const projects = [
  {
    title: 'SMART COW TRACKER',
    category: 'React Native + Firebase',
    description: 'A modern farm management app for tracking cows, health records, appointments, and assistants.',
    tags: ['Expo', 'Firebase', 'Mobile UI'],
    posterImageUrl: 'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/Witchakorn_Poster_jbtl7j.jpg',
    videoUrl: 'https://youtu.be/uTIGElkRXKc',
    repoUrl: 'https://github.com/WitchakornThokul/ACRUX',
    accent: '#00d9ff',
  },
  {
    title: 'PQS Logistics',
    category: 'Planning & booking system',
    description: 'An intelligent logistics planning and vehicle booking system focused on approval and reporting flows.',
    tags: ['Google Apps Script', 'Calendar', 'Reports'],
    posterImageUrl: 'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/InternshipPoster_Witchakorn_tunckf.jpg',
    videoUrl: null,
    repoUrl: 'https://github.com/WitchakornThokul/PQS',
    accent: '#a78bfa',
  },
];

const TAG_PALETTE = ['#00d9ff', '#a78bfa', '#f472b6', '#4ade80', '#fbbf24', '#fb923c'];

const NAV_LINKS = [
  { href: '#skills',   label: 'Skills',   color: '#22d3ee' },
  { href: '#projects', label: 'Projects', color: '#a78bfa' },
  { href: '#connect',  label: 'Contact',  color: '#f472b6' },
];

function Divider({ colors }: { colors: string[] }) {
  return (
    <div
      className="h-px w-full"
      style={{ background: `linear-gradient(90deg, transparent, ${colors.join(', ')}, transparent)` }}
    />
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoaded(true);
    } else {
      setShowLoader(true);
    }
  }, []);

  const handleDone = () => {
    sessionStorage.setItem('hasVisited', '1');
    setLoaded(true);
    setShowLoader(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {showLoader && <LoadingScreen onDone={handleDone} />}

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: loaded ? 'opacity 0.8s ease' : 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── Sticky Header ── */}
        <header
          className="sticky top-0 z-40"
          style={{
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div
                className="h-6 w-1 rounded-full sm:h-7 sm:w-1.5"
                style={{ background: 'linear-gradient(to bottom, #00d9ff, #a78bfa, #f472b6, #fb923c)' }}
              />
              <span
                className="font-['Space_Grotesk'] text-sm font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(90deg, #00d9ff, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                WITCHAKORN
              </span>
            </div>

            {/* Desktop nav + avatar */}
            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-widest sm:flex">
                {NAV_LINKS.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    className="text-white/30 transition-colors duration-200"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = n.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; }}
                  >
                    {n.label}
                  </a>
                ))}
              </nav>

              <a
                href="https://github.com/WitchakornThokul"
                target="_blank"
                rel="noreferrer"
                className="block rounded-full p-[2px] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]"
                style={{ background: 'linear-gradient(135deg, #00d9ff, #a78bfa, #f472b6)' }}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/199068319?s=64&v=4"
                  alt="Witchakorn Thokul"
                  className="block h-7 w-7 rounded-full sm:h-8 sm:w-8"
                />
              </a>

              {/* Hamburger button (mobile only) */}
              <button
                className="flex flex-col items-center justify-center gap-1.5 sm:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span
                  className="block h-0.5 w-5 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #00d9ff, #a78bfa)',
                    transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className="block h-0.5 w-5 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #a78bfa, #f472b6)',
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="block h-0.5 w-5 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #f472b6, #fb923c)',
                    transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                  }}
                />
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <div
            className="overflow-hidden sm:hidden"
            style={{
              maxHeight: menuOpen ? '200px' : '0',
              transition: 'max-height 0.3s ease',
              borderTop: menuOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
          >
            <nav className="flex flex-col px-4 pb-4 pt-3">
              {NAV_LINKS.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={closeMenu}
                  className="py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = n.color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="mx-auto w-full max-w-5xl space-y-16 px-4 py-8 sm:space-y-24 sm:px-6 sm:py-10 lg:space-y-28">

          {/* ── Hero ── */}
          <section className="relative py-10 sm:py-20 lg:py-28">
            {/* Floating orbs */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: '-40px', left: '-60px',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
                filter: 'blur(50px)',
                animation: 'aurora 9s ease-in-out infinite',
              }}
            />
            <div
              className="pointer-events-none absolute"
              style={{
                top: '-10px', right: '-40px',
                width: '260px', height: '260px',
                background: 'radial-gradient(circle, rgba(0,217,255,0.28) 0%, transparent 70%)',
                filter: 'blur(50px)',
                animation: 'aurora 11s ease-in-out infinite 2.5s',
              }}
            />
            <div
              className="pointer-events-none absolute"
              style={{
                bottom: '-30px', left: '30%',
                width: '280px', height: '200px',
                background: 'radial-gradient(circle, rgba(244,114,182,0.22) 0%, transparent 70%)',
                filter: 'blur(50px)',
                animation: 'aurora 13s ease-in-out infinite 5s',
              }}
            />

            <div className="relative space-y-6 sm:space-y-8">
              {/* Status badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold sm:gap-2.5 sm:px-5 sm:py-2 sm:text-sm"
                style={{
                  border: '1px solid rgba(34,197,94,0.3)',
                  background: 'rgba(34,197,94,0.07)',
                  color: '#4ade80',
                }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                Open to opportunities
              </div>

              {/* Name */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">Hello, I'm</p>
                <h1
                  className="font-['Space_Grotesk'] text-5xl font-extrabold leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 20%, #00d9ff 50%, #a78bfa 75%, #f472b6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  WITCHAKORN<br />THOKUL
                </h1>
                <div className="flex items-center gap-3 pt-1">
                  <div
                    className="h-px w-8 rounded-full sm:w-10"
                    style={{ background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)' }}
                  />
                  <h2
                    className="font-['Space_Grotesk'] text-base font-semibold sm:text-xl lg:text-2xl"
                    style={{
                      background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Aspiring Mobile Developer
                  </h2>
                </div>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-white/35 sm:text-lg">
                Building practical, user-focused experiences with React Native, Firebase, and modern web tech.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="rounded-full px-8 py-3.5 text-center text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(0,217,255,0.55)] sm:px-9"
                  style={{ background: 'linear-gradient(135deg, #00d9ff, #a78bfa, #f472b6)' }}
                >
                  See Work ↓
                </a>
                <a
                  href="#connect"
                  className="rounded-full px-8 py-3.5 text-center text-sm font-bold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_0_35px_rgba(167,139,250,0.45)] sm:px-9"
                  style={{
                    border: '1px solid rgba(167,139,250,0.4)',
                    background: 'rgba(167,139,250,0.07)',
                  }}
                >
                  Contact Me →
                </a>
              </div>
            </div>
          </section>

          <Divider colors={['rgba(0,217,255,0.25)', 'rgba(167,139,250,0.35)', 'rgba(244,114,182,0.25)']} />

          {/* ── Languages & Tools ── */}
          <section id="skills">
            <div className="mb-8 sm:mb-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/20">What I work with</p>
              <h2
                className="font-['Space_Grotesk'] text-2xl font-bold sm:text-3xl sm:text-4xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Languages &amp; Tools
              </h2>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {(['Frontend', 'Backend', 'Mobile', 'Database', 'Tools'] as const).map((category) => {
                const cfg = categoryConfig[category];
                return (
                  <div key={category}>
                    <div className="mb-4 flex items-center gap-3 sm:mb-5">
                      <div className="h-7 w-0.5 rounded-full sm:h-8" style={{ background: cfg.color }} />
                      <h3
                        className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.22em]"
                        style={{ color: cfg.color }}
                      >
                        {category}
                      </h3>
                      <div
                        className="h-px flex-1 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cfg.color}35, transparent)` }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {highlights
                        .filter((item) => item.category === category)
                        .map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2.5 rounded-xl px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 sm:gap-3 sm:px-4 sm:py-3.5"
                            style={{
                              background: 'rgba(255,255,255,0.02)',
                              border: '1px solid rgba(255,255,255,0.05)',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.borderColor = `${item.color}50`;
                              el.style.boxShadow = `0 4px 24px ${item.color}18`;
                              el.style.background = 'rgba(255,255,255,0.04)';
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.borderColor = 'rgba(255,255,255,0.05)';
                              el.style.boxShadow = 'none';
                              el.style.background = 'rgba(255,255,255,0.02)';
                            }}
                          >
                            <div
                              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
                              style={{
                                backgroundColor: `${item.color}15`,
                                border: `1px solid ${item.color}35`,
                              }}
                            >
                              <img
                                src={item.logo}
                                alt={item.title}
                                style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }}
                                loading="lazy"
                              />
                            </div>
                            <span className="truncate text-xs font-semibold text-white/55 transition-colors duration-200 group-hover:text-white sm:text-sm">
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

          <Divider colors={['rgba(167,139,250,0.25)', 'rgba(244,114,182,0.3)', 'rgba(251,191,36,0.2)']} />

          {/* ── Projects ── */}
          <section id="projects">
            <div className="mb-8 sm:mb-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/20">What I've built</p>
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white sm:text-3xl sm:text-4xl">
                Projects
              </h2>
            </div>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${project.accent}35`;
                    el.style.boxShadow = `0 24px 64px rgba(0,0,0,0.6), 0 0 50px ${project.accent}12`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {project.posterImageUrl && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.posterImageUrl}
                        alt={`${project.title} poster`}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)' }}
                      />
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ background: `linear-gradient(135deg, ${project.accent}08 0%, transparent 60%)` }}
                      />
                    </div>
                  )}

                  <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
                    <div>
                      <span
                        className="inline-block rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider sm:px-3"
                        style={{
                          background: `${project.accent}12`,
                          color: project.accent,
                          border: `1px solid ${project.accent}28`,
                        }}
                      >
                        {project.category}
                      </span>
                      <h3 className="mt-2.5 font-['Space_Grotesk'] text-lg font-bold text-white sm:mt-3 sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/40">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag, ti) => {
                        const c = TAG_PALETTE[ti % TAG_PALETTE.length];
                        return (
                          <span
                            key={tag}
                            className="rounded-full px-2.5 py-1 text-xs font-semibold sm:px-3"
                            style={{ background: `${c}0d`, color: c, border: `1px solid ${c}28` }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    <div className="flex gap-4 pt-1 sm:gap-5">
                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-200 hover:text-white"
                          style={{ color: project.accent }}
                        >
                          <span className="text-xs">▶</span> Watch Demo
                        </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/30 transition-colors duration-200 hover:text-white"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Source
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <Divider colors={['rgba(74,222,128,0.2)', 'rgba(251,191,36,0.25)', 'rgba(251,146,60,0.2)']} />

          {/* ── About ── */}
          <section>
            <div className="mb-8 sm:mb-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/20">Get to know me</p>
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white sm:text-3xl sm:text-4xl">About</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                { label: 'Focus',     value: 'React Native & Firebase', icon: '📱', color: '#00d9ff' },
                { label: 'Interests', value: 'Mobile, Cloud, AgriTech',  icon: '🌱', color: '#4ade80' },
                { label: 'Location',  value: 'Thailand 🇹🇭',             icon: '📍', color: '#f472b6' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${item.color}35`;
                    el.style.boxShadow = `0 8px 32px ${item.color}14`;
                    el.style.background = 'rgba(255,255,255,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.05)';
                    el.style.boxShadow = 'none';
                    el.style.background = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <div
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl sm:mb-5 sm:h-12 sm:w-12 sm:text-2xl"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}28`,
                      boxShadow: `0 0 18px ${item.color}18`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: `${item.color}90` }}>
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider colors={['rgba(248,113,113,0.2)', 'rgba(251,191,36,0.2)', 'rgba(16,185,129,0.2)']} />

          {/* ── Contact ── */}
          <section id="connect">
            <div className="mb-8 sm:mb-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/20">Let's talk</p>
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white sm:text-3xl sm:text-4xl">Contact</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 sm:py-4"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${link.color}45`;
                    el.style.boxShadow = `0 8px 32px ${link.color}20`;
                    el.style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.boxShadow = 'none';
                    el.style.background = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg sm:h-8 sm:w-8"
                    style={{
                      background: `${link.color}18`,
                      border: `1px solid ${link.color}30`,
                    }}
                  >
                    <img
                      src={link.logo}
                      alt={link.label}
                      className="h-3.5 w-3.5 filter brightness-0 invert opacity-80 transition-opacity duration-200 group-hover:opacity-100 sm:h-4 sm:w-4"
                      loading="lazy"
                    />
                  </div>
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          {/* ── Footer ── */}
          <footer className="pb-6 text-center sm:pb-8">
            <div
              className="mb-6 h-px w-full sm:mb-8"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.25), rgba(167,139,250,0.35), rgba(244,114,182,0.25), transparent)',
              }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/15">
              © 2026 Witchakorn Thokul
            </p>
            <p className="mt-1 text-xs text-white/10">Built with Next.js on Vercel</p>
          </footer>

        </div>
      </main>
    </>
  );
}
