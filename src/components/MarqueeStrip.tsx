const items = [
  "Eletromecânica",
  "Automação",
  "Refrigeração",
  "Eletroeletrônica",
  "Painéis Elétricos",
  "Manutenção Preventiva",
  "Atendimento 24h",
];

const MarqueeStrip = () => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-6 border-y border-border bg-secondary/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2"
          >
            <svg width="10" height="14" viewBox="0 0 10 14" className="inline-block flex-shrink-0">
              <path d="M5,0 L2,6 L5,5 L1,14 L8,6 L5,7 Z" fill="currentColor" opacity="0.5" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
