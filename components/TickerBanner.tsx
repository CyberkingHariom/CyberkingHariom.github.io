'use client';

const ITEMS = [
  '🇮🇳 JAI HIND',
  '⚡ ARMY CYBER CELL SUPPORT ACTIVE',
  '🔍 OSINT OPERATIONS: ONLINE',
  '🛡️ PROTECTING INDIA THROUGH CYBER INTELLIGENCE',
  '📡 IP FORENSICS & STUN ANALYSIS: ENGAGED',
  '🔴 CYBERCRIME INVESTIGATION: IN PROGRESS',
  '💻 VAJAR INTEL BOT: DEPLOYED ACROSS CYBER CELLS',
  '🌐 CDR/IPDR ANALYSIS: INSTANT INTELLIGENCE',
  '⚔️ CYBER WAR READINESS: ALPHA CLEARANCE',
  '🟢 SYSTEM STATUS: FULLY OPERATIONAL',
];

export default function TickerBanner() {
  const text = ITEMS.join('    ◈    ');
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 500,
      background: 'rgba(0,5,8,0.9)',
      borderTop: '1px solid rgba(0,245,255,0.15)',
      padding: '6px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 0,
        whiteSpace: 'nowrap',
        animation: 'ticker-scroll 60s linear infinite',
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: 10, letterSpacing: '0.12em',
        color: 'rgba(0,245,255,0.7)',
      }}>
        <span>{text}    ◈    </span>
        <span>{text}    ◈    </span>
      </div>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
