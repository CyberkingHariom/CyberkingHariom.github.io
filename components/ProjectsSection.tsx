'use client';

const PROJECTS = [
  {
    id: 'P001',
    name: 'VAJAR INTEL BOT',
    desc: 'AI-powered cybercrime investigation Telegram bot and CLI tool. Phone, email, and social OSINT in seconds. Used by Cyber Cell units.',
    tech: ['Python', 'Telegram API', 'OSINT APIs', 'AI/ML'],
    category: 'Cybersecurity',
    status: 'ACTIVE',
    statusColor: '#00FF41',
    color: '#00F5FF',
  },
  {
    id: 'P002',
    name: 'VAJAR IP FORENSIC',
    desc: 'Advanced IP investigation GUI tool using STUN protocol for real IP detection behind VPN/proxy. Built for Cyber Cell deployment.',
    tech: ['Python', 'STUN Protocol', 'Network APIs', 'GUI'],
    category: 'Cybersecurity',
    status: 'ACTIVE',
    statusColor: '#00FF41',
    color: '#FF9933',
  },
  {
    id: 'P003',
    name: 'CDR & IPDR ANALYZER',
    desc: 'Open-source Python tool for CDR and IPDR analysis. Eliminates 15-30 day CDR delay — instant actionable intelligence from telecom data.',
    tech: ['Python', 'Data Analysis', 'NetworkX', 'Matplotlib'],
    category: 'OSINT',
    status: 'OPEN SOURCE',
    statusColor: '#00F5FF',
    color: '#00FF41',
    link: 'https://github.com/mrcyb4r',
  },
  {
    id: 'P004',
    name: 'THE CYBER INDIA PLATFORM',
    desc: 'This website — a full-stack cinematic cybersecurity platform with admin panel, news, tools, casework and team management.',
    tech: ['Next.js', 'TypeScript', 'GSAP', 'Three.js', 'Firebase'],
    category: 'Web',
    status: 'LIVE',
    statusColor: '#00FF41',
    color: '#00F5FF',
  },
  {
    id: 'P005',
    name: 'FAKE ACCOUNT DETECTOR',
    desc: 'Tool for detecting and tracing fake/impersonation social media accounts. Evidence collection and court-admissible packaging.',
    tech: ['Python', 'Social APIs', 'Image Analysis'],
    category: 'Cybersecurity',
    status: 'RESEARCH',
    statusColor: '#FF9933',
    color: '#FF9933',
  },
  {
    id: 'P006',
    name: 'CYBER AWARENESS BOT',
    desc: 'Telegram bot for cybersecurity awareness, daily threat alerts, investigation tips and educational content distribution.',
    tech: ['Python', 'Telegram Bot API', 'Automation'],
    category: 'Automation',
    status: 'PLANNED',
    statusColor: '#4A6374',
    color: '#7FB3C8',
  },
];

const CATEGORIES = ['All', 'Cybersecurity', 'OSINT', 'Web', 'Automation', 'Research'];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ background: '#05070A' }}>
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: '#4A6374' }}>
            // 05 — BUILDS
          </div>
          <h2 className="font-orbitron font-black text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
            PROJECTS /{' '}
            <span style={{ color: '#00FF41', textShadow: '0 0 20px rgba(0,255,65,0.4)' }}>BUILDS</span>
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: '#7FB3C8' }}>
            Tools, platforms and research projects created by Hariom Singh.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className="glass-card rounded-lg p-6 flex flex-col group"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${proj.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.15)';
              }}
            >
              {/* Project ID + Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs" style={{ color: '#4A6374' }}>
                  PROJECT {proj.id}
                </span>
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    background: `${proj.statusColor}15`,
                    border: `1px solid ${proj.statusColor}30`,
                    color: proj.statusColor,
                  }}
                >
                  {proj.status}
                </span>
              </div>

              {/* Project name */}
              <h3 className="font-orbitron font-bold text-base mb-3" style={{ color: proj.color }}>
                {proj.name}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#7FB3C8' }}>
                {proj.desc}
              </p>

              {/* Tech stack */}
              <div className="mb-4">
                <div className="font-mono text-xs mb-2" style={{ color: '#4A6374' }}>TECHNOLOGY</div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono"
                      style={{
                        background: `${proj.color}08`,
                        border: `1px solid ${proj.color}20`,
                        color: proj.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs" style={{ color: '#4A6374' }}>CATEGORY</span>
                <span className="font-mono text-xs" style={{ color: '#7FB3C8' }}>{proj.category}</span>
              </div>

              {/* View button */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2 rounded font-mono text-xs tracking-widest text-center transition-all duration-200 block"
                  style={{
                    background: `${proj.color}08`,
                    border: `1px solid ${proj.color}30`,
                    color: proj.color,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = `${proj.color}15`)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = `${proj.color}08`)}
                >
                  [ VIEW ON GITHUB ]
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
