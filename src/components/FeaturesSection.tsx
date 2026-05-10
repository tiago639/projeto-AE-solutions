import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BadgeCheck, Clock, ShieldCheck, Award } from "lucide-react";

const features = [
  {
    tag: "TÉCNICOS QUALIFICADOS",
    title: "Equipe formada e certificada",
    description:
      "Técnicos formados em Eletromecânica, Eletroeletrônica, Automação e Mecânica de Refrigeração, com NR-10, NR-35 e experiência em ambientes residenciais, comerciais e industriais.",
    Icon: Award,
    stats: [
      { label: "Formação", value: "Técnica completa" },
      { label: "Normas", value: "NR-10 / NR-35" },
    ],
  },
  {
    tag: "ATENDIMENTO ÁGIL",
    title: "Diagnóstico no mesmo dia",
    description:
      "Você descreve o problema, agendamos a visita técnica e levamos as ferramentas certas. Sem retrabalho, sem improviso. Atendimento emergencial 24h para falhas críticas.",
    Icon: Clock,
    stats: [
      { label: "Resposta", value: "Em até 2h" },
      { label: "Emergência", value: "24h / 7 dias" },
    ],
  },
  {
    tag: "SEGURANÇA EM PRIMEIRO LUGAR",
    title: "Serviço com responsabilidade técnica",
    description:
      "Cada serviço é executado seguindo as normas da ABNT e laudos quando necessário. Sua instalação fica segura, eficiente e dentro da legalidade — protegendo pessoas e equipamentos.",
    Icon: ShieldCheck,
    stats: [
      { label: "Conformidade", value: "ABNT / NBR" },
      { label: "Laudos", value: "Emitidos" },
    ],
  },
  {
    tag: "GARANTIA DE SERVIÇO",
    title: "Trabalho garantido por escrito",
    description:
      "Todo serviço executado pela AE Solutions tem garantia formal. Se algo der errado dentro do prazo, retornamos sem custo adicional. É assim que se constrói confiança.",
    Icon: BadgeCheck,
    stats: [
      { label: "Garantia", value: "Até 12 meses" },
      { label: "Suporte", value: "Pós-serviço" },
    ],
  },
];

const FeatureCard = ({ f, i }: { f: typeof features[0]; i: number }) => {
  const ref = useScrollReveal({ direction: "up", delay: i * 100 });
  const Icon = f.Icon;
  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-8 hover:border-primary/50 hover:scale-[1.02] transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">
        {f.tag}
      </span>
      <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3">{f.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm mb-5">{f.description}</p>
      <div className="flex flex-wrap gap-3">
        {f.stats.map((s, j) => (
          <div key={j} className="px-4 py-2 rounded-lg bg-secondary/60 border border-border">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
            <p className="text-sm font-semibold text-primary">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const headingRef = useScrollReveal({ direction: "up" });

  return (
    <section id="diferenciais" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Por que AE Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engenharia, segurança e{" "}
            <span className="font-serif-italic text-gradient-blue">resultado real.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não somos apenas mais um chamado técnico. Somos parceiros que cuidam da sua estrutura
            elétrica e mecânica como se fosse nossa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
