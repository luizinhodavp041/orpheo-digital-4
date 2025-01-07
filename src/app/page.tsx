import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Objections } from "@/components/sections/Objections";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/ui/Footer";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <Objections />
      <Cta />
      <Footer />
    </main>
  );
}
