'use client';

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#work', label: 'WORK' },
  { href: '#services', label: 'SERVICES' },
  { href: '#tools', label: 'TOOLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#casework', label: 'CASEWORK' },
  { href: '#team', label: 'TEAM' },
  { href: '#news', label: 'NEWS' },
  { href: '#contact', label: 'CONTACT' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', url: 'https://instagram.com/thecyberindia' },
  { label: 'Telegram', url: '#' },
  { label: 'X', url: '#' },
  { label: 'GitHub', url: 'https://github.com/mrcyb4r' },
  { label: 'YouTube', url: 'https://youtube.com/@thecyberindia' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{ background: '#05070A' }}>
      {/* Top cyber line */}
      <div className="cyber-line mb-12 mx-4 sm:mx-8" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Logo + tagline */}
        <div className="text-center mb-10">
          <div className="text-3xl mb-2" style={{ color: '#FF9933' }}>🇮🇳</div>
          <div
            className="font-orbitron font-black text-2xl mb-2"
            style={{ color: '#00F5FF', textShadow: '0 0 20px rgba(0,245,255,0.3)' }}
          >
            THE CYBER INDIA
          </div>
          <p className="font-mono text-xs tracking-widest" style={{ color: '#4A6374' }}>
            Cyber Intelligence • OSINT • Investigation
          </p>
          <p className="font-mono text-xs tracking-widest" style={{ color: '#4A6374' }}>
            Security Research • Cyber Awareness
          </p>
        </div>

        <div className="cyber-line mb-10" />

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-xs tracking-widest transition-colors"
              style={{ color: '#4A6374' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00F5FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6374')}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="cyber-line mb-10" />

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest transition-colors"
              style={{ color: '#4A6374' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00F5FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6374')}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Disclaimer link */}
        <div className="text-center mb-6">
          <a
            href="/disclaimer"
            className="font-mono text-xs transition-colors"
            style={{ color: '#4A6374' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#7FB3C8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#4A6374')}
          >
            Responsible Use & Disclaimer
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="font-mono text-xs" style={{ color: '#4A6374' }}>
            © 2026 The Cyber India &nbsp;·&nbsp; Hariom Singh
          </p>
          <p className="font-mono text-xs" style={{ color: '#4A6374' }}>
            An Independent Cybersecurity & Intelligence Platform
          </p>
          <div className="mt-4 font-orbitron font-bold text-sm" style={{ color: '#FF9933' }}>
            JAI HIND 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
}
