'use client';
import { useState } from 'react';

const SERVICES = [
  {
    id: '01',
    title: 'OSINT INTELLIGENCE',
    short: 'Deep digital footprint analysis — phone, email, social identity correlation, breach investigation across 100+ data sources.',
    detail: 'Systematic open-source reconnaissance using phone numbers, emails, user identities, crypto artifacts, and network infrastructure. Full suspect dossiers, entity relationship maps, and actionable reports for law enforcement and defense agencies.',
    tags: ['Entity Mapping', 'Breach Analysis', 'Social Correlation', 'Persona Reconstruction'],
  },
  {
    id: '02',
    title: 'IP FORENSICS & STUN',
    short: 'Real IP detection behind VPN/proxy using STUN protocol bypass. Advanced network forensics for cybercrime investigation.',
    detail: 'Proprietary STUN-based IP unmasking technique — identifies real IPs of suspects using VPN, Tor, or proxy layers. CDR/IPDR analysis for telecom intelligence, network path tracing, and ISP-level forensics.',
    tags: ['STUN Bypass', 'VPN Detection', 'CDR/IPDR', 'Network Forensics'],
  },
  {
    id: '03',
    title: 'ARMY CYBER CELL SUPPORT',
    short: 'Exclusive technical support to India Army Cyber Cell — surveillance applications, intelligence tools, and operational cyber support.',
    detail: 'Custom-built surveillance applications, spy tools, and intelligence platforms for India Army Cyber Cell operations. Real-time OSINT feeds, target profiling systems, and command-level reporting infrastructure.',
    tags: ['Surveillance Apps', 'Custom Tools', 'Defense Grade', 'Intelligence Reports'],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" style={{ padding: '120px 24px', background: '#030609' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 10 }}>
          // 02 — SERVICES
        </div>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(22px, 4vw, 36px)', color: '#F0F6FC', marginBottom: 60 }}>
          CAPABILITIES
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 2 }}>
          {SERVICES.map(s => (
            <div key={s.id} onClick={() => setActive(active === s.id ? null : s.id)}
              style={{
                padding: '36px 32px', cursor: 'pointer', transition: 'all 0.3s',
                border: active === s.id ? '1px solid rgba(0,245,255,0.4)' : '1px solid rgba(0,245,255,0.08)',
                background: active === s.id ? 'rgba(0,245,255,0.04)' : 'rgba(0,245,255,0.01)',
              }}
              onMouseEnter={e => { if (active !== s.id) (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.2)'; }}
              onMouseLeave={e => { if (active !== s.id) (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.08)'; }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(0,245,255,0.3)', marginBottom: 16, letterSpacing: '0.1em' }}>{s.id}</div>
              <h3 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 13, color: '#00F5FF', letterSpacing: '0.1em', marginBottom: 16 }}>{s.title}</h3>
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,246,252,0.5)', marginBottom: active === s.id ? 20 : 0 }}>
                {active === s.id ? s.detail : s.short}
              </p>
              {active === s.id && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.1em', padding: '4px 10px', color: 'rgba(0,245,255,0.5)', border: '1px solid rgba(0,245,255,0.12)' }}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
