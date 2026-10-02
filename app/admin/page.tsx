'use client';

import { useState } from 'react';
import Link from 'next/link';

const ADMIN_SECTIONS = [
  { id: 'visitors', label: 'VISITORS', icon: '📊', color: '#00F5FF' },
  { id: 'messages', label: 'MESSAGES', icon: '📬', color: '#00FF41' },
  { id: 'feedback', label: 'FEEDBACK', icon: '💬', color: '#FF9933' },
  { id: 'tools', label: 'TOOLS', icon: '🛠️', color: '#00F5FF' },
  { id: 'projects', label: 'PROJECTS', icon: '📁', color: '#00FF41' },
  { id: 'cases', label: 'CASES', icon: '🗂️', color: '#FF6B35' },
  { id: 'team', label: 'TEAM', icon: '👥', color: '#00F5FF' },
  { id: 'news', label: 'NEWS', icon: '📰', color: '#FF9933' },
  { id: 'social', label: 'SOCIAL LINKS', icon: '🔗', color: '#00FF41' },
  { id: 'homepage', label: 'HOMEPAGE', icon: '🏠', color: '#FF9933' },
  { id: 'settings', label: 'SETTINGS', icon: '⚙️', color: '#7FB3C8' },
];

// Sample data for demo
const MOCK_MESSAGES = [
  { id: 'M001', name: 'Rahul Sharma', email: 'rahul@example.com', reason: 'Collaboration', message: 'Interested in working together on cybercrime investigation.', date: '2026-09-30', read: false },
  { id: 'M002', name: 'Priya Mehta', email: 'priya@example.com', reason: 'Tool Access', message: 'Requesting access to VAJAR Intel Bot for authorized investigation.', date: '2026-09-28', read: true },
  { id: 'M003', name: 'Officer Kumar', email: 'kumar@ghaziabad.police', reason: 'Law Enforcement', message: 'Following up on our previous case collaboration. Need assistance.', date: '2026-09-25', read: false },
];

const MOCK_FEEDBACKS = [
  { id: 'F001', name: 'Verified User', rating: 5, service: 'OSINT Tool', text: 'Excellent investigation workflow.', date: '2026-09-20', approved: true },
  { id: 'F002', name: 'Anonymous', rating: 4, service: 'Casework', text: 'Very professional approach to digital forensics.', date: '2026-09-15', approved: false },
];

const MOCK_STATS = {
  visitors: 1247,
  messages: 15,
  feedbacks: 8,
  pendingFeedbacks: 3,
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeSection, setActiveSection] = useState('visitors');
  const [feedbacks, setFeedbacks] = useState(MOCK_FEEDBACKS);

  // Simple client-side auth (in production, use proper auth)
  const ADMIN_PASSWORD = 'tci@admin2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const toggleFeedbackApproval = (id: string) => {
    setFeedbacks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, approved: !f.approved } : f))
    );
  };

  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#05070A' }}
      >
        <div className="noise" />
        <div className="relative z-10 w-full max-w-md px-6">
          <div className="text-center mb-8">
            <div
              className="font-orbitron font-black text-2xl mb-2"
              style={{ color: '#00F5FF', textShadow: '0 0 20px rgba(0,245,255,0.4)' }}
            >
              THE CYBER INDIA
            </div>
            <div className="font-mono text-xs tracking-widest" style={{ color: '#4A6374' }}>
              ADMIN COMMAND CENTER
            </div>
          </div>

          <form
            onSubmit={handleLogin}
            className="rounded-lg p-7"
            style={{ background: 'rgba(8,13,18,0.9)', border: '1px solid rgba(0,245,255,0.2)' }}
          >
            <div className="font-mono text-xs mb-4" style={{ color: '#4A6374' }}>
              root@thecyberindia:~$ authenticate
            </div>

            <div className="mb-4">
              <label className="font-mono text-xs mb-2 block" style={{ color: '#4A6374' }}>
                // ADMIN PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2.5 rounded font-mono text-sm outline-none"
                style={{
                  background: 'rgba(0,245,255,0.04)',
                  border: `1px solid ${authError ? 'rgba(255,107,53,0.5)' : 'rgba(0,245,255,0.2)'}`,
                  color: '#E0F7FA',
                }}
              />
              {authError && (
                <p className="mt-1.5 text-xs font-mono" style={{ color: '#FF6B35' }}>
                  ✕ Access denied. Invalid credentials.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 font-orbitron font-bold text-sm tracking-widest rounded"
              style={{
                background: 'rgba(0,245,255,0.1)',
                border: '1px solid rgba(0,245,255,0.4)',
                color: '#00F5FF',
              }}
            >
              [ AUTHENTICATE ]
            </button>

            <div className="mt-4 text-center">
              <Link href="/" className="font-mono text-xs" style={{ color: '#4A6374' }}>
                ← Back to website
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#05070A' }}>
      <div className="noise" />

      {/* Sidebar */}
      <aside
        className="relative z-20 w-60 shrink-0 flex flex-col py-6"
        style={{
          background: 'rgba(8,13,18,0.95)',
          borderRight: '1px solid rgba(0,245,255,0.1)',
        }}
      >
        {/* Logo */}
        <div className="px-5 mb-6">
          <div className="font-orbitron font-black text-sm mb-0.5" style={{ color: '#00F5FF' }}>
            THE CYBER INDIA
          </div>
          <div className="font-mono text-xs" style={{ color: '#4A6374' }}>ADMIN PANEL</div>
        </div>

        <div className="cyber-line mx-5 mb-4" />

        {/* Nav items */}
        <nav className="flex-1 px-3 space-y-1">
          {ADMIN_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-left transition-all"
              style={{
                background: activeSection === s.id ? `${s.color}10` : 'transparent',
                border: activeSection === s.id ? `1px solid ${s.color}25` : '1px solid transparent',
                color: activeSection === s.id ? s.color : '#4A6374',
              }}
            >
              <span className="text-base">{s.icon}</span>
              <span className="font-mono text-xs tracking-wider">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="cyber-line mx-5 my-4" />

        <div className="px-5">
          <Link
            href="/"
            className="font-mono text-xs block text-center py-2 rounded"
            style={{ border: '1px solid rgba(0,245,255,0.1)', color: '#4A6374' }}
          >
            VIEW WEBSITE →
          </Link>
          <button
            onClick={() => setAuthed(false)}
            className="w-full mt-2 font-mono text-xs py-2 rounded"
            style={{ border: '1px solid rgba(255,107,53,0.2)', color: '#FF6B35' }}
          >
            [ LOGOUT ]
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="relative z-10 flex-1 overflow-y-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="font-mono text-xs mb-1" style={{ color: '#4A6374' }}>
            root@thecyberindia:~$ admin --section {activeSection}
          </div>
          <h1 className="font-orbitron font-black text-2xl" style={{ color: '#FFFFFF' }}>
            {ADMIN_SECTIONS.find((s) => s.id === activeSection)?.label}
          </h1>
        </div>

        {/* VISITORS section */}
        {activeSection === 'visitors' && (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { label: 'TOTAL VISITORS', val: MOCK_STATS.visitors, color: '#00F5FF' },
                { label: 'MESSAGES', val: MOCK_STATS.messages, color: '#00FF41' },
                { label: 'FEEDBACKS', val: MOCK_STATS.feedbacks, color: '#FF9933' },
                { label: 'PENDING APPROVAL', val: MOCK_STATS.pendingFeedbacks, color: '#FF6B35' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-5"
                  style={{ background: 'rgba(8,13,18,0.8)', border: `1px solid ${stat.color}20` }}
                >
                  <div className="font-orbitron font-black text-3xl mb-1" style={{ color: stat.color }}>
                    {stat.val}
                  </div>
                  <div className="font-mono text-xs" style={{ color: '#4A6374' }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div
              className="rounded-lg p-5 font-mono text-sm"
              style={{ background: 'rgba(8,13,18,0.8)', border: '1px solid rgba(0,245,255,0.1)', color: '#4A6374' }}
            >
              <p style={{ color: '#7FB3C8' }}>// Connect Firebase/Analytics to see real visitor data.</p>
              <p>// Integrate Google Analytics or your own tracking for live stats.</p>
            </div>
          </div>
        )}

        {/* MESSAGES section */}
        {activeSection === 'messages' && (
          <div className="space-y-4">
            {MOCK_MESSAGES.map((msg) => (
              <div
                key={msg.id}
                className="rounded-lg p-5"
                style={{
                  background: 'rgba(8,13,18,0.8)',
                  border: `1px solid ${msg.read ? 'rgba(0,245,255,0.1)' : 'rgba(0,245,255,0.3)'}`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-orbitron font-bold text-sm mr-3" style={{ color: '#FFFFFF' }}>
                      {msg.name}
                    </span>
                    <span className="font-mono text-xs" style={{ color: '#4A6374' }}>{msg.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2 py-0.5 rounded font-mono text-xs"
                      style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)', color: '#00F5FF' }}
                    >
                      {msg.reason}
                    </span>
                    {!msg.read && (
                      <span
                        className="px-2 py-0.5 rounded font-mono text-xs"
                        style={{ background: 'rgba(0,255,65,0.1)', border: '1px solid rgba(0,255,65,0.3)', color: '#00FF41' }}
                      >
                        NEW
                      </span>
                    )}
                    <span className="font-mono text-xs" style={{ color: '#4A6374' }}>{msg.date}</span>
                  </div>
                </div>
                <p className="text-sm" style={{ color: '#7FB3C8' }}>{msg.message}</p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={`mailto:${msg.email}`}
                    className="px-3 py-1 rounded font-mono text-xs"
                    style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)', color: '#00F5FF' }}
                  >
                    REPLY
                  </a>
                  <button
                    className="px-3 py-1 rounded font-mono text-xs"
                    style={{ border: '1px solid rgba(255,107,53,0.2)', color: '#FF6B35' }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FEEDBACK section */}
        {activeSection === 'feedback' && (
          <div className="space-y-4">
            <p className="font-mono text-xs mb-4" style={{ color: '#4A6374' }}>
              // Toggle approval to show/hide feedback on the public website
            </p>
            {feedbacks.map((fb) => (
              <div
                key={fb.id}
                className="rounded-lg p-5"
                style={{ background: 'rgba(8,13,18,0.8)', border: '1px solid rgba(0,245,255,0.1)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-orbitron font-bold text-sm mr-3" style={{ color: '#FFFFFF' }}>{fb.name}</span>
                    <span className="font-mono text-xs mr-3" style={{ color: '#4A6374' }}>{fb.service}</span>
                    <span style={{ color: '#FF9933' }}>{'★'.repeat(fb.rating)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs" style={{ color: '#4A6374' }}>{fb.date}</span>
                    <button
                      onClick={() => toggleFeedbackApproval(fb.id)}
                      className="px-3 py-1 rounded font-mono text-xs transition-all"
                      style={{
                        background: fb.approved ? 'rgba(0,255,65,0.1)' : 'rgba(255,107,53,0.1)',
                        border: fb.approved ? '1px solid rgba(0,255,65,0.3)' : '1px solid rgba(255,107,53,0.3)',
                        color: fb.approved ? '#00FF41' : '#FF6B35',
                      }}
                    >
                      {fb.approved ? '✓ APPROVED' : 'PENDING'}
                    </button>
                  </div>
                </div>
                <p className="text-sm italic" style={{ color: '#7FB3C8' }}>"{fb.text}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Generic placeholder for other sections */}
        {!['visitors', 'messages', 'feedback'].includes(activeSection) && (
          <div
            className="rounded-lg p-8 text-center"
            style={{ background: 'rgba(8,13,18,0.8)', border: '1px solid rgba(0,245,255,0.1)' }}
          >
            <div className="text-4xl mb-4">
              {ADMIN_SECTIONS.find((s) => s.id === activeSection)?.icon}
            </div>
            <div className="font-orbitron font-bold text-base mb-2" style={{ color: '#FFFFFF' }}>
              {ADMIN_SECTIONS.find((s) => s.id === activeSection)?.label} MANAGEMENT
            </div>
            <p className="text-sm mb-6" style={{ color: '#7FB3C8' }}>
              This section connects to your database (Firebase/PostgreSQL) to manage{' '}
              {activeSection} content without coding. Configure your database connection to enable full CMS functionality.
            </p>
            <div className="font-mono text-xs space-y-1" style={{ color: '#4A6374' }}>
              <p>// Step 1: Connect Firebase in lib/firebase.ts</p>
              <p>// Step 2: Set environment variables in .env.local</p>
              <p>// Step 3: This section auto-populates with live data</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
