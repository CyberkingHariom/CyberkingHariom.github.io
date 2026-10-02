'use client';

import { useState } from 'react';

const CASES = [
  {
    id: 'TCI-001',
    title: 'Deoria Fake Instagram Identity & Extortion Case',
    type: 'Digital Forensic Casework',
    location: 'Deoria, Uttar Pradesh',
    status: 'SOLVED & PACKAGED',
    year: '2024',
    tags: ['Fake Account', 'Instagram', 'Impersonation', 'Digital Evidence', 'Deoria Cell'],
    timeline: [
      { phase: 'INCIDENT', desc: 'Malicious threat actor created a fake Instagram profile using an innocent woman\'s identity to extort and defame.' },
      { phase: 'EVIDENCE', desc: 'Acquired platform-level metadata, preserved Section 65B hash timestamps, and extracted digital footprint trails.' },
      { phase: 'ANALYSIS', desc: 'Correlated account registration email artifacts and proxy routing hops through STUN and network log analysis.' },
      { phase: 'CORRELATION', desc: 'Linked suspect digital fingerprint across alternative secondary social profiles and telecom cell node.' },
      { phase: 'CONCLUSION', desc: 'Suspect positively unmasked. Complete court-ready evidentiary PDF package prepared for official police submission.' },
    ],
    evidenceScore: 96,
    analysisScore: 92,
    publicNote: 'Sensitive personal victim data redacted in compliance with Indian IT Act. Full technical dossier available to verified law enforcement.',
  },
  {
    id: 'TCI-002',
    title: 'Ghaziabad Police Cyber Crime Cases — Multi-Case Joint Task',
    type: 'Police Department Collaborative Casework',
    location: 'Ghaziabad, Uttar Pradesh',
    status: 'SOLVED & SUBMITTED',
    year: '2024',
    tags: ['Ghaziabad Police', 'OSINT', 'IP Forensics', 'Cyber Fraud', 'Defronix Internship'],
    timeline: [
      { phase: 'INCIDENT', desc: 'Received multiple high-priority cybercrime and financial fraud cases directly referred by Ghaziabad Police during Defronix internship.' },
      { phase: 'EVIDENCE', desc: 'Deployed VAJAR investigation suite and STUN forensic tools on suspect infrastructure and fake beneficiary accounts.' },
      { phase: 'ANALYSIS', desc: 'De-anonymized VPN proxies, mapped call detail records (CDR), and reconstructed suspect movement routes.' },
      { phase: 'CORRELATION', desc: 'Collaborated with co-investigator to synthesize cross-state syndicate phone linkages and money trail endpoints.' },
      { phase: 'CONCLUSION', desc: 'Cases successfully closed. Detailed technical forensics dossiers handed over to Ghaziabad Police Cyber Cell.' },
    ],
    evidenceScore: 94,
    analysisScore: 95,
    publicNote: 'Official police case reports and chain of custody documentation available upon official departmental requisition.',
  },
];

export default function CaseworkSection() {
  const [activeCase, setActiveCase] = useState<string | null>('TCI-001');

  return (
    <section id="casework" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#050A10' }}>
      {/* Dracula Red & Green Background Atmospheric Aura */}
      <div
        className="dracula-flare-green"
        style={{ width: '420px', height: '420px', top: '20%', left: '0%' }}
      />
      <div
        className="dracula-flare-red"
        style={{ width: '420px', height: '420px', bottom: '15%', right: '0%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-widest text-[#FF9933] border border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.06)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
            // 06 — OPERATIONAL CASEWORK & EVIDENCE
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white mb-3">
            INVESTIGATIONS{' '}
            <span className="text-[#00FF41] text-glow-green">CONDUCTED</span>
          </h2>
          <p className="font-rajdhani font-semibold text-sm sm:text-lg text-[#8B949E] max-w-2xl mx-auto">
            Live law enforcement casework successfully solved in collaboration with UP Police & State Cyber Cells.
          </p>
        </div>

        {/* Legal Anonymization Banner */}
        <div className="tactical-border rounded-xl p-3.5 mb-8 text-center text-xs font-mono max-w-3xl mx-auto bg-[rgba(255,0,60,0.06)] border-[rgba(255,0,60,0.3)] text-[#FF003C]">
          ⚠ <strong>JUDICIAL PRIVACY COMPLIANCE:</strong> All victim PII, real phone numbers, and active case numbers are anonymized. Court-ready PDF dossiers with Section 65B certificates are available to authorized LEA officers.
        </div>

        {/* Cases List */}
        <div className="space-y-6">
          {CASES.map((c) => {
            const isOpen = activeCase === c.id;
            return (
              <div
                key={c.id}
                className="tactical-border rounded-xl overflow-hidden bg-[rgba(8,13,20,0.85)] transition-all duration-300"
                style={{
                  borderColor: isOpen ? 'rgba(0, 255, 65, 0.45)' : 'rgba(0, 245, 255, 0.2)',
                  boxShadow: isOpen ? '0 10px 40px rgba(0, 255, 65, 0.1)' : 'none',
                }}
              >
                {/* Case Header Trigger */}
                <div
                  className="p-5 sm:p-6 cursor-pointer select-none"
                  onClick={() => setActiveCase(isOpen ? null : c.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <span className="font-mono text-xs text-[#00F5FF] font-bold">
                          CASE [{c.id}]
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[rgba(0,255,65,0.15)] text-[#00FF41] border border-[rgba(0,255,65,0.4)]">
                          ✓ {c.status}
                        </span>
                        <span className="font-mono text-xs text-[#8B949E]">{c.year}</span>
                      </div>

                      <h3 className="font-orbitron font-bold text-base sm:text-xl text-white mb-2">
                        {c.title}
                      </h3>

                      <div className="flex flex-wrap gap-1.5">
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8B949E] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-5 pt-3 md:pt-0 border-t md:border-t-0 border-[rgba(255,255,255,0.06)]">
                      <div className="text-left md:text-right">
                        <div className="font-mono text-[10px] text-[#8B949E]">LOCATION</div>
                        <div className="font-rajdhani font-bold text-sm text-[#FF9933]">{c.location}</div>
                      </div>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.3)] text-[#00F5FF] transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                      >
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Forensic Dossier View */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[rgba(0,245,255,0.1)]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                      {/* Left: Phase by Phase Timeline */}
                      <div className="lg:col-span-7">
                        <div className="font-mono text-xs font-bold tracking-widest text-[#00F5FF] mb-4">
                          [ FORENSIC TIMELINE & INVESTIGATION PHASES ]
                        </div>
                        <div className="space-y-4">
                          {c.timeline.map((step, idx) => (
                            <div key={step.phase} className="flex items-start gap-3 text-xs">
                              <div className="flex flex-col items-center">
                                <span className="w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-[10px] bg-[rgba(0,255,65,0.2)] text-[#00FF41] border border-[#00FF41]">
                                  0{idx + 1}
                                </span>
                                {idx < c.timeline.length - 1 && (
                                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#00FF41] to-transparent my-1" />
                                )}
                              </div>
                              <div className="pb-2">
                                <div className="font-mono text-xs font-bold text-[#00FF41] mb-0.5">
                                  PHASE {idx + 1}: {step.phase}
                                </div>
                                <p className="font-rajdhani text-sm text-[#E0F7FA] leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Technical Evidence Metrics Gauge */}
                      <div className="lg:col-span-5">
                        <div className="tactical-border rounded-xl p-5 bg-[rgba(5,7,10,0.85)] font-mono text-xs space-y-4">
                          <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-2 text-[11px]">
                            <span className="text-[#8B949E]">EVIDENTIARY AUDIT</span>
                            <span className="text-[#00FF41]">VERIFIED COURT-READY</span>
                          </div>

                          {/* Evidence Gauge Bar */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-[#8B949E]">EVIDENCE ACQUISITION SCORE</span>
                              <span className="text-[#00F5FF] font-bold">{c.evidenceScore}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-black/60 overflow-hidden border border-[rgba(0,245,255,0.2)]">
                              <div
                                className="h-full bg-gradient-to-r from-[#00F5FF] to-[#00FF41]"
                                style={{ width: `${c.evidenceScore}%`, boxShadow: '0 0 10px #00F5FF' }}
                              />
                            </div>
                          </div>

                          {/* Correlation Gauge Bar */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-[#8B949E]">PATTERN CORRELATION CONFIDENCE</span>
                              <span className="text-[#00FF41] font-bold">{c.analysisScore}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-black/60 overflow-hidden border border-[rgba(0,255,65,0.2)]">
                              <div
                                className="h-full bg-gradient-to-r from-[#00FF41] to-[#FF9933]"
                                style={{ width: `${c.analysisScore}%`, boxShadow: '0 0 10px #00FF41' }}
                              />
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-[rgba(255,153,51,0.06)] border border-[rgba(255,153,51,0.2)] text-[11px] text-[#FF9933] leading-relaxed">
                            {c.publicNote}
                          </div>

                          <div className="pt-2 flex items-center justify-between">
                            <span className="text-[10px] text-[#8B949E]">JUDICIAL REPUTE: HIGH</span>
                            <a
                              href="#contact"
                              className="text-xs text-[#00F5FF] hover:underline"
                            >
                              REQUEST OFFICIAL BRIEFING →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
