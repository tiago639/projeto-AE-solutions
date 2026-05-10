import { useRef, useEffect } from "react";
import {
  Snowflake, Zap, Cpu, Wrench, Sun, Thermometer, ShieldCheck, Settings,
} from "lucide-react";

const services = [
  { icon: Snowflake, title: "Refrigeração",        desc: "Instalação, higienização e manutenção de ar-condicionado split, multi-split e câmaras frias.",                          color: "#69C3FF" },
  { icon: Zap,       title: "Instalações Elétricas",desc: "Projetos elétricos residenciais, comerciais e industriais conforme NBR 5410.",                                          color: "#FFD700" },
  { icon: Cpu,       title: "Automação Industrial", desc: "Comandos, CLP, inversores de frequência, sensores e quadros de automação sob medida.",                                 color: "#0A74FF" },
  { icon: Wrench,    title: "Eletromecânica",       desc: "Manutenção corretiva e preventiva em motores, bombas, compressores e máquinas operatrizes.",                           color: "#FF8C42" },
  { icon: Sun,       title: "Energia Solar",        desc: "Análise, instalação e manutenção de sistemas fotovoltaicos on-grid para casa e empresa.",                              color: "#FFD700" },
  { icon: Thermometer,title:"Climatização",         desc: "Dimensionamento térmico, troca de gás (R22, R32, R410A) e laudos técnicos PMOC.",                                     color: "#69C3FF" },
  { icon: ShieldCheck,title:"Laudos & SPDA",        desc: "Aterramento, para-raios, laudos NR-10 e adequações para conformidade técnica.",                                        color: "#4CAF50" },
  { icon: Settings,  title: "Painéis & Quadros",   desc: "Montagem de quadros de distribuição, comando e força com componentes de alta confiabilidade.",                         color: "#0A74FF" },
];

/* Card que anima automaticamente ao entrar na tela */
const ServiceCard = ({
  icon: Icon, title, desc, color, index,
}: { icon: any; title: string; desc: string; color: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Estado inicial invisível
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        // 1) Entrada com delay escalonado
        setTimeout(() => {
          el.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 90);

        // 2) Depois que entrou, ativa o loop de pulso elétrico
        setTimeout(() => {
          el.style.transition = "";
          el.classList.add("card-electric-loop");
        }, index * 90 + 700);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-6 relative overflow-hidden cursor-default"
      style={{ "--card-color": color } as React.CSSProperties}
    >
      {/* Linha de energia no topo — animação automática contínua */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
            animation: `scan-bar 2.5s linear ${index * 0.3}s infinite`,
          }}
        />
      </div>

      {/* Brilho de fundo pulsante */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${color}18 0%, transparent 65%)`,
          animation: `bg-pulse 3s ease-in-out ${index * 0.25}s infinite`,
        }}
      />

      {/* Ícone com glow pulsante */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
        style={{ background: `${color}18` }}
      >
        <Icon
          className="w-6 h-6"
          style={{
            color,
            filter: `drop-shadow(0 0 6px ${color})`,
            animation: `icon-pulse 2.8s ease-in-out ${index * 0.2}s infinite`,
          }}
        />
        {/* Spark mini que dispara sozinho */}
        <svg
          className="absolute -top-1 -right-1 pointer-events-none"
          width="10" height="14" viewBox="0 0 10 14"
          style={{ animation: `spark-auto 2.8s ease-in-out ${index * 0.2 + 0.4}s infinite` }}
        >
          <path d="M5,0 L2,7 L5,5.5 L1,14 L8,6 L5,7.5 Z" fill={color} />
        </svg>
      </div>

      <h3 className="font-bold text-lg mb-2" style={{ color: "inherit" }}>{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

      <style>{`
        @keyframes scan-bar {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes bg-pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes icon-pulse {
          0%, 100% { filter: drop-shadow(0 0 4px var(--card-color, #0A74FF)); transform: scale(1);   }
          50%       { filter: drop-shadow(0 0 10px var(--card-color, #0A74FF)); transform: scale(1.12); }
        }
        @keyframes spark-auto {
          0%, 60%, 100% { opacity: 0; transform: scale(0) rotate(0deg);   }
          70%            { opacity: 1; transform: scale(1.3) rotate(20deg); }
          90%            { opacity: 0; transform: scale(0.5) translateY(-6px) rotate(-10deg); }
        }
      `}</style>
    </div>
  );
};

const PortfolioSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      obs.unobserve(el);
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 px-6">
      <div ref={headingRef} className="max-w-6xl mx-auto text-center mb-14">
        <p className="text-primary font-semibold uppercase tracking-[0.25em] text-xs mb-4">
          Nossos Serviços
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tudo que sua operação precisa,{" "}
          <span className="font-serif-italic text-gradient-blue">em um só time técnico.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Da tomada queimada à automação completa de uma planta industrial — atendemos com
          engenharia, segurança e responsabilidade.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} color={s.color} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
