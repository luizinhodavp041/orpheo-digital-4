import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Objections() {
  const objections = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Cada projeto tem seu próprio ciclo, mas começamos a implementar melhorias desde o primeiro dia. Definimos metas claras e realizamos acompanhamento constante, com relatórios periódicos para você acompanhar a evolução dos resultados. Geralmente, nossos clientes começam a ver mudanças significativas nos primeiros 90 dias de trabalho.",
    },
    {
      question: "Por que devo escolher vocês como parceiros digitais?",
      answer:
        "Diferente de outras agências, oferecemos soluções verdadeiramente integradas. Nossa equipe multidisciplinar trabalha de forma coordenada, garantindo que cada ação esteja alinhada com sua estratégia global. Além disso, somos transparentes em nossa comunicação e focados em resultados mensuráveis para seu negócio.",
    },
    {
      question: "Como funciona o processo de trabalho?",
      answer:
        "Iniciamos com uma análise completa do seu negócio para entender suas necessidades e objetivos. A partir daí, desenvolvemos um planejamento estratégico personalizado, estabelecemos metas claras e implementamos as soluções de forma estruturada. Você recebe acompanhamento constante e tem acesso direto à nossa equipe durante todo o processo.",
    },
    {
      question:
        "Vocês se adaptam às necessidades específicas da minha empresa?",
      answer:
        "Absolutamente! Cada negócio é único, por isso desenvolvemos estratégias personalizadas para cada cliente. Adaptamos nossos serviços de acordo com seus objetivos, orçamento e necessidades específicas. Nossa abordagem flexível permite que o projeto evolua junto com seu negócio.",
    },
    {
      question: "Quais são os investimentos e formas de pagamento?",
      answer:
        "Oferecemos planos personalizados que se ajustam a diferentes necessidades e orçamentos. O investimento varia de acordo com os serviços contratados e a complexidade do projeto. Trabalhamos com diversas formas de pagamento e podemos criar um plano que se adeque à sua realidade. Entre em contato para uma proposta detalhada.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Respondendo dúvidas Frequentes
          </h2>
          <p className="text-lg text-text-secondary">
            Tire suas principais dúvidas sobre nossos serviços e descubra como
            podemos ajudar seu negócio.
          </p>
        </div>

        {/* Objections Accordion */}
        <div className="max-w-3xl mx-auto" id="objections">
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((objection, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background-secondary border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg hover:text-accent">
                  {objection.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  {objection.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
