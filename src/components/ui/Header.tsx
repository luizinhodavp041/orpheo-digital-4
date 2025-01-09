"use client";

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <div className="h-8 w-8 rounded-lg bg-accent"></div>
            <span className="text-xl font-bold text-text">
              Orpheo Digital
              <span className="text-xl font-bold text-accent">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-text hover:text-accent transition-colors"
            >
              Quem somos
            </Link>
            <Link
              href="#pricing"
              className="text-text hover:text-accent transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#about"
              className="text-text hover:text-accent transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#about"
              className="text-text hover:text-accent transition-colors"
            >
              Dúvidas
            </Link>
            <Link
              href="#about"
              className="text-text hover:text-accent transition-colors"
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
