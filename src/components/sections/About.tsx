export function About() {
  const values = [
    {
      title: "Compromisso com qualidade",
      description:
        "Cada projeto é tratado com a máxima atenção aos detalhes e qualidade.",
    },
    {
      title: "Inovação constante",
      description:
        "Sempre atualizados com as últimas tecnologias e melhores práticas.",
    },
    {
      title: "Suporte dedicado",
      description:
        "Comunicação clara e suporte contínuo em todas as etapas do projeto.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-background-secondary border border-border rounded-lg">
              {/* Placeholder para a imagem do time */}
              <img
                src="/api/placeholder/800/600"
                alt="Nossa equipe"
                className="w-full h-full object-cover"
              />
              {/* Gradiente overlay para combinar com o tema */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6">
            <div>
              <h4 className="text-accent font-medium mb-2">Quem Somos</h4>
              <h2 className="text-4xl font-bold mb-4">
                Uma equipe apaixonada por criar soluções digitais inovadoras
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Combinamos experiência técnica com criatividade para transformar
                ideias em realidade digital. Nossa missão é entregar soluções
                que não apenas atendam, mas superem as expectativas dos nossos
                clientes.
              </p>
            </div>

            {/* Stats ou highlights */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-text-secondary">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-text-secondary">Projetos entregues</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de valores - Agora em uma linha horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="border border-border p-6 rounded-lg bg-background-secondary hover:border-accent transition-colors duration-300"
            >
              <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
              <p className="text-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
