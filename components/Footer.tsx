'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#030609', borderTop: '1px solid rgba(0,245,255,0.07)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/avatar.jpg" alt="TCI" style={{ width: 24, height: 24, objectFit: 'cover', border: '1px solid rgba(0,245,255,0.25)' }} />
          <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 12, color: '#00F5FF', letterSpacing: '0.15em' }}>
            THE CYBER INDIA
          </span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.1em', color: 'rgba(240,246,252,0.18)', textAlign: 'center' }}>
          © 2024 THE CYBER INDIA — HARIOM SINGH. ALL RIGHTS RESERVED. INDIA 🇮🇳
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.1em', color: 'rgba(0,245,255,0.2)' }}>
          GORAKHPUR, UTTAR PRADESH
        </div>
      </div>
    </footer>
  );
}
