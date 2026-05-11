import { BeachIcon, BreakfastIcon, PinIcon, WellnessIcon } from "./icons";

const benefits = [
  {
    title: "Beira-mar",
    description: "A poucos passos da praia.",
    icon: BeachIcon,
  },
  {
    title: "Café da manhã",
    description: "Feito com carinho, todos os dias.",
    icon: BreakfastIcon,
  },
  {
    title: "Bem-estar",
    description: "Ambientes para relaxar corpo e mente.",
    icon: WellnessIcon,
  },
  {
    title: "Localização",
    description: "Próxima às melhores atrações da região.",
    icon: PinIcon,
  },
];

export function BenefitsSection() {
  return (
    <section id="atracoes" className="benefits-section" aria-label="Beneficios da pousada">
      <div className="container benefits-grid">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article className="benefit-item" key={benefit.title}>
              <Icon />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
