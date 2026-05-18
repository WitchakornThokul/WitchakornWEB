'use client';

import { useState, useEffect } from 'react';

const icons = [
  { title: 'HTML',         color: '#E34F26', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg' },
  { title: 'CSS',          color: '#1572B6', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg' },
  { title: 'JavaScript',   color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg' },
  { title: 'React',        color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg' },
  { title: 'Next.js',      color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg' },
  { title: 'Tailwind',     color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg' },
  { title: 'Angular',      color: '#DD0031', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg' },
  { title: 'Bootstrap',    color: '#7952B3', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg' },
  { title: 'Node.js',      color: '#339933', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg' },
  { title: 'PHP',          color: '#8892BF', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg' },
  { title: 'Python',       color: '#3776AB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg' },
  { title: 'Slim',         color: '#74a045', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/composer.svg' },
  { title: 'React Native', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg' },
  { title: 'Expo',         color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg' },
  { title: 'Firebase',     color: '#FFCA28', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg' },
  { title: 'MySQL',        color: '#4479A1', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg' },
  { title: 'MongoDB',      color: '#47A248', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg' },
  { title: 'Figma',        color: '#F24E1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg' },
  { title: 'Canva',        color: '#00C4CC', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg' },
  { title: 'WordPress',    color: '#21759B', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg' },
  { title: 'Apps Script',  color: '#4285F4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg' },
  { title: 'Sheets',       color: '#34A853', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlesheets.svg' },
  { title: 'Postman',      color: '#FF6C37', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg' },
];

const MESSAGES = [
  'Initializing portfolio...',
  'Loading components...',
  'Building interfaces...',
  'Connecting services...',
  'Almost ready...',
];

const DURATION = 5000;

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const stagger = (DURATION * 0.85) / icons.length;
    let rafId: number;

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const ratio = Math.min(elapsed / DURATION, 1);

      setProgress(ratio * 100);
      setVisibleCount(Math.min(Math.floor(elapsed / stagger), icons.length));

      if (ratio < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 700);
        }, 200);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onDone]);

  const msgIndex = Math.min(
    Math.floor((progress / 100) * MESSAGES.length),
    MESSAGES.length - 1,
  );

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{
        background: '#000000',
        opacity: exiting ? 0 : 1,
        transition: exiting ? 'opacity 0.7s ease' : 'none',
      }}
    >
      {/* Aurora blobs */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-10%', left: '-10%',
          width: '55%', height: '55%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.32) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'aurora 9s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-8%', right: '-8%',
          width: '48%', height: '48%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.26) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'aurora 11s ease-in-out infinite 2s',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '-12%', left: '18%',
          width: '65%', height: '50%',
          background: 'radial-gradient(circle, rgba(244,114,182,0.22) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'aurora 13s ease-in-out infinite 4s',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: '40%', left: '-5%',
          width: '30%', height: '30%',
          background: 'radial-gradient(circle, rgba(74,222,128,0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'aurora 15s ease-in-out infinite 6s',
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Centered content wrapper ── */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-5 sm:max-w-lg sm:gap-8">

        {/* Name block */}
        <div className="w-full text-center">
          {/* Glow backdrop */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '260px', height: '60px',
              background: 'radial-gradient(ellipse, rgba(167,139,250,0.25) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <p className="relative mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/25">
            Portfolio
          </p>
          <h1
            className="relative font-['Space_Grotesk'] text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{
              background: 'linear-gradient(135deg, #00d9ff 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            WITCHAKORN THOKUL
          </h1>
          {/* Rainbow underline */}
          <div
            className="mx-auto mt-2 h-0.5 w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)', animation: 'spin-slow 4s linear infinite' }}
          />
        </div>

        {/* Icons grid */}
        <div className="grid w-full grid-cols-5 gap-2 sm:grid-cols-6 sm:gap-3 md:grid-cols-8">
          {icons.map((icon, i) => (
            <div
              key={icon.title}
              className="flex flex-col items-center gap-1"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform:
                  i < visibleCount
                    ? 'scale(1) translateY(0)'
                    : 'scale(0.45) translateY(14px)',
                transition:
                  'opacity 0.38s cubic-bezier(0.34,1.56,0.64,1), transform 0.38s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-xl sm:h-10 sm:w-10"
                style={{
                  backgroundColor: `${icon.color}18`,
                  border: `1px solid ${icon.color}45`,
                  boxShadow: i < visibleCount ? `0 0 14px ${icon.color}40` : 'none',
                  transition: 'box-shadow 0.4s ease',
                }}
              >
                <img
                  src={icon.logo}
                  alt={icon.title}
                  style={{ width: 15, height: 15, filter: 'brightness(0) invert(1)' }}
                  loading="eager"
                />
              </div>
              <span className="text-center text-[8px] leading-tight text-white/30 sm:text-[9px]">
                {icon.title}
              </span>
            </div>
          ))}
        </div>

        {/* Progress section */}
        <div className="w-full space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/35">{MESSAGES[msgIndex]}</span>
          <span
            className="font-['Space_Grotesk'] font-bold tabular-nums"
            style={{
              background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {Math.round(progress)}%
          </span>
        </div>

        {/* Track */}
        <div
          className="relative h-1.5 w-full overflow-hidden rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {/* Fill */}
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6, #fb923c)',
              boxShadow: '0 0 18px rgba(0,217,255,0.65), 0 0 8px rgba(167,139,250,0.5)',
              transition: 'width 0.08s linear',
            }}
          />
          {/* Shimmer on top of fill */}
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${progress}%`,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s linear infinite',
              transition: 'width 0.08s linear',
            }}
          />
        </div>
        </div>{/* end progress section */}

      </div>{/* end centered wrapper */}
    </div>
  );
}
