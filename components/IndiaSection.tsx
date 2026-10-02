'use client';

const DEFENSE_PILLARS = [
  {
    code: 'AIR / LAND / CYBER',
    title: '5TH WARFARE DOMAIN',
    desc: 'Modern defense extends beyond physical frontiers into cyberspace. Safeguarding critical infrastructure, telecom grids, and citizen identities.',
    color: '#FF9933',
    icon: '🛡️',
  },
  {
    code: 'OSINT RECON',
    title: 'INTELLIGENCE SUPERIORITY',
    desc: 'Actionable open-source intelligence gathering to detect adversarial digital sabotage, fake information ops, and proxy syndicates.',
    color: '#00F5FF',
    icon: '📡',
  },
  {
    code: 'IP FORENSICS',
    title: 'ZERO-ANONYMITY DEFENSE',
    desc: 'Specialized STUN and network forensics designed to peel away proxy layers and reveal adversaries hiding behind anonymity networks.',
    color: '#00FF41',
    icon: '⚡',
  },
  {
    code: 'POLICE ALLIANCE',
    title: 'GRASSROOTS ENFORCEMENT',
    desc: 'Direct casework support and tool engineering for state Cyber Cells and law enforcement officers defending Indian citizens 24/7.',
    color: '#FF003C',
    icon: '🇮🇳',
  },
];

export default function IndiaSection() {
  return (
    <section
      id="india"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #07121A 0%, #030609 80%)',
      }}
    >
      {/* Dracula Red & Green Background Atmospheric Aura */}
      <div
        className="dracula-flare-green"
        style={{ width: '500px', height: '500px', top: '10%', left: '5%' }}
      />
      <div
        className="dracula-flare-red"
        style={{ width: '450px', height: '450px', bottom: '10%', right: '5%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Tricolor Military Header Bar */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          <div className="h-1.5 w-12 sm:w-20 rounded bg-[#FF9933] shadow-[0_0_12px_#FF9933]" />
          <div className="h-1.5 w-12 sm:w-20 rounded bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF]" />
          <div className="h-1.5 w-12 sm:w-20 rounded bg-[#138808] shadow-[0_0_12px_#138808]" />
        </div>

        {/* Section Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest text-[#FF9933] border border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.06)] shadow-[0_0_20px_rgba(255,153,51,0.15)]">
            <span>🇮🇳</span>
            <span>INDIAN ARMY & DEFENSE FORCES INSPIRED TACTICAL DOCTRINE</span>
          </div>
        </div>

        {/* Tactical Title */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            CYBER DEFENSE CORPS FOR A{' '}
            <span className="bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#00FF41] bg-clip-text text-transparent">
              SAFER DIGITAL INDIA
            </span>
          </h2>
          <p className="font-rajdhani font-semibold text-base sm:text-xl text-[#8B949E] max-w-3xl mx-auto leading-relaxed">
            Inspired by the unwavering vigilance of the <strong className="text-white">Indian Armed Forces</strong>, we pioneer research, forensics, and investigation utilities to protect the nation's digital sovereign perimeter.
          </p>
        </div>

        {/* 4 Pillars of Cyber Defense */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {DEFENSE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="tactical-border rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="font-mono text-[10px] text-[#8B949E] tracking-wider">
                    [{pillar.code}]
                  </span>
                </div>
                <h3 className="font-orbitron font-bold text-sm mb-2" style={{ color: pillar.color }}>
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#8B949E]">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between font-mono text-[10px]">
                <span className="text-white">STATUS: ACTIVE</span>
                <span style={{ color: pillar.color }}>CORPS LEVEL 1</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Defense Quote Box */}
        <div className="tactical-border rounded-2xl p-6 sm:p-10 text-center max-w-4xl mx-auto bg-[rgba(6,10,16,0.85)] mb-12 relative overflow-hidden">
          {/* Subtle Ashoka Chakra / Sunburst Outline in Background */}
          <div className="text-4xl mb-4">🇮🇳</div>
          <blockquote className="font-rajdhani font-bold text-lg sm:text-2xl text-[#E0F7FA] italic mb-4 leading-relaxed">
            "Borders in the 21st century are guarded not just with steel and gunpowder, but with cryptography, forensic science, and unyielding vigilance across every byte of Indian network traffic."
          </blockquote>
          <div className="font-mono text-xs text-[#FF9933] uppercase tracking-widest">
            — THE CYBER INDIA DEFENSE CREED
          </div>
          <div className="mt-4 text-[11px] font-mono text-[#8B949E]">
            * Independent cybersecurity & intelligence platform. Inspired by the Indian Armed Forces and State Police Cyber Cells.
          </div>
        </div>

        {/* Grand JAI HIND Banner */}
        <div className="text-center">
          <div
            className="font-orbitron font-black text-4xl sm:text-6xl tracking-widest"
            style={{
              color: '#FF9933',
              textShadow: '0 0 35px rgba(255, 153, 51, 0.6), 0 0 60px rgba(255, 0, 60, 0.4)',
            }}
          >
            JAI HIND 🇮🇳
          </div>
          <div className="font-mono text-xs sm:text-sm tracking-widest text-[#00FF41] mt-2 font-semibold">
            VANDE MATARAM // NATION FIRST, ALWAYS
          </div>
        </div>
      </div>
    </section>
  );
}
