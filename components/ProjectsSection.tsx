'use client';

const PROJECTS = [
  { id: 'P-001', name: 'VAJAR INTEL BOT', desc: 'AI-powered cybercrime investigation Telegram bot. Phone, email, social OSINT in seconds. Deployed by Cyber Cell units across India.', tech: ['Python', 'Telegram API', 'OSINT APIs', 'AI/ML'], status: 'ACTIVE', statusColor: '#00FF41' },
  { id: 'P-002', name: 'VAJAR IP FORENSIC', desc: 'Advanced IP investigation GUI using STUN protocol for real IP detection behind VPN/proxy. Built for Cyber Cell deployment.', tech: ['Python', 'STUN Protocol', 'Network APIs', 'GUI'], status: 'ACTIVE', statusColor: '#00FF41' },
  { id: 'P-003', name: 'CDR & IPDR ANALYZER', desc: 'Open-source tool for CDR/IPDR analysis. Eliminates 15-30 day telecom delay — instant actionable intelligence.', tech: ['Python', 'NetworkX', 'Matplotlib'], status: 'OPEN SOURCE', statusColor: '#00F5FF', link: 'https://github.com/mrcyb4r' },
  { id: 'P-004', name: 'THE CYBER INDIA PLATFORM', desc: 'This platform — full-stack cyber intelligence website with news, tools, casework, admin infrastructure.', tech: ['Next.js', 'TypeScript', 'Firebase'], status: 'LIVE', statusColor: '#FF9933' },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '120px 24px', background: '#020609', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 8 }}>{'// 03 — ACTIVE BUILDS'}</div>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(22px,4vw,36px)', color: '#F0F6FC', marginBottom: 56, letterSpacing: '0.05em' }}>
          INTEL <span style={{ color: '#00F5FF' }}>TOOLS</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="hud-box"
              style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: 28, padding: '28px 30px', background: 'rgba(0,5,8,0.8)', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.3)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,245,255,0.02)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.12)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,5,8,0.8)'; }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(0,245,255,0.25)', letterSpacing: '0.1em', marginBottom: 4 }}>{p.id}</div>
                <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: 20, color: 'rgba(0,245,255,0.08)' }}>0{i+1}</div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: 13, color: '#F0F6FC', letterSpacing: '0.08em' }}>{p.name}</span>
                  <span style={{ fontFamily: 'Share Tech Mono', fontSize: 8, letterSpacing: '0.12em', padding: '3px 10px', color: p.statusColor, border: `1px solid ${p.statusColor}35`, boxShadow: `0 0 8px ${p.statusColor}20` }}>{p.status}</span>
                </div>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, color: 'rgba(240,246,252,0.45)', marginBottom: 12, lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.map(t => <span key={t} style={{ fontFamily: 'Share Tech Mono', fontSize: 8, padding: '3px 8px', color: 'rgba(0,245,255,0.35)', border: '1px solid rgba(0,245,255,0.08)' }}>{t}</span>)}
                </div>
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Share Tech Mono', fontSize: 10, color: '#00F5FF', textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.1em', padding: '8px 16px', border: '1px solid rgba(0,245,255,0.2)', transition: 'all 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 16px rgba(0,245,255,0.2)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'}>
                  GITHUB →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
