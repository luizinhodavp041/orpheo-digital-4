"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const size = 60; // Tamanho do círculo em pixels
  const strokeWidth = 3; // Espessura da borda
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener("scroll", calculateScrollProgress);
    calculateScrollProgress(); // Calcula progresso inicial

    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex items-center justify-center">
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Círculo de fundo */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#1A1A1C" // border color
            strokeWidth={strokeWidth}
          />
          {/* Círculo de progresso */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#00DC82" // accent color
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
    </div>
  );
}
