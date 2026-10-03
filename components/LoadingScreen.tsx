'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const pInterval = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) { p = 100; clearInterval(pInterval); }
      setProgress(Math.min(p, 100));
    }, 40);

    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => onDone(), 3200);

    return () => { clearInterval(pInterval); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

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
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${(i * 37 + 5) % 100}%`,
          top: `${(i * 53 + 10) % 100}%`,
          width: (i % 3) + 1,
          height: (i % 3) + 1,
          borderRadius: '50%',
          background: i % 2 === 0 ? 'rgba(0,245,255,0.35)' : 'rgba(0,255,65,0.25)',
          animation: `float-particle ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${(i * 0.3) % 3}s`,
        }} />
      ))}

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>

        {/* Cyber ring */}
        <div style={{ position: 'relative', width: 140, height: 140, margin: '0 auto 32px' }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid rgba(0,245,255,0.3)',
            animation: 'spin 4s linear infinite',
            borderTopColor: '#00F5FF',
            boxShadow: '0 0 30px rgba(0,245,255,0.2)',
          }} />
          <div style={{
            position: 'absolute', inset: 8, borderRadius: '50%',
            border: '1px solid rgba(0,255,65,0.2)',
            animation: 'spin 2s linear infinite reverse',
            borderBottomColor: '#00FF41',
          }} />
          <div style={{
            position: 'absolute', inset: 16, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'Orbitron, monospace', fontSize: 13, fontWeight: 700,
              color: '#00F5FF', letterSpacing: '0.15em',
            }}>TCI</span>
          </div>
        </div>

        <div style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 900,
          fontSize: 'clamp(28px, 8vw, 72px)',
          color: '#F0F6FC',
          letterSpacing: '0.08em',
          textShadow: '0 0 40px rgba(0,245,255,0.5), 0 0 80px rgba(0,245,255,0.2)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
          lineHeight: 1.1,
        }}>
          WELCOME TO
        </div>
        <div style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 900,
          fontSize: 'clamp(22px, 6vw, 56px)',
          background: 'linear-gradient(135deg, #00F5FF, #00FF41)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          letterSpacing: '0.06em',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.2s',
          marginBottom: 8,
        }}>
          THE CYBER INDIA
        </div>
        <div style={{
          fontFamily: 'Share Tech Mono, monospace', fontSize: 10, letterSpacing: '0.3em',
          color: 'rgba(0,245,255,0.5)',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 0.5s ease',
          marginBottom: 36,
        }}>
          🇮🇳 CYBER INTELLIGENCE OPERATIONS — INDIA
        </div>

        {/* Progress bar */}
        <div style={{ width: 300, maxWidth: '80vw', margin: '0 auto' }}>
          <div style={{ height: 2, background: 'rgba(0,245,255,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00FF41, #00F5FF)',
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
        @keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes float-particle { 0%,100%{opacity:0.2;transform:translateY(0)} 50%{opacity:0.7;transform:translateY(-8px)} }
      `}</style>
    </div>
  );
}
