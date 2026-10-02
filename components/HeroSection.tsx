'use client';
import { useEffect, useState } from 'react';

const ROLES = [
  'CYBERCRIME INVESTIGATION',
  'OSINT & DIGITAL INTELLIGENCE',
  'IP FORENSICS & STUN ANALYSIS',
  'INDIA ARMY CYBER CELL SUPPORT',
  'CYBER INTELLIGENCE OPERATIONS',
];

export default function HeroSection() {
  const [typed, setTyped] = useState('');
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = ROLES[idx];
    const t = setTimeout(() => {
      if (!del) {
        if (typed.length < cur.length) setTyped(cur.slice(0, typed.length + 1));
        else setTimeout(() => setDel(true), 2200);
      } else {
        if (typed.length > 0) setTyped(cur.slice(0, typed.length - 1));
        else { setDel(false); setIdx(p => (p + 1) % ROLES.length); }
      }
    }, del ? 22 : 52);
    return () => clearTimeout(t);
  }, [typed, del, idx]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '0 24px', position: 'relative', overflow: 'hidden', background: '#030609',
    }}>
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,245,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,0.025) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 700, height: 500, pointerEvents: 'none',
        background: 'radial-gradient(ellipse,rgba(0,245,255,0.055) 0%,transparent 68%)',
        filter: 'blur(50px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 720 }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em',
          color: '#00F5FF', border: '1px solid rgba(0,245,255,0.18)',
          background: 'rgba(0,245,255,0.035)', padding: '6px 14px',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F5FF', display: 'inline-block', boxShadow: '0 0 8px #00F5FF', animation: 'pulse 2s infinite' }} />
          INDIA — CYBER INTELLIGENCE UNIT
        </div>

        {/* Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <img src="/avatar.jpg" alt="The Cyber India"
            style={{ width: 100, height: 100, objectFit: 'cover', border: '1px solid rgba(0,245,255,0.25)', boxShadow: '0 0 40px rgba(0,245,255,0.08)' }} />
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(28px, 6vw, 58px)', color: '#F0F6FC', letterSpacing: '0.04em', margin: '0 0 6px' }}>
          THE CYBER INDIA
        </h1>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 20 }}>
          FOUNDED BY HARIOM SINGH
        </p>

        {/* Typing */}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(11px, 2vw, 14px)', letterSpacing: '0.15em', color: '#00F5FF', marginBottom: 40, minHeight: 22 }}>
          {typed}<span style={{ animation: 'blink 1s step-end infinite', opacity: 0.8 }}>_</span>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.15em', fontWeight: 700, padding: '13px 32px', background: '#00F5FF', color: '#030609', border: 'none', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(0,245,255,0.45)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
            VIEW SERVICES
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.15em', padding: '13px 32px', background: 'transparent', color: '#00F5FF', border: '1px solid rgba(0,245,255,0.3)', cursor: 'pointer', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#00F5FF')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)')}>
            CONTACT
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.25)' }}>
        SCROLL ↓
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}
