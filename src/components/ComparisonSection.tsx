import { X, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const badPoints = [
  "Profissional sem qualificação técnica",
  "Improviso e gambiarra na instalação",
  "Sem laudo, sem nota, sem garantia",
  "Atrasos e desaparecimento após o pagamento",
  "Risco de curto-circuito e incêndio",
  "Problema volta poucos dias depois",
];

const goodPoints = [
  "Técnicos formados e certificados",
  "Execução conforme normas ABNT/NBR",
  "Garantia por escrito em todo serviço",
  "Pontualidade e horário combinado",
  "Materiais de primeira linha",
  "Suporte e acompanhamento pós-serviço",
];

const ComparisonSection = () => {
  const headingRef = useScrollReveal({ direction: "up" });
  const badRef = useScrollReveal({ direction: "left", delay: 200 });
  const goodRef = useScrollReveal({ direction: "right", delay: 400 });

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-14">
          <p className="text-muted-foreground mb-2">Compare antes de contratar</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você prefere para a sua{" "}
            <span className="font-serif-italic text-gradient-blue">instalação?</span>
          </h2>
          <p className="text-muted-foreground">
            Eletricidade e refrigeração não admitem improviso. Veja a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div ref={badRef} className="glass-card rounded-2xl p-8 border-destructive/30">
            <h3 className="text-xl font-bold mb-6 text-destructive">
              Técnico sem qualificação
            </h3>
            <ul className="space-y-4">
              {badPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={goodRef} className="glass-card rounded-2xl p-8 glow-border">
            <h3 className="text-xl font-bold mb-6">AE Solutions</h3>
            <ul className="space-y-4">
              {goodPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
