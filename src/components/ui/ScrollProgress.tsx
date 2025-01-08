"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const hasShownPopup = useRef(false);
  const size = 60;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const calculateScrollProgress = () => {
      // Encontra a seção CTA pelo id ou classe
      const ctaSection = document.getElementById("cta-section");
      if (!ctaSection) return;

      const windowHeight = window.innerHeight;
      const documentHeight = ctaSection.offsetTop; // Usa a posição do CTA como altura total
      const scrollTop = window.scrollY;

      // Calcula o progresso até a seção CTA
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      const clampedProgress = Math.min(scrollPercentage, 100);
      setProgress(clampedProgress);

      // Mostra o popup quando atingir 100% pela primeira vez
      if (clampedProgress >= 100 && !hasShownPopup.current) {
        hasShownPopup.current = true;
        setTimeout(() => setShowPopup(true), 500); // Pequeno delay para melhor UX
      }
    };

    window.addEventListener("scroll", calculateScrollProgress);
    calculateScrollProgress();

    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative flex items-center justify-center bg-black/50 rounded-xl p-3">
          <svg className="transform -rotate-90" width={size} height={size}>
            {/* Círculo de fundo */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#1A1A1C"
              strokeWidth={strokeWidth}
            />
            {/* Círculo de progresso */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#00DC82"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
          </svg>
          {/* Texto da porcentagem */}
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Popup */}
        <div
          className={`absolute bottom-[calc(100%+0.5rem)] right-0 w-72 bg-background-secondary border border-border rounded-lg p-4 transform transition-all duration-300 ${
            showPopup
              ? "translate-y-0 opacity-100 shadow-lg"
              : "translate-y-8 opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-text-secondary hover:text-text"
          >
            ×
          </button>
          <p className="text-sm mb-3">
            Vejo que você chegou até o final e está interessado! Para isso,
            temos uma promoção perfeita para você.
          </p>
          <Button
            className="w-full bg-accent text-background hover:bg-accent/90"
            onClick={() => {
              // Aqui você pode adicionar a ação do botão
              console.log("Clicou em Eu quero!");
            }}
          >
            Eu quero!
          </Button>
        </div>
      </div>
    </>
  );
}
