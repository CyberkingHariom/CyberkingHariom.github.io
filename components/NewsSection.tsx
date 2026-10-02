'use client';

import { useState } from 'react';

type NewsCategory = 'ALL' | 'INDIA' | 'CYBER CRIME' | 'AI SECURITY' | 'DATA SECURITY' | 'OSINT' | 'GLOBAL';

const NEWS = [
  {
    id: 'N001',
    category: 'CYBER CRIME',
    title: 'Rise in Online Fraud Cases Across India in 2025',
    summary: 'Cybercrime units across Indian states report significant increases in online fraud, phishing, and social engineering attacks targeting citizens.',
    source: 'CERT-In Report',
    date: '2025-09-15',
    color: '#FF6B35',
    link: '#',
  },
  {
    id: 'N002',
    category: 'OSINT',
    title: 'OSINT Techniques Used in Major Investigation Breakthroughs',
    summary: 'Open-source intelligence gathering continues to be a critical tool for law enforcement agencies in digital investigations worldwide.',
    source: 'Bellingcat',
    date: '2025-09-10',
    color: '#00F5FF',
    link: '#',
  },
  {
    id: 'N003',
    category: 'AI SECURITY',
    title: 'AI-Powered Cybercrime Tools on the Rise',
    summary: 'Security researchers detect growing use of AI-assisted tools in cybercrime, prompting calls for better defensive AI countermeasures.',
    source: 'Security Week',
    date: '2025-09-05',
    color: '#00FF41',
    link: '#',
  },
  {
    id: 'N004',
    category: 'INDIA',
    title: 'India Cyber Police Expand Digital Forensics Capabilities',
    summary: 'Multiple state cyber cells in India are upgrading their digital forensics labs and investigator training programs for 2025-26.',
    source: 'The Hindu',
    date: '2025-08-28',
    color: '#FF9933',
    link: '#',
  },
  {
    id: 'N005',
    category: 'DATA SECURITY',
    title: 'Major Data Breach Affects Indian E-Commerce Platform',
    summary: 'Personal data of millions of users reported exposed. Cybersecurity experts urge immediate password changes and breach monitoring.',
    source: 'Hindustan Times',
    date: '2025-08-20',
    color: '#FF6B35',
    link: '#',
  },
  {
    id: 'N006',
    category: 'GLOBAL',
    title: 'Interpol Operation Targets Cybercrime Networks Across Asia',
    summary: 'International operation disrupts multiple cybercrime rings operating across South and Southeast Asia, making dozens of arrests.',
    source: 'Interpol News',
    date: '2025-08-12',
    color: '#00F5FF',
    link: '#',
  },
];

const CATEGORIES: NewsCategory[] = ['ALL', 'INDIA', 'CYBER CRIME', 'AI SECURITY', 'DATA SECURITY', 'OSINT', 'GLOBAL'];

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('ALL');

  const filtered = NEWS.filter(
    (n) => activeCategory === 'ALL' || n.category === activeCategory
  );

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  };

  return (
    <section id="news" className="relative py-24 overflow-hidden" style={{ background: '#05070A' }}>
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-widest mb-3" style={{ color: '#4A6374' }}>
            // 08 — INTELLIGENCE FEED
          </div>
          <h2 className="font-orbitron font-black text-3xl md:text-4xl" style={{ color: '#FFFFFF' }}>
            CYBER{' '}
            <span style={{ color: '#00F5FF', textShadow: '0 0 20px rgba(0,245,255,0.4)' }}>
              INTELLIGENCE FEED
            </span>
          </h2>
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: '#7FB3C8' }}>
            Latest cybersecurity news, threat intelligence and digital investigation updates.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1 rounded font-mono text-xs tracking-wider transition-all duration-200"
              style={{
                background: activeCategory === cat ? 'rgba(0,245,255,0.12)' : 'transparent',
                border: activeCategory === cat ? '1px solid rgba(0,245,255,0.5)' : '1px solid rgba(0,245,255,0.1)',
                color: activeCategory === cat ? '#00F5FF' : '#4A6374',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-lg p-5 flex flex-col group"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = `${article.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.15)';
              }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    background: `${article.color}12`,
                    border: `1px solid ${article.color}30`,
                    color: article.color,
                  }}
                >
                  {article.category}
                </span>
                <span className="font-mono text-xs" style={{ color: '#4A6374' }}>
                  {formatDate(article.date)}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-orbitron font-bold text-sm mb-3 leading-snug flex-1" style={{ color: '#FFFFFF' }}>
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#7FB3C8' }}>
                {article.summary}
              </p>

              {/* Source + Read more */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs" style={{ color: '#4A6374' }}>SOURCE</span>
                  <span className="font-mono text-xs" style={{ color: '#7FB3C8' }}>{article.source}</span>
                </div>
                <a
                  href={article.link}
                  className="font-mono text-xs transition-colors"
                  style={{ color: article.color }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-8 text-xs font-mono" style={{ color: '#4A6374' }}>
          News articles updated regularly. Add news via Admin Panel.
        </p>
      </div>
    </section>
  );
}
