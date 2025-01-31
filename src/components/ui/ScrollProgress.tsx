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
      const ctaSection = document.getElementById("cta-section");
      if (!ctaSection) return;

      const windowHeight = window.innerHeight;
      const documentHeight = ctaSection.offsetTop;
      const scrollTop = window.scrollY;

      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      const clampedProgress = Math.min(scrollPercentage, 100);
      setProgress(clampedProgress);

      if (clampedProgress >= 100 && !hasShownPopup.current) {
        hasShownPopup.current = true;
        setTimeout(() => setShowPopup(true), 500);
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
        {/* Círculo de Progresso */}
        <div className="relative flex items-center justify-center bg-black/50 rounded-xl p-3">
          <svg className="transform -rotate-90" width={size} height={size}>
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#1A1A1C"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#26a1ff"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Popup Container */}
        <div
          className={`absolute bottom-[calc(100%+0.5rem)] right-0 w-96 transform transition-all duration-500 ${
            showPopup
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Efeito de Brilho */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          {/* Conteúdo do Popup */}
          <div className="relative bg-background-secondary border-2 border-accent rounded-lg p-6 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-bold mb-2">Oferta Especial!</h3>
              <p className="text-base mb-4 text-text-secondary">
                Parabéns por chegar até aqui! Como agradecimento, preparamos uma
                condição exclusiva: 20% de desconto no primeiro mês de serviços.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <Button
                  className="w-full bg-accent text-white hover:bg-accent/90 py-3 text-lg font-semibold animate-pulse"
                  onClick={() => {
                    window.open(
                      "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20resgatar%20meu%20*DESCONTO%20DE%2020%25%20NO%20PRIMEIRO%20M%C3%8AS%20DE%20SERVI%C3%87OS*%20imediatamente!",
                      "_blank"
                    );
                  }}
                >
                  Aproveitar Agora!
                </Button>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-text-secondary hover:text-text transition-colors text-sm"
                >
                  Deixar para depois
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
