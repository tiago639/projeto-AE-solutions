import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPANY, WA_LINK } from "@/lib/contact";

const AboutSection = () => {
  const textRef = useScrollReveal({ direction: "left" });
  const imgRef = useScrollReveal({ direction: "right", delay: 200 });

  return (
    <section id="sobre" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef}>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Quem somos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Conhecimento técnico,
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="font-serif-italic text-gradient-blue">execução impecável.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                A {COMPANY.name} nasceu da união entre formação técnica e paixão por engenharia.
                Somos especialistas em <strong className="text-foreground">eletromecânica,
                automação, eletroeletrônica e mecânica de refrigeração</strong>.
              </p>
              <p>
                Atendemos residências, comércios e indústrias em Santo André e em toda a Grande
                São Paulo, com foco em segurança, qualidade e durabilidade do serviço.
              </p>
              <p>
                Cada atendimento começa com diagnóstico técnico, é executado por profissionais
                certificados e termina com garantia por escrito. Sem improviso, sem retrabalho,
                sem dor de cabeça pra você.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 mb-8">
              <div className="glass-card px-5 py-3 rounded-xl text-center">
                <p className="text-xs text-muted-foreground">Atendimentos</p>
                <p className="text-xl font-bold text-primary">+2.000</p>
              </div>
              <div className="glass-card px-5 py-3 rounded-xl text-center">
                <p className="text-xs text-muted-foreground">Anos no mercado</p>
                <p className="text-xl font-bold text-primary">10+</p>
              </div>
              <div className="glass-card px-5 py-3 rounded-xl text-center">
                <p className="text-xs text-muted-foreground">Avaliação média</p>
                <p className="text-xl font-bold text-primary">4.9 ★</p>
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:scale-105"
            >
              FALAR COM A EQUIPE
            </a>
          </div>

          <div ref={imgRef} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={COMPANY.logo}
                alt={`${COMPANY.name}`}
                className="relative rounded-2xl max-w-md w-full border border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
