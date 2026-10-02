'use client';

import { useEffect, useState, useRef } from 'react';

interface ThreatEvent {
  id: string;
  source: string;
  target: string;
  type: string;
  status: 'DETECTED' | 'INTERCEPTING' | 'CONTAINED';
  color: string;
}

export default function CyberWarViz() {
  const [activeStep, setActiveStep] = useState(0);
  const [defconLevel] = useState(1);
  const [threatEvents, setThreatEvents] = useState<ThreatEvent[]>([
    { id: 'EV-901', source: 'Rogue Relay 194.26.XX', target: 'Indian Banking Gateway', type: 'DDoS & Credential Probe', status: 'CONTAINED', color: '#00FF41' },
    { id: 'EV-902', source: 'Dark Web Botnet Cluster', target: 'State Cyber Cell Node', type: 'Encrypted Tunnel Exploit', status: 'CONTAINED', color: '#00FF41' },
    { id: 'EV-903', source: 'Anonymized VPN Proxy', target: 'Citizen Identity Registry', type: 'Phishing Reverse Pivot', status: 'INTERCEPTING', color: '#FF9933' },
    { id: 'EV-904', source: 'Suspicious STUN Stream', target: 'Telecom CDR Gateway', type: 'Metadata Exfiltration Attempt', status: 'DETECTED', color: '#FF003C' },
  ]);

  const [counterStats, setCounterStats] = useState({
    attacksNeutralized: 18429,
    activeInterceptors: 12,
    shieldIntegrity: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
      setCounterStats((prev) => ({
        ...prev,
        attacksNeutralized: prev.attacksNeutralized + Math.floor(Math.random() * 3 + 1),
      }));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="cyberwar"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #030609 0%, #070D14 50%, #030609 100%)',
      }}
    >
      {/* Background Dracula Red and Green Atmospheric Flares */}
      <div
        className="dracula-flare-red"
        style={{ width: '450px', height: '450px', top: '20%', right: '0%' }}
      />
      <div
        className="dracula-flare-green"
        style={{ width: '480px', height: '480px', bottom: '15%', left: '0%' }}
      />

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-widest text-[#FF003C] border border-[rgba(255,0,60,0.3)] bg-[rgba(255,0,60,0.08)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF003C] animate-ping" />
            LIVE TELEMETRY // CYBER DEFENSE MATRIX
          </div>

          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white mb-3">
            SOVEREIGN{' '}
            <span className="text-[#FF003C] text-glow-red">CYBER WAR</span>{' '}
            <span className="text-[#00FF41] text-glow-green">SIMULATION</span>
          </h2>

          <p className="font-rajdhani font-semibold text-sm sm:text-lg text-[#8B949E] max-w-2xl mx-auto">
            Real-time representation of threat packet detection, hostile node de-anonymization, and automated shield interception defending Indian cyber sovereign space.
          </p>
        </div>

        {/* Tactical Defense Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Live Combat Telemetry */}
          <div className="lg:col-span-4 space-y-4">
            {/* DEFCON & Threat Level Card */}
            <div className="tactical-border rounded-xl p-5 bg-[rgba(10,16,24,0.8)]">
              <div className="flex items-center justify-between border-b border-[rgba(0,245,255,0.15)] pb-3 mb-3">
                <span className="font-mono text-xs text-[#8B949E]">DEFENSE POSTURE</span>
                <span className="font-orbitron font-black text-sm px-2 py-0.5 rounded bg-[rgba(255,0,60,0.2)] text-[#FF003C] border border-[#FF003C]">
                  DEFCON {defconLevel} · MAXIMUM VIGILANCE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <div className="text-[#8B949E] text-[10px]">SHIELD INTEGRITY</div>
                  <div className="font-orbitron font-bold text-lg text-[#00FF41]">
                    {counterStats.shieldIntegrity}% OPTIMAL
                  </div>
                </div>
                <div>
                  <div className="text-[#8B949E] text-[10px]">THREATS NEUTRALIZED</div>
                  <div className="font-orbitron font-bold text-lg text-[#00F5FF]">
                    {counterStats.attacksNeutralized.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Live Threat Stream */}
            <div className="tactical-border rounded-xl p-5 bg-[rgba(10,16,24,0.85)]">
              <div className="flex items-center justify-between mb-3 border-b border-[rgba(255,255,255,0.08)] pb-2">
                <span className="font-mono text-xs text-[#00F5FF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
                  INTERCEPT FEED
                </span>
                <span className="font-mono text-[10px] text-[#8B949E]">STUN & OSINT PROBES</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {threatEvents.map((evt, i) => (
                  <div
                    key={evt.id}
                    className="p-2.5 rounded-lg border transition-all duration-300"
                    style={{
                      background: i === activeStep ? 'rgba(0, 245, 255, 0.08)' : 'rgba(5, 7, 10, 0.6)',
                      borderColor: i === activeStep ? evt.color : 'rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-bold text-white">{evt.id}</span>
                      <span
                        className="px-1.5 py-0.2 rounded text-[9px] font-bold"
                        style={{
                          background: `${evt.color}20`,
                          color: evt.color,
                          border: `1px solid ${evt.color}50`,
                        }}
                      >
                        {evt.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8B949E] truncate">
                      SRC: <span className="text-[#FF003C]">{evt.source}</span>
                    </div>
                    <div className="text-[11px] text-[#8B949E] truncate">
                      VECTOR: <span className="text-[#00F5FF]">{evt.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual 2D Attack & Interception Grid */}
          <div className="lg:col-span-8">
            <div className="tactical-border rounded-xl p-4 sm:p-6 bg-[rgba(6,10,16,0.9)] relative overflow-hidden">
              {/* Corner Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[10px] text-[#00F5FF]">GRID::SEC_01</div>
              <div className="absolute top-2 right-2 font-mono text-[10px] text-[#FF003C]">THREAT_RADAR::ACTIVE</div>
              <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#00FF41]">PERIMETER::LOCKED</div>
              <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#FF9933]">INDIA_SHIELD::ONLINE</div>

              {/* Interactive SVG Battlefield */}
              <div className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center">
                <svg
                  viewBox="0 0 800 480"
                  className="w-full h-full max-h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Defense Radars around India Shield */}
                  <circle cx="400" cy="240" r="80" stroke="rgba(0, 245, 255, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="400" cy="240" r="140" stroke="rgba(0, 255, 65, 0.15)" strokeWidth="1" />
                  <circle cx="400" cy="240" r="210" stroke="rgba(255, 0, 60, 0.15)" strokeWidth="1" strokeDasharray="6 6" />

                  {/* Red Hostile Cluster Left (Network A) */}
                  <g>
                    <circle cx="100" cy="120" r="14" fill="rgba(255,0,60,0.2)" stroke="#FF003C" strokeWidth="2" />
                    <text x="100" y="150" fill="#FF003C" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">BOTNET_01</text>

                    <circle cx="80" cy="320" r="14" fill="rgba(255,0,60,0.2)" stroke="#FF003C" strokeWidth="2" />
                    <text x="80" y="350" fill="#FF003C" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">PROXY_POOL</text>

                    <circle cx="150" cy="230" r="16" fill="rgba(255,0,60,0.25)" stroke="#FF003C" strokeWidth="2" />
                    <text x="150" y="265" fill="#FF003C" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">HOSTILE_RELAY</text>

                    {/* Threat Mesh Lines */}
                    <line x1="100" y1="120" x2="150" y2="230" stroke="rgba(255,0,60,0.3)" strokeWidth="1" />
                    <line x1="80" y1="320" x2="150" y2="230" stroke="rgba(255,0,60,0.3)" strokeWidth="1" />
                  </g>

                  {/* Red Hostile Cluster Right (Network B) */}
                  <g>
                    <circle cx="700" cy="130" r="14" fill="rgba(255,0,60,0.2)" stroke="#FF003C" strokeWidth="2" />
                    <text x="700" y="160" fill="#FF003C" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">DARKNET_NODE</text>

                    <circle cx="680" cy="330" r="14" fill="rgba(255,0,60,0.2)" stroke="#FF003C" strokeWidth="2" />
                    <text x="680" y="360" fill="#FF003C" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">EXPLOIT_HUB</text>

                    <circle cx="630" cy="220" r="16" fill="rgba(255,0,60,0.25)" stroke="#FF003C" strokeWidth="2" />
                    <text x="630" y="255" fill="#FF003C" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">C2_SERVER</text>

                    <line x1="700" y1="130" x2="630" y2="220" stroke="rgba(255,0,60,0.3)" strokeWidth="1" />
                    <line x1="680" y1="330" x2="630" y2="220" stroke="rgba(255,0,60,0.3)" strokeWidth="1" />
                  </g>

                  {/* Red Attack Laser Beams Firing into Center */}
                  <line
                    x1="150" y1="230" x2="330" y2="240"
                    stroke="#FF003C" strokeWidth="2.5" strokeDasharray="12 8"
                    className="animate-pulse"
                  />
                  <line
                    x1="630" y1="220" x2="470" y2="240"
                    stroke="#FF003C" strokeWidth="2.5" strokeDasharray="12 8"
                    className="animate-pulse"
                  />

                  {/* Defensive Interception Points */}
                  <circle cx="330" cy="240" r="10" fill="rgba(0,255,65,0.3)" stroke="#00FF41" strokeWidth="2" />
                  <circle cx="470" cy="240" r="10" fill="rgba(0,255,65,0.3)" stroke="#00FF41" strokeWidth="2" />

                  {/* Interception Counter-Beams (Electric Green + Cyan) */}
                  <line x1="400" y1="240" x2="330" y2="240" stroke="#00FF41" strokeWidth="3" />
                  <line x1="400" y1="240" x2="470" y2="240" stroke="#00FF41" strokeWidth="3" />

                  {/* Central India Cyber Shield Fortress */}
                  <g>
                    {/* Glowing Shield Halo */}
                    <circle cx="400" cy="240" r="48" fill="rgba(0, 245, 255, 0.12)" stroke="#00F5FF" strokeWidth="2" />
                    <circle cx="400" cy="240" r="54" stroke="#FF9933" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Central India Crest */}
                    <text x="400" y="235" textAnchor="middle" fontSize="24">🇮🇳</text>
                    <text x="400" y="260" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="Orbitron" fontWeight="bold">
                      INDIA SHIELD
                    </text>
                    <text x="400" y="274" textAnchor="middle" fill="#00FF41" fontSize="9" fontFamily="JetBrains Mono">
                      SOVEREIGN CORPS
                    </text>
                  </g>
                </svg>
              </div>

              {/* Real-time Status Caption */}
              <div className="mt-4 pt-3 border-t border-[rgba(0,245,255,0.1)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF003C] font-bold">⚠ ACTIVE SIMULATION:</span>
                  <span className="text-[#8B949E]">ATTACK VECTORS CONTAINED IN REAL-TIME</span>
                </div>
                <div className="font-bold text-[#00FF41]">
                  KNOWLEDGE IS THE FIRST LINE OF DEFENSE 🇮🇳
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
