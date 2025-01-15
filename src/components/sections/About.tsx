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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Conteúdo Principal */}
        <div className="space-y-8 mb-16">
          <div>
            <h4 className="text-accent font-medium mb-4">Quem Somos</h4>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Uma equipe apaixonada por criar soluções digitais inovadoras
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Combinamos experiência técnica com criatividade para transformar
              ideias em realidade digital. Nossa missão é entregar soluções que
              não apenas atendam, mas superem as expectativas dos nossos
              clientes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards de valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
