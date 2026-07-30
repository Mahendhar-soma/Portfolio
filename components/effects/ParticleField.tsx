"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

/** Tech-network particle field — nodes, links, soft data pulses */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (isReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let pulses: { x: number; y: number; r: number; max: number; alpha: number }[] =
      [];
    let width = 0;
    let height = 0;
    let tick = 0;

    const hues = [239, 187, 38]; // indigo / cyan / amber

    const resize = () => {
      width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      height = canvas.parentElement?.clientHeight ?? window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const count = Math.min(95, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.2 + 0.5,
        opacity: Math.random() * 0.5 + 0.18,
        hue: hues[Math.floor(Math.random() * hues.length)],
      }));
    };

    const spawnPulse = () => {
      if (particles.length === 0) return;
      const p = particles[Math.floor(Math.random() * particles.length)];
      pulses.push({
        x: p.x,
        y: p.y,
        r: 2,
        max: 40 + Math.random() * 50,
        alpha: 0.35,
      });
      if (pulses.length > 6) pulses.shift();
    };

    const draw = () => {
      tick += 1;
      ctx.clearRect(0, 0, width, height);

      if (tick % 90 === 0) spawnPulse();

      for (const pulse of pulses) {
        pulse.r += 0.7;
        pulse.alpha *= 0.985;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${pulse.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      pulses = pulses.filter((p) => p.r < p.max && p.alpha > 0.02);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 68%, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 125) {
            const strength = 1 - dist / 125;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.14 * strength})`;
            ctx.lineWidth = strength > 0.7 ? 1.2 : 0.8;
            ctx.stroke();

            // Packet traveling along strong links
            if (strength > 0.72 && tick % 3 === 0) {
              const t = ((tick * 0.01) + i * 0.07) % 1;
              const px = p.x + (q.x - p.x) * t;
              const py = p.y + (q.y - p.y) * t;
              ctx.beginPath();
              ctx.arc(px, py, 1.4, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(165, 180, 252, ${0.55 * strength})`;
              ctx.fill();
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isReduced]);

  if (isReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className ?? "absolute inset-0 h-full w-full"}
    />
  );
}
