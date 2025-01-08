// components/sections/Cta.tsx
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fireworks } from "@/components/sections/Fireworks";

export function Cta() {
  return (
    <section id="cta-section" className="relative py-20">
      {/* Fireworks background */}
      <div className="absolute inset-0 -z-10">
        <Fireworks />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-background/80 backdrop-blur-sm">
          <div className="relative px-8 py-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
              Start building your next project today
            </h2>
            <p className="text-lg mb-8 text-text-secondary max-w-2xl mx-auto">
              Join thousands of developers and teams who are already creating
              amazing products with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-background hover:bg-accent/90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-text text-text hover:bg-text hover:text-background transition-colors"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
