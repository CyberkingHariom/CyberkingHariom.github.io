'use client';

const SOCIALS = [
  { label: 'YOUTUBE', url: 'https://youtube.com/@thecyberindia', color: '#FF003C' },
  { label: 'INSTAGRAM', url: 'https://instagram.com/thecyberindia', color: '#FF9933' },
  { label: 'GITHUB', url: 'https://github.com/thecyberindia', color: '#00F5FF' },
  { label: 'LINKEDIN', url: 'https://linkedin.com/in/hariom-singh-', color: '#00F5FF' },
  { label: 'TELEGRAM', url: '#', color: '#00F5FF' },
  { label: 'X / TWITTER', url: '#', color: 'rgba(240,246,252,0.6)' },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '120px 24px', background: '#030609', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 8 }}>{'// 04 — ESTABLISH CONTACT'}</div>
        <h2 style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: 'clamp(22px,4vw,36px)', color: '#F0F6FC', marginBottom: 14, letterSpacing: '0.05em' }}>
          SECURE <span style={{ color: '#00F5FF' }}>CHANNEL</span>
        </h2>
        <p style={{ fontFamily: 'Share Tech Mono', fontSize: 10, color: 'rgba(0,245,255,0.3)', letterSpacing: '0.15em', marginBottom: 48 }}>
          FOR LAW ENFORCEMENT CASEWORK • ARMY CYBER CELL • OSINT INQUIRY • SECURITY RESEARCH
        </p>

        {/* Email CTA */}
        <a href="mailto:thecyberindia.official@gmail.com" style={{
          display: 'inline-block', fontFamily: 'Share Tech Mono', fontSize: 13, letterSpacing: '0.1em', fontWeight: 700,
          padding: '18px 44px', marginBottom: 12, background: '#00F5FF', color: '#000508', textDecoration: 'none',
          transition: 'all 0.2s', boxShadow: '0 0 20px rgba(0,245,255,0.2)',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(0,245,255,0.5)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0,245,255,0.2)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}>
          [ SEND ENCRYPTED MESSAGE ]
        </a>
        <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, color: 'rgba(0,245,255,0.3)', letterSpacing: '0.08em', marginBottom: 56 }}>
          thecyberindia.official@gmail.com
        </div>

        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,245,255,0.2),transparent)', marginBottom: 40 }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'Share Tech Mono', fontSize: 9, letterSpacing: '0.15em', padding: '10px 20px',
              color: s.color, border: `1px solid ${s.color}25`, textDecoration: 'none', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 16px ${s.color}30`; (e.currentTarget as HTMLAnchorElement).style.borderColor = s.color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${s.color}25`; }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
