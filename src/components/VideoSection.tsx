import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, MapPin, Clock } from "lucide-react";
import { COMPANY, WA_LINK } from "@/lib/contact";

const stats = [
  { label: "Anos de experiência", value: "10+" },
  { label: "Atendimentos realizados", value: "+2K" },
  { label: "Avaliação dos clientes", value: "4.9★" },
];

const VideoSection = () => {
  const textRef = useScrollReveal({ direction: "left" });
  const cardRef = useScrollReveal({ direction: "right", delay: 200 });

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef}>
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Atendimento técnico
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Resolvemos rápido,
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="font-serif-italic text-gradient-blue">do jeito certo.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Da emergência elétrica à manutenção programada da sua indústria. Estamos prontos
              para diagnosticar, executar e garantir o pleno funcionamento da sua instalação —
              com técnicos certificados e ferramentas profissionais.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="glass-card px-3 py-4 rounded-xl text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:scale-105"
            >
              CHAMAR NO WHATSAPP
            </a>
          </div>

          <div ref={cardRef} className="glass-card rounded-2xl p-8 glow-border space-y-5">
            <h4 className="text-2xl font-bold">Fale com a {COMPANY.name}</h4>
            <p className="text-muted-foreground text-sm">
              Atendemos Santo André, ABC e toda a região metropolitana de São Paulo.
            </p>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefone / WhatsApp</p>
                  <p className="font-semibold">{COMPANY.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Endereço</p>
                  <p className="font-semibold text-sm">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Horário</p>
                  <p className="font-semibold text-sm">Seg a Sáb · 8h às 19h · Emergência 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
