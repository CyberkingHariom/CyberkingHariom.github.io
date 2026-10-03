'use client';
import { useEffect, useState } from 'react';

const WELCOME_LINES = [
  'WELCOME, ADMIN',
  'ACCESS GRANTED',
  'IDENTITY VERIFIED',
  'GOOD TO SEE YOU',
];

// Game-style SVG Cyber Soldier — waving hand animation
function CyberSoldier() {
  return (
    <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 0 12px rgba(0,245,255,0.7))' }}>
      {/* Glow defs */}
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#001A22" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Body glow bg */}
      <ellipse cx="45" cy="70" rx="30" ry="35" fill="url(#bodyGrad)" />

      {/* Helmet */}
      <ellipse cx="45" cy="20" rx="18" ry="16" fill="#1A3A2A" stroke="#00F5FF" strokeWidth="1.2" filter="url(#glow)" />
      <rect x="29" y="18" width="32" height="8" rx="3" fill="#0D2A1A" stroke="#00FF41" strokeWidth="0.8" />
      {/* Visor */}
      <rect x="33" y="20" width="24" height="6" rx="2" fill="#00F5FF" opacity="0.55" />
      <line x1="33" y1="23" x2="57" y2="23" stroke="#00FF41" strokeWidth="0.5" opacity="0.7" />
      {/* Helmet light */}
      <circle cx="45" cy="11" r="3" fill="#FF9933" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" repeatCount="indefinite" />
      </circle>
      {/* Antenna */}
      <line x1="45" y1="8" x2="45" y2="2" stroke="#00F5FF" strokeWidth="1" />
      <circle cx="45" cy="2" r="1.5" fill="#00F5FF">
        <animate attributeName="r" values="1.5;3;1.5" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
      </circle>

      {/* Neck */}
      <rect x="41" y="34" width="8" height="6" rx="2" fill="#1A3A2A" />

      {/* Body / Armor */}
      <rect x="28" y="40" width="34" height="36" rx="5" fill="#0D2215" stroke="#00F5FF" strokeWidth="1" />
      {/* Chest plate */}
      <rect x="33" y="44" width="24" height="16" rx="3" fill="#0A1E10" stroke="#00FF41" strokeWidth="0.7" />
      {/* TCI badge */}
      <text x="45" y="55" textAnchor="middle" fontSize="5" fill="#00F5FF" fontFamily="monospace" fontWeight="bold">TCI</text>
      {/* Armor lines */}
      <line x1="28" y1="56" x2="62" y2="56" stroke="#00F5FF" strokeWidth="0.4" opacity="0.4" />
      <line x1="28" y1="64" x2="62" y2="64" stroke="#00F5FF" strokeWidth="0.4" opacity="0.4" />
      {/* Shoulder pads */}
      <rect x="14" y="40" width="16" height="10" rx="4" fill="#1A3A2A" stroke="#00FF41" strokeWidth="0.8" />
      <rect x="60" y="40" width="16" height="10" rx="4" fill="#1A3A2A" stroke="#00FF41" strokeWidth="0.8" />

      {/* LEFT ARM — static down */}
      <g>
        <rect x="16" y="50" width="9" height="22" rx="4" fill="#0D2215" stroke="#00F5FF" strokeWidth="0.8" />
        {/* Left hand */}
        <ellipse cx="20.5" cy="74" rx="5" ry="4" fill="#1A3A2A" stroke="#00F5FF" strokeWidth="0.7" />
      </g>

      {/* RIGHT ARM — waving up-down animation */}
      <g style={{ transformOrigin: '68px 44px' }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 68 44; -45 68 44; 10 68 44; -45 68 44; 0 68 44"
          dur="1.6s"
          repeatCount="indefinite"
        />
        <rect x="65" y="44" width="9" height="22" rx="4" fill="#0D2215" stroke="#FF9933" strokeWidth="0.8" />
        {/* Right hand waving */}
        <ellipse cx="69.5" cy="68" rx="5" ry="4" fill="#1A3A2A" stroke="#FF9933" strokeWidth="0.8" />
        {/* Wave lines */}
        <line x1="74" y1="62" x2="80" y2="58" stroke="#FF9933" strokeWidth="1" opacity="0.7" />
        <line x1="74" y1="65" x2="82" y2="63" stroke="#FF9933" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Legs */}
      <rect x="31" y="75" width="12" height="28" rx="4" fill="#0D2215" stroke="#00F5FF" strokeWidth="0.7" />
      <rect x="47" y="75" width="12" height="28" rx="4" fill="#0D2215" stroke="#00F5FF" strokeWidth="0.7" />
      {/* Boots */}
      <rect x="29" y="99" width="16" height="8" rx="3" fill="#0A1208" stroke="#00FF41" strokeWidth="0.7" />
      <rect x="45" y="99" width="16" height="8" rx="3" fill="#0A1208" stroke="#00FF41" strokeWidth="0.7" />

      {/* Floating data dots around soldier */}
      <circle cx="8" cy="45" r="2" fill="#00F5FF" opacity="0.6">
        <animate attributeName="cy" values="45;38;45" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="82" cy="55" r="1.5" fill="#00FF41" opacity="0.6">
        <animate attributeName="cy" values="55;47;55" dur="1.7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="75" r="1.5" fill="#FF9933" opacity="0.5">
        <animate attributeName="cy" values="75;68;75" dur="2.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [welcomeIdx, setWelcomeIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [typeDone, setTypeDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const pInterval = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) { p = 100; clearInterval(pInterval); }
      setProgress(Math.min(p, 100));
    }, 40);
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onDone(), 3600);
    return () => { clearInterval(pInterval); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  // Typewriter cycling
  useEffect(() => {
    const cur = WELCOME_LINES[welcomeIdx];
    if (typed.length < cur.length) {
      const t = setTimeout(() => setTyped(cur.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    } else {
      setTypeDone(true);
      const t = setTimeout(() => {
        setTyped(''); setTypeDone(false);
        setWelcomeIdx(i => (i + 1) % WELCOME_LINES.length);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [typed, welcomeIdx]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'radial-gradient(ellipse at 50% 40%, #001A22 0%, #000508 70%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      transition: phase === 3 ? 'opacity 0.8s ease, transform 0.8s ease' : 'none',
      opacity: phase === 3 ? 0 : 1,
      transform: phase === 3 ? 'scale(1.05)' : 'scale(1)',
    }}>

      {/* Soft floating particles */}
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${(i * 37 + 5) % 100}%`,
          top: `${(i * 53 + 10) % 100}%`,
          width: (i % 3) + 1, height: (i % 3) + 1,
          borderRadius: '50%',
          background: i % 3 === 0 ? 'rgba(0,245,255,0.4)' : i % 3 === 1 ? 'rgba(0,255,65,0.3)' : 'rgba(255,153,51,0.3)',
          animation: `float-p ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${(i * 0.3) % 3}s`,
        }} />
      ))}

      {/* HUD corner brackets */}
      {[0,1,2,3].map(i => (
        <div key={i} style={{
          position: 'absolute', width: 40, height: 40,
          top: i < 2 ? 20 : 'auto', bottom: i >= 2 ? 20 : 'auto',
          left: i % 2 === 0 ? 20 : 'auto', right: i % 2 === 1 ? 20 : 'auto',
          borderTop: i < 2 ? '1px solid rgba(0,245,255,0.4)' : 'none',
          borderBottom: i >= 2 ? '1px solid rgba(0,245,255,0.4)' : 'none',
          borderLeft: i % 2 === 0 ? '1px solid rgba(0,245,255,0.4)' : 'none',
          borderRight: i % 2 === 1 ? '1px solid rgba(0,245,255,0.4)' : 'none',
        }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>

        {/* ── TRICOLOR RING with SVG SOLDIER inside ── */}
        <div style={{ position: 'relative', width: 200, height: 200, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* Outer tricolor rotating ring */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'conic-gradient(#FF9933 0deg 120deg, #ffffff 120deg 240deg, #138808 240deg 360deg)',
            animation: 'ring-spin 3s linear infinite',
            padding: 4,
          }} />
          {/* Dark gap */}
          <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: '#000508' }} />
          {/* Cyber ring */}
          <div style={{
            position: 'absolute', inset: 8, borderRadius: '50%',
            border: '2px solid rgba(0,245,255,0.35)',
            animation: 'ring-spin 5s linear infinite',
            borderTopColor: '#00F5FF',
            boxShadow: '0 0 20px rgba(0,245,255,0.2)',
          }} />
          {/* Inner reverse ring */}
          <div style={{
            position: 'absolute', inset: 16, borderRadius: '50%',
            border: '1px solid rgba(0,255,65,0.2)',
            animation: 'ring-spin 3s linear infinite reverse',
            borderBottomColor: '#00FF41',
          }} />
          {/* Radar sweep */}
          <div style={{
            position: 'absolute', inset: 8, borderRadius: '50%',
            background: 'conic-gradient(rgba(0,245,255,0.1) 0deg 60deg, transparent 60deg 360deg)',
            animation: 'ring-spin 3s linear infinite',
          }} />

          {/* ── GAME SVG SOLDIER — waving inside ring ── */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'soldier-float 2.4s ease-in-out infinite',
          }}>
            <CyberSoldier />
          </div>
        </div>

        {/* Typewriter welcome text below ring */}
        <div style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 700,
          fontSize: 13, letterSpacing: '0.2em',
          color: '#00F5FF', minHeight: 24, marginBottom: 16,
          textShadow: '0 0 12px rgba(0,245,255,0.9)',
        }}>
          {typed}<span style={{ opacity: typeDone ? 0 : 1, animation: 'blink 0.8s step-end infinite' }}>|</span>
        </div>

        {/* BIG TITLE */}
        <div style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 900,
          fontSize: 'clamp(28px, 8vw, 72px)', color: '#F0F6FC',
          letterSpacing: '0.08em', lineHeight: 1.1,
          textShadow: '0 0 40px rgba(0,245,255,0.5)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>WELCOME TO</div>
        <div style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 900,
          fontSize: 'clamp(22px, 6vw, 56px)',
          background: 'linear-gradient(135deg, #FF9933, #ffffff, #138808)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          letterSpacing: '0.06em',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.2s',
          marginBottom: 8,
        }}>THE CYBER INDIA</div>
        <div style={{
          fontFamily: 'Share Tech Mono, monospace', fontSize: 10, letterSpacing: '0.3em',
          color: 'rgba(0,245,255,0.5)',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 0.5s ease',
          marginBottom: 32,
        }}>🇮🇳 CYBER INTELLIGENCE OPERATIONS — INDIA</div>

        {/* Progress bar */}
        <div style={{ width: 300, maxWidth: '80vw', margin: '0 auto' }}>
          <div style={{ height: 2, background: 'rgba(0,245,255,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #FF9933, #00F5FF, #138808)',
              boxShadow: '0 0 10px #00F5FF',
              transition: 'width 0.1s ease',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(0,245,255,0.3)', letterSpacing: '0.1em' }}>
            <span>INITIALIZING SYSTEM</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ring-spin     { 0%{transform:rotate(0deg)}  100%{transform:rotate(360deg)} }
        @keyframes blink         { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float-p       { 0%,100%{opacity:0.2;transform:translateY(0)} 50%{opacity:0.7;transform:translateY(-8px)} }
        @keyframes soldier-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
      `}</style>
    </div>
  );
}
