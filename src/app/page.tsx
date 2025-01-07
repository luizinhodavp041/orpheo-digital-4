import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Objections } from "@/components/sections/Objections";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Objections />
      <Cta />
      <Footer />
    </main>
  );
}
