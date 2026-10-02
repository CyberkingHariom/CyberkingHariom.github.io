'use client';
import { useState } from 'react';

const SERVICES = [
  {
    id: '01', code: 'SVC-OSINT',
    title: 'OSINT INTELLIGENCE',
    short: 'Deep digital footprint analysis — phone, email, social identity correlation, breach investigation across 100+ data sources.',
    detail: 'Systematic open-source reconnaissance using phone numbers, emails, user identities, crypto artifacts, and network infrastructure. Full suspect dossiers, entity relationship maps, and actionable reports for law enforcement.',
    tags: ['Entity Mapping', 'Breach Analysis', 'Social Correlation', 'Persona Reconstruction'],
    color: '#00F5FF',
  },
  {
    id: '02', code: 'SVC-IPF',
    title: 'IP FORENSICS & STUN',
    short: 'Real IP detection behind VPN/proxy using STUN bypass. Advanced network forensics for cybercrime investigation.',
    detail: 'Proprietary STUN-based IP unmasking technique — identifies real IPs of suspects using VPN, Tor, or proxy layers. CDR/IPDR analysis for telecom intelligence and network path tracing.',
    tags: ['STUN Bypass', 'VPN Detection', 'CDR/IPDR', 'Network Forensics'],
    color: '#00FF41',
  },
  {
    id: '03', code: 'SVC-ARMY',
    title: 'ARMY CYBER CELL SUPPORT',
    short: 'Exclusive technical support to India Army Cyber Cell — surveillance applications, intelligence tools, defense-grade operations.',
    detail: 'Custom-built surveillance applications, spy tools, and intelligence platforms for India Army Cyber Cell. Real-time OSINT feeds, target profiling systems, and command-level reporting infrastructure.',
    tags: ['Surveillance Apps', 'Custom Tools', 'Defense Grade', 'Intel Reports'],
    color: '#FF9933',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="services" style={{ padding: '120px 24px', background: '#050A10', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 8 }}>{'// 02 — ACTIVE SERVICES'}</div>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(22px,4vw,36px)', color: '#F0F6FC', marginBottom: 56, letterSpacing: '0.05em' }}>
          CAPABILITIES <span style={{ color: '#00F5FF' }}>MATRIX</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 2 }}>
          {SERVICES.map(s => (
            <div key={s.id} onClick={() => setActive(active === s.id ? null : s.id)} className="hud-box"
              style={{ padding: '36px 30px', cursor: 'pointer', transition: 'all 0.3s', background: active === s.id ? `${s.color}06` : 'rgba(0,5,8,0.6)', borderColor: active === s.id ? `${s.color}40` : 'rgba(0,245,255,0.12)' }}
              onMouseEnter={e => { if (active !== s.id) (e.currentTarget as HTMLDivElement).style.borderColor = `${s.color}25`; }}
              onMouseLeave={e => { if (active !== s.id) (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.12)'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <div style={{ fontFamily: 'Share Tech Mono', fontSize: 8, color: `${s.color}60`, letterSpacing: '0.15em', marginBottom: 6 }}>[{s.code}]</div>
                  <h3 style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: 13, color: s.color, letterSpacing: '0.1em' }}>{s.title}</h3>
                </div>
                <div style={{ fontFamily: 'Orbitron', fontSize: 28, fontWeight: 900, color: `${s.color}15`, letterSpacing: '-0.02em' }}>{s.id}</div>
              </div>
              <div style={{ width: 40, height: 2, background: s.color, marginBottom: 16, boxShadow: `0 0 8px ${s.color}` }} />
              <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,246,252,0.5)', marginBottom: active === s.id ? 20 : 0 }}>
                {active === s.id ? s.detail : s.short}
              </p>
              {active === s.id && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'Share Tech Mono', fontSize: 8, letterSpacing: '0.1em', padding: '4px 10px', color: `${s.color}80`, border: `1px solid ${s.color}20` }}>{t}</span>
                  ))}
                </div>
              )}
              <div style={{ marginTop: 20, fontFamily: 'Share Tech Mono', fontSize: 9, color: `${s.color}50`, letterSpacing: '0.1em' }}>
                {active === s.id ? '[ CLICK TO COLLAPSE ]' : '[ CLICK TO EXPAND ]'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
