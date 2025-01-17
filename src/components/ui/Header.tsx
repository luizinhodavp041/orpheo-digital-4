"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  // Inicializa com undefined para evitar hidratação incorreta
  const [isVisible, setIsVisible] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Define o estado inicial baseado na posição do scroll
    setIsVisible(window.scrollY === 0);

    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setIsVisible(isAtTop);
      localStorage.setItem("headerVisible", JSON.stringify(isAtTop));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Não renderiza nada até o estado ser definido
  if (isVisible === undefined) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 w-full z-50  backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-accent relative overflow-hidden">
              <Image
                src="/icon.png"
                alt="ícone"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="text-xl font-bold text-text">
              Orpheo Digital
              <span className="text-xl font-bold text-accent">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-text hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("about");
                if (!element) return;

                const offset = 7;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }}
            >
              Quem somos
            </Link>
            <Link
              href="#services"
              className="text-text hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("services");
                if (!element) return;

                const offset = 35;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }}
            >
              Serviços
            </Link>
            <Link
              href="#features"
              className="text-text hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("features");
                if (!element) return;

                const offset = 10;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }}
            >
              Recursos
            </Link>
            <Link
              href="#objections"
              className="text-text hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("objections");
                if (!element) return;

                const offset = 369;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }}
            >
              Dúvidas
            </Link>
            <Link
              href="#testimonials"
              className="text-text hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("testimonials");
                if (!element) return;

                const offset = 100;
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: "smooth",
                });
              }}
            >
              Depoimentos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
