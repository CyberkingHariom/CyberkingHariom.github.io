'use client';

import { useState } from 'react';

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  workflow: string[];
  authorizedFor: string;
  color: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'osint-research',
    icon: '🔍',
    title: 'OSINT RESEARCH',
    subtitle: 'OPEN SOURCE INTELLIGENCE & ENTITY CORRELATION',
    shortDesc: 'Deep digital footprint intelligence, social identity correlation, breach investigation and persona mapping.',
    fullDesc: 'Systematic open-source reconnaissance using phone numbers, emails, user identities, crypto artifacts, and network infrastructures. We correlate fragmented clues into unified intelligence profiles without crossing ethical boundaries.',
    deliverables: [
      'Comprehensive suspect/target intelligence dossiers',
      'Entity relationship maps & visual link analysis',
      'Breach database exposure assessments',
      'Social network graph reconstruction'
    ],
    workflow: [
      'Scope definition & authorization validation',
      'Multi-vector OSINT extraction (100+ sources)',
      'Cross-identifier correlation & pattern matching',
      'Actionable reporting & verification'
    ],
    authorizedFor: 'Law enforcement, verified corporate fraud teams, legal counsels, and academic research.',
    color: '#00F5FF',
  },
  {
    id: 'digital-investigation',
    icon: '🕵️',
    title: 'DIGITAL INVESTIGATION',
    subtitle: 'CYBERCRIME CASEWORK & FORENSIC SUPPORT',
    shortDesc: 'End-to-end cybercrime inquiry, fake profile origin tracing, financial fraud reconstruction, and chain-of-custody reporting.',
    fullDesc: 'Direct investigation assistance for cyber incidents including extortion, fake account impersonation, fraudulent transaction trails, and digital abuse. Evidence is preserved following court-admissible standards (Section 65B Indian Evidence Act aligned).',
    deliverables: [
      'Forensic incident reconstruction timelines',
      'Platform-level evidentiary packages',
      'Court-ready PDF investigation reports',
      'Chain-of-custody verification logs'
    ],
    workflow: [
      'First-response incident triage & digital preservation',
      'Technical footprint acquisition & hash stamping',
      'Pattern identification & suspect origin analysis',
      'Final judicial evidentiary dossier generation'
    ],
    authorizedFor: 'Police departments, State Cyber Cells, and authorized victims seeking official legal recourse.',
    color: '#00FF41',
  },
  {
    id: 'cybersecurity-research',
    icon: '🛡️',
    title: 'CYBERSECURITY RESEARCH',
    subtitle: 'THREAT SURFACE & DEFENSIVE VULNERABILITY ANALYSIS',
    shortDesc: 'Proactive vulnerability assessments, STUN/IP bypass mechanism analysis, and defensive network posture validation.',
    fullDesc: 'Independent defensive security research focused on detecting anonymity leaks, identifying malicious infrastructure patterns, analyzing emerging attack tactics, and strengthening digital assets against active cyber threats.',
    deliverables: [
      'Threat landscape briefings & zero-day advisories',
      'Defensive posture hardening recommendations',
      'Network perimeter vulnerability evaluation',
      'Anonymity & privacy leak test reports'
    ],
    workflow: [
      'Threat intelligence gathering & asset discovery',
      'Defensive testing & protocol evaluation',
      'Root-cause analysis & exposure documentation',
      'Remediation guide & defensive countermeasures'
    ],
    authorizedFor: 'Technology organizations, infrastructure teams, and cybersecurity laboratories.',
    color: '#FF9933',
  },
  {
    id: 'tool-development',
    icon: '🛠️',
    title: 'SECURITY TOOL DEVELOPMENT',
    subtitle: 'CUSTOM INVESTIGATION BOTS, CLI & GUI APPS',
    shortDesc: 'Building automated forensic tools, Telegram intelligence agents, CDR analyzers, and custom LEA utilities.',
    fullDesc: 'Architecting proprietary investigation software tailored to the needs of modern cyber cells. From high-speed CDR/IPDR parsers to AI-assisted Telegram intelligence bots that provide real-time field intelligence.',
    deliverables: [
      'Tailored Python/CLI investigation scripts',
      'Secure Telegram bot intelligence bots (like VAJAR)',
      'Forensic visualization & timeline GUIs',
      'Automated court report PDF generators'
    ],
    workflow: [
      'Operational requirement elicitation from investigators',
      'Engine architecture & API protocol integration',
      'Stress testing & accuracy calibration',
      'Deployment & hands-on investigator onboarding'
    ],
    authorizedFor: 'Law enforcement agencies, security analysts, and digital forensics labs.',
    color: '#00F5FF',
  },
  {
    id: 'cyber-awareness',
    icon: '🇮🇳',
    title: 'CYBER AWARENESS',
    subtitle: 'PUBLIC EDUCATION & LAW ENFORCEMENT TRAINING',
    shortDesc: 'Workshops, university cybersecurity seminars, public safety advisories, and YouTube investigative walkthroughs.',
    fullDesc: 'Empowering students, professionals, and frontline officers through practical, actionable cyber defense education. Demystifying online scams, social engineering tricks, identity theft prevention, and foundational investigative methodologies.',
    deliverables: [
      'Live college/university interactive workshops',
      'Practical cybercrime case study walkthroughs',
      'Preventative digital safety cheat sheets & guides',
      'Specialized curriculum for beginner investigators'
    ],
    workflow: [
      'Audience threat level & demographic assessment',
      'Curriculum customization with live simulations',
      'Interactive delivery & tool demonstrations',
      'Q&A session & ongoing community support'
    ],
    authorizedFor: 'Universities, colleges, corporate staff, school communities, and student societies.',
    color: '#FF9933',
  },
  {
    id: 'technology-projects',
    icon: '⚡',
    title: 'TECHNOLOGY PROJECTS',
    subtitle: 'AI INTEGRATION, AUTOMATION & FULL-STACK SYSTEMS',
    shortDesc: 'Engineering robust full-stack platforms, automated intelligence pipelines, and AI-assisted data correlation.',
    fullDesc: 'Designing and deploying modern web platforms, automated backend pipelines, and machine learning models applied to digital intelligence, crime data indexing, and forensic pattern classification.',
    deliverables: [
      'Full-stack Next.js/React security portals',
      'Automated scrapers & data aggregation engines',
      'Machine learning classification pipelines',
      'High-performance cloud & VPS deployments'
    ],
    workflow: [
      'System design & architecture blueprinting',
      'Rapid prototype development & testing',
      'Security hardening & data validation',
      'Production deployment & monitoring setup'
    ],
    authorizedFor: 'Collaborative development, open-source initiatives, and research ventures.',
    color: '#00FF41',
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 overflow-hidden" style={{ background: '#05070A' }}>
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: '#4A6374' }}>
            // 03 — SERVICES
          </div>
          <h2 className="font-orbitron font-black text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
            WHAT I CAN{' '}
            <span style={{ color: '#00FF41', textShadow: '0 0 20px rgba(0,255,65,0.4)' }}>HELP WITH</span>
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: '#7FB3C8' }}>
            Tailored specialized assistance across cybercrime investigations, open-source intelligence, security tool engineering, and education. Click any card for detailed engagement specs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="glass-card rounded-lg p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300"
              style={{
                borderColor: 'rgba(0,245,255,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = `${srv.color}60`;
                e.currentTarget.style.boxShadow = `0 12px 35px ${srv.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0"
                    style={{ background: `${srv.color}12`, border: `1px solid ${srv.color}30` }}
                  >
                    {srv.icon}
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-sm tracking-wider" style={{ color: '#FFFFFF' }}>
                      {srv.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-wider" style={{ color: srv.color }}>
                      // CLICK FOR SPECS
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="font-mono text-xs mb-3 font-semibold" style={{ color: srv.color }}>
                  {srv.subtitle}
                </p>

                {/* Short Desc */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#7FB3C8' }}>
                  {srv.shortDesc}
                </p>
              </div>

              {/* Bottom Trigger */}
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,245,255,0.08)]">
                <span className="font-mono text-xs" style={{ color: '#4A6374' }}>
                  SPEC SHEET
                </span>
                <span className="font-mono text-xs tracking-wider flex items-center gap-1" style={{ color: srv.color }}>
                  VIEW DETAILS →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(5, 7, 10, 0.85)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl p-6 sm:p-8 font-inter"
            style={{
              background: 'rgba(8, 13, 18, 0.98)',
              border: `1px solid ${selectedService.color}50`,
              boxShadow: `0 0 50px ${selectedService.color}20`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(0,245,255,0.15)]">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedService.icon}</span>
                <div>
                  <h3 className="font-orbitron font-bold text-lg text-white">
                    {selectedService.title}
                  </h3>
                  <div className="font-mono text-xs" style={{ color: selectedService.color }}>
                    // {selectedService.subtitle}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded flex items-center justify-center font-mono text-sm transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                }}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#4A6374' }}>
                  [ OPERATIONAL OVERVIEW ]
                </h4>
                <p className="leading-relaxed" style={{ color: '#E0F7FA' }}>
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2.5" style={{ color: '#4A6374' }}>
                  [ KEY DELIVERABLES & OUTCOMES ]
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded font-mono text-xs flex items-start gap-2"
                      style={{ background: 'rgba(0,245,255,0.03)', border: '1px solid rgba(0,245,255,0.1)' }}
                    >
                      <span style={{ color: selectedService.color }}>✓</span>
                      <span style={{ color: '#7FB3C8' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2.5" style={{ color: '#4A6374' }}>
                  [ INVESTIGATION / EXECUTION WORKFLOW ]
                </h4>
                <div className="space-y-2">
                  {selectedService.workflow.map((step, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono text-xs">
                      <span
                        className="w-5 h-5 rounded flex items-center justify-center font-bold shrink-0"
                        style={{ background: `${selectedService.color}15`, color: selectedService.color }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ color: '#E0F7FA' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Authorized Users & Disclaimer */}
              <div
                className="p-3.5 rounded text-xs font-mono"
                style={{
                  background: 'rgba(255,153,51,0.06)',
                  border: '1px solid rgba(255,153,51,0.25)',
                  color: '#FF9933',
                }}
              >
                <strong>ELIGIBILITY:</strong> {selectedService.authorizedFor}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[rgba(0,245,255,0.1)] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs" style={{ color: '#4A6374' }}>
                STATUS: READY FOR ENGAGEMENT
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded font-orbitron font-bold text-xs tracking-wider transition-all"
                style={{
                  background: `${selectedService.color}20`,
                  border: `1px solid ${selectedService.color}`,
                  color: selectedService.color,
                  boxShadow: `0 0 15px ${selectedService.color}25`,
                }}
              >
                REQUEST ENGAGEMENT →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
