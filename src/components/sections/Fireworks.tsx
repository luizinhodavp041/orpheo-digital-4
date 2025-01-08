// components/sections/Fireworks.tsx
"use client";

import { useEffect, useRef } from "react";

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
      trail: { x: number; y: number; alpha: number }[];
      trailLength: number;

      constructor(x: number, y: number, color: string, size = 2) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
        this.size = size;
        this.trail = [];
        this.trailLength = 25; // Trail mais longa para movimento mais fluído
      }

      update() {
        // Adiciona posição atual à trail
        this.trail.push({ x: this.x, y: this.y, alpha: this.alpha });

        // Mantém apenas os últimos N pontos
        if (this.trail.length > this.trailLength) {
          this.trail.shift();
        }

        // Atualiza posição
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05; // gravidade
        this.alpha *= 0.96; // fade out
        return this.alpha > 0.1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Desenha a trail
        this.trail.forEach((point, index) => {
          const fadeAlpha = (index / this.trail.length) * point.alpha;
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = fadeAlpha * 0.5;
          ctx.fill();
        });

        // Desenha a partícula atual
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    class Rocket {
      x: number;
      y: number;
      vy: number;
      color: string;
      particles: Particle[];
      trail: { x: number; y: number; alpha: number }[];

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight;
        this.vy = -Math.random() * 3 - 8; // Reduzido de (5 + 10) para (3 + 8)
        this.color = "#00DC82";
        this.particles = [];
        this.trail = [];
      }

      explode() {
        const particleCount = 150; // Mais partículas para efeito mais suave
        for (let i = 0; i < particleCount; i++) {
          this.particles.push(new Particle(this.x, this.y, this.color));
        }
      }

      update() {
        if (this.particles.length === 0) {
          // Trail do foguete subindo
          this.trail.push({ x: this.x, y: this.y, alpha: 1 });
          if (this.trail.length > 20) this.trail.shift(); // Aumentado de 10 para 20

          this.y += this.vy;
          return this.y > 0;
        }

        this.particles = this.particles.filter((particle) => particle.update());
        return this.particles.length > 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.particles.length === 0) {
          // Desenha a trail do foguete
          this.trail.forEach((point, index) => {
            const fadeAlpha = (index / this.trail.length) * 0.5;
            ctx.fillStyle = this.color;
            ctx.globalAlpha = fadeAlpha;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
            ctx.fill();
          });

          // Desenha o foguete
          ctx.globalAlpha = 1;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          this.particles.forEach((particle) => particle.draw(ctx));
        }
      }
    }

    let rockets: Rocket[] = [];
    let lastLaunch = 0;

    const animate = (timestamp: number) => {
      // Limpa o canvas completamente
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#0A0A0B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Define como as cores vão se misturar
      ctx.globalCompositeOperation = "screen";

      if (timestamp - lastLaunch > 1200) {
        // Aumentado de 800 para 1200 (mais tempo entre lançamentos)
        rockets.push(new Rocket(canvas.width, canvas.height));
        lastLaunch = timestamp;
      }

      rockets = rockets.filter((rocket) => {
        if (rocket.particles.length === 0 && rocket.y < canvas.height * 0.4) {
          rocket.explode();
        }
        return rocket.update();
      });

      rockets.forEach((rocket) => rocket.draw(ctx));

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="relative bg-background h-[400px] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </section>
  );
}
