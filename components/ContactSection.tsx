'use client';

import { useState } from 'react';

const CONTACT_REASONS = [
  'Law Enforcement Casework Requisition',
  'Police Cyber Cell Tool Access',
  'OSINT Investigation Inquiry',
  'University / College Cyber Keynote',
  'Security Research Collaboration',
  'General Direct Inquiry'
];

const CONTACT_INFO = [
  { icon: '📧', label: 'OFFICIAL EMAIL', value: 'thecyberindia.official@gmail.com', link: 'mailto:thecyberindia.official@gmail.com', color: '#00F5FF' },
  { icon: '📱', label: 'PHONE / WHATSAPP DIRECT', value: '+91 84710 71945', link: 'https://wa.me/918471071945', color: '#00FF41' },
  { icon: '🌐', label: 'CENTRAL PLATFORM', value: 'thecyberindia.me', link: 'https://thecyberindia.me', color: '#FF9933' },
];

const SOCIAL_LINKS = [
  { icon: '🔗', label: 'LinkedIn', url: 'https://linkedin.com/in/hariom-singh-' },
  { icon: '⌥', label: 'GitHub', url: 'https://github.com/thecyberindia' },
  { icon: '▶', label: 'YouTube', url: 'https://youtube.com/@thecyberindia' },
  { icon: '📸', label: 'Instagram', url: 'https://instagram.com/thecyberindia' },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: 'Law Enforcement Casework Requisition',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#030609' }}>
      {/* Dracula Red & Green Background Atmospheric Aura */}
      <div
        className="dracula-flare-red"
        style={{ width: '420px', height: '420px', top: '10%', right: '0%' }}
      />
      <div
        className="dracula-flare-green"
        style={{ width: '420px', height: '420px', bottom: '10%', left: '0%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-widest text-[#00F5FF] border border-[rgba(0,245,255,0.3)] bg-[rgba(0,245,255,0.06)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
            // 09 — SECURE COMM LINK
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white">
            OPEN A{' '}
            <span className="text-[#00F5FF] text-glow-cyan">SECURE CHANNEL</span>
          </h2>
          <p className="font-rajdhani font-semibold text-sm sm:text-lg text-[#8B949E] mt-3 max-w-2xl mx-auto">
            Directly connect for police cyber casework support, tool access, technical inquiries, or institutional collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tactical Secure Message Form */}
          <div className="lg:col-span-7">
            <div className="tactical-border rounded-xl p-6 sm:p-8 bg-[rgba(6,10,16,0.92)]">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[rgba(0,255,65,0.2)] border-2 border-[#00FF41] text-[#00FF41] flex items-center justify-center text-3xl mb-4">
                    ✓
                  </div>
                  <div className="font-orbitron font-bold text-lg text-[#00FF41] mb-2">
                    TRANSMISSION SUCCESSFUL
                  </div>
                  <p className="font-rajdhani text-sm text-[#8B949E] max-w-sm mb-6">
                    Your packet has been received securely. Hariom Singh will review and reply within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', reason: 'General Direct Inquiry', message: '' }); }}
                    className="px-6 py-2.5 rounded font-mono text-xs text-[#00F5FF] border border-[rgba(0,245,255,0.3)] bg-[rgba(0,245,255,0.08)]"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-rajdhani">
                  {/* Terminal Status Bar */}
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-[rgba(0,245,255,0.15)] font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF003C]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF9933]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
                      <span className="text-[#8B949E] ml-1">COMM_PROTOCOL::TLS_SECURE</span>
                    </div>
                    <span className="text-[#00FF41] font-bold">READY</span>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#8B949E] block mb-1.5">
                      // YOUR FULL NAME / DEPARTMENT
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Officer / Investigator Name"
                      className="w-full px-4 py-3 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#8B949E] block mb-1.5">
                      // OFFICIAL OR DIRECT EMAIL
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="investigator@agency.gov.in / name@domain.com"
                      className="w-full px-4 py-3 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#8B949E] block mb-1.5">
                      // MISSION / INQUIRY REASON
                    </label>
                    <select
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm font-mono text-white bg-[rgba(6,10,16,0.95)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF]"
                    >
                      {CONTACT_REASONS.map((r) => (
                        <option key={r} value={r} className="bg-[#050A10]">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#8B949E] block mb-1.5">
                      // TRANSMISSION BRIEF & CASE DETAILS
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline your investigation requirement, target context, or project specs..."
                      className="w-full px-4 py-3 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-lg font-orbitron font-bold text-xs tracking-wider uppercase text-black bg-[#00F5FF] shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all"
                  >
                    {sending ? '[ TRANSMITTING DATA PACKET... ]' : '[ TRANSMIT SECURE MESSAGE ]'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels & Collaboration Availability */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Channel Cards */}
            {CONTACT_INFO.map((info) => (
              <a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tactical-border rounded-xl p-4 flex items-center gap-4 bg-[rgba(8,13,20,0.85)] group transition-all"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = info.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.2)')}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}35` }}
                >
                  {info.icon}
                </div>
                <div className="truncate">
                  <div className="font-mono text-[10px] text-[#8B949E] mb-0.5">{info.label}</div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-[#00F5FF] transition-colors truncate">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Direct WhatsApp Instant Action */}
            <a
              href="https://wa.me/918471071945"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 rounded-xl flex items-center justify-between font-rajdhani font-bold text-sm bg-[rgba(0,255,65,0.1)] border border-[rgba(0,255,65,0.4)] text-[#00FF41] hover:bg-[rgba(0,255,65,0.18)] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <span>INSTANT WHATSAPP DIRECT CHAT</span>
              </div>
              <span>CONNECT NOW ↗</span>
            </a>

            {/* Social Grid */}
            <div className="tactical-border rounded-xl p-4 bg-[rgba(6,10,16,0.8)]">
              <div className="font-mono text-xs text-[#8B949E] mb-3">// SOCIAL & REPOSITORY MATRIX</div>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg font-mono text-xs text-[#8B949E] bg-white/5 border border-white/10 hover:text-[#00F5FF] hover:border-[#00F5FF] transition-all"
                  >
                    <span>{s.icon}</span>
                    <span className="truncate">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* UP Police & LEA Collaboration Readiness Badge */}
            <div className="tactical-border rounded-xl p-5 bg-[rgba(0,255,65,0.05)] border-[rgba(0,255,65,0.3)]">
              <div className="flex items-center gap-2 mb-2 font-orbitron font-bold text-xs text-[#00FF41]">
                <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
                LEA COLLABORATION STANDBY
              </div>
              <p className="font-rajdhani text-xs text-[#8B949E] leading-relaxed mb-3">
                Extensive prior collaboration with Ghaziabad Police Cyber Cell through Defronix Cyber Security. Actively open to consultations, tool deployment, and joint investigations with Police departments and Cyber Cells across India.
              </p>
              <div className="flex flex-wrap gap-1">
                {['UP Police', 'Cyber Cell Support', 'STUN Forensics', 'Case Consultation', 'Tool Deployment'].map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-[#00FF41] bg-[rgba(0,255,65,0.1)] border border-[rgba(0,255,65,0.25)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
