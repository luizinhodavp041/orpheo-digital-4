// components/sections/Cta.tsx
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-accent">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>

          <div className="relative px-8 py-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
              Start building your next project today
            </h2>
            <p className="text-lg mb-8 text-background/90 max-w-2xl mx-auto">
              Join thousands of developers and teams who are already creating
              amazing products with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-background text-accent hover:bg-background/90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-accent transition-colors"
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
