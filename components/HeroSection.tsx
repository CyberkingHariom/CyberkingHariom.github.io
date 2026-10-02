'use client';

import { useEffect, useState } from 'react';
import ParticleField from './ParticleField';

const TYPING_ROLES = [
  'CYBERCRIME INVESTIGATOR & OSINT SPECIALIST',
  'DEFENSE-GRADE CYBER INTELLIGENCE',
  'IP FORENSICS & STUN BYPASS ANALYST',
  'NATIONAL CYBER DEFENSE AWARENESS',
  'LAW ENFORCEMENT INVESTIGATION TOOLS'
];

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (typedText.length < current.length) {
        timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length - 1)), 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden cyber-grid pt-24 pb-16 px-4"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #08111A 0%, #030609 70%)',
      }}
    >
      {/* Dracula Red & Toxic Green Ambient Flares Flying in Background */}
      <div
        className="dracula-flare-red"
        style={{
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          top: '10%',
          left: '5%',
        }}
      />
      <div
        className="dracula-flare-green"
        style={{
          width: 'min(550px, 90vw)',
          height: 'min(550px, 90vw)',
          bottom: '10%',
          right: '5%',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 'min(400px, 80vw)',
          height: 'min(400px, 80vw)',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Particle Canvas */}
      <ParticleField />

      {/* Scanline */}
      <div className="scanline" />

      {/* Military Radar HUD Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        {[260, 440, 620, 820].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[rgba(0,245,255,0.12)]"
            style={{
              width: `min(${size}px, 95vw)`,
              height: `min(${size}px, 95vw)`,
              boxShadow: i === 0 ? '0 0 30px rgba(0, 245, 255, 0.05)' : 'none',
            }}
          />
        ))}

        {/* Tactical Crosshair Axis */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,245,255,0.15)] to-transparent" />
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[rgba(0,245,255,0.15)] to-transparent" />

        {/* 360-degree Conic Radar Sweep */}
        <div
          className="absolute rounded-full"
          style={{
            width: 'min(620px, 90vw)',
            height: 'min(620px, 90vw)',
            background: 'conic-gradient(from 0deg, rgba(0,255,65,0.12) 0deg, rgba(255,0,60,0.08) 40deg, transparent 90deg, transparent 360deg)',
            animation: 'radar-sweep 8s linear infinite',
          }}
        />
      </div>

      {/* Main Tactical Hero Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Indian Army / Defense Grade Crest Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-5 py-2 rounded-full mb-6 font-mono text-[11px] sm:text-xs tracking-widest border border-[rgba(255,153,51,0.4)] bg-[rgba(255,153,51,0.06)] shadow-[0_0_20px_rgba(255,153,51,0.15)] max-w-full">
          <span className="flex items-center gap-1.5 font-bold text-[#FF9933]">
            <span>🇮🇳</span>
            <span>INDIAN ARMY & DEFENSE INSPIRED</span>
          </span>
          <span className="text-[#484F58] hidden sm:inline">•</span>
          <span className="text-[#00FF41] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] status-active" />
            NATIONAL CYBER SHIELD
          </span>
        </div>

        {/* Main Title with Dracula Red / Electric Green / Saffron Accents */}
        <h1 className="font-orbitron font-black mb-3 tracking-tight leading-none text-3xl sm:text-5xl md:text-7xl">
          <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">THE CYBER</span>{' '}
          <span className="bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#00FF41] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,153,51,0.5)]">
            INDIA
          </span>
        </h1>

        {/* Sub-heading Tactical Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-8 sm:w-16 bg-[#FF003C]" />
          <span className="font-mono text-xs sm:text-sm text-[#FF003C] tracking-widest font-semibold uppercase">
            [ CYBER INTELLIGENCE COMMAND · DEORIA, UP ]
          </span>
          <div className="h-[1px] w-8 sm:w-16 bg-[#00FF41]" />
        </div>

        {/* Typing Role Line */}
        <div
          className="font-rajdhani font-bold text-lg sm:text-2xl md:text-3xl mb-6 min-h-[2.4rem] flex items-center justify-center gap-1 text-[#00F5FF]"
          style={{ textShadow: '0 0 20px rgba(0,245,255,0.6)' }}
        >
          <span>{typedText}</span>
          <span className="w-2 h-6 bg-[#00F5FF] animate-pulse inline-block ml-1" />
        </div>

        {/* Mission Statement */}
        <p className="max-w-3xl mx-auto mb-8 text-sm sm:text-base md:text-lg text-[#8B949E] font-rajdhani font-medium leading-relaxed px-2">
          An elite independent digital platform dedicated to <strong className="text-white">OSINT</strong>,{' '}
          <strong className="text-[#00FF41]">Cybercrime Investigation</strong>,{' '}
          <strong className="text-[#00F5FF]">IP Forensics</strong>, and active intelligence support for Law Enforcement Agencies across India.
        </p>

        {/* Tactical Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => handleScroll('cyberwar')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, rgba(255,0,60,0.25), rgba(255,0,60,0.08))',
              border: '1.5px solid #FF003C',
              color: '#FF003C',
              boxShadow: '0 0 25px rgba(255,0,60,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FF003C';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(255,0,60,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,0,60,0.25), rgba(255,0,60,0.08))';
              e.currentTarget.style.color = '#FF003C';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,0,60,0.35)';
            }}
          >
            <span>⚔️</span>
            <span>CYBER WAR DEFENSE SIM</span>
          </button>

          <button
            onClick={() => handleScroll('tools')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,65,0.2), rgba(0,255,65,0.05))',
              border: '1.5px solid #00FF41',
              color: '#00FF41',
              boxShadow: '0 0 25px rgba(0,255,65,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00FF41';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0,255,65,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,255,65,0.2), rgba(0,255,65,0.05))';
              e.currentTarget.style.color = '#00FF41';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0,255,65,0.25)';
            }}
          >
            <span>🛠️</span>
            <span>VIEW WEAPONIZED TOOLS</span>
          </button>

          <button
            onClick={() => handleScroll('contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              background: 'rgba(0,245,255,0.1)',
              border: '1.5px solid #00F5FF',
              color: '#00F5FF',
              boxShadow: '0 0 20px rgba(0,245,255,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00F5FF';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0,245,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,245,255,0.1)';
              e.currentTarget.style.color = '#00F5FF';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,255,0.2)';
            }}
          >
            <span>🛡️</span>
            <span>CONTACT INVESTIGATOR</span>
          </button>
        </div>

        {/* Operational Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {[
            { num: '2+', label: 'POLICE CASES SOLVED', tag: 'Ghaziabad & Deoria', color: '#00FF41' },
            { num: '3+', label: 'INVESTIGATION TOOLS', tag: 'VAJAR Suite Deployed', color: '#00F5FF' },
            { num: '5', label: 'CYBER CERTIFICATIONS', tag: 'DCCI / DCJSP / Python', color: '#FF9933' },
            { num: '1', label: 'LEA INTERNSHIP', tag: 'Defronix Cyber Security', color: '#FF003C' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="tactical-border rounded-lg p-3 sm:p-4 text-center"
            >
              <div
                className="font-orbitron font-black text-2xl sm:text-3xl mb-0.5"
                style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}60` }}
              >
                {stat.num}
              </div>
              <div className="font-rajdhani font-bold text-xs sm:text-sm text-white">
                {stat.label}
              </div>
              <div className="font-mono text-[10px] text-[#8B949E] mt-0.5">
                {stat.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downward Navigation Indicator */}
      <div className="relative mt-8 flex flex-col items-center gap-1.5 opacity-70">
        <span className="font-mono text-[10px] tracking-widest text-[#00F5FF]">ENTER INTELLIGENCE GRID</span>
        <div className="w-4 h-7 rounded-full border border-[rgba(0,245,255,0.4)] flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#00F5FF] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
