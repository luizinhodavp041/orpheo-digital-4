// components/sections/Features.tsx
import { Check, Triangle } from "lucide-react";

export function Features() {
  const featuresList = {
    first: [
      "Planejamento estratégico baseado em dados e resultados",
      "Gestão integrada de campanhas e redes sociais",
      "Automação inteligente de processos empresariais",
      "Suporte especializado em todas as etapas do projeto",
    ],
    second: [
      "Desenvolvimento de plataformas sob medida",
      "Análise em tempo real do desempenho digital",
      "Design e branding com foco em conversão",
      "Otimização constante de resultados",
    ],
  };

  const FeatureList = ({
    features,
    variant = "check",
  }: {
    features: string[];
    variant?: "check" | "triangle";
  }) => (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="mt-1">
            {variant === "check" ? (
              <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="h-4 w-4 text-accent" />
              </div>
            ) : (
              <Triangle className="h-4 w-4 text-accent rotate-90 fill-accent" />
            )}
          </div>
          <p className="text-text-secondary">{feature}</p>
        </div>
      ))}
    </div>
  );

  const ImagePlaceholder = () => (
    <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-background-secondary border border-border rounded-lg">
        <div className="h-full w-full flex items-center justify-center text-text-secondary">
          <p className="text-lg">Image Placeholder</p>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60"></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Feature Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Acelere o crescimento do seu negócio com soluções digitais
              integradas
            </h2>

            <p className="text-lg text-text-secondary">
              Combinamos tecnologia e estratégia para criar um ecossistema
              digital que potencializa os resultados da sua empresa.
            </p>

            <FeatureList features={featuresList.first} variant="check" />
          </div>

          <ImagePlaceholder />
        </div>

        {/* Second Feature Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ImagePlaceholder />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Desbloqueie todo o potencial do seu negócio no ambiente digital
            </h2>

            <p className="text-lg text-text-secondary">
              Da estratégia à implementação, nossa equipe especializada
              desenvolve soluções que impulsionam seu crescimento.
            </p>

            <FeatureList features={featuresList.second} variant="triangle" />
          </div>
        </div>
      </div>
    </section>
  );
}
