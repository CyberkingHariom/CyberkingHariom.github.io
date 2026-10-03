'use client';
import { useEffect, useState, useRef } from 'react';

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Live clock */
  useEffect(() => {
    setShow(true);
    const tick = setInterval(() => {
      setTime(new Date().toISOString().replace('T',' ').slice(0,19) + ' IST');
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  /* Typewriter */
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

  /* Particle canvas */
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    let animId: number;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 120 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.4,
      col: Math.random() > 0.6 ? '0,245,255' : '0,255,65',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      // grid
      ctx.strokeStyle = 'rgba(0,245,255,0.03)'; ctx.lineWidth = 1;
      for (let x = 0; x < c.width; x += 80) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,c.height); ctx.stroke(); }
      for (let y = 0; y < c.height; y += 80) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y); ctx.stroke(); }
      // particles + connections
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},0.6)`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i+1).forEach(b => {
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle = `rgba(0,245,255,${0.12*(1-d/100)})`; ctx.lineWidth=0.5; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="home" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 24px 60px', position:'relative', overflow:'hidden', zIndex:2 }}>

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0 }} />

      {/* Scan line */}
      <div style={{ position:'absolute', left:0, right:0, height:'2px', background:'linear-gradient(90deg,transparent,rgba(0,245,255,0.4),transparent)', animation:'scan-bar 4s linear infinite', zIndex:3, pointerEvents:'none' }} />

      {/* Corner HUD brackets */}
      {[0,1,2,3].map(i => (
        <div key={i} style={{
          position:'absolute', width:48, height:48, zIndex:3, pointerEvents:'none',
          top:i<2?72:'auto', bottom:i>=2?16:'auto',
          left:i%2===0?16:'auto', right:i%2===1?16:'auto',
          borderTop:i<2?'1px solid rgba(0,245,255,0.35)':'none',
          borderBottom:i>=2?'1px solid rgba(0,245,255,0.35)':'none',
          borderLeft:i%2===0?'1px solid rgba(0,245,255,0.35)':'none',
          borderRight:i%2===1?'1px solid rgba(0,245,255,0.35)':'none',
        }} />
      ))}

      {/* System clock top-right */}
      <div style={{ position:'absolute', top:80, right:24, fontFamily:'Share Tech Mono,monospace', fontSize:9, color:'rgba(0,245,255,0.3)', letterSpacing:'0.1em', textAlign:'right', zIndex:4, lineHeight:1.9 }}>
        <div>SYS_CLOCK: {time}</div>
        <div>NODE: TCI-GORAKHPUR-001</div>
        <div style={{ color:'rgba(0,255,65,0.5)' }}>STATUS: [ACTIVE]</div>
      </div>

      {/* Left side status bar */}
      <div style={{ position:'absolute', left:20, top:'50%', transform:'translateY(-50%)', display:'flex', flexDirection:'column', gap:10, zIndex:4, pointerEvents:'none' }}>
        {[['SYS','ONLINE'],['ENC','AES-256'],['NET','SECURE'],['OSINT','READY'],['INTEL','LIVE']].map(([k,v]) => (
          <div key={k} style={{ fontFamily:'Share Tech Mono,monospace', fontSize:8, letterSpacing:'0.15em', color:'rgba(0,245,255,0.25)' }}>
            {k} · <span style={{ color:'rgba(0,245,255,0.6)' }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Right side status bar */}
      <div style={{ position:'absolute', right:20, top:'50%', transform:'translateY(-50%)', display:'flex', flexDirection:'column', gap:10, zIndex:4, pointerEvents:'none', alignItems:'flex-end' }}>
        {[['OSINT','MOD'],['RECON','ACT'],['FORENSIC','RDY'],['THREAT','LOW'],['SIGNAL','98%']].map(([k,v]) => (
          <div key={k} style={{ fontFamily:'Share Tech Mono,monospace', fontSize:8, letterSpacing:'0.15em', color:'rgba(0,245,255,0.25)' }}>
            <span style={{ color:'rgba(0,255,65,0.5)' }}>{k}</span> · {v}
          </div>
        ))}
      </div>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div style={{ position:'relative', zIndex:5, textAlign:'center', maxWidth:900, opacity: show?1:0, transform: show?'translateY(0)':'translateY(30px)', transition:'opacity 0.9s ease, transform 0.9s ease' }}>

        {/* Boot text */}
        <div style={{ fontFamily:'Share Tech Mono,monospace', fontSize:9, color:'rgba(0,245,255,0.3)', letterSpacing:'0.2em', marginBottom:24, lineHeight:1.9 }}>
          <div>{'>'} INITIALIZING TCI COMMAND INTERFACE...</div>
          <div>{'>'} OSINT ENGINE: <span style={{ color:'rgba(0,255,65,0.6)' }}>ONLINE ✓</span></div>
          <div>{'>'} ARMY CYBER CELL LINK: <span style={{ color:'rgba(0,255,65,0.6)' }}>ESTABLISHED ✓</span></div>
        </div>

        {/* Status badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:36, fontFamily:'Share Tech Mono,monospace', fontSize:9, letterSpacing:'0.2em', color:'#00FF41', border:'1px solid rgba(0,255,65,0.25)', background:'rgba(0,255,65,0.04)', padding:'6px 18px' }}>
          <span style={{ width:5, height:5, borderRadius:'50%', background:'#00FF41', display:'inline-block', boxShadow:'0 0 6px #00FF41', animation:'pulse-dot 1.4s ease-in-out infinite' }} />
          OPERATOR: ONLINE — INDIA ARMY CYBER CELL SUPPORT ACTIVE
          <span style={{ width:5, height:5, borderRadius:'50%', background:'#00FF41', display:'inline-block', boxShadow:'0 0 6px #00FF41', animation:'pulse-dot 1.4s ease-in-out infinite' }} />
        </div>

        {/* ── BIG PROFILE PHOTO — The Cyber India Logo ── */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:36 }}>
          <div style={{ position:'relative', width:220, height:220, display:'flex', alignItems:'center', justifyContent:'center' }}>
            {/* Tricolor rotating ring — saffron+white+green */}
            <div style={{
              position:'absolute', inset:-6, borderRadius:'50%',
              background:'conic-gradient(#FF9933 0deg 120deg, #ffffff 120deg 240deg, #138808 240deg 360deg)',
              animation:'orbit-spin 3s linear infinite',
              padding:3,
            }} />
            {/* White gap ring */}
            <div style={{ position:'absolute', inset:-2, borderRadius:'50%', background:'#030508' }} />
            {/* Outer cyber pulse ring */}
            <div style={{ position:'absolute', inset:-18, borderRadius:'50%', border:'1px solid rgba(0,245,255,0.25)', animation:'orbit-spin 10s linear infinite reverse' }} />
            <div style={{ position:'absolute', inset:-32, borderRadius:'50%', border:'1px solid rgba(255,153,51,0.15)', animation:'orbit-spin 18s linear infinite' }} />
            {/* Radar sweep */}
            <div style={{
              position:'absolute', inset:-6, borderRadius:'50%',
              background:'conic-gradient(rgba(0,245,255,0.15) 0deg 60deg, transparent 60deg 360deg)',
              animation:'orbit-spin 4s linear infinite',
            }} />
            {/* The photo — circular */}
            <img
              src="/profile.jpg"
              alt="The Cyber India"
              style={{
                width:220, height:220, objectFit:'cover',
                borderRadius:'50%',
                position:'relative', zIndex:2,
                boxShadow:'0 0 60px rgba(255,153,51,0.25), 0 0 30px rgba(0,245,255,0.15)',
              }}
              onError={e => {
                const t = e.currentTarget as HTMLImageElement;
                t.src = '/avatar.jpg';
              }}
            />
            {/* ID badge top */}
            <div style={{ position:'absolute', top:-44, left:'50%', transform:'translateX(-50%)', fontFamily:'Share Tech Mono', fontSize:8, color:'rgba(255,153,51,0.7)', letterSpacing:'0.15em', whiteSpace:'nowrap', border:'1px solid rgba(255,153,51,0.2)', padding:'3px 10px' }}>[ THE CYBER INDIA ]</div>
            {/* Clearance badge bottom */}
            <div style={{ position:'absolute', bottom:-44, left:'50%', transform:'translateX(-50%)', fontFamily:'Share Tech Mono', fontSize:8, color:'rgba(0,255,65,0.7)', letterSpacing:'0.15em', whiteSpace:'nowrap', border:'1px solid rgba(0,255,65,0.2)', padding:'3px 10px' }}>◉ CLEARANCE: ALPHA</div>
          </div>
        </div>

        {/* ── BIG TITLE ── */}
        <h1 style={{
          fontFamily:'Orbitron,monospace', fontWeight:900,
          fontSize:'clamp(40px,9vw,96px)',
          letterSpacing:'0.08em', lineHeight:1,
          background:'linear-gradient(135deg,#ffffff 0%,#00F5FF 50%,#00FF41 100%)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          margin:'0 0 8px', textShadow:'none',
          filter:'drop-shadow(0 0 20px rgba(0,245,255,0.3))',
        }}>
          THE CYBER
        </h1>
        <h1 style={{
          fontFamily:'Orbitron,monospace', fontWeight:900,
          fontSize:'clamp(40px,9vw,96px)',
          letterSpacing:'0.08em', lineHeight:1,
          background:'linear-gradient(135deg,#FF9933 0%,#ffffff 50%,#138808 100%)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          margin:'0 0 12px',
          filter:'drop-shadow(0 0 20px rgba(255,153,51,0.3))',
        }}>
          INDIA 🇮🇳
        </h1>

        {/* Subtitle */}
        <div style={{ fontFamily:'Share Tech Mono,monospace', fontSize:11, letterSpacing:'0.3em', color:'rgba(0,245,255,0.45)', marginBottom:28, lineHeight:1.6 }}>
          {'// '}CYBER INTELLIGENCE OPERATIONS — INDIA{'  ·  '}FOUNDED BY HARIOM SINGH
        </div>

        {/* ── TYPEWRITER ROLE ── */}
        <div style={{ fontFamily:'Share Tech Mono,monospace', fontSize:'clamp(13px,2.5vw,18px)', letterSpacing:'0.18em', color:'#00F5FF', marginBottom:44, minHeight:28 }}>
          <span style={{ color:'rgba(0,245,255,0.4)' }}>{'> ACTIVE_ROLE: '}</span>
          {typed}
          <span style={{ animation:'blink 1s step-end infinite', color:'#00F5FF' }}>█</span>
        </div>

        {/* ── STATS ── */}
        <div style={{ display:'flex', gap:2, justifyContent:'center', marginBottom:44, flexWrap:'wrap' }}>
          {[['500+','LEA PARTNERS'],['50+','CASES SOLVED'],['3','INTEL TOOLS'],['100%','ARMY VERIFIED']].map(([v,l]) => (
            <div key={l} style={{ padding:'14px 22px', border:'1px solid rgba(0,245,255,0.12)', background:'rgba(0,245,255,0.03)', minWidth:110, textAlign:'center' }}>
              <div style={{ fontFamily:'Orbitron,monospace', fontWeight:900, fontSize:22, color:'#00F5FF', letterSpacing:'0.05em' }}>{v}</div>
              <div style={{ fontFamily:'Share Tech Mono,monospace', fontSize:8, color:'rgba(0,245,255,0.4)', letterSpacing:'0.15em', marginTop:3 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <button
            onClick={() => document.getElementById('capabilities')?.scrollIntoView({behavior:'smooth'})}
            style={{ fontFamily:'Share Tech Mono,monospace', fontSize:11, letterSpacing:'0.15em', fontWeight:700, padding:'16px 40px', background:'#00F5FF', color:'#000508', border:'none', cursor:'pointer', transition:'all 0.2s', textTransform:'uppercase', boxShadow:'0 0 20px rgba(0,245,255,0.3)' }}>
            [ ENTER SYSTEM ]
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
            style={{ fontFamily:'Share Tech Mono,monospace', fontSize:11, letterSpacing:'0.15em', padding:'16px 40px', background:'transparent', color:'#00FF41', border:'1px solid rgba(0,255,65,0.4)', cursor:'pointer', transition:'all 0.2s' }}>
            [ ESTABLISH CONTACT ]
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', fontFamily:'Share Tech Mono,monospace', fontSize:8, letterSpacing:'0.2em', color:'rgba(0,245,255,0.2)', zIndex:5, animation:'flicker 3s infinite' }}>
        ▼ SCROLL TO ACCESS INTEL ▼
      </div>

      <style>{`
        @keyframes scan-bar  { 0%{top:10%}  100%{top:95%} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
        @keyframes orbit-spin{ 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes flicker   { 0%,100%{opacity:0.2} 50%{opacity:0.5} }
        @keyframes fade-in-up{ from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
