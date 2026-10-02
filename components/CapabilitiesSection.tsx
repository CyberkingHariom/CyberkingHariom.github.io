'use client';
import { useEffect, useRef, useState } from 'react';

const MATRIX = [
  {
    cat: '🔍 INVESTIGATION & INTELLIGENCE',
    id: 'intel',
    color: '#00F5FF',
    items: [
      { name: 'OSINT', val: 92 },
      { name: 'SOCMINT', val: 85 },
      { name: 'IMINT', val: 78 },
      { name: 'FININT', val: 75 },
      { name: 'GEOINT', val: 80 },
      { name: 'Cybercrime Investigation', val: 90 },
      { name: 'Digital Forensics', val: 82 },
      { name: 'Dark Web Investigation', val: 76 },
      { name: 'Cryptocurrency Tracing', val: 70 },
    ],
  },
  {
    cat: '⚡ TECHNICAL SKILLS',
    id: 'tech',
    color: '#00FF41',
    items: [
      { name: 'Python Automation/Scripting', val: 80 },
      { name: 'JavaScript', val: 65 },
      { name: 'Linux / Kali Linux', val: 85 },
      { name: 'Networking & Protocols', val: 78 },
      { name: 'Ethical Hacking', val: 72 },
      { name: 'MITRE ATT&CK Framework', val: 80 },
      { name: 'Malware Analysis', val: 65 },
      { name: 'Threat Hunting', val: 74 },
    ],
  },
  {
    cat: '🛠️ TOOLS & PLATFORMS',
    id: 'tools',
    color: '#FF9933',
    items: [
      { name: 'Maltego', val: 85 },
      { name: 'Shodan / Censys', val: 88 },
      { name: 'SpiderFoot', val: 80 },
      { name: 'Burp Suite', val: 72 },
      { name: 'Wireshark', val: 78 },
      { name: 'OSINT Framework', val: 90 },
      { name: 'VirusTotal / URLScan.io', val: 88 },
      { name: 'OpenCTI / MISP', val: 72 },
      { name: 'ExifTool / Metadata Analysis', val: 82 },
    ],
  },
];

function SkillBar({ name, val, color, animate }: { name: string; val: number; color: string; animate: boolean }) {
  const getLevel = (v: number) => v >= 85 ? 'EXPERT' : v >= 75 ? 'ADVANCED' : v >= 65 ? 'PROFICIENT' : 'TRAINED';
  const glowColor = color === '#00F5FF' ? 'rgba(0,245,255,0.4)' : color === '#00FF41' ? 'rgba(0,255,65,0.4)' : 'rgba(255,153,51,0.4)';
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
        <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: 10, color: 'rgba(240,246,252,0.7)', letterSpacing: '0.08em' }}>{name.toUpperCase()}</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(240,246,252,0.3)', letterSpacing: '0.1em' }}>{getLevel(val)}</span>
          <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, fontWeight: 700, color: color }}>{val}%</span>
        </div>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: animate ? `${val}%` : '0%',
          background: `linear-gradient(90deg, ${color}55, ${color})`,
          boxShadow: animate ? `0 0 8px ${glowColor}` : 'none',
          transition: 'width 1.2s ease, box-shadow 0.5s ease',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 3, background: color, boxShadow: `0 0 6px ${color}` }} />
        </div>
      </div>
      {/* Tick marks */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        {[0,25,50,75,100].map(t => (
          <div key={t} style={{ fontFamily: 'Share Tech Mono', fontSize: 6, color: 'rgba(255,255,255,0.12)' }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default function CapabilitiesSection() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="capabilities" ref={ref} style={{ padding: '120px 24px', background: '#020609', position: 'relative', zIndex: 2 }}>
      {/* Top HUD line */}
      <div className="cyber-line" style={{ marginBottom: 60 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 60, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, letterSpacing: '0.3em', color: 'rgba(0,245,255,0.4)', marginBottom: 8 }}>
            {'// '}CLASSIFIED — OPERATOR CAPABILITY MATRIX
          </div>
          <h2 className="glitch" data-text="SKILL MATRIX" style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', color: '#F0F6FC', letterSpacing: '0.08em', marginBottom: 8 }}>
            SKILL MATRIX
          </h2>
          <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, color: 'rgba(0,245,255,0.3)', letterSpacing: '0.15em' }}>
            SIGNAL STRENGTH READOUT — INTELLIGENCE OPERATOR: HARIOM SINGH
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 2 }}>
          {MATRIX.map(cat => (
            <div key={cat.id} className="hud-box" style={{ padding: '32px 28px', background: 'rgba(0,5,8,0.8)', transition: 'border-color 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}40`}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,245,255,0.12)'}
            >
              {/* Cat header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, paddingBottom: 16, borderBottom: `1px solid ${cat.color}18` }}>
                <div style={{ width: 3, height: 24, background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <div>
                  <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 11, color: cat.color, letterSpacing: '0.12em' }}>{cat.cat}</div>
                  <div style={{ fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', marginTop: 2 }}>
                    SIG_MATRIX: {cat.items.length} MODULES LOADED
                  </div>
                </div>
              </div>

              {cat.items.map(item => (
                <SkillBar key={item.name} name={item.name} val={item.val} color={cat.color} animate={animate} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="cyber-line" style={{ marginTop: 60 }} />
    </section>
  );
}
