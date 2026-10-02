'use client';

const CERTS = [
  {
    code: 'DCCI',
    name: 'Defronix Certified Cybercrime Investigator',
    issuer: 'Defronix Cyber Security',
    year: '2024',
    color: '#00F5FF',
    icon: '🛡️',
  },
  {
    code: 'DCJSP',
    name: 'Cyber Justice & Security Practices',
    issuer: 'Defronix Cyber Security',
    year: '2024',
    color: '#00FF41',
    icon: '⚖️',
  },
  {
    code: 'INT',
    name: 'Cybercrime Investigation Internship',
    issuer: 'Defronix Cyber Security',
    year: 'Oct – Nov 2024',
    color: '#FF9933',
    icon: '🔍',
  },
  {
    code: 'CCC',
    name: 'Course on Computer Concepts',
    issuer: 'NIELIT (National Institute)',
    year: '2023',
    color: '#00F5FF',
    icon: '💻',
  },
  {
    code: 'PY',
    name: 'Python Programming Certification',
    issuer: 'OM Astral Foundation',
    year: '2023',
    color: '#00FF41',
    icon: '🐍',
  },
];

export default function CertsSection() {
  return (
    <section id="certs" className="relative py-24 overflow-hidden" style={{ background: '#05070A' }}>
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: '#4A6374' }}>
            // 05 — CREDENTIALS
          </div>
          <h2 className="font-orbitron font-black text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
            CERTIFICATIONS &{' '}
            <span style={{ color: '#FF9933', textShadow: '0 0 20px rgba(255,153,51,0.4)' }}>TRAINING</span>
          </h2>
        </div>

        {/* Certs list */}
        <div className="space-y-4">
          {CERTS.map((cert, i) => (
            <div
              key={cert.code}
              className="glass-card rounded-lg p-5 flex items-center gap-5"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.borderColor = `${cert.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.15)';
              }}
            >
              {/* Index */}
              <div className="font-orbitron font-black text-3xl shrink-0" style={{ color: `${cert.color}30` }}>
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}25` }}
              >
                {cert.icon}
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="font-mono text-xs mb-0.5" style={{ color: cert.color }}>
                      [{cert.code}]
                    </div>
                    <h3 className="font-orbitron font-bold text-sm" style={{ color: '#FFFFFF' }}>
                      {cert.name}
                    </h3>
                    <p className="font-mono text-xs mt-1" style={{ color: '#4A6374' }}>
                      {cert.issuer}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded font-mono text-xs shrink-0"
                    style={{
                      background: `${cert.color}08`,
                      border: `1px solid ${cert.color}25`,
                      color: cert.color,
                    }}
                  >
                    {cert.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
