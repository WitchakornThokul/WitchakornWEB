const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/WitchakornThokul',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg'
  },
  {
    label: 'Email',
    href: 'mailto:art992398@email.com',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg'
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/tokki.once',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mimosa_4103/',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg'
  }
];

const highlights = [
  // Frontend
  {
    title: 'HTML',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg',
    category: 'Frontend'
  },
  {
    title: 'CSS',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg',
    category: 'Frontend'
  },
  {
    title: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg',
    category: 'Frontend'
  },
  {
    title: 'React',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    category: 'Frontend'
  },
  {
    title: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',
    category: 'Frontend'
  },
  {
    title: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg',
    category: 'Frontend'
  },
  {
    title: 'Angular',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg',
    category: 'Frontend'
  },
  {
    title: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg',
    category: 'Frontend'
  },
  // Backend
  {
    title: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg',
    category: 'Backend'
  },
  {
    title: 'PHP',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg',
    category: 'Backend'
  },
  {
    title: 'Slim Framework',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/composer.svg',
    category: 'Backend'
  },
  // Mobile
  {
    title: 'React Native',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    category: 'Mobile'
  },
  {
    title: 'Expo',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg',
    category: 'Mobile'
  },
  // Database
  {
    title: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg',
    category: 'Database'
  },
  {
    title: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg',
    category: 'Database'
  },
  // Design & Tools
  {
    title: 'Figma',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',
    category: 'Tools'
  },
  {
    title: 'Canva',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg',
    category: 'Tools'
  },
  {
    title: 'WordPress',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg',
    category: 'Tools'
  },
  {
    title: 'Google Apps Script',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg',
    category: 'Tools'
  }
];

const projects = [
  {
    title: 'SMART COW TRACKER',
    category: 'React Native + Firebase',
    description:
      'A modern farm management app for tracking cows, health records, appointments, and assistants.',
    tags: ['Expo', 'Firebase', 'Mobile UI'],
    posterImageUrl: 'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/Witchakorn_Poster_jbtl7j.jpg'
  },
  {
    title: 'PQS Logistics',
    category: 'Planning & booking system',
    description:
      'An intelligent logistics planning and vehicle booking system focused on approval and reporting flows.',
    tags: ['Google Apps Script', 'Calendar', 'Reports'],
    posterImageUrl: 'https://res.cloudinary.com/dgh4ndaru/image/upload/v1778949911/InternshipPoster_Witchakorn_tunckf.jpg'
  }
];

const stats = [
  { label: 'Role', value: 'Aspiring Mobile Developer' },
  { label: 'Focus', value: 'React Native & Firebase' },
  { label: 'Location', value: 'Thailand' },
  { label: 'Style', value: 'Practical, clean, product-minded' }
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        {/* Header with Profile */}
        <header className="flex items-center justify-between border-b border-[#00d9ff]/20 pb-6">
          <div>
            <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-white">WITCHAKORN THOKUL</h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/WitchakornThokul"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#8fa3d0] transition hover:text-[#00d9ff]"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WitchakornThokul"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#00d9ff]/50 transition hover:border-[#00d9ff]"
              title="Witchakorn Thokul"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/199068319?s=64&v=4"
                alt="Witchakorn Thokul"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
        </header>

        {/* Hero Section - Simplified */}
        <section className="space-y-6 py-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-[#8fa3d0]">Witchakorn Thokul</p>
            <h1 className="font-['Space_Grotesk'] text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Aspiring Mobile Developer
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#8fa3d0]">
            Building practical, user-focused experiences with React Native, Firebase, and modern web tech.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#projects"
              className="bg-gradient-accent px-6 py-2 font-semibold text-[#0a0e27] transition hover:shadow-glow"
            >
              See Work
            </a>
            <a
              href="#connect"
              className="border-2 border-[#00d9ff] px-6 py-2 font-semibold text-[#00d9ff] transition hover:bg-[#00d9ff]/10"
            >
              Contact
            </a>
          </div>
        </section>

        {/* Skills with Real Logos */}
        <section>
          <h2 className="mb-6 font-['Space_Grotesk'] text-2xl font-bold">Languages & Tools</h2>
          <div className="space-y-6">
            {['Frontend', 'Backend', 'Mobile', 'Database', 'Tools'].map((category) => (
              <div key={category}>
                <h3 className="mb-3 text-sm uppercase tracking-wider text-[#8fa3d0]">{category}</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {highlights
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.title}
                        className="group flex items-center gap-3 rounded-md bg-white/5 px-4 py-3 transition hover:bg-white/8"
                      >
                        <img 
                          src={item.logo}
                          alt={item.title}
                          className="h-6 w-6 flex-shrink-0 filter brightness-0 invert"
                          loading="lazy"
                        />
                        <span className="font-medium text-white text-sm">{item.title}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="mb-4 font-['Space_Grotesk'] text-2xl font-bold">Projects</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-lg bg-white/5 p-5 transition hover:bg-white/7 hover:shadow-card"
              >
                <p className="text-xs uppercase tracking-widest text-[#00d9ff]">
                  {project.category}
                </p>
                <h3 className="mt-2 font-['Space_Grotesk'] font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#8fa3d0]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#00d9ff]/15 px-2 py-1 text-xs font-medium text-[#4dd9ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.posterImageUrl && (
                  <a
                    href={project.posterImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block overflow-hidden rounded-lg border border-[#00d9ff]/30 hover:border-[#00d9ff] transition-all duration-200"
                  >
                    <img
                      src={project.posterImageUrl}
                      alt={`${project.title} Poster`}
                      className="h-auto w-full object-cover hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* About - Condensed */}
        <section className="space-y-4">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold">About</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-[#8fa3d0]">Focus</p>
              <p className="mt-2 font-semibold text-white">React Native & Firebase</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-[#8fa3d0]">Interests</p>
              <p className="mt-2 font-semibold text-white">Mobile, Cloud, AgriTech</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-[#8fa3d0]">Location</p>
              <p className="mt-2 font-semibold text-white">Thailand 🇹🇭</p>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="connect" className="space-y-6 py-6">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold">Connect</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative overflow-hidden rounded-lg bg-white/5 px-4 py-3 flex items-center justify-center gap-2 font-semibold text-[#00d9ff] transition hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 transition group-hover:opacity-10" />
                <img 
                  src={link.logo}
                  alt={link.label}
                  className="relative h-5 w-5 filter brightness-0 invert"
                  loading="lazy"
                />
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#00d9ff]/20 py-6 text-center text-xs text-[#8fa3d0]">
          © 2026 Witchakorn Thokul. Built with Next.js on Vercel.
        </footer>
      </div>
    </main>
  );
}
