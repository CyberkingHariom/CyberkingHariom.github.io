'use client';

import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  { text: '> INITIALIZING CYBER INTELLIGENCE SYSTEM...', delay: 200, color: '#00F5FF' },
  { text: '> LOADING OSINT MODULES...', delay: 600, color: '#00FF41' },
  { text: '> ESTABLISHING SECURE CONNECTION...', delay: 1000, color: '#00F5FF' },
  { text: '> VERIFYING IDENTITY CREDENTIALS...', delay: 1400, color: '#00FF41' },
  { text: '> MOUNTING INVESTIGATION DATABASE...', delay: 1800, color: '#00F5FF' },
  { text: '> ACTIVATING DIGITAL FORENSICS LAYER...', delay: 2200, color: '#00FF41' },
  { text: '> SYSTEM READY.', delay: 2600, color: '#FF9933' },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<typeof BOOT_LINES>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Add lines progressively
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, line.delay);
    });

    // Animate progress bar
    const startTime = Date.now();
    const duration = 3200;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 800);
        }, 400);
      }
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  const progressBlocks = Math.floor((progress / 100) * 30);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
      style={{
        background: '#05070A',
        transition: 'opacity 0.8s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Digital noise overlay */}
      <div className="noise" />

      {/* Scan line */}
      <div className="scanline" />

      <div className="w-full max-w-2xl px-6 font-mono">
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="text-4xl md:text-5xl font-orbitron font-black mb-2"
            style={{ color: '#00F5FF', textShadow: '0 0 30px rgba(0,245,255,0.6)' }}
          >
            THE CYBER INDIA
          </div>
          <div className="text-sm" style={{ color: '#4A6374', letterSpacing: '0.3em' }}>
            🇮🇳 &nbsp;CYBER INTELLIGENCE SYSTEM
          </div>
        </div>

        {/* Terminal output */}
        <div
          className="rounded border p-4 mb-6 text-sm"
          style={{ borderColor: 'rgba(0,245,255,0.2)', background: 'rgba(0,245,255,0.02)' }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className="mb-1"
              style={{ color: line.color, animation: 'fadeIn 0.3s ease' }}
            >
              {line.text}
            </div>
          ))}
          {lines.length < BOOT_LINES.length && (
            <span style={{ color: '#4A6374' }}>_</span>
          )}
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs mb-2" style={{ color: '#4A6374' }}>
            <span>LOADING</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{ height: '4px', background: 'rgba(0,245,255,0.1)' }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #00F5FF, #00FF41)',
                boxShadow: '0 0 10px #00F5FF',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
          <div className="mt-2 text-xs" style={{ color: '#4A6374', letterSpacing: '0.15em' }}>
            {'█'.repeat(progressBlocks)}{'░'.repeat(30 - progressBlocks)}
          </div>
        </div>

        {/* Bottom label */}
        <div className="text-center mt-8 text-xs" style={{ color: '#4A6374', letterSpacing: '0.2em' }}>
          [ CONNECTING... ]
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
