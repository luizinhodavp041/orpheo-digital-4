import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
    </main>
  );
}
