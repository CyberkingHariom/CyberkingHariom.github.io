'use client';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const TERMINAL_LINES = [
  { text: '> LOADING OPERATOR DOSSIER...', color: 'rgba(0,245,255,0.5)', delay: 0 },
  { text: '> NAME: HARIOM SINGH', color: '#00F5FF', delay: 300 },
  { text: '> ROLE: CYBERCRIME INVESTIGATOR & OSINT SPECIALIST', color: '#00FF41', delay: 600 },
  { text: '> CLEARANCE: ALPHA — ARMY CYBER CELL AUTHORIZED', color: '#FF9933', delay: 900 },
  { text: '> LOCATION: GORAKHPUR, UTTAR PRADESH, INDIA 🇮🇳', color: '#00F5FF', delay: 1200 },
  { text: '> EDUCATION: BCA — AI-ASSISTED CYBER TRACK', color: 'rgba(240,246,252,0.6)', delay: 1500 },
  { text: '> LEA INTERNSHIP: DEFRONIX — GHAZIABAD POLICE CASES', color: '#FF003C', delay: 1800 },
  { text: '> STATUS: 🟢 READY FOR POLICE & DEFENSE COLLABORATION', color: '#00FF41', delay: 2100 },
];

export default function AboutSection() {
  const [visible, setVisible] = useState<number[]>([]);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    TERMINAL_LINES.forEach((l, i) => setTimeout(() => setVisible(v => [...v, i]), l.delay));
  }, [started]);

  return (
    <section id="about" ref={ref} style={{ padding: '120px 24px', background: '#030609', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(0,245,255,0.4)', marginBottom: 8 }}>{'// 01 — OPERATOR DOSSIER'}</div>
          <h2 style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: 'clamp(22px,4vw,36px)', color: '#F0F6FC', marginBottom: 48, letterSpacing: '0.05em' }}>
            PROFILE <span style={{ color: '#00F5FF' }}>ACCESS</span>
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 40, alignItems: 'start' }}>
          <ScrollReveal delay={100}>
            <div className="hud-box" style={{ background: '#000508', padding: 24, fontFamily: 'Share Tech Mono', fontSize: 11 }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(0,245,255,0.08)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF003C' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF9933' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00FF41' }} />
                <span style={{ marginLeft: 8, fontSize: 9, color: 'rgba(0,245,255,0.3)', letterSpacing: '0.1em' }}>TCI_TERMINAL v2.4.1</span>
              </div>
              {TERMINAL_LINES.map((line, i) => (
                <div key={i} style={{ marginBottom: 8, color: visible.includes(i) ? line.color : 'transparent', transition: 'color 0.3s', letterSpacing: '0.05em', lineHeight: 1.6 }}>
                  {line.text}
                </div>
              ))}
              {visible.length >= TERMINAL_LINES.length && (
                <div style={{ color: '#00FF41', marginTop: 8 }}>{'> '}<span style={{ animation: 'blink 1s step-end infinite' }}>█</span></div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              {/* Round photo */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                <div style={{ position: 'relative', animation: 'float-y 4s ease-in-out infinite' }}>
                  <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '1px solid rgba(0,245,255,0.2)', animation: 'spin 8s linear infinite' }} />
                  <div style={{ position: 'absolute', inset: -12, borderRadius: '50%', border: '1px dashed rgba(0,255,65,0.12)', animation: 'spin 12s linear infinite reverse' }} />
                  <img src="/avatar.jpg" alt="Hariom Singh" className="avatar-round" style={{ width: 200, height: 200, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontFamily: 'Orbitron', fontWeight: 900, fontSize: 11, color: '#00F5FF', letterSpacing: '0.1em' }}>HARIOM SINGH</div>
                  <div style={{ position: 'absolute', bottom: -36, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontFamily: 'Share Tech Mono', fontSize: 8, color: 'rgba(0,255,65,0.6)', letterSpacing: '0.1em' }}>CYBER INTEL OPERATOR</div>
                </div>
              </div>

              <div style={{ marginTop: 48, fontFamily: 'Rajdhani', fontSize: 15, lineHeight: 1.8, color: 'rgba(240,246,252,0.55)', marginBottom: 20 }}>
                An independent cyber intelligence operator dedicated to protecting India through OSINT, digital investigation, and IP forensics. Providing exclusive technical support to India Army Cyber Cell.
              </div>
              <div style={{ fontFamily: 'Share Tech Mono', fontSize: 9, color: 'rgba(0,255,65,0.5)', letterSpacing: '0.1em', padding: '10px 14px', border: '1px solid rgba(0,255,65,0.15)', background: 'rgba(0,255,65,0.03)' }}>
                🇮🇳 MISSION: JAI HIND — PROTECTING INDIA THROUGH CYBER INTELLIGENCE
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
