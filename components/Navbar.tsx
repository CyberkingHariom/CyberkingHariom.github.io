'use client';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'PROFILE' },
  { href: '#capabilities', label: 'CAPABILITIES' },
  { href: '#services', label: 'SERVICES' },
  { href: '#projects', label: 'BUILDS' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setActive(href.slice(1)); setOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(0,5,8,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(0,245,255,0.12)' : 'none',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div onClick={() => go('#home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <img src="/avatar.jpg" alt="TCI" style={{ width: 32, height: 32, objectFit: 'cover', border: '1px solid rgba(0,245,255,0.5)', boxShadow: '0 0 10px rgba(0,245,255,0.3)' }} />
          <div>
            <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 12, color: '#00F5FF', letterSpacing: '0.15em', lineHeight: 1.2 }}>THE CYBER INDIA</div>
            <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: 8, color: 'rgba(0,245,255,0.4)', letterSpacing: '0.2em' }}>CYBER INTELLIGENCE UNIT</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Share Tech Mono, monospace', fontSize: 10, letterSpacing: '0.15em',
              color: active === l.href.slice(1) ? '#00F5FF' : 'rgba(240,246,252,0.4)',
              transition: 'color 0.2s', padding: '4px 0',
              borderBottom: active === l.href.slice(1) ? '1px solid #00F5FF' : '1px solid transparent',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00F5FF')}
              onMouseLeave={e => (e.currentTarget.style.color = active === l.href.slice(1) ? '#00F5FF' : 'rgba(240,246,252,0.4)')}>
              {l.label}
            </button>
          ))}
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FF41', boxShadow: '0 0 8px #00FF41', animation: 'pulse-dot 2s infinite' }} />
        </div>

        <button onClick={() => setOpen(!open)} className="mobile-toggle" style={{ display: 'none', background: 'none', border: '1px solid rgba(0,245,255,0.3)', padding: '6px 10px', cursor: 'pointer', color: '#00F5FF', fontFamily: 'Share Tech Mono', fontSize: 14 }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(0,5,8,0.98)', borderTop: '1px solid rgba(0,245,255,0.1)', padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Share Tech Mono', fontSize: 11, letterSpacing: '0.15em', color: 'rgba(240,246,252,0.6)', textAlign: 'left', padding: '4px 0' }}>
              {'>'} {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){.desktop-nav{display:none!important}.mobile-toggle{display:block!important}}
      `}</style>
    </nav>
  );
}
