'use client';

import { useState } from 'react';

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@thecyberindia',
    url: 'https://instagram.com/thecyberindia',
    icon: '📸',
    desc: 'Cyber tips, investigation demos & awareness content',
    followers: '1K+',
    color: '#E1306C',
  },
  {
    name: 'YouTube',
    handle: '@thecyberindia',
    url: 'https://youtube.com/@thecyberindia',
    icon: '▶',
    desc: 'In-depth investigation walkthroughs, tool demos & cyber education',
    followers: '500+',
    color: '#FF0000',
  },
  {
    name: 'Telegram',
    handle: 'thecyberindia',
    url: '#',
    icon: '✈',
    desc: 'Cyber news, alerts and direct messaging channel',
    followers: '—',
    color: '#0088CC',
  },
  {
    name: 'GitHub',
    handle: 'mrcyb4r',
    url: 'https://github.com/mrcyb4r',
    icon: '⌥',
    desc: 'Open source tools and cybersecurity projects',
    followers: '—',
    color: '#00F5FF',
  },
  {
    name: 'LinkedIn',
    handle: 'hariom-singh-',
    url: 'https://linkedin.com/in/hariom-singh-',
    icon: '🔗',
    desc: 'Professional profile and career updates',
    followers: '—',
    color: '#0077B5',
  },
  {
    name: 'X (Twitter)',
    handle: '@thecyberindia',
    url: '#',
    icon: '✕',
    desc: 'Quick cyber updates, threat alerts and insights',
    followers: '—',
    color: '#FFFFFF',
  },
];

export default function SocialSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#080D12' }}>
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: '#4A6374' }}>
            // 09 — SOCIAL PRESENCE
          </div>
          <h2 className="font-orbitron font-black text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
            FOLLOW{' '}
            <span style={{ color: '#FF9933', textShadow: '0 0 20px rgba(255,153,51,0.4)' }}>
              THE CYBER INDIA
            </span>
          </h2>
          <p className="mt-4 text-sm" style={{ color: '#7FB3C8' }}>
            One identity. One digital presence. 🇮🇳
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg p-5 flex items-start gap-4 group no-underline"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = `${s.color}40`;
                e.currentTarget.style.boxShadow = `0 10px 30px ${s.color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}
              >
                {s.icon}
              </div>
              <div>
                <div className="font-orbitron font-bold text-sm mb-0.5" style={{ color: s.color }}>
                  {s.name}
                </div>
                <div className="font-mono text-xs mb-2" style={{ color: '#4A6374' }}>
                  {s.handle}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#7FB3C8' }}>
                  {s.desc}
                </p>
                {s.followers !== '—' && (
                  <div className="mt-2 font-mono text-xs" style={{ color: s.color }}>
                    {s.followers} followers
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
