'use client';
import { useState } from 'react';

const SERVICES = [
  {
    id:'01', code:'SVC-CYBERCELL',
    icon:'🛡️',
    title:'CYBER CELL SUPPORT',
    short:'Sarkari Cyber Cell aur Police ko technical help — FIR analysis, suspect tracing, digital evidence collection.',
    detail:'Har government cyber unit ko full technical backbone diya jaata hai. Crime report analysis, suspect digital footprint, social media evidence preservation, court-ready reports. Army Cyber Cell ke liye exclusive classified operations.',
    tags:['FIR Analysis','Evidence Preservation','Court Reports','Army Classified'],
    color:'#FF9933',
    verify:'ARMY TECH TEAM VERIFIED',
    access:'GOVERNMENT / POLICE ONLY',
  },
  {
    id:'02', code:'SVC-OSINT',
    icon:'🔍',
    title:'OSINT INTELLIGENCE',
    short:'Phone, email, social media — poori digital identity track karo. 100+ sources se deep investigation.',
    detail:'Open source intelligence using phone numbers, emails, usernames, crypto wallets, and IP addresses. Entity relationship maps, breach data analysis, full suspect dossiers. Sikhna chahte hain? Contact karo — Training available.',
    tags:['Entity Mapping','Breach Analysis','Social Correlation','Training Available'],
    color:'#00F5FF',
    verify:'LEARN WITH US',
    access:'TRAINING · INVESTIGATION',
  },
  {
    id:'03', code:'SVC-CYBERCRIME',
    icon:'⚖️',
    title:'CYBERCRIME INVESTIGATION',
    short:'Online fraud, scam, harassment, hacking — poora case investigate karein. Victim help & legal guidance.',
    detail:'Cybercrime victims ke liye complete investigation support. Fraudster profiling, transaction tracing, digital forensics, FIR drafting assistance. Sikhna chahte hain? Humare saath aao — hands-on training milega.',
    tags:['Fraud Tracing','Victim Support','FIR Help','Hands-on Training'],
    color:'#00FF41',
    verify:'LEARN + REPORT',
    access:'PUBLIC · TRAINING',
  },
  {
    id:'04', code:'SVC-SPYWARE',
    icon:'🕵️',
    title:'SURVEILLANCE TOOLS',
    short:'Custom spy tools, surveillance apps, monitoring software — SIRF Army & verified Cyber Police ke liye.',
    detail:'Defense-grade surveillance applications, real-time monitoring tools, and intelligence platforms. Ye service sirf India Army Cyber Cell aur verified Cyber Police units ke liye available hai. Har requester ka Army Tech Team verification mandatory hai.',
    tags:['Army Exclusive','Police Verified','Custom Built','Classified'],
    color:'#FF2244',
    verify:'⚠️ ARMY TECH TEAM VERIFIED ONLY',
    access:'ARMY · CYBER POLICE ONLY',
  },
  {
    id:'05', code:'SVC-ADMIN',
    icon:'🖥️',
    title:'ADMIN / NORMAL HELP',
    short:'Normal admin, kisi bhi cyber problem mein phasa hai? Koi bhi aa sakta hai — hum help karenge.',
    detail:'Aam aadmi ho ya sarkari officer — agar koi cyber problem hai (hack, fraud, account recovery, online harassment) to seedha contact karo. No judgment. Full support.',
    tags:['Account Recovery','Online Fraud','Harassment Help','Free Guidance'],
    color:'#AA88FF',
    verify:'OPEN FOR ALL',
    access:'EVERYONE WELCOME',
  },
  {
    id:'06', code:'SVC-IPFORENSIC',
    icon:'🌐',
    title:'IP FORENSICS & STUN',
    short:'VPN ke peeche chuppe suspect ka real IP nikalo. STUN bypass, CDR/IPDR analysis, network forensics.',
    detail:'Proprietary STUN-based IP unmasking technique — VPN, Tor, proxy ke peeche ka real IP detect karna. CDR/IPDR telecom intelligence, network path tracing, full technical evidence for court.',
    tags:['STUN Bypass','VPN Detection','CDR/IPDR','Network Forensics'],
    color:'#FFD700',
    verify:'TECHNICAL EXCELLENCE',
    access:'LEA · INVESTIGATION',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="services" style={{ padding:'120px 24px', background:'#050A10', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ fontFamily:'Share Tech Mono', fontSize:9, letterSpacing:'0.2em', color:'rgba(0,245,255,0.4)', marginBottom:8 }}>{'// 02 — SERVICES & OPERATIONS'}</div>
        <h2 style={{ fontFamily:'Orbitron,monospace', fontWeight:900, fontSize:'clamp(22px,4vw,40px)', color:'#F0F6FC', marginBottom:12, letterSpacing:'0.05em' }}>
          OUR <span style={{ color:'#00F5FF' }}>SERVICES</span>
        </h2>
        <p style={{ fontFamily:'Share Tech Mono', fontSize:10, letterSpacing:'0.15em', color:'rgba(0,245,255,0.4)', marginBottom:56 }}>
          CYBER CELL · OSINT · CYBERCRIME INVESTIGATION · SURVEILLANCE TOOLS · ADMIN HELP
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:3 }}>
          {SERVICES.map(s => (
            <div key={s.id}
              onClick={() => setActive(active === s.id ? null : s.id)}
              style={{
                padding:'32px 28px', cursor:'pointer', transition:'all 0.35s',
                background: active === s.id ? `${s.color}08` : 'rgba(0,5,8,0.7)',
                border:`1px solid ${active === s.id ? s.color+'50' : 'rgba(0,245,255,0.1)'}`,
                position:'relative', overflow:'hidden',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = s.color+'35'; }}
              onMouseLeave={e => { if(active!==s.id)(e.currentTarget as HTMLDivElement).style.borderColor='rgba(0,245,255,0.1)'; }}
            >
              {/* Top bar */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${s.color},transparent)`, opacity: active===s.id?1:0.3 }} />

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                <div style={{ fontSize:28 }}>{s.icon}</div>
                <div style={{ fontFamily:'Orbitron', fontSize:24, fontWeight:900, color:`${s.color}12`, letterSpacing:'-0.02em' }}>{s.id}</div>
              </div>

              <div style={{ fontFamily:'Share Tech Mono', fontSize:8, color:`${s.color}60`, letterSpacing:'0.15em', marginBottom:6 }}>[{s.code}]</div>
              <h3 style={{ fontFamily:'Orbitron', fontWeight:900, fontSize:13, color:s.color, letterSpacing:'0.1em', marginBottom:12 }}>{s.title}</h3>
              <div style={{ width:32, height:2, background:s.color, marginBottom:14, boxShadow:`0 0 8px ${s.color}` }} />

              <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:13, lineHeight:1.7, color:'rgba(240,246,252,0.55)', marginBottom:16 }}>
                {active === s.id ? s.detail : s.short}
              </p>

              {active === s.id && (
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:16 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontFamily:'Share Tech Mono', fontSize:8, letterSpacing:'0.1em', padding:'4px 10px', color:`${s.color}90`, border:`1px solid ${s.color}25` }}>{t}</span>
                  ))}
                </div>
              )}

              {/* Access badge */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8 }}>
                <span style={{ fontFamily:'Share Tech Mono', fontSize:8, color:`${s.color}70`, letterSpacing:'0.1em', border:`1px solid ${s.color}20`, padding:'3px 8px' }}>{s.access}</span>
                <span style={{ fontFamily:'Share Tech Mono', fontSize:8, color:'rgba(0,245,255,0.35)', letterSpacing:'0.08em' }}>
                  {active === s.id ? '▲ CLOSE' : '▼ MORE'}
                </span>
              </div>

              <div style={{ marginTop:10, fontFamily:'Share Tech Mono', fontSize:8, color:`${s.color}50`, letterSpacing:'0.1em' }}>{s.verify}</div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{ marginTop:64, textAlign:'center', border:'1px solid rgba(0,245,255,0.15)', padding:'40px 24px', background:'rgba(0,5,8,0.6)', position:'relative' }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,transparent,#FF9933,#fff,#138808,transparent)' }} />
          <div style={{ fontFamily:'Share Tech Mono', fontSize:9, letterSpacing:'0.3em', color:'rgba(255,153,51,0.6)', marginBottom:12 }}>🇮🇳 VERIFIED OPERATIONS ONLY</div>
          <h3 style={{ fontFamily:'Orbitron', fontWeight:900, fontSize:'clamp(16px,3vw,28px)', color:'#F0F6FC', marginBottom:8, letterSpacing:'0.05em' }}>
            Sikhna Chahte Hain Ya Help Chahiye?
          </h3>
          <p style={{ fontFamily:'Space Grotesk', fontSize:14, color:'rgba(240,246,252,0.5)', marginBottom:24, maxWidth:500, margin:'0 auto 24px' }}>
            Cybercrime OSINT ya Investigation sikhne ke liye contact karo. Spy tools sirf Army Tech Team verified units ko.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              style={{ fontFamily:'Share Tech Mono', fontSize:11, letterSpacing:'0.15em', padding:'14px 36px', background:'#FF9933', color:'#000', border:'none', cursor:'pointer', fontWeight:700 }}>
              [ CONTACT US ]
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              style={{ fontFamily:'Share Tech Mono', fontSize:11, letterSpacing:'0.15em', padding:'14px 36px', background:'transparent', color:'#00FF41', border:'1px solid rgba(0,255,65,0.4)', cursor:'pointer' }}>
              [ LEARN OSINT ]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
