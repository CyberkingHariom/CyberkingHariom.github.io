'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'HOME', icon: '⚡' },
  { href: '#cyberwar', label: 'CYBER WAR', icon: '⚔️' },
  { href: '#about', label: 'PROFILE', icon: '👤' },
  { href: '#work', label: 'CAPABILITIES', icon: '🛡️' },
  { href: '#services', label: 'SERVICES', icon: '📑' },
  { href: '#tools', label: 'TOOLS', icon: '🛠️' },
  { href: '#projects', label: 'BUILDS', icon: '📁' },
  { href: '#casework', label: 'CASEWORK', icon: '🗂️' },
  { href: '#team', label: 'TCI NETWORK', icon: '👥' },
  { href: '#india', label: 'DEFENSE 🇮🇳', icon: '🇮🇳' },
  { href: '#contact', label: 'CONTACT', icon: '📡' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(4, 8, 14, 0.92)'
            : 'linear-gradient(180deg, rgba(3, 6, 9, 0.95) 0%, rgba(3, 6, 9, 0) 100%)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 245, 255, 0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Military Tactical Callout */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center font-orbitron font-black text-sm shrink-0 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(255, 0, 60, 0.15))',
                border: '1.5px solid rgba(0, 245, 255, 0.4)',
                boxShadow: '0 0 15px rgba(0, 245, 255, 0.25)',
              }}
            >
              <span className="text-white text-base">🇮🇳</span>
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#00FF41] status-active" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-orbitron font-black text-sm sm:text-base tracking-widest text-white group-hover:text-[#00F5FF] transition-colors">
                  THE CYBER INDIA
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-[rgba(255,153,51,0.15)] text-[#FF9933] border border-[rgba(255,153,51,0.3)]">
                  DEFENSE GRADE
                </span>
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#8B949E] flex items-center gap-2">
                <span className="text-[#00FF41]">● DEFCON 1 READY</span>
                <span className="hidden sm:inline text-[#484F58]">|</span>
                <span className="hidden sm:inline text-[#FF003C]">THREAT SHIELD ACTIVE</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-2.5 py-1.5 text-xs font-rajdhani font-bold tracking-wider rounded transition-all flex items-center gap-1.5 relative"
                  style={{
                    color: isActive ? '#00F5FF' : '#8B949E',
                    background: isActive ? 'rgba(0, 245, 255, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(0, 245, 255, 0.3)' : '1px solid transparent',
                    textShadow: isActive ? '0 0 12px rgba(0, 245, 255, 0.5)' : 'none',
                  }}
                >
                  <span className="text-[11px]">{link.icon}</span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2 font-rajdhani font-bold text-xs tracking-widest rounded uppercase transition-all"
              style={{
                background: 'linear-gradient(90deg, rgba(255,0,60,0.15), rgba(0,245,255,0.15))',
                border: '1px solid rgba(0, 245, 255, 0.4)',
                color: '#00F5FF',
                boxShadow: '0 0 15px rgba(0, 245, 255, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 245, 255, 0.4)';
                e.currentTarget.style.borderColor = '#00F5FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.4)';
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
              <span>[ SECURE CHANNEL ]</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-[rgba(0,245,255,0.3)] bg-[rgba(10,16,24,0.7)] text-[#00F5FF]"
              aria-label="Toggle Navigation Menu"
            >
              <span
                className="w-6 h-0.5 bg-[#00F5FF] transition-all duration-300"
                style={{
                  transform: mobileOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none',
                }}
              />
              <span
                className="w-6 h-0.5 bg-[#FF003C] transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? 'scaleX(0)' : 'none',
                }}
              />
              <span
                className="w-6 h-0.5 bg-[#00FF41] transition-all duration-300"
                style={{
                  transform: mobileOpen ? 'rotate(-45deg) translate(4px, -5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Tactical Mobile Menu Drawer */}
      <div
        className="fixed inset-0 z-40 xl:hidden flex flex-col pt-20 pb-8 px-5 transition-all duration-300 overflow-y-auto"
        style={{
          background: 'rgba(3, 6, 9, 0.98)',
          backdropFilter: 'blur(20px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        {/* Subtle grid in drawer */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        {/* Tactical Header within Drawer */}
        <div className="relative z-10 border-b border-[rgba(0,245,255,0.15)] pb-4 mb-4 flex items-center justify-between">
          <div>
            <div className="font-orbitron font-bold text-sm text-white">
              TACTICAL NAVIGATION HUD
            </div>
            <div className="font-mono text-[11px] text-[#00FF41]">
              STATUS: ONLINE // ALL CHANNELS READY
            </div>
          </div>
          <span className="text-xl">🇮🇳</span>
        </div>

        {/* Mobile Links List */}
        <div className="relative z-10 flex flex-col gap-2 my-auto">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg font-rajdhani font-bold text-base transition-all"
                style={{
                  background: isActive ? 'rgba(0, 245, 255, 0.12)' : 'rgba(10, 16, 24, 0.6)',
                  border: isActive ? '1px solid rgba(0, 245, 255, 0.4)' : '1px solid rgba(0, 245, 255, 0.08)',
                  color: isActive ? '#00F5FF' : '#F0F6FC',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <span className="font-mono text-xs text-[#8B949E]">
                  {isActive ? '● ACTIVE' : '→'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Drawer Bottom Contacts */}
        <div className="relative z-10 pt-4 mt-4 border-t border-[rgba(0,245,255,0.15)] space-y-2">
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full py-3.5 rounded-lg font-orbitron font-bold text-xs tracking-wider text-center text-black bg-[#00F5FF] shadow-[0_0_20px_rgba(0,245,255,0.4)]"
          >
            🛡️ OPEN SECURE TRANSMISSION
          </button>
          <a
            href="https://wa.me/918471071945"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-lg font-mono text-xs tracking-wider text-center block text-[#00FF41] border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)]"
          >
            WHATSAPP DIRECT: +91 84710 71945 ↗
          </a>
        </div>
      </div>
    </>
  );
}
