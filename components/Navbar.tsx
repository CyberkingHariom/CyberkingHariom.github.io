'use client';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#services', label: 'SERVICES' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(3,6,9,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div onClick={() => go('#home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <img src="/avatar.jpg" alt="TCI" style={{ width: 32, height: 32, objectFit: 'cover', border: '1px solid rgba(0,245,255,0.35)' }} />
          <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 13, color: '#00F5FF', letterSpacing: '0.12em' }}>
            THE CYBER INDIA
          </span>
        </div>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: 36 }} className="desktop-nav">
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.15em', color: 'rgba(240,246,252,0.45)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00F5FF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,246,252,0.45)')}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#00F5FF', fontFamily: 'JetBrains Mono, monospace', fontSize: 18 }}
          className="mobile-toggle">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: 'rgba(3,6,9,0.98)', padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.15em', color: 'rgba(240,246,252,0.6)', textAlign: 'left' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
