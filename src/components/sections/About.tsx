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

  const stats = [
    {
      number: "8x",
      label: "Mais agilidade",
    },
    {
      number: "360°",
      label: "Soluções completas",
    },
    {
      number: "100%",
      label: "Soluções personalizadas",
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          {/* <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-background-secondary border border-border rounded-lg">
              <div className="h-full w-full flex items-center justify-center text-text-secondary">
                <p className="text-lg">Image Placeholder</p>
              </div> */}
          {/* Gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60"></div>
            </div>
          </div> */}

          {/* Conteúdo */}
          <div className="space-y-6">
            <div>
              <h4 className="text-accent font-medium mb-2">Quem Somos</h4>
              <h2 className="text-4xl font-bold mb-4">
                Uma equipe apaixonada por criar soluções digitais inovadoras
              </h2>
              <p className="text-text-secondary text-lg">
                Combinamos experiência técnica com criatividade para transformar
                ideias em realidade digital. Nossa missão é entregar soluções
                que não apenas atendam, mas superem as expectativas dos nossos
                clientes.
              </p>
            </div>

            {/* Stats em linha horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards de valores */}
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
