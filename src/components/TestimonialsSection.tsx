import { useRef, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Carlos Mendes", role: "Proprietário · Padaria Alvorada", text: "Instalaram dois splits novos no salão e a câmara fria voltou a refrigerar como nova. Equipe pontual, limpa e explicou tudo. Recomendo de olhos fechados." },
  { name: "Juliana Ferreira", role: "Síndica · Edifício Jardim SP", text: "Fizeram a manutenção do quadro elétrico do prédio e adequação NR-10. Laudo emitido, tudo dentro da norma. Profissionais sérios, é raro hoje em dia." },
  { name: "Rodrigo Alves", role: "Diretor industrial · Metalúrgica RS", text: "Automatizaram a linha de produção com CLP e inversores. Reduzimos parada de máquina em mais de 60%. Time técnico de altíssimo nível." },
  { name: "Patrícia Souza", role: "Cliente residencial", text: "Liguei de noite com a geladeira pingando água. Vieram no dia seguinte cedinho, trocaram a peça e ainda higienizaram. Preço justo e atendimento excelente." },
  { name: "Marcos Lima", role: "Gerente · Restaurante Sabor & Cia", text: "Cuidam da nossa cozinha industrial inteira: refrigeração, exaustão e quadro elétrico. Manutenção preventiva mensal e nunca tivemos problema." },
  { name: "Aline Rocha", role: "Cliente · Energia Solar", text: "Instalaram meu sistema fotovoltaico em 3 dias. Conta de luz caiu mais de 80%. Fizeram tudo certo, com homologação e tudo. Top demais!" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"left"|"right">("right");
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go("right"), 5000);
    return () => clearInterval(t);
  }, [active]);

  const go = (direction: "left"|"right") => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setActive(prev => direction === "right" ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 350);
  };

  const t = testimonials[active];

  return (
    <section id="depoimentos" className="py-20 px-6 overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
      >
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-[0.25em] text-xs mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Quem contratou,{" "}
            <span className="font-serif-italic text-gradient-blue">aprovou.</span>
          </h2>
        </div>

        {/* Card principal com animação slide */}
        <div className="relative">
          {/* Círculo decorativo atrás */}
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

          <div
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              animation: animating
                ? `slide-${dir === "right" ? "out-left" : "out-right"} 0.35s ease forwards`
                : `slide-in-${dir === "right" ? "right" : "left"} 0.4s cubic-bezier(0.16,1,0.3,1) forwards`,
            }}
          >
            {/* Linha elétrica no topo animada */}
            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-3xl">
              <div style={{ height: "100%", background: "linear-gradient(90deg, transparent, #0A74FF, #69C3FF, transparent)", animation: "scan-line 3s linear infinite" }} />
            </div>

            <Quote className="w-10 h-10 text-primary/20 mb-6" />

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8 italic">
              "{t.text}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar com iniciais */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm border border-primary/30"
                  style={{ background: "linear-gradient(135deg, #0A74FF, #0047CC)" }}
                >
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" style={{ animation: `star-pop 0.4s ease ${i * 80}ms both` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > active ? "right" : "left"); setActive(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{ width: i === active ? 24 : 8, height: 8, background: i === active ? "#0A74FF" : "rgba(255,255,255,0.2)" }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go("left")} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-all hover:scale-110">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => go("right")} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-all hover:scale-110">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-right { from{opacity:0;transform:translateX(60px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slide-in-left  { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slide-out-left { from{opacity:1;transform:translateX(0)} to{opacity:0;transform:translateX(-60px)} }
        @keyframes slide-out-right{ from{opacity:1;transform:translateX(0)} to{opacity:0;transform:translateX(60px)} }
        @keyframes scan-line { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        @keyframes star-pop { 0%{opacity:0;transform:scale(0) rotate(-30deg)} 60%{transform:scale(1.3) rotate(10deg)} 100%{opacity:1;transform:scale(1) rotate(0deg)} }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
