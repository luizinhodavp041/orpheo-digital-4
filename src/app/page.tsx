import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
    </main>
  );
}
