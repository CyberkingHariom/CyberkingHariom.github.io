'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -200, y: -200 });
  const smoothRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    // Scale up on hover
    const onEnter = () => { if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1.5)'; };
    const onLeave = () => { if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)'; };
    const attach = () => {
      document.querySelectorAll('a,button,[data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      smoothRef.current.x += (posRef.current.x - smoothRef.current.x) * 0.18;
      smoothRef.current.y += (posRef.current.y - smoothRef.current.y) * 0.18;
      if (cursor) {
        cursor.style.left = smoothRef.current.x + 'px';
        cursor.style.top  = smoothRef.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      obs.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 999999,
        transform: 'translate(-50%,-50%)',
        fontSize: 22,
        lineHeight: 1,
        userSelect: 'none',
        transition: 'transform 0.15s ease',
        filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.7))',
      }}
    >
      🐭
    </div>
  );
}
