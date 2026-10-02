'use client';
import { useEffect, useRef } from 'react';

export default function GlobeBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let frame = 0;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Globe points (lat/lon)
    const pts: { lat: number; lon: number }[] = [];
    for (let lat = -80; lat <= 80; lat += 15) {
      for (let lon = 0; lon < 360; lon += 15) {
        pts.push({ lat, lon });
      }
    }
    // Lines of latitude/longitude
    const lines: { lat?: number; lon?: number }[] = [];
    for (let lat = -60; lat <= 60; lat += 30) lines.push({ lat });
    for (let lon = 0; lon < 360; lon += 30) lines.push({ lon });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const R = Math.min(canvas.width, canvas.height) * 0.32;
      const rot = frame * 0.003;

      const project = (lat: number, lon: number) => {
        const phi = (lat * Math.PI) / 180;
        const theta = ((lon + rot * 180 / Math.PI) * Math.PI) / 180;
        const x = R * Math.cos(phi) * Math.sin(theta);
        const y = R * Math.sin(phi);
        const z = R * Math.cos(phi) * Math.cos(theta);
        return { x: cx + x, y: cy - y, z };
      };

      // Draw grid
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= 360; lon += 5) {
          const p = project(lat, lon);
          if (p.z < 0) { first = true; continue; }
          const alpha = (p.z / R) * 0.25;
          ctx.strokeStyle = `rgba(0,245,255,${alpha})`;
          if (first) { ctx.moveTo(p.x, p.y); first = false; }
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      for (let lon = 0; lon < 360; lon += 20) {
        ctx.beginPath();
        let first = true;
        for (let lat = -80; lat <= 80; lat += 5) {
          const p = project(lat, lon);
          if (p.z < 0) { first = true; continue; }
          const alpha = (p.z / R) * 0.25;
          ctx.strokeStyle = `rgba(0,245,255,${alpha})`;
          if (first) { ctx.moveTo(p.x, p.y); first = false; }
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw points
      pts.forEach(({ lat, lon }) => {
        const p = project(lat, lon);
        if (p.z < 0) return;
        const alpha = (p.z / R) * 0.6;
        const isIndia = lat >= 8 && lat <= 36 && lon >= 68 && lon <= 97;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isIndia ? 2.5 : 1.2, 0, Math.PI * 2);
        ctx.fillStyle = isIndia ? `rgba(255,153,51,${alpha + 0.3})` : `rgba(0,245,255,${alpha})`;
        if (isIndia) ctx.shadowColor = '#FF9933', ctx.shadowBlur = 8;
        else ctx.shadowBlur = 0;
        ctx.fill();
      });

      // India glow
      const indiaP = project(20.5, 78.9);
      if (indiaP.z > 0) {
        const grd = ctx.createRadialGradient(indiaP.x, indiaP.y, 0, indiaP.x, indiaP.y, 40);
        grd.addColorStop(0, 'rgba(255,153,51,0.15)');
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(indiaP.x, indiaP.y, 40, 0, Math.PI * 2);
        ctx.fill();
      }

      frame++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: 0, pointerEvents: 'none', opacity: 0.35,
    }} />
  );
}
