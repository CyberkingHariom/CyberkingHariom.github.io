'use client';

const INFO = [
  { label: 'ORGANIZATION', value: 'THE CYBER INDIA' },
  { label: 'FOUNDER', value: 'HARIOM SINGH' },
  { label: 'SPECIALIZATION', value: 'CYBERCRIME INVESTIGATION & OSINT' },
  { label: 'SUPPORT', value: 'INDIA ARMY CYBER CELL' },
  { label: 'DOMAIN', value: 'CYBER INTELLIGENCE OPERATIONS' },
  { label: 'STATUS', value: 'ACTIVE — GORAKHPUR, INDIA' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '120px 24px', background: '#050A10' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 10 }}>
          // 01 — ABOUT
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 64, alignItems: 'center' }}>
          {/* Text */}
          <div>
            <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 36px)', color: '#F0F6FC', marginBottom: 20 }}>
              HARIOM SINGH
            </h2>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, lineHeight: 1.75, color: 'rgba(240,246,252,0.55)', marginBottom: 16 }}>
              Cybercrime Investigator & OSINT Specialist operating under The Cyber India — an independent cyber intelligence platform built to serve law enforcement and India's national security ecosystem.
            </p>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, lineHeight: 1.75, color: 'rgba(240,246,252,0.55)', marginBottom: 32 }}>
              Providing exclusive technical support to India Army Cyber Cell — custom surveillance applications, OSINT intelligence reports, and IP forensics tools for defense-grade operations.
            </p>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {INFO.map(i => (
                <div key={i.label} style={{ padding: '12px 14px', border: '1px solid rgba(0,245,255,0.08)', background: 'rgba(0,245,255,0.02)' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.15em', color: 'rgba(0,245,255,0.35)', marginBottom: 4 }}>{i.label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#00F5FF', letterSpacing: '0.08em' }}>{i.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img src="/avatar.jpg" alt="Hariom Singh"
                style={{ width: 280, height: 320, objectFit: 'cover', border: '1px solid rgba(0,245,255,0.18)', boxShadow: '0 0 60px rgba(0,245,255,0.06)', display: 'block' }} />
              <div style={{
                position: 'absolute', bottom: -1, left: -1, right: -1, padding: '10px 14px',
                background: 'rgba(3,6,9,0.95)', border: '1px solid rgba(0,245,255,0.18)',
                borderTop: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
                letterSpacing: '0.15em', color: 'rgba(0,245,255,0.5)',
              }}>
                HARIOM SINGH — FOUNDER, THE CYBER INDIA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
