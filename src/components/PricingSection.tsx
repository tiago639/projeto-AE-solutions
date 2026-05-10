import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";
import { WA_LINK } from "@/lib/contact";

const plans = [
  {
    tab: "Residencial",
    subtitle: "Para sua casa ou apartamento",
    title: "Atendimento Residencial",
    price: "Sob consulta",
    description:
      "Instalação e manutenção elétrica, ar-condicionado split, troca de quadros, automação residencial e pequenos reparos. Visita técnica com diagnóstico preciso.",
    features: [
      "Instalação de ar-condicionado split",
      "Higienização e troca de gás",
      "Reparo elétrico e tomadas",
      "Troca de disjuntores e DR",
      "Instalação de chuveiros e ventiladores",
      "Garantia de 6 meses no serviço",
    ],
  },
  {
    tab: "Comercial",
    subtitle: "Para sua loja, escritório ou restaurante",
    title: "Atendimento Comercial",
    price: "Plano sob medida",
    description:
      "Manutenção preventiva e corretiva para comércios. Refrigeração, climatização, painéis elétricos e adequação às normas. PMOC e laudos inclusos.",
    features: [
      "PMOC para climatização",
      "Manutenção de câmaras frias",
      "Quadros de comando e força",
      "Adequação NR-10",
      "Atendimento prioritário",
      "Contrato mensal disponível",
    ],
  },
  {
    tab: "Industrial",
    subtitle: "Para indústrias e galpões",
    title: "Atendimento Industrial",
    price: "Orçamento técnico",
    description:
      "Eletromecânica, automação com CLP, painéis de comando, manutenção de motores, bombas e linhas de produção. Engenharia aplicada à sua operação.",
    features: [
      "Automação industrial (CLP/IHM)",
      "Manutenção de motores e bombas",
      "Inversores e soft-starters",
      "Painéis elétricos sob medida",
      "Aterramento e SPDA",
      "Plantão técnico 24h",
    ],
  },
];

const PricingSection = () => {
  const [active, setActive] = useState(0);
  const plan = plans[active];
  const headingRef = useScrollReveal({ direction: "up" });
  const cardRef = useScrollReveal({ direction: "up", delay: 200 });

  return (
    <section id="orcamento" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="text-center mb-10">
          <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Atendimento sob medida
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o tipo de{" "}
            <span className="font-serif-italic text-gradient-blue">atendimento.</span>
          </h2>
          <p className="text-muted-foreground">
            Cada cliente, cada operação. Selecione abaixo o seu perfil para ver o que entregamos.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {plans.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <div
          ref={cardRef}
          className="glass-card rounded-2xl p-8 md:p-12 glow-border max-w-2xl mx-auto text-center hover:scale-[1.01] transition-transform duration-500"
        >
          <p className="text-xs text-primary uppercase tracking-wider mb-2">{plan.subtitle}</p>
          <h4 className="text-2xl md:text-3xl font-bold mb-2">{plan.title}</h4>
          <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">{plan.description}</p>

          <ul className="space-y-3 text-left mb-8">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:scale-105 w-full justify-center"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
