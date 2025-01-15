import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      content:
        "A implementação da estratégia digital superou nossas expectativas. O retorno sobre investimento em mídia cresceu 85% nos primeiros 3 meses.",
      author: "Marina Almeida",
      rating: 5,
    },
    {
      content:
        "O comprometimento da equipe é excepcional. Desde o planejamento até a execução, cada detalhe é cuidadosamente pensado para gerar resultados.",
      author: "Ricardo Santos",
      rating: 5,
    },
    {
      content:
        "A automação dos processos reduziu em 60% nosso tempo operacional. A expertise técnica e estratégica da equipe fez toda diferença.",
      author: "Carla Mendes",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Histórias de Sucesso
          </h2>
          <p className="text-lg text-text-secondary">
            Conheça os resultados reais que nossos clientes alcançaram com
            nossas soluções digitais integradas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-secondary rounded-lg border border-border hover:border-accent transition-colors duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="font-medium text-text-secondary mt-4">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
