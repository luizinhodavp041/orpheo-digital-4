"use client";

import { Card } from "@/components/ui/card";
import {
  Code2,
  Calendar,
  Activity,
  Share2,
  Globe,
  Palette,
  Settings,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: <Calendar className="h-6 w-6 text-accent" />,
    title: "Cronograma Estratégico",
    description:
      "Planejamento personalizado e estratégico para alcançar seus objetivos de negócio.",
  },
  {
    icon: <Activity className="h-6 w-6 text-accent" />,
    title: "Gestão de Tráfego",
    description:
      "Estratégias eficientes de tráfego pago para maximizar seu retorno sobre investimento.",
  },
  {
    icon: <Share2 className="h-6 w-6 text-accent" />,
    title: "Redes Sociais",
    description:
      "Gerenciamento completo de redes sociais para fortalecer sua presença digital.",
  },
  {
    icon: <Globe className="h-6 w-6 text-accent" />,
    title: "Presença Online",
    description:
      "Gestão estratégica da sua presença digital para construir autoridade e visibilidade.",
  },
  {
    icon: <Code2 className="h-6 w-6 text-accent" />,
    title: "Desenvolvimento Web",
    description:
      "Criação de sites, plataformas, sistemas e landing pages otimizados e responsivos.",
  },
  {
    icon: <Palette className="h-6 w-6 text-accent" />,
    title: "Branding e Design",
    description:
      "Design estratégico e identidade visual que conecta sua marca com seu público.",
  },
  {
    icon: <Settings className="h-6 w-6 text-accent" />,
    title: "Automação de Processos",
    description:
      "Soluções de automação empresarial para otimizar e escalar suas operações.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-accent" />,
    title: "Não Encontrou o Que Procura?",
    description:
      "Cada negócio é único. Conte-nos seu desafio e descubra como podemos ajudar sua empresa a crescer.",
    buttonText: "Vamos Conversar",
  },
];

export function Services() {
  return (
    <section
      className="py-20 relative"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa para escalar
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Conjunto completo de ferramentas e serviços para ajudar você a
            desenvolver, lançar e escalar suas aplicações
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative flex flex-col p-6 bg-background-secondary border-border hover:border-accent transition-all duration-300 overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Gradientes dentro do card */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#111113] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#111113] to-transparent z-10"></div>

              {/* Gradiente e pattern fixos */}
              <div className="absolute inset-0">
                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
              </div>

              {/* Pattern de bolinhas - Sempre visível */}
              <div
                className="absolute inset-0 mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0, 220, 130, 0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0",
                }}
              ></div>

              <div className="relative z-20">
                <div className="rounded-lg p-3 bg-background inline-flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
