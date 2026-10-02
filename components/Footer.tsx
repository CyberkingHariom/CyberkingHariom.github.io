'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#000508', borderTop: '1px solid rgba(0,245,255,0.06)', padding: '36px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="cyber-line" style={{ marginBottom: 28 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/avatar.jpg" alt="TCI" style={{ width: 22, height: 22, objectFit: 'cover', border: '1px solid rgba(0,245,255,0.3)' }} />
            <span style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: 11, color: '#00F5FF', letterSpacing: '0.15em' }}>THE CYBER INDIA</span>
          </div>
          <div style={{ fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(240,246,252,0.15)', letterSpacing: '0.1em', textAlign: 'center' }}>
            © 2024 THE CYBER INDIA — HARIOM SINGH. ALL RIGHTS RESERVED. GORAKHPUR, INDIA 🇮🇳
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00FF41', boxShadow: '0 0 8px #00FF41', animation: 'pulse-dot 2s infinite' }} />
            <span style={{ fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(0,255,65,0.5)', letterSpacing: '0.12em' }}>SYSTEM ONLINE — JAI HIND 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
