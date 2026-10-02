'use client';

import { useState } from 'react';

type Category = 'ALL' | 'OSINT' | 'INVESTIGATION' | 'SECURITY' | 'FORENSICS' | 'UTILITIES';

interface ToolItem {
  id: string;
  icon: string;
  name: string;
  subtitle: string;
  desc: string;
  features: string[];
  categories: Category[];
  status: string;
  statusColor: string;
  accentColor: string;
  warning: string | null;
  github?: string;
  terminalLogs: string[];
  howItWorks: string[];
  useCases: string[];
}

const TOOLS: ToolItem[] = [
  {
    id: 'vajar-intel-bot',
    icon: '🤖',
    name: 'VAJAR INTEL BOT',
    subtitle: 'TELEGRAM + CLI INTELLIGENCE AGENT',
    desc: "India's first AI-powered cybercrime investigation bot. Provide a phone number, email, or social link — get a complete digital profile in seconds.",
    features: [
      'Phone Number OSINT Lookup (India-optimized)',
      'Email Address Deep Tracking',
      'Social Media Footprint Extraction',
      'Data Breach Cross-Reference',
      'AI-Based Suspect Profiling',
      'Auto Court-Ready PDF Report',
    ],
    categories: ['OSINT', 'INVESTIGATION'],
    status: 'ACTIVE DEPLOYMENT',
    statusColor: '#00FF41',
    accentColor: '#00F5FF',
    warning: 'Education & law enforcement use only. Authorized personnel only.',
    terminalLogs: [
      'root@thecyberindia:~$ vajar --investigate --target +9184710XXXXX',
      '⠿ Initializing OSINT Engine...',
      '✓ Telecom Node: RESOLVED (UP East Circle)',
      '✓ Linked Accounts: FOUND (WhatsApp, Telegram, Truecaller)',
      '✓ Data Breach Cross-Ref: 2 records indexed (Anonymized)',
      '✓ Suspect Profile Graph: COMPILED',
      '📄 Court-ready Dossier PDF: GENERATED (/cases/out_8471.pdf)'
    ],
    howItWorks: [
      'Input identifier parsed and sanitized through validation filters',
      'Distributed query engine queries 25+ open-source and telecom data points',
      'AI heuristic layer calculates risk indicators & pattern associations',
      'Section 65B compliant forensic summary export'
    ],
    useCases: [
      'Rapid suspect profiling during first 24 hours of cyber complaints',
      'Tracing origin circles for cyber fraud & extortion rings',
      'Automated evidence collation for official case diaries'
    ]
  },
  {
    id: 'vajar-ip-forensic',
    icon: '🌐',
    name: 'VAJAR IP FORENSIC',
    subtitle: 'STUN PROTOCOL NETWORK INTELLIGENCE',
    desc: 'Advanced IP investigation software using STUN protocol techniques to uncover real IP addresses even behind VPN or proxy.',
    features: [
      'Real IP Detection via STUN Protocol',
      'ISP + ASN Network Mapping',
      'TOR Exit Node Detection',
      'VPN / Proxy Fingerprinting',
      'Threat Intelligence Integration',
      'Court-Ready PDF Export',
    ],
    categories: ['SECURITY', 'FORENSICS', 'INVESTIGATION'],
    status: 'ACTIVE DEPLOYMENT',
    statusColor: '#00FF41',
    accentColor: '#FF9933',
    warning: 'Strictly for verified Police & authorized Cyber Investigators only.',
    terminalLogs: [
      'root@thecyberindia:~$ vajar-stun --trace-session --session-id 44892',
      '⠿ Establishing STUN/WebRTC bind request...',
      '⚡ Candidate Gathering: host, srflx, relay',
      '⚠ VPN Virtual Interface Detected: WireGuard (10.2.0.1)',
      '✓ Public NAT Reflection: 103.212.XX.XX (Real ISP IP)',
      '✓ ASN Resolved: AS133982 (Jio Fiber Telecom)',
      '✓ Geolocation Coordinates: Lat 26.50 / Long 83.78'
    ],
    howItWorks: [
      'Sends crafted STUN binding requests to uncover reflexive public transport addresses',
      'Identifies WebRTC candidate leaks across browser sessions',
      'Bypasses conventional residential VPN proxies by analyzing UDP transport routing',
      'Correlates ASN routing table and telecom provider ownership'
    ],
    useCases: [
      'Unmasking suspects operating behind commercial VPNs in financial scams',
      'Detecting relay proxies used by malicious actors targeting e-commerce portals',
      'Assisting State Cyber Cells in ISP notice drafting'
    ]
  },
  {
    id: 'cdr-ipdr-tool',
    icon: '📊',
    name: 'CDR & IPDR TOOL',
    subtitle: 'CALL & IP DETAIL RECORD ANALYZER',
    desc: 'Python-based CDR and IPDR analysis tool published on GitHub. Solves the 15–30 day CDR delay problem — giving investigators instant actionable intelligence from telecom data.',
    features: [
      'CDR Pattern Analysis',
      'IPDR Timeline Reconstruction',
      'Suspect Location Correlation',
      'Network Graph Visualization',
    ],
    categories: ['INVESTIGATION', 'FORENSICS'],
    status: 'OPEN SOURCE',
    statusColor: '#00F5FF',
    accentColor: '#00FF41',
    warning: null,
    github: 'https://github.com/mrcyb4r',
    terminalLogs: [
      'root@thecyberindia:~$ python cdr_ipdr_analyzer.py --input raw_cdr_dump.csv',
      '⠿ Parsing 14,820 CDR call records...',
      '✓ Tower Triangulation Map Generated: 4 distinct clusters',
      '✓ Frequent Contact Analysis: Top 3 common numbers isolated',
      '✓ Tower Switch Correlation: Movement timeline reconstructed',
      '✓ Interactive NetworkX HTML Map: SAVED'
    ],
    howItWorks: [
      'Ingests standardized CSV/Excel dumps from telecom providers (Airtel, Jio, Vi, BSNL)',
      'Normalizes timestamps, Cell ID, Azimuth, and call duration vectors',
      'Applies graph theory clustering to identify conspirator networks',
      'Generates interactive HTML maps and timeline charts'
    ],
    useCases: [
      'Instant cell tower movement tracing for missing persons & absconding suspects',
      'Finding common confederate numbers across multiple victims',
      'Eliminating telecom formatting headaches for investigating officers'
    ]
  },
  {
    id: 'username-search',
    icon: '👤',
    name: 'USERNAME SEARCH',
    subtitle: 'CROSS-PLATFORM IDENTITY TRACER',
    desc: 'Track a username across 100+ social platforms and services. Identify digital footprints and cross-platform identity correlation.',
    features: [
      '100+ Platform Coverage',
      'Social Media Footprint',
      'Account Verification',
      'Export Results',
    ],
    categories: ['OSINT', 'UTILITIES'],
    status: 'RESEARCH',
    statusColor: '#FF9933',
    accentColor: '#00F5FF',
    warning: 'Educational & defensive research use only.',
    terminalLogs: [
      'root@thecyberindia:~$ username-intel --user target_alias_2026',
      '⠿ Scanning 120+ public social registries...',
      '✓ Instagram: FOUND (https://instagram.com/target_alias_2026)',
      '✓ GitHub: FOUND (Activity in repository: bot-infra)',
      '✓ Telegram: FOUND (@target_alias_2026)',
      '✓ Steam Community: FOUND',
      '✓ Identity Confidence Score: 88%'
    ],
    howItWorks: [
      'Asynchronously checks existence endpoints across 120+ platforms',
      'Validates HTTP status codes and response signature matches',
      'Extracts public bio text and avatar hashes for visual correlation'
    ],
    useCases: [
      'Mapping suspect usernames across gaming, developer, and social networks',
      'Identifying aliases used in cyber bullying or impersonation',
      'OSINT research on threat actors'
    ]
  },
  {
    id: 'domain-intel',
    icon: '🔍',
    name: 'DOMAIN INTEL',
    subtitle: 'DNS & WHOIS INVESTIGATION',
    desc: 'Comprehensive domain intelligence gathering — DNS records, WHOIS data, IP resolution, reverse lookups, and infrastructure mapping.',
    features: [
      'WHOIS Data Extraction',
      'DNS Record Analysis',
      'IP Resolution',
      'Reverse Lookup',
    ],
    categories: ['OSINT', 'UTILITIES'],
    status: 'RESEARCH',
    statusColor: '#FF9933',
    accentColor: '#00FF41',
    warning: null,
    terminalLogs: [
      'root@thecyberindia:~$ domain-intel --target scam-portal-verify.in',
      '⠿ Resolving DNS Hierarchy (A, AAAA, MX, TXT, NS)...',
      '✓ Registrar: PublicDomainRegistry (Registered 2 days ago)',
      '✓ Name Servers: ns1.bulletproof-dns.xyz',
      '✓ Mail Server MX: Missing (High Phishing Risk)',
      '✓ Reverse IP Lookup: 14 other suspicious domains hosted on same IP'
    ],
    howItWorks: [
      'Performs DNS queries across authoritative nameservers',
      'Extracts historical WHOIS archives and registrar contacts',
      'Performs reverse IP lookup to reveal co-hosted malicious landing pages'
    ],
    useCases: [
      'Takedown preparation for fraudulent banking & government imitation websites',
      'Investigating phishing infrastructure networks',
      'Verifying legitimate domain ownership'
    ]
  },
  {
    id: 'hash-calc',
    icon: '#',
    name: 'EVIDENCE HASH CALC',
    subtitle: 'DIGITAL EVIDENCE INTEGRITY TOOL',
    desc: 'Calculate and verify file hashes (MD5, SHA-1, SHA-256, SHA-512) for digital evidence integrity in forensic investigations.',
    features: [
      'MD5 / SHA-1 / SHA-256 / SHA-512',
      'File Integrity Verification',
      'Chain of Custody Support',
      'Batch Processing',
    ],
    categories: ['FORENSICS', 'UTILITIES'],
    status: 'UTILITIES',
    statusColor: '#7FB3C8',
    accentColor: '#FF9933',
    warning: null,
    terminalLogs: [
      'root@thecyberindia:~$ hash-calc --file /evidence/seized_disk_img.dd',
      '⠿ Streaming bytes through cryptographic engines...',
      '✓ MD5:    9e107d9d372bb6826bd81d3542a419d6',
      '✓ SHA-1:  2fd4e1c67a2d28fced849ee1bb76e7391b93eb12',
      '✓ SHA-256: d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592',
      '✓ Timestamp Stamped: 2026-10-02T14:15:39+05:30 (IST)'
    ],
    howItWorks: [
      'Reads files in chunked streams without modifying access timestamps',
      'Simultaneously calculates standard forensic cryptographic checksums',
      'Outputs immutable hash records suitable for Section 65B judicial certificates'
    ],
    useCases: [
      'Preserving digital evidence integrity at the crime scene',
      'Verifying forensic disk image acquisitions before analysis',
      'Demonstrating strict chain-of-custody in court proceedings'
    ]
  },
];

const CATEGORIES: Category[] = ['ALL', 'OSINT', 'INVESTIGATION', 'SECURITY', 'FORENSICS', 'UTILITIES'];

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  const filtered = TOOLS.filter(
    (t) => activeCategory === 'ALL' || t.categories.includes(activeCategory)
  );

  return (
    <section id="tools" className="relative py-24 overflow-hidden" style={{ background: '#080D12' }}>
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: '#4A6374' }}>
            // 04 — ARSENAL & TOOLKIT
          </div>
          <h2 className="font-orbitron font-black text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
            THE CYBER INDIA{' '}
            <span style={{ color: '#00F5FF', textShadow: '0 0 20px rgba(0,245,255,0.4)' }}>TOOLKIT</span>
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: '#7FB3C8' }}>
            Proprietary research, investigation and security utilities. Built for speed, high-accuracy intelligence extraction, and court-admissible forensic standards.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded font-mono text-xs tracking-widest transition-all duration-200"
              style={{
                background: activeCategory === cat ? 'rgba(0,245,255,0.12)' : 'transparent',
                border: activeCategory === cat ? '1px solid rgba(0,245,255,0.5)' : '1px solid rgba(0,245,255,0.1)',
                color: activeCategory === cat ? '#00F5FF' : '#4A6374',
                boxShadow: activeCategory === cat ? '0 0 15px rgba(0,245,255,0.1)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tool) => (
            <div
              key={tool.id}
              className="glass-card rounded-lg p-6 flex flex-col cursor-pointer"
              onClick={() => setSelectedTool(tool)}
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{
                transition: 'all 0.3s ease',
                transform: hoveredTool === tool.id ? 'translateY(-4px)' : 'none',
                borderColor: hoveredTool === tool.id ? `${tool.accentColor}40` : 'rgba(0,245,255,0.15)',
                boxShadow: hoveredTool === tool.id ? `0 15px 40px ${tool.accentColor}08` : 'none',
              }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    background: `${tool.statusColor}15`,
                    border: `1px solid ${tool.statusColor}30`,
                    color: tool.statusColor,
                  }}
                >
                  {tool.status}
                </span>
                {tool.github && (
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono transition-colors"
                    style={{ color: '#4A6374' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = tool.accentColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6374')}
                  >
                    github ↗
                  </a>
                )}
              </div>

              {/* Icon + Name */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="text-3xl w-12 h-12 flex items-center justify-center rounded-lg shrink-0"
                  style={{ background: `${tool.accentColor}10`, border: `1px solid ${tool.accentColor}20` }}
                >
                  {tool.icon}
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-sm" style={{ color: tool.accentColor }}>
                    {tool.name}
                  </h3>
                  <p className="font-mono text-[10px] mt-0.5" style={{ color: '#4A6374' }}>
                    // {tool.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#7FB3C8' }}>
                {tool.desc}
              </p>

              {/* Features */}
              <ul className="space-y-1 mb-4">
                {tool.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs font-mono" style={{ color: '#4A6374' }}>
                    <span style={{ color: tool.accentColor }}>✓</span>
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Warning */}
              {tool.warning && (
                <div
                  className="text-[11px] font-mono p-2 rounded mb-3 truncate"
                  style={{
                    background: 'rgba(255,107,53,0.05)',
                    border: '1px solid rgba(255,107,53,0.2)',
                    color: '#FF6B35',
                  }}
                >
                  ⚠ {tool.warning}
                </div>
              )}

              {/* CTA */}
              <button
                type="button"
                className="w-full py-2 rounded font-mono text-xs tracking-widest transition-all duration-200 mt-auto"
                style={{
                  background: `${tool.accentColor}08`,
                  border: `1px solid ${tool.accentColor}30`,
                  color: tool.accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${tool.accentColor}15`;
                  e.currentTarget.style.boxShadow = `0 0 15px ${tool.accentColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${tool.accentColor}08`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                [ VIEW TOOL SPEC ]
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className="mt-10 p-4 rounded text-center text-xs font-mono"
          style={{
            border: '1px solid rgba(255,107,53,0.2)',
            background: 'rgba(255,107,53,0.03)',
            color: '#7FB3C8',
          }}
        >
          All tools are provided for{' '}
          <span style={{ color: '#00F5FF' }}>educational, research and authorized defensive-security purposes only.</span>
          {' '}Unauthorized use is strictly prohibited under Indian IT Act 2000.
        </div>
      </div>

      {/* Tool Detail Modal (Blueprint Section 10) */}
      {selectedTool && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(5, 7, 10, 0.88)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-6 sm:p-8 font-inter"
            style={{
              background: 'rgba(8, 13, 18, 0.98)',
              border: `1px solid ${selectedTool.accentColor}50`,
              boxShadow: `0 0 50px ${selectedTool.accentColor}20`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(0,245,255,0.15)]">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedTool.icon}</span>
                <div>
                  <h3 className="font-orbitron font-bold text-lg text-white">
                    {selectedTool.name}
                  </h3>
                  <div className="font-mono text-xs" style={{ color: selectedTool.accentColor }}>
                    // {selectedTool.subtitle}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedTool(null)}
                className="w-8 h-8 rounded flex items-center justify-center font-mono text-sm"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                }}
              >
                ✕
              </button>
            </div>

            {/* Simulated Live Terminal View */}
            <div className="mb-6 rounded-lg p-4 font-mono text-xs border border-[rgba(0,245,255,0.15)] bg-[#05070a]">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[rgba(255,255,255,0.05)]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF9933]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
                </div>
                <span className="text-[10px] text-[#4A6374]">LIVE TOOL RUNTIME STREAM</span>
              </div>
              <div className="space-y-1.5">
                {selectedTool.terminalLogs.map((log, i) => (
                  <div key={i} style={{ color: log.startsWith('root') ? '#00F5FF' : log.includes('✓') ? '#00FF41' : log.includes('⚠') ? '#FF9933' : '#7FB3C8' }}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Overview & Features */}
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#4A6374' }}>
                  [ TOOL OVERVIEW ]
                </h4>
                <p className="leading-relaxed" style={{ color: '#E0F7FA' }}>
                  {selectedTool.desc}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2.5" style={{ color: '#4A6374' }}>
                  [ CORE CAPABILITIES & SPECIFICATIONS ]
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTool.features.map((f, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded font-mono text-xs flex items-start gap-2"
                      style={{ background: 'rgba(0,245,255,0.03)', border: '1px solid rgba(0,245,255,0.1)' }}
                    >
                      <span style={{ color: selectedTool.accentColor }}>✓</span>
                      <span style={{ color: '#7FB3C8' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it Works */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2.5" style={{ color: '#4A6374' }}>
                  [ ARCHITECTURE & HOW IT WORKS ]
                </h4>
                <div className="space-y-2">
                  {selectedTool.howItWorks.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 font-mono text-xs">
                      <span
                        className="w-5 h-5 rounded flex items-center justify-center font-bold shrink-0 mt-0.5"
                        style={{ background: `${selectedTool.accentColor}15`, color: selectedTool.accentColor }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ color: '#E0F7FA' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Use Cases */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest mb-2.5" style={{ color: '#4A6374' }}>
                  [ PRIMARY LAW ENFORCEMENT & INVESTIGATION USE CASES ]
                </h4>
                <ul className="space-y-1.5 font-mono text-xs">
                  {selectedTool.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#7FB3C8]">
                      <span style={{ color: selectedTool.accentColor }}>⚡</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal disclaimer */}
              <div
                className="p-3.5 rounded text-xs font-mono"
                style={{
                  background: 'rgba(255,107,53,0.06)',
                  border: '1px solid rgba(255,107,53,0.25)',
                  color: '#FF6B35',
                }}
              >
                ⚠ <strong>RESPONSIBLE USE MANDATE:</strong> For educational, research and authorized defensive-security purposes only. Live deployments require verified authorization credentials.
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[rgba(0,245,255,0.1)] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs" style={{ color: '#4A6374' }}>
                STATUS: {selectedTool.status}
              </span>
              <div className="flex gap-3">
                {selectedTool.github && (
                  <a
                    href={selectedTool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded font-mono text-xs tracking-wider transition-all"
                    style={{
                      border: '1px solid rgba(0,245,255,0.3)',
                      color: '#00F5FF',
                    }}
                  >
                    GITHUB REPO ↗
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={() => setSelectedTool(null)}
                  className="px-6 py-2 rounded font-orbitron font-bold text-xs tracking-wider transition-all"
                  style={{
                    background: `${selectedTool.accentColor}20`,
                    border: `1px solid ${selectedTool.accentColor}`,
                    color: selectedTool.accentColor,
                    boxShadow: `0 0 15px ${selectedTool.accentColor}25`,
                  }}
                >
                  REQUEST ACCESS / DEMO →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
