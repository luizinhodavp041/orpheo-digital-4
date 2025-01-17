"use client"
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
  Target,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Calendar className="h-6 w-6 text-accent" />,
    title: "Cronograma Estratégico",
    description:
      "Planejamento personalizado e estratégico para alcançar seus objetivos de negócio.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Cronograma%20Estrat%C3%A9gico*!",
    
  },
  {
    icon: <Activity className="h-6 w-6 text-accent" />,
    title: "Gestão de Tráfego",
    description:
      "Estratégias eficientes de tráfego pago para maximizar seu retorno sobre investimento.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Gest%C3%A3o%20de%20Tr%C3%A1fego*!",
  },
  {
    icon: <Share2 className="h-6 w-6 text-accent" />,
    title: "Redes Sociais",
    description:
      "Gerenciamento completo de redes sociais para fortalecer sua presença digital.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Redes%20Sociais*!",
  },
  {
    icon: <Globe className="h-6 w-6 text-accent" />,
    title: "Presença Online",
    description:
      "Gestão estratégica da sua presença digital para construir autoridade e visibilidade.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Presen%C3%A7a%20Online*!",
  },
  {
    icon: <Code2 className="h-6 w-6 text-accent" />,
    title: "Desenvolvimento Web",
    description:
      "Criação de sites, plataformas, sistemas e landing pages otimizados e responsivos.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Desenvolvimento%20Web*!",
  },
  {
    icon: <Palette className="h-6 w-6 text-accent" />,
    title: "Branding e Design",
    description:
      "Design estratégico e identidade visual que conecta sua marca com seu público.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Branding%20e%20Design*!",
  },
  {
    icon: <Settings className="h-6 w-6 text-accent" />,
    title: "Automação de Processos",
    description:
      "Soluções de automação empresarial para otimizar e escalar suas operações.",
    buttonText: "Eu quero",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20*Automa%C3%A7%C3%A3o%20de%20Processos*!",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-accent" />,
    title: "Não Encontrou o Que Procura?",
    description:
      "Cada negócio é único. Conte-nos seu desafio e descubra como podemos ajudar sua empresa a crescer.",
    buttonText: "Fale conosco",
    link: "https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20oferecem!",
  },
];

export function Services() {
  return (
    <section
      className="py-20 relative scroll-margin-top-38"
      id="services"
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
              className="relative mt-5 flex flex-col justify-between p-6 bg-background-secondary border-border hover:border-accent transition-all duration-300 overflow-hidden h-full"
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
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
              </div>

              {/* Pattern de bolinhas */}
              <div
                className="absolute inset-0 mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0, 220, 130, 0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0",
                }}
              ></div>

              <div className="relative z-20 flex flex-col h-full">
                <div>
                  <div className="rounded-lg p-3 bg-background inline-flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>

                {/* Botão centralizado verticalmente */}
                <div className="mt-auto">
                  <Link href={service.link} passHref>
                    <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all">
                      {service.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
