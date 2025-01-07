import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative">
      {/* Gradiente sutil no topo do Hero para melhorar legibilidade do header */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background-secondary/80">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <p className="text-sm text-text-secondary">
                New Feature Released
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-text to-text-secondary bg-clip-text text-transparent">
            Build Something Amazing With Our Platform
          </h1>

          <p className="text-lg md:text-xl text-text-secondary mb-8 mx-auto">
            Transform your ideas into reality with our powerful tools and modern
            infrastructure. Start building today and join thousands of
            successful creators.
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
              variant="outline"
              className="border-border text-text hover:bg-background-secondary/50"
            >
              View Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "100+", label: "Features" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-text">{stat.number}</p>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
