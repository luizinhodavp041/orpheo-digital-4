"use client";

import { Card } from "@/components/ui/card";
import {
  Rocket,
  Shield,
  Zap,
  Code2,
  LineChart,
  Users,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-6 w-6 text-accent" />,
    title: "API Integration",
    description:
      "Seamless API integration with extensive documentation and support.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-accent" />,
    title: "Quick Deploy",
    description:
      "Deploy your applications in seconds with our streamlined infrastructure.",
  },
  {
    icon: <Shield className="h-6 w-6 text-accent" />,
    title: "Enterprise Security",
    description:
      "Bank-grade security with advanced encryption and compliance features.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "High Performance",
    description:
      "Lightning-fast performance with global edge network distribution.",
  },
  {
    icon: <Code2 className="h-6 w-6 text-accent" />,
    title: "Developer Tools",
    description:
      "Comprehensive suite of tools to boost your development workflow.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-accent" />,
    title: "Analytics",
    description:
      "Deep insights and metrics to understand your application's performance.",
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Team Collaboration",
    description:
      "Built-in features for seamless team coordination and management.",
  },
  {
    icon: <Cloud className="h-6 w-6 text-accent" />,
    title: "Cloud Storage",
    description: "Scalable cloud storage solutions with automatic backups.",
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
            Everything you need to scale
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive suite of tools and services to help you build, deploy,
            and grow your applications.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative flex flex-col p-6 bg-background-secondary border-border hover:border-accent transition-colors duration-300 overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Gradientes dentro do card */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#111113] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#111113] to-transparent z-10"></div>

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
