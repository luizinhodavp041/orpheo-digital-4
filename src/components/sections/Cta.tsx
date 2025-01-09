// components/sections/Cta.tsx
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fireworks } from "@/components/sections/Fireworks";

export function Cta() {
  return (
    <section id="cta-section" className="relative h-[400px] flex items-center">
      {/* Background base */}
      <div className="absolute inset-0 bg-background" />

      {/* Fireworks layer */}
      <div className="absolute inset-0">
        <Fireworks />
      </div>

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-background/30 backdrop-blur-sm">
          <div className="px-8 py-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg mb-8 text-text-secondary max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como nossas soluções
              digitais podem impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-background hover:bg-accent/90"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button
                size="lg"
                className="bg-transparent border-2 border-text text-text hover:bg-text hover:text-background transition-colors"
              >
                Contact Sales
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
