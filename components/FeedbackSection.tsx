'use client';

import { useState } from 'react';

const FEEDBACKS = [
  {
    id: 'F001',
    name: 'Verified Legal Counsel',
    rating: 5,
    service: 'Digital Investigation & Evidence',
    text: 'The digital evidence workflow provided for our case was clear, strictly timestamped, and immediately accepted by judicial authorities.',
    verified: true,
    date: 'Nov 2024',
  },
  {
    id: 'F002',
    name: 'Cyber Cell Officer',
    rating: 5,
    service: 'OSINT & STUN IP Forensics',
    text: 'During our joint casework, the STUN bypass methodology revealed real ISP IP nodes behind VPN proxies in record turnaround time.',
    verified: true,
    date: 'Nov 2024',
  },
  {
    id: 'F003',
    name: 'University Student & Netizen',
    rating: 5,
    service: 'Cyber Awareness Keynote',
    text: 'The educational demonstrations on thecyberindia YouTube channel demystified fake profile tracing and financial scam traps completely.',
    verified: true,
    date: 'Oct 2024',
  },
];

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    experience: '',
    feedback: '',
    rating: 5,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="feedback" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#050A10' }}>
      {/* Dracula Red & Green Background Atmospheric Aura */}
      <div
        className="dracula-flare-green"
        style={{ width: '400px', height: '400px', top: '15%', left: '5%' }}
      />
      <div
        className="dracula-flare-red"
        style={{ width: '400px', height: '400px', bottom: '15%', right: '5%' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-widest text-[#00FF41] border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.06)] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] status-active" />
            // 07 — FIELD FEEDBACK & TESTIMONIALS
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white">
            FIELD{' '}
            <span className="text-[#00FF41] text-glow-green">FEEDBACK</span>
          </h2>
          <p className="font-rajdhani font-semibold text-sm sm:text-lg text-[#8B949E] mt-3 max-w-2xl mx-auto">
            Direct appraisals from verified investigators, legal counsel, and participants who interacted with our tools and casework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Approved Testimonials */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs tracking-widest text-[#00F5FF] mb-3 flex items-center justify-between">
              <span>[ VERIFIED INCIDENT FEEDBACK ]</span>
              <span className="text-[#00FF41]">● 100% AUTHENTICATED</span>
            </div>

            {FEEDBACKS.map((fb) => (
              <div
                key={fb.id}
                className="tactical-border rounded-xl p-5 bg-[rgba(8,13,20,0.85)]"
              >
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="text-base text-[#FF9933]">
                        ★
                      </span>
                    ))}
                    <span className="font-mono text-[11px] text-[#8B949E] ml-2">
                      {fb.date}
                    </span>
                  </div>
                  {fb.verified && (
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[rgba(0,255,65,0.15)] text-[#00FF41] border border-[rgba(0,255,65,0.3)] font-bold">
                      ✓ LEA VERIFIED
                    </span>
                  )}
                </div>

                <p className="font-rajdhani text-sm sm:text-base text-[#E0F7FA] italic mb-4 leading-relaxed">
                  "{fb.text}"
                </p>

                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)] text-xs">
                  <span className="font-orbitron font-bold text-white text-xs">
                    — {fb.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#00F5FF] px-2 py-0.5 rounded bg-[rgba(0,245,255,0.08)]">
                    {fb.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Feedback Submission Form */}
          <div className="lg:col-span-5 w-full">
            <div className="tactical-border rounded-xl p-6 bg-[rgba(6,10,16,0.92)]">
              <div className="font-mono text-xs text-[#FF9933] mb-4 flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-2 font-bold">
                <span>// TRANSMIT FIELD REVIEW</span>
                <span className="text-[10px] text-[#8B949E]">ADMIN AUDIT REQUIRED</span>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,255,65,0.2)] border border-[#00FF41] text-[#00FF41] flex items-center justify-center text-2xl mx-auto mb-3">
                    ✓
                  </div>
                  <div className="font-orbitron font-bold text-base text-[#00FF41] mb-1">
                    REPORT LOGGED
                  </div>
                  <p className="font-rajdhani text-sm text-[#8B949E]">
                    Your field appraisal has been recorded. It will display publicly following administrative verification in /admin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-rajdhani">
                  <div>
                    <label className="font-mono text-[11px] text-[#8B949E] block mb-1">
                      // YOUR FULL NAME OR ALIAS
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Inspector R. Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-[#8B949E] block mb-1">
                      // EMAIL ADDRESS
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@agency.in"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-[#8B949E] block mb-1">
                      // TOOL OR CASEWORK REVIEWED
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. VAJAR IP Forensic / Deoria Casework"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-[#8B949E] block mb-1">
                      // RATING RATING SCORE
                    </label>
                    <div className="flex gap-2 text-2xl">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm({ ...form, rating: star })}
                          className="transition-transform hover:scale-125"
                          style={{ color: star <= form.rating ? '#FF9933' : '#484F58' }}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-[#8B949E] block mb-1">
                      // FEEDBACK STATEMENT
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your practical investigation experience..."
                      value={form.feedback}
                      onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm font-mono text-white bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.2)] outline-none focus:border-[#00F5FF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-lg font-orbitron font-bold text-xs tracking-wider uppercase text-black bg-[#00FF41] shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all"
                  >
                    {submitting ? '[ LOGGING TRANSMISSION... ]' : '[ SUBMIT FIELD APPRAISAL ]'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
