import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WA_LINK } from "@/lib/contact";

const CtaSection = () => {
  const ref = useScrollReveal({ direction: "up", distance: 60, duration: 800 });

  return (
    <section className="py-20 px-6">
      <div
        ref={ref}
        className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 glow-border"
      >
        <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
          Pronto para resolver?
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Sua instalação merece quem
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          <span className="font-serif-italic text-gradient-blue">entende do assunto.</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Pare de adiar aquele reparo, automação ou manutenção. Fale com a AE Solutions agora
          mesmo e tenha um diagnóstico técnico rápido, claro e sem compromisso.
        </p>

        <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Atendimento em até <strong className="text-foreground">2 horas</strong> · Plantão 24h
          </span>
        </div>

        <div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            CHAMAR PELO WHATSAPP
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Orçamento sem compromisso · Garantia por escrito
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
