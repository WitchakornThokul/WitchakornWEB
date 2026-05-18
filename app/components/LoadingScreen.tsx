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
    // All icons fully visible by 85% progress
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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 0% 0%, rgba(99,102,241,0.22) 0%, transparent 50%),' +
          'radial-gradient(ellipse 55% 40% at 100% 0%, rgba(0,217,255,0.14) 0%, transparent 45%),' +
          'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(168,85,247,0.10) 0%, transparent 55%),' +
          '#060a1a',
        opacity: exiting ? 0 : 1,
        transition: exiting ? 'opacity 0.7s ease' : 'none',
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black, transparent)',
        }}
      />

      {/* Name */}
      <div className="relative mb-10 text-center">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/25">
          Portfolio
        </p>
        <h1
          className="font-['Space_Grotesk'] text-3xl font-bold sm:text-4xl"
          style={{
            background: 'linear-gradient(135deg, #00d9ff 0%, #a78bfa 50%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          WITCHAKORN THOKUL
        </h1>
      </div>

      {/* Icons grid */}
      <div className="relative mb-10 grid w-full max-w-lg grid-cols-6 gap-3 sm:grid-cols-8">
        {icons.map((icon, i) => (
          <div
            key={icon.title}
            className="flex flex-col items-center gap-1.5"
            style={{
              opacity: i < visibleCount ? 1 : 0,
              transform:
                i < visibleCount
                  ? 'scale(1) translateY(0)'
                  : 'scale(0.5) translateY(12px)',
              transition: 'opacity 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            {/* Icon badge */}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                backgroundColor: `${icon.color}18`,
                border: `1px solid ${icon.color}35`,
                boxShadow: i < visibleCount ? `0 0 10px ${icon.color}22` : 'none',
              }}
            >
              <img
                src={icon.logo}
                alt={icon.title}
                className="h-5 w-5 filter brightness-0 invert"
                loading="eager"
              />
            </div>
            <span className="text-center text-[9px] leading-tight text-white/30">
              {icon.title}
            </span>
          </div>
        ))}
      </div>

      {/* Status + progress */}
      <div className="relative w-full max-w-sm space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/35">{MESSAGES[msgIndex]}</span>
          <span
            className="font-['Space_Grotesk'] font-semibold tabular-nums"
            style={{
              background: 'linear-gradient(90deg, #00d9ff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {Math.round(progress)}%
          </span>
        </div>

        {/* Progress bar track */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)',
              boxShadow: '0 0 14px rgba(0,217,255,0.55)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
}
