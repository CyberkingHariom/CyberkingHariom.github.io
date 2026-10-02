'use client';

import { useState } from 'react';

export interface TeamMember {
  id: string;
  codename: string;
  name: string;
  role: string;
  workDescription: string;
  imagePath: string;
  skills: string[];
  specialization: string;
  status: string;
  color: string;
  badgeSymbol: string;
  contributions: string[];
}

const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'TCI-01',
    codename: 'NEXUS-PRIME',
    name: 'Hariom Singh',
    role: 'Founder & Lead Cybercrime Investigator',
    workDescription: 'Leads digital forensic casework, builds OSINT tools, conducts STUN IP forensics, and liaises directly with police cyber cell units.',
    imagePath: '/hariom.jpg',
    skills: ['OSINT Leadership', 'IP Forensics', 'STUN Bypass', 'Python Tools', 'Court Reporting'],
    specialization: 'Cybercrime Casework · Tool Architecture · Law Enforcement Liaison',
    status: 'ACTIVE / COMMAND',
    color: '#00F5FF',
    badgeSymbol: '🛡️',
    contributions: [
      'Built VAJAR Intel Bot & VAJAR IP Forensic tools',
      'Investigated Ghaziabad Police & Deoria fake profile cases',
      'Founded thecyberindia YouTube & Instagram platform'
    ]
  },
  {
    id: 'TCI-02',
    codename: 'SPECTER-OSINT',
    name: 'Friend 1: Tactical OSINT Analyst',
    role: 'Co-Investigator & Social Footprint Analyst',
    workDescription: 'Executes open-source deep reconnaissance, unmasks fake aliases across social graphs, and collaborated as co-investigator on live Ghaziabad police cyber fraud cases.',
    imagePath: '/team/friend1.jpg',
    skills: ['Social Graphing', 'Breach DB Cross-Ref', 'Telegram Scrapers', 'Entity Linkage'],
    specialization: 'Target Identification · Social Media Tracing · Field Reconnaissance',
    status: 'ACTIVE / FIELD',
    color: '#00FF41',
    badgeSymbol: '🔎',
    contributions: [
      'Key co-investigator on Ghaziabad Police live cyber cases',
      'Extracted critical social footprint data on impersonation syndicates',
      'Manages cross-platform target correlation databases'
    ]
  },
  {
    id: 'TCI-03',
    codename: 'NET-HAWK',
    name: 'Friend 2: Network & Forensics Specialist',
    role: 'Network Forensics & Packet Analyst',
    workDescription: 'Specializes in analyzing ISP routing logs, STUN binding packets, ASN infrastructure data, and reverse DNS mapping for threat actor isolation.',
    imagePath: '/team/friend2.jpg',
    skills: ['Wireshark', 'STUN/TURN Protocol', 'ASN Routing', 'VPN De-Anonymization'],
    specialization: 'IP De-Anonymization · Traffic Analysis · Proxy Fingerprinting',
    status: 'ACTIVE / RESEARCH',
    color: '#FF9933',
    badgeSymbol: '🌐',
    contributions: [
      'Calibrated STUN protocol handshake detection algorithms for VAJAR',
      'Mapped malicious hosting IPs behind recurring phishing scams',
      'Assists in preparing technical ISP disclosure notices'
    ]
  },
  {
    id: 'TCI-04',
    codename: 'CORE-DEV',
    name: 'Friend 3: Software & Bot Engineer',
    role: 'Security Tool & Backend Developer',
    workDescription: 'Develops high-throughput Python backends, Telegram API bots, automation crawlers, and database indexing pipelines for rapid search.',
    imagePath: '/team/friend3.jpg',
    skills: ['Python AsyncIO', 'FastAPI', 'Telegram Bot API', 'Docker', 'SQLite/Postgres'],
    specialization: 'CLI & GUI Development · Bot Infrastructure · High-Speed Scraping',
    status: 'ACTIVE / ENG',
    color: '#00F5FF',
    badgeSymbol: '🛠️',
    contributions: [
      'Engineered core CLI runtime for VAJAR utilities',
      'Built automated PDF case generator modules for Section 65B format',
      'Optimized query latency from minutes down to seconds'
    ]
  },
  {
    id: 'TCI-05',
    codename: 'MEDIA-SHIELD',
    name: 'Friend 4: Cyber Awareness Director',
    role: 'Cyber Awareness & Media Strategist',
    workDescription: 'Produces high-impact educational video walkthroughs, case breakdowns, awareness graphics, and manages public outreach on YouTube and Instagram.',
    imagePath: '/team/friend4.jpg',
    skills: ['Video Production', 'Visual Storytelling', 'Public Advisories', 'Community Outreach'],
    specialization: 'Cybersecurity Education · Public Advisories · Media Production',
    status: 'ACTIVE / OUTREACH',
    color: '#00FF41',
    badgeSymbol: '📢',
    contributions: [
      'Directs content creation for thecyberindia YouTube & Instagram',
      'Distills complex cyber threat research into accessible awareness videos',
      'Assisted over 5,000+ netizens through educational threat alerts'
    ]
  },
  {
    id: 'TCI-06',
    codename: 'CHRONO-INTEL',
    name: 'Friend 5: CDR & Telecom Data Analyst',
    role: 'Telecom Data & Timeline Reconstructionist',
    workDescription: 'Parses complex telecom dumps, creates geographic heatmaps of cell tower pings, and reconstructs suspect timelines to break CDR delays.',
    imagePath: '/team/friend5.jpg',
    skills: ['CDR Parsing', 'Cell ID Geolocation', 'Pandas & NumPy', 'Timeline Synthesis'],
    specialization: 'Telecom Forensics · Spatial Geolocation · Movement Triangulation',
    status: 'ACTIVE / OPS',
    color: '#FF9933',
    badgeSymbol: '📊',
    contributions: [
      'Helped develop the open-source CDR & IPDR tool',
      'Built tower sequence algorithms that isolate suspect movement routes',
      'Streamlined data cleaning pipelines for police CDR dumps'
    ]
  },
  {
    id: 'TCI-07',
    codename: 'CYBER-ARCH',
    name: 'Friend 6: Web Security & UI/UX Architect',
    role: 'Full-Stack & Web Security Engineer',
    workDescription: 'Builds secure web interfaces, dashboard panels, cryptographic verification widgets, and hardens client-facing platforms against modern web exploits.',
    imagePath: '/team/friend6.jpg',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Crypto API', 'AppSec'],
    specialization: 'Tactical UI/UX · Secure Architecture · Frontend Intelligence Dashboards',
    status: 'ACTIVE / CORE',
    color: '#FF003C',
    badgeSymbol: '⚡',
    contributions: [
      'Architected The Cyber India central web platform & admin system',
      'Implemented custom forensic timeline & case visualization widgets',
      'Ensured full responsive design across desktop and mobile devices'
    ]
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="team" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#070D14' }}>
      {/* Dracula Red & Green Background Atmospheric Aura */}
      <div
        className="dracula-flare-green"
        style={{ width: '450px', height: '450px', top: '15%', right: '5%' }}
      />
      <div
        className="dracula-flare-red"
        style={{ width: '450px', height: '450px', bottom: '15%', left: '5%' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-widest text-[#00F5FF] border border-[rgba(0,245,255,0.3)] bg-[rgba(0,245,255,0.06)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
            // 08 — TCI ALLIES & SPECIALISTS
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white mb-3">
            THE PEOPLE BEHIND{' '}
            <span className="text-[#00F5FF] text-glow-cyan">THE PLATFORM</span>
          </h2>
          <p className="font-rajdhani font-semibold text-sm sm:text-lg text-[#8B949E] max-w-3xl mx-auto">
            <strong className="text-white">Hariom Singh & the 6 trusted team friends</strong> who contribute to OSINT investigations, network forensics, software engineering, telecom data processing, and national cyber defense awareness.
          </p>
        </div>

        {/* Clear Photo & Logo Setup Instructions for the User */}
        <div className="tactical-border rounded-xl p-4 sm:p-5 mb-10 bg-[rgba(6,10,16,0.9)] max-w-4xl mx-auto">
          <div className="flex items-start gap-3 text-xs font-mono">
            <span className="text-xl">📸</span>
            <div className="space-y-1 text-[#8B949E]">
              <div className="text-white font-bold text-sm font-orbitron">
                HOW TO ADD REAL PHOTOS & LOGOS FOR YOUR TEAM
              </div>
              <p>
                Simply place your friends' photos inside the <code className="text-[#00FF41] bg-black/50 px-1 py-0.5 rounded">public/team/</code> folder with these filenames:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-[#00F5FF] pt-1">
                <span>• Friend 1 (Tactical OSINT): <code className="text-white">public/team/friend1.jpg</code></span>
                <span>• Friend 2 (Network Forensics): <code className="text-white">public/team/friend2.jpg</code></span>
                <span>• Friend 3 (Software & Bots): <code className="text-white">public/team/friend3.jpg</code></span>
                <span>• Friend 4 (Media & Awareness): <code className="text-white">public/team/friend4.jpg</code></span>
                <span>• Friend 5 (CDR Telecom Data): <code className="text-white">public/team/friend5.jpg</code></span>
                <span>• Friend 6 (Web Security): <code className="text-white">public/team/friend6.jpg</code></span>
              </div>
              <p className="text-[10px] text-[#FF9933] pt-1">
                * Until an image is added, each member automatically displays their custom high-tech cyber crest badge.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INITIAL_TEAM.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="tactical-border rounded-xl p-5 flex flex-col justify-between cursor-pointer group transition-all duration-300 relative overflow-hidden bg-[rgba(8,13,20,0.85)]"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${member.color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.2)';
              }}
            >
              {/* Member ID and Status */}
              <div className="flex items-center justify-between mb-4 text-xs font-mono">
                <span className="text-[#8B949E] font-bold">{member.id}</span>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    background: `${member.color}15`,
                    color: member.color,
                    border: `1px solid ${member.color}40`,
                  }}
                >
                  {member.status}
                </span>
              </div>

              {/* Photo or Cyber Crest Logo */}
              <div className="relative mx-auto mb-4 text-center">
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center text-3xl mx-auto border-2 transition-transform group-hover:scale-105 relative bg-black/60"
                  style={{
                    borderColor: member.color,
                    boxShadow: `0 0 20px ${member.color}25`,
                  }}
                >
                  {!failedImages[member.id] ? (
                    <img
                      src={member.imagePath}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(member.id)}
                    />
                  ) : (
                    <span className="text-3xl">{member.badgeSymbol}</span>
                  )}
                  {/* Glowing Status Dot */}
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#00FF41] status-active border border-black" />
                </div>

                <div className="font-mono text-[10px] tracking-widest mt-2 font-bold" style={{ color: member.color }}>
                  // {member.codename}
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-4">
                <h3 className="font-orbitron font-bold text-base text-white mb-1">
                  {member.name}
                </h3>
                <div className="font-rajdhani font-bold text-xs mb-2" style={{ color: member.color }}>
                  {member.role}
                </div>
                <p className="text-xs text-[#8B949E] font-rajdhani leading-relaxed line-clamp-3">
                  {member.workDescription}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1 justify-center pt-3 border-t border-[rgba(255,255,255,0.06)]">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8B949E] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Trigger */}
              <div className="mt-3 pt-2 text-center">
                <span className="font-mono text-[10px] text-[#00F5FF] tracking-wider group-hover:underline">
                  [ VIEW FULL DOSSIER → ]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Member Dossier Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(3, 6, 9, 0.9)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 font-rajdhani tactical-border bg-[rgba(7,12,18,0.98)]"
            style={{
              borderColor: selectedMember.color,
              boxShadow: `0 0 50px ${selectedMember.color}25`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(0,245,255,0.15)]">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedMember.badgeSymbol}</span>
                <div>
                  <h3 className="font-orbitron font-bold text-lg text-white">
                    {selectedMember.name}
                  </h3>
                  <div className="font-mono text-xs" style={{ color: selectedMember.color }}>
                    CODENAME: [{selectedMember.codename}] · {selectedMember.id}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm bg-white/5 border border-white/20 text-white"
              >
                ✕
              </button>
            </div>

            {/* Dossier Content */}
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8B949E] mb-1">
                  [ PRIMARY ROLE & ENGAGEMENT ]
                </h4>
                <div className="font-orbitron font-bold text-sm" style={{ color: selectedMember.color }}>
                  {selectedMember.role}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8B949E] mb-1">
                  [ OPERATIONAL RESPONSIBILITIES ]
                </h4>
                <p className="leading-relaxed text-[#F0F6FC]">
                  {selectedMember.workDescription}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8B949E] mb-2">
                  [ CASEWORK CONTRIBUTIONS & MILESTONES ]
                </h4>
                <ul className="space-y-1.5 font-mono text-xs">
                  {selectedMember.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#8B949E]">
                      <span style={{ color: selectedMember.color }}>✓</span>
                      <span className="text-[#E0F7FA]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8B949E] mb-2">
                  [ VERIFIED TECHNICAL CAPABILITIES ]
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded font-mono text-xs"
                      style={{
                        background: `${selectedMember.color}15`,
                        border: `1px solid ${selectedMember.color}35`,
                        color: selectedMember.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-[rgba(0,245,255,0.1)] flex items-center justify-between font-mono text-xs">
              <span className="text-[#8B949E]">CLEARANCE: VERIFIED TCI</span>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-1.5 rounded border border-[#00F5FF] text-[#00F5FF]"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
