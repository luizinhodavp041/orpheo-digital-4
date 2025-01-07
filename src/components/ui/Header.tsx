import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-accent"></div>
          <span className="text-xl font-bold text-text">Brand</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-text-secondary hover:text-text transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-text-secondary hover:text-text transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-text-secondary hover:text-text transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-border text-text hover:bg-background-secondary"
          >
            Log in
          </Button>
          <Button className="bg-accent text-background hover:bg-accent/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
