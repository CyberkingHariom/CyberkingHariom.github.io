'use client';

import { useState } from 'react';

const PROFILE_LINES = [
  { label: 'NAME', value: 'Hariom Singh', color: '#FFFFFF' },
  { label: 'ROLE', value: 'Cybercrime Investigator & OSINT Specialist', color: '#00F5FF' },
  { label: 'FOCUS', value: 'Cyber Intelligence • IP Forensics • STUN Analysis', color: '#00FF41' },
  { label: 'LOCATION', value: 'Deoria, Uttar Pradesh, India 🇮🇳', color: '#FF9933' },
  { label: 'EDUCATION', value: 'BCA (AI-Assisted Cyber Track)', color: '#E0F7FA' },
  { label: 'PAST LEADERSHIP', value: 'Former CTO, Invisintel Technologies Pvt. Ltd.', color: '#00F5FF' },
  { label: 'LEA INTERNSHIP', value: 'Defronix Cyber Security (Ghaziabad Police Cases)', color: '#FF003C' },
  { label: 'EMAIL', value: 'hariomsingh2706@gmail.com', color: '#00F5FF' },
  { label: 'PHONE / WA', value: '+91 84710 71945', color: '#00FF41' },
  { label: 'OPERATIONAL STATUS', value: '🟢 READY FOR POLICE & DEFENSE COLLABORATION', color: '#00FF41' },
];

export default function AboutSection() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: '#050A10' }}
    >
      {/* Dracula Red & Green Atmospheric Aura */}
      <div
        className="dracula-flare-green"
        style={{ width: '420px', height: '420px', top: '25%', left: '0%' }}
      />
      <div
        className="dracula-flare-red"
        style={{ width: '420px', height: '420px', bottom: '15%', right: '0%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5FF] tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] status-active" />
            // 01 — DOSSIER & OPERATOR PROFILE
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white">
            THE PERSON BEHIND{' '}
            <span className="text-[#00F5FF] text-glow-cyan">THE PLATFORM</span>
          </h2>
          <div className="cyber-line mt-4 max-w-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Photo & Narrative */}
          <div className="lg:col-span-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              {/* Photo Container with Cyber Frame */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 shrink-0">
                {/* Outer Rotating Tactical Halo */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#00F5FF] opacity-60"
                  style={{ animation: 'radar-sweep 24s linear infinite' }}
                />

                {/* Inner Beveled Photo Housing */}
                <div
                  className="absolute inset-2 rounded-xl overflow-hidden bg-[rgba(10,16,24,0.9)] border border-[rgba(0,245,255,0.4)] flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.2)]"
                >
                  {!photoError ? (
                    <img
                      src="/hariom.jpg"
                      alt="Hariom Singh - Cybercrime Investigator"
                      className="w-full h-full object-cover object-top"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    <div className="text-center p-3">
                      <div className="font-orbitron font-black text-4xl text-[#00F5FF] text-glow-cyan mb-1">
                        HS
                      </div>
                      <span className="font-mono text-[9px] text-[#FF9933] block">
                        CHIEF INVESTIGATOR
                      </span>
                    </div>
                  )}

                  {/* Red/Green Accent Scanline */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,245,255,0.1)] to-transparent pointer-events-none animate-pulse" />
                </div>

                {/* Tactical Corner Brackets */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#FF003C]" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#00FF41]" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#00F5FF]" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#FF9933]" />

                {/* Live Online Beacon */}
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#00FF41] border-2 border-[#050A10] status-active shadow-[0_0_10px_#00FF41]" />
              </div>

              {/* Identity Details */}
              <div className="text-center sm:text-left">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono tracking-widest text-[#FF9933] bg-[rgba(255,153,51,0.1)] border border-[rgba(255,153,51,0.3)] mb-2">
                  🇮🇳 DEORIA, UTTAR PRADESH
                </div>
                <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white">
                  HARIOM SINGH
                </h3>
                <div className="font-rajdhani font-bold text-base text-[#00F5FF] mb-3">
                  Cybercrime Investigator · OSINT Specialist
                </div>
                <p className="text-xs text-[#8B949E] font-mono">
                  Badge: <span className="text-white">TCI-CMD-01</span> · Security Clear: <span className="text-[#00FF41]">ACTIVE</span>
                </p>
              </div>
            </div>

            {/* Narrative Bio */}
            <div className="space-y-3.5 font-rajdhani text-sm sm:text-base text-[#8B949E] leading-relaxed">
              <p>
                I am <strong className="text-white">Hariom Singh</strong>, a specialized cybercrime investigator and OSINT researcher based in Deoria, Uttar Pradesh. Currently pursuing my BCA with an AI-assisted Cyber Investigation focus.
              </p>
              <p>
                As former <strong className="text-[#00F5FF]">CTO at Invisintel Technologies Pvt. Ltd.</strong>, I led digital investigation operations and engineered intelligence automation tools that are actively deployed across Cyber Cell units.
              </p>
              <p>
                Through my work with <strong className="text-[#FF9933]">Defronix Cyber Security</strong>, I directly investigated multiple live cybercrime cases referred by <strong className="text-white">Ghaziabad Police</strong>, deploying STUN protocol IP forensics, CDR timeline analysis, and court-admissible evidence packaging.
              </p>
            </div>

            {/* Photo upload instruction box for Hariom */}
            <div className="mt-6 p-3 rounded-lg border border-[rgba(0,245,255,0.2)] bg-[rgba(0,245,255,0.03)] font-mono text-[11px] text-[#7FB3C8] flex items-start gap-2.5">
              <span className="text-base text-[#00F5FF]">📸</span>
              <div>
                <span className="text-white font-bold">PHOTO SETUP GUIDE:</span> Save your photo as{' '}
                <code className="text-[#00FF41] bg-black/40 px-1 py-0.5 rounded">public/hariom.jpg</code> (or{' '}
                <code className="text-[#00FF41] bg-black/40 px-1 py-0.5 rounded">public/hariom.png</code>) to display your actual portrait inside this frame.
              </div>
            </div>

            {/* Cyber Awareness Banner */}
            <div className="mt-5 p-4 rounded-xl tactical-border flex items-center gap-4 bg-[rgba(255,153,51,0.05)] border-[rgba(255,153,51,0.25)]">
              <span className="text-3xl">🎤</span>
              <div>
                <div className="font-orbitron font-bold text-xs text-[#FF9933]">
                  COLLEGE CYBERSECURITY AWARENESS KEYNOTE
                </div>
                <div className="font-rajdhani text-xs text-[#8B949E] mt-0.5">
                  Conducted educational sessions for university students on online fraud vectors, scam containment, and digital self-defense.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Profile Card */}
          <div className="lg:col-span-6 w-full">
            <div className="tactical-border rounded-xl p-5 sm:p-7 bg-[rgba(6,10,16,0.92)] font-mono text-xs shadow-[0_0_40px_rgba(0,245,255,0.06)]">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[rgba(0,245,255,0.15)]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF003C]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF9933]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
                  <span className="ml-2 text-[11px] text-[#8B949E] font-bold">
                    SYSTEM_ID::HARIOM_SINGH.SYS
                  </span>
                </div>
                <span className="text-[10px] text-[#00FF41]">AUTHENTICATED</span>
              </div>

              <div className="text-[#8B949E] mb-4">
                root@thecyberindia:~$ cat /etc/intelligence/dossier.json
              </div>

              {/* Data rows */}
              <div className="space-y-3 font-mono">
                {PROFILE_LINES.map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-b border-[rgba(255,255,255,0.03)] pb-2">
                    <span className="text-[#8B949E] min-w-[130px] shrink-0 text-[11px]">
                      // {row.label}
                    </span>
                    <span className="font-medium text-xs break-all" style={{ color: row.color }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terminal command prompt */}
              <div className="mt-5 pt-3 border-t border-[rgba(0,245,255,0.1)] flex items-center gap-2 text-xs">
                <span className="text-[#00F5FF]">root@thecyberindia:~$</span>
                <span className="text-white animate-pulse">awaiting_mission_directive_</span>
              </div>
            </div>

            {/* Founder Platform Callout */}
            <div className="mt-5 p-4 rounded-xl tactical-border bg-[rgba(0,255,65,0.04)] border-[rgba(0,255,65,0.25)] flex items-center justify-between">
              <div>
                <div className="font-orbitron font-bold text-xs text-[#00FF41]">
                  FOUNDER: THE CYBER INDIA PLATFORM
                </div>
                <div className="font-rajdhani text-xs text-[#8B949E] mt-0.5">
                  Educational media on YouTube & Instagram training over 1,000+ netizens in digital threat defense.
                </div>
              </div>
              <span className="text-2xl shrink-0 ml-3">🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
