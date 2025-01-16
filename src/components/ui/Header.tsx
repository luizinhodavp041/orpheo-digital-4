"use client";

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isAtTop ? "bg-transparent" : "translate-y-[-100%]"
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
                if (!element) return; // verificação de nulidade

                const offset = 7; // altura aproximada do header + espaço extra
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
                if (!element) return; // verificação de nulidade

                const offset = 35; // altura aproximada do header + espaço extra
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
                if (!element) return; // verificação de nulidade

                const offset = 10; // altura aproximada do header + espaço extra
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
                if (!element) return; // verificação de nulidade

                const offset = 369; // altura aproximada do header + espaço extra
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
                if (!element) return; // verificação de nulidade

                const offset = 100; // altura aproximada do header + espaço extra
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
          {/* botões */}
          {/* <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-border text-text hover:bg-background-secondary/50"
            >
              Log in
            </Button>
            <Button className="bg-accent text-background hover:bg-accent/90">
              Get Started
            </Button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
