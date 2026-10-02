'use client';

const SOCIALS = [
  { label: 'YOUTUBE', url: 'https://youtube.com/@thecyberindia' },
  { label: 'INSTAGRAM', url: 'https://instagram.com/thecyberindia' },
  { label: 'GITHUB', url: 'https://github.com/thecyberindia' },
  { label: 'LINKEDIN', url: 'https://linkedin.com/in/hariom-singh-' },
  { label: 'TELEGRAM', url: '#' },
  { label: 'X / TWITTER', url: '#' },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '120px 24px', background: '#030609' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 10 }}>
          // 04 — CONTACT
        </div>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 36px)', color: '#F0F6FC', marginBottom: 16 }}>
          CONNECT
        </h2>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, color: 'rgba(240,246,252,0.4)', marginBottom: 48, lineHeight: 1.6 }}>
          For law enforcement casework, Army Cyber Cell collaboration, OSINT inquiry, or security research.
        </p>

        {/* Email CTA */}
        <a href="mailto:thecyberindia.official@gmail.com"
          style={{
            display: 'inline-block', fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
            letterSpacing: '0.12em', fontWeight: 700, padding: '16px 40px', marginBottom: 56,
            background: '#00F5FF', color: '#030609', textDecoration: 'none', transition: 'box-shadow 0.2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(0,245,255,0.4)')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none')}>
          thecyberindia.official@gmail.com
        </a>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(0,245,255,0.07)', marginBottom: 40 }} />

        {/* Socials */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.15em',
                padding: '10px 20px', color: 'rgba(0,245,255,0.5)', border: '1px solid rgba(0,245,255,0.12)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = '#00F5FF'; a.style.borderColor = 'rgba(0,245,255,0.4)'; }}
              onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = 'rgba(0,245,255,0.5)'; a.style.borderColor = 'rgba(0,245,255,0.12)'; }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
