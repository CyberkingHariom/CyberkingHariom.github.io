import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: '#05070A' }}>
      <div className="noise" />

      {/* Header */}
      <nav className="border-b px-6 py-4 flex items-center justify-between"
        style={{ borderColor: 'rgba(0,245,255,0.1)', background: 'rgba(8,13,18,0.95)' }}>
        <Link href="/" className="font-orbitron font-black text-sm" style={{ color: '#00F5FF' }}>
          THE CYBER INDIA 🇮🇳
        </Link>
        <Link href="/" className="font-mono text-xs" style={{ color: '#4A6374' }}>
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="font-mono text-xs mb-4" style={{ color: '#4A6374' }}>
          // LEGAL — RESPONSIBLE USE
        </div>
        <h1 className="font-orbitron font-black text-3xl mb-8" style={{ color: '#FFFFFF' }}>
          RESPONSIBLE USE &{' '}
          <span style={{ color: '#00F5FF' }}>DISCLAIMER</span>
        </h1>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#7FB3C8' }}>
          <section>
            <h2 className="font-orbitron font-bold text-base mb-3" style={{ color: '#FFFFFF' }}>
              Platform Description
            </h2>
            <p>
              The Cyber India is an independent personal cybersecurity and technology platform operated by
              Hariom Singh. This platform is not affiliated with, endorsed by, or connected to any government
              organization, law enforcement agency, military, or official body.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron font-bold text-base mb-3" style={{ color: '#FFFFFF' }}>
              Tools & Information
            </h2>
            <p>
              Tools, research, information, and educational content provided on The Cyber India are made
              available for:
            </p>
            <ul className="mt-3 space-y-1 ml-4">
              {[
                'Educational and research purposes',
                'Authorized defensive security purposes',
                'Law enforcement and authorized investigation (where explicitly stated)',
                'Cybersecurity awareness and public education',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: '#00FF41' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron font-bold text-base mb-3" style={{ color: '#FFFFFF' }}>
              User Responsibility
            </h2>
            <p>
              Users are solely responsible for complying with all applicable laws, regulations, and obtaining
              appropriate authorization before using any tools, information, or techniques described on this platform.
            </p>
            <p className="mt-3">
              Unauthorized use of any tools, techniques or information for illegal purposes, unauthorized access,
              privacy violations, or any harmful activity is strictly prohibited. The platform operator accepts
              no liability for misuse.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron font-bold text-base mb-3" style={{ color: '#FF6B35' }}>
              Prohibited Uses
            </h2>
            <ul className="space-y-1 ml-4">
              {[
                'Unauthorized access to systems, networks, or accounts',
                'Credential theft or phishing',
                'Malware development or deployment',
                'Stalking, harassment, or privacy violations',
                'Any activity prohibited by Indian IT Act 2000 or applicable law',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: '#FF6B35' }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron font-bold text-base mb-3" style={{ color: '#FFFFFF' }}>
              Contact
            </h2>
            <p>
              For questions about responsible use, tool access authorization, or collaboration inquiries:
            </p>
            <div className="mt-3 font-mono">
              <p style={{ color: '#00F5FF' }}>hariomsingh2706@gmail.com</p>
            </div>
          </section>

          <div
            className="p-4 rounded-lg"
            style={{ border: '1px solid rgba(255,153,51,0.2)', background: 'rgba(255,153,51,0.03)' }}
          >
            <p className="font-mono text-xs" style={{ color: '#FF9933' }}>
              The Cyber India — An Independent Cybersecurity & Intelligence Platform
            </p>
            <p className="mt-1 text-xs" style={{ color: '#4A6374' }}>
              Inspired by India's commitment to national and digital security. Not a government or law enforcement entity.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
