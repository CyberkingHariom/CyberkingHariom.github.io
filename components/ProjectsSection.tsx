'use client';

const PROJECTS = [
  {
    id: 'P-001', name: 'VAJAR INTEL BOT',
    desc: 'AI-powered cybercrime investigation Telegram bot. Phone, email, social OSINT in seconds. Deployed by Cyber Cell units across India.',
    tech: ['Python', 'Telegram API', 'OSINT APIs', 'AI/ML'],
    status: 'ACTIVE',
  },
  {
    id: 'P-002', name: 'VAJAR IP FORENSIC',
    desc: 'Advanced IP investigation GUI tool using STUN protocol for real IP detection behind VPN/proxy. Built for Cyber Cell deployment.',
    tech: ['Python', 'STUN Protocol', 'Network APIs', 'GUI'],
    status: 'ACTIVE',
  },
  {
    id: 'P-003', name: 'CDR & IPDR ANALYZER',
    desc: 'Open-source Python tool for CDR/IPDR analysis. Eliminates 15-30 day telecom delay — instant actionable intelligence.',
    tech: ['Python', 'NetworkX', 'Matplotlib', 'Data Analysis'],
    status: 'OPEN SOURCE',
    link: 'https://github.com/mrcyb4r',
  },
  {
    id: 'P-004', name: 'THE CYBER INDIA PLATFORM',
    desc: 'This platform — full-stack cyber intelligence website with news, tools, casework, and admin infrastructure.',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    status: 'LIVE',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '120px 24px', background: '#050A10' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 10 }}>
          // 03 — PROJECTS
        </div>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 36px)', color: '#F0F6FC', marginBottom: 60 }}>
          ACTIVE BUILDS
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {PROJECTS.map(p => (
            <div key={p.id} style={{
              display: 'grid', gridTemplateColumns: '70px 1fr auto', alignItems: 'center', gap: 32, padding: '28px 32px',
              border: '1px solid rgba(0,245,255,0.08)', background: 'rgba(0,245,255,0.01)', transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.25)')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.08)')}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'rgba(0,245,255,0.25)', letterSpacing: '0.1em' }}>{p.id}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 13, color: '#F0F6FC', letterSpacing: '0.08em' }}>{p.name}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.12em', padding: '3px 10px', color: '#00F5FF', border: '1px solid rgba(0,245,255,0.2)' }}>{p.status}</span>
                </div>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, color: 'rgba(240,246,252,0.45)', margin: 0 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, padding: '3px 8px', color: 'rgba(0,245,255,0.35)', border: '1px solid rgba(0,245,255,0.07)' }}>{t}</span>
                  ))}
                </div>
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#00F5FF', textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.1em' }}>
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
