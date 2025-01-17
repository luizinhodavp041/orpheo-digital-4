"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isAtTop, setIsAtTop] = useState(true); // Inicia com o header visível (no topo)

  useEffect(() => {
    // Recupera o estado salvo do localStorage, se houver
    const savedState = localStorage.getItem("isAtTop");
    if (savedState !== null) {
      setIsAtTop(JSON.parse(savedState)); // Define o estado inicial com o valor armazenado
    }

    // Função de rolagem para esconder ou mostrar o header
    const handleScroll = () => {
      const newIsAtTop = window.scrollY === 0;
      setIsAtTop(newIsAtTop); // Atualiza o estado conforme a rolagem

      // Salva o estado no localStorage
      localStorage.setItem("isAtTop", JSON.stringify(newIsAtTop));
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do event listener ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isAtTop ? "bg-transparent" : "translate-y-[-100%]" // O header some ao rolar
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
