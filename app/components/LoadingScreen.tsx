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
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 50,
        background: '#000000',
        opacity: exiting ? 0 : 1,
        transition: exiting ? 'opacity 0.7s ease' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blobs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '55%', height: '55%', background: 'radial-gradient(circle, rgba(139,92,246,0.32) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'aurora 9s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-8%', right: '-8%', width: '48%', height: '48%', background: 'radial-gradient(circle, rgba(0,217,255,0.26) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'aurora 11s ease-in-out infinite 2s', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-12%', left: '18%', width: '65%', height: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.22) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'aurora 13s ease-in-out infinite 4s', pointerEvents: 'none' }} />

      {/* Grid overlay */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Content — absolute center (most reliable on mobile) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          width: '100%',
          maxWidth: '480px',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Name */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '6px' }}>
            Portfolio
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(22px, 6vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #00d9ff 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            WITCHAKORN THOKUL
          </h1>
          <div style={{ width: '64px', height: '2px', borderRadius: '1px', background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)', margin: '10px auto 0' }} />
        </div>

        {/* Icons grid — 6 cols, icon size scales with viewport */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'clamp(4px, 1.5vw, 10px)',
            width: '100%',
          }}
        >
          {icons.map((icon, i) => (
            <div
              key={icon.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)',
                transition: 'opacity 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              <div
                style={{
                  width: 'clamp(30px, 8vw, 44px)',
                  height: 'clamp(30px, 8vw, 44px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  backgroundColor: `${icon.color}18`,
                  border: `1px solid ${icon.color}45`,
                  boxShadow: i < visibleCount ? `0 0 12px ${icon.color}40` : 'none',
                  transition: 'box-shadow 0.4s ease',
                  flexShrink: 0,
                }}
              >
                <img src={icon.logo} alt={icon.title} style={{ width: 'clamp(12px, 3.5vw, 18px)', height: 'clamp(12px, 3.5vw, 18px)', filter: 'brightness(0) invert(1)' }} loading="eager" />
              </div>
              <span style={{ fontSize: 'clamp(7px, 1.8vw, 9px)', color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.2 }}>
                {icon.title}
              </span>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>{MESSAGES[msgIndex]}</span>
            <span
              style={{
                fontSize: '11px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{ position: 'relative', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                borderRadius: '3px',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00d9ff, #a78bfa, #f472b6, #fb923c)',
                boxShadow: '0 0 16px rgba(0,217,255,0.6)',
                transition: 'width 0.08s linear',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: `${progress}%`,
                borderRadius: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s linear infinite',
                transition: 'width 0.08s linear',
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
