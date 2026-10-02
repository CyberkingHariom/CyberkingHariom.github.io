'use client';

const WORK_CARDS = [
  {
    icon: '🕵️',
    title: 'CYBER CRIME INVESTIGATION',
    desc: 'Digital investigation methodologies, evidence organization, online research and analysis for law enforcement support.',
    tags: ['Fake Account Tracing', 'Digital Evidence', 'Court Reports'],
    color: '#00F5FF',
    badge: 'LEA ALIGNED',
  },
  {
    icon: '🔎',
    title: 'OSINT RECONNAISSANCE',
    desc: 'Open-source intelligence gathering using phone numbers, emails, social media profiles, and digital identifiers.',
    tags: ['Phone OSINT', 'Email Trace', 'Social Media', 'Breach DB'],
    color: '#00FF41',
    badge: '100+ SOURCES',
  },
  {
    icon: '🧠',
    title: 'CYBER INTELLIGENCE',
    desc: 'Threat research, intelligence analysis, suspect profiling using AI-assisted correlation and pattern detection.',
    tags: ['Threat Analysis', 'AI Profiling', 'Pattern Detection'],
    color: '#FF9933',
    badge: 'AI CORRELATED',
  },
  {
    icon: '🛡️',
    title: 'SECURITY RESEARCH',
    desc: 'Authorized security testing, defensive research and cybersecurity experimentation for positive outcomes.',
    tags: ['Defensive Research', 'Vulnerability Analysis', 'IP Forensics'],
    color: '#FF003C',
    badge: 'DEFENSIVE POSTURE',
  },
  {
    icon: '🛠️',
    title: 'CYBER TOOLS ARSENAL',
    desc: 'Research and investigation utilities — CLI tools, GUI applications and Telegram bots for real-time field use.',
    tags: ['Python', 'GUI Tools', 'Telegram Bots', 'CLI'],
    color: '#00FF41',
    badge: 'VAJAR SUITE',
  },
  {
    icon: '🇮🇳',
    title: 'CYBER AWARENESS',
    desc: 'Cybersecurity awareness, educational content and responsible digital-security practices via thecyberindia platform.',
    tags: ['YouTube', 'Instagram', 'Community', 'Training'],
    color: '#FF9933',
    badge: 'PUBLIC SAFETY',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#030609' }}>
      {/* Dracula Red & Green Background Atmospheric Aura */}
      <div
        className="dracula-flare-red"
        style={{ width: '420px', height: '420px', top: '10%', left: '0%' }}
      />
      <div
        className="dracula-flare-green"
        style={{ width: '420px', height: '420px', bottom: '10%', right: '0%' }}
      />

      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-widest text-[#00F5FF] border border-[rgba(0,245,255,0.3)] bg-[rgba(0,245,255,0.06)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
            // 02 — CAPABILITIES & DOMAINS
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white">
            OPERATIONAL{' '}
            <span className="text-[#00F5FF] text-glow-cyan">CAPABILITIES</span>
          </h2>
          <p className="font-rajdhani font-semibold text-sm sm:text-lg text-[#8B949E] mt-3 max-w-2xl mx-auto">
            Six mission-critical disciplines engineered to accelerate investigations, dismantle digital criminal footprints, and safeguard Indian cyberspace.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_CARDS.map((card) => (
            <div
              key={card.title}
              className="tactical-border rounded-xl p-6 flex flex-col justify-between group transition-all duration-300 bg-[rgba(8,13,20,0.85)]"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = `${card.color}80`;
                e.currentTarget.style.boxShadow = `0 15px 35px ${card.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl"
                    style={{ background: `${card.color}15`, border: `1.5px solid ${card.color}40` }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{
                      background: `${card.color}15`,
                      color: card.color,
                      border: `1px solid ${card.color}40`,
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-orbitron font-bold text-base tracking-wider mb-2 text-white group-hover:text-[#00F5FF] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-rajdhani text-sm leading-relaxed mb-5 text-[#8B949E]">
                  {card.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-[#E0F7FA] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
