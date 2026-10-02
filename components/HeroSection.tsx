'use client';
import { useEffect, useState } from 'react';

const ROLES = [
  'CYBERCRIME INVESTIGATOR',
  'OSINT & DIGITAL INTELLIGENCE',
  'IP FORENSICS & STUN ANALYST',
  'INDIA ARMY CYBER CELL SUPPORT',
  'CYBER INTELLIGENCE OPERATOR',
  'DIGITAL THREAT HUNTER',
];

export default function HeroSection() {
  const [typed, setTyped] = useState('');
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [show, setShow] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    setShow(true);
    const tick = setInterval(() => {
      setTime(new Date().toISOString().replace('T', ' ').slice(0, 19) + ' IST');
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const cur = ROLES[idx];
    const t = setTimeout(() => {
      if (!del) {
        if (typed.length < cur.length) setTyped(cur.slice(0, typed.length + 1));
        else setTimeout(() => setDel(true), 2500);
      } else {
        if (typed.length > 0) setTyped(cur.slice(0, typed.length - 1));
        else { setDel(false); setIdx(p => (p + 1) % ROLES.length); }
      }
    }, del ? 20 : 50);
    return () => clearTimeout(t);
  }, [typed, del, idx]);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden', zIndex: 2 }}>

      {/* HUD scan line */}
      <div style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,transparent,rgba(0,245,255,0.5),transparent)', animation: 'scan-bar 4s linear infinite', zIndex: 3 }} />

      {/* Corner brackets */}
      {['top-0 left-0','top-0 right-0','bottom-0 left-0','bottom-0 right-0'].map((pos,i) => (
        <div key={i} style={{
          position:'absolute', width:40, height:40,
          top: i<2?20:'auto', bottom:i>=2?20:'auto',
          left: i%2===0?20:'auto', right: i%2===1?20:'auto',
          borderTop: i<2?'1px solid rgba(0,245,255,0.3)':'none',
          borderBottom: i>=2?'1px solid rgba(0,245,255,0.3)':'none',
          borderLeft: i%2===0?'1px solid rgba(0,245,255,0.3)':'none',
          borderRight: i%2===1?'1px solid rgba(0,245,255,0.3)':'none',
        }} />
      ))}

      {/* System clock */}
      <div style={{ position:'absolute', top:80, right:24, fontFamily:'Share Tech Mono,monospace', fontSize:9, color:'rgba(0,245,255,0.3)', letterSpacing:'0.1em', textAlign:'right' }}>
        <div>SYS_CLOCK: {time}</div>
        <div>NODE: TCI-GORAKHPUR-001</div>
        <div style={{color:'rgba(0,255,65,0.5)'}}>STATUS: [ACTIVE]</div>
      </div>

      <div style={{ position:'relative', zIndex:2, textAlign:'center', maxWidth:860, animation: show?'fade-in-up 0.8s ease forwards':'none', opacity:0 }}>
        {/* System init text */}
        <div style={{ fontFamily:'Share Tech Mono,monospace', fontSize:9, color:'rgba(0,245,255,0.35)', letterSpacing:'0.2em', marginBottom:20, lineHeight:1.8 }}>
          <div>{'>'} INITIALIZING TCI COMMAND INTERFACE...</div>
          <div>{'>'} OSINT ENGINE: ONLINE</div>
          <div style={{color:'rgba(0,255,65,0.5)'}}>{'>'} ARMY CYBER CELL LINK: ESTABLISHED ✓</div>
        </div>

        {/* Status badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:28, fontFamily:'Share Tech Mono,monospace', fontSize:9, letterSpacing:'0.2em', color:'#00FF41', border:'1px solid rgba(0,255,65,0.25)', background:'rgba(0,255,65,0.04)', padding:'6px 16px' }}>
          <span className="status-active" style={{ width:5, height:5, borderRadius:'50%', background:'#00FF41', display:'inline-block' }} />
          OPERATOR: ONLINE — INDIA ARMY CYBER CELL SUPPORT ACTIVE
          <span className="status-active" style={{ width:5, height:5, borderRadius:'50%', background:'#00FF41', display:'inline-block' }} />
        </div>

        {/* Avatar with HUD ring */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:28 }}>
          <div style={{ position:'relative', width:120, height:120 }}>
            <img src="/avatar.jpg" alt="Hariom Singh — The Cyber India" style={{ width:120, height:120, objectFit:'cover', border:'2px solid rgba(0,245,255,0.4)', boxShadow:'0 0 30px rgba(0,245,255,0.15), inset 0 0 30px rgba(0,245,255,0.05)', display:'block' }} />
            <div style={{ position:'absolute', inset:-8, border:'1px solid rgba(0,245,255,0.15)', animation:'none', borderRadius:0 }} />
            <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', fontFamily:'Share Tech Mono', fontSize:7, color:'rgba(0,245,255,0.4)', letterSpacing:'0.1em', whiteSpace:'nowrap' }}>[ ID VERIFIED ]</div>
            <div style={{ position:'absolute', bottom:-14, left:'50%', transform:'translateX(-50%)', fontFamily:'Share Tech Mono', fontSize:7, color:'rgba(0,255,65,0.5)', letterSpacing:'0.1em', whiteSpace:'nowrap' }}>CLEARANCE: ALPHA</div>
          </div>
        </div>

        {/* Glitch Title */}
        <h1 className="glitch" data-text="THE CYBER INDIA" style={{ fontFamily:'Orbitron,monospace', fontWeight:900, fontSize:'clamp(32px,7vw,72px)', color:'#F0F6FC', letterSpacing:'0.06em', margin:'0 0 4px', position:'relative' }}>
          THE CYBER INDIA
        </h1>
        <div style={{ fontFamily:'Share Tech Mono', fontSize:10, letterSpacing:'0.25em', color:'rgba(0,245,255,0.4)', marginBottom:24 }}>
          {'// '}CYBER INTELLIGENCE OPERATIONS — INDIA{'  //  '}FOUNDED BY HARIOM SINGH
        </div>

        {/* Typing */}
        <div style={{ fontFamily:'Share Tech Mono', fontSize:'clamp(12px,2.5vw,16px)', letterSpacing:'0.15em', color:'#00F5FF', marginBottom:44, minHeight:24 }}>
          <span style={{ color:'rgba(0,245,255,0.4)' }}>{'> ACTIVE_ROLE: '}</span>
          {typed}<span style={{ animation:'blink 1s step-end infinite' }}>█</span>
        </div>

        {/* Stats bar */}
        <div style={{ display:'flex', gap:2, justifyContent:'center', marginBottom:40, flexWrap:'wrap' }}>
          {[['500+','LEA PARTNERS'],['50+','CASES SOLVED'],['3','INTEL TOOLS'],['100%','ARMY VERIFIED']].map(([v,l]) => (
            <div key={l} style={{ padding:'12px 20px', border:'1px solid rgba(0,245,255,0.1)', background:'rgba(0,245,255,0.03)', minWidth:100, textAlign:'center' }}>
              <div style={{ fontFamily:'Orbitron,monospace', fontWeight:900, fontSize:18, color:'#00F5FF', letterSpacing:'0.05em' }}>{v}</div>
              <div style={{ fontFamily:'Share Tech Mono', fontSize:8, color:'rgba(0,245,255,0.4)', letterSpacing:'0.15em', marginTop:2 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({behavior:'smooth'})} style={{ fontFamily:'Share Tech Mono', fontSize:11, letterSpacing:'0.15em', fontWeight:700, padding:'14px 36px', background:'#00F5FF', color:'#000508', border:'none', cursor:'pointer', transition:'all 0.2s', textTransform:'uppercase' }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.boxShadow='0 0 30px rgba(0,245,255,0.5)';(e.currentTarget as HTMLButtonElement).style.transform='translateY(-2px)'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.boxShadow='none';(e.currentTarget as HTMLButtonElement).style.transform='translateY(0)'}}>
            [ ENTER SYSTEM ]
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} style={{ fontFamily:'Share Tech Mono', fontSize:11, letterSpacing:'0.15em', padding:'14px 36px', background:'transparent', color:'#00FF41', border:'1px solid rgba(0,255,65,0.4)', cursor:'pointer', transition:'all 0.2s' }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.boxShadow='0 0 20px rgba(0,255,65,0.2)';(e.currentTarget as HTMLButtonElement).style.borderColor='#00FF41'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.boxShadow='none';(e.currentTarget as HTMLButtonElement).style.borderColor='rgba(0,255,65,0.4)'}}>
            [ ESTABLISH CONTACT ]
          </button>
        </div>
      </div>

      <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', fontFamily:'Share Tech Mono', fontSize:8, letterSpacing:'0.2em', color:'rgba(0,245,255,0.2)', animation:'flicker 3s infinite' }}>
        ▼ SCROLL TO ACCESS INTEL ▼
      </div>
    </section>
  );
}
