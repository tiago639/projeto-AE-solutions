import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { COMPANY, WA_LINK } from "@/lib/contact";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const loadTubes = () => {
      const canvas = canvasRef.current;
      const section = sectionRef.current;
      if (!canvas || !section) return;

      const initTubes = () => {
        const TubesCursor = (window as any).TubesCursor;
        if (!TubesCursor) return;

        const sizeCanvas = () => {
          const rect = section.getBoundingClientRect();
          canvas.width = rect.width * devicePixelRatio;
          canvas.height = rect.height * devicePixelRatio;
        };
        sizeCanvas();
        window.addEventListener("resize", sizeCanvas);

        TubesCursor(canvas, {
          tubes: {
            colors: ["#0A74FF", "#0C9BFF", "#69C3FF"],
            lights: {
              intensity: 280,
              colors: ["#4FC3FF", "#A8E4FF", "#0A74FF", "#0047FF"],
            },
          },
        });
        canvas.style.filter = "blur(0.5px) brightness(1.1)";

        cleanup = () => window.removeEventListener("resize", sizeCanvas);
      };

      if ((window as any).TubesCursor) {
        initTubes();
        return;
      }

      const script = document.createElement("script");
      script.src = "/tubes1.min.js";
      script.onload = initTubes;
      document.head.appendChild(script);
    };

    loadTubes();
    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="topo"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo removida */}

        <p className="text-primary text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
          {COMPANY.tagline}
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Soluções técnicas que mantêm sua operação{" "}
          <span className="font-serif-italic text-gradient-blue">funcionando.</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
          Instalação, manutenção e automação em sistemas elétricos, eletromecânicos e de refrigeração.
          Atendimento técnico rápido, seguro e garantido em Santo André e toda a Grande São Paulo.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-border animate-pulse-glow transition-all hover:scale-105"
        >
          SOLICITAR ORÇAMENTO
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </a>

        <div className="mt-6 inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Atendimento <strong className="text-foreground">24h emergencial</strong> · Santo André e região
          </span>
        </div>

        <a href="#servicos" className="mt-12 inline-flex animate-float">
          <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;