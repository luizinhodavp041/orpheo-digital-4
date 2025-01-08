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
      trail: Array<{ x: number; y: number; alpha: number }> = [];
      trailLength: number = 20;

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
        this.trailLength = 20; // Comprimento do trail
      }

      update() {
        // Adiciona posição atual ao trail
        this.trail.push({ x: this.x, y: this.y, alpha: this.alpha });
        if (this.trail.length > this.trailLength) {
          this.trail.shift();
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05;
        this.alpha *= 0.98;
        return this.alpha > 0.1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Desenha o trail
        this.trail.forEach((point) => {
          ctx.save();
          ctx.globalAlpha = point.alpha * 0.5;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Desenha a partícula atual
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Rocket {
      x: number;
      y: number;
      vy: number;
      color: string;
      particles: Particle[] = [];
      trail: Array<{ x: number; y: number; alpha: number }> = [];
      trailLength: number = 25; // Aumentado de 10 para 25

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = canvasHeight;
        this.vy = -Math.random() * 5 - 10;
        this.color = "#00DC82";
        this.particles = [];
      }

      explode() {
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
          this.particles.push(new Particle(this.x, this.y, this.color));
        }
      }

      update() {
        if (this.particles.length === 0) {
          this.y += this.vy;
          return this.y > 0;
        }

        this.particles = this.particles.filter((particle) => particle.update());
        return this.particles.length > 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.particles.length === 0) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
          ctx.fill();

          // Trilha do foguete
          ctx.beginPath();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + 10);
          ctx.stroke();
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Define como as cores vão se misturar
      ctx.globalCompositeOperation = "screen";

      // Lançar novo foguete
      if (timestamp - lastLaunch > 800) {
        rockets.push(new Rocket(canvas.width, canvas.height));
        lastLaunch = timestamp;
      }

      // Atualizar e desenhar fogos
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
