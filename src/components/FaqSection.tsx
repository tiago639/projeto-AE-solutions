import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quais regiões a AE Solutions atende?",
    a: "Atendemos Santo André e toda a região do ABC e Grande São Paulo. Para serviços de maior porte, podemos avaliar atendimentos em outras cidades sob consulta.",
  },
  {
    q: "Vocês emitem nota fiscal e dão garantia?",
    a: "Sim. Todo serviço executado pela AE Solutions é acompanhado de nota fiscal e garantia formal por escrito, que pode chegar a 12 meses dependendo do tipo de instalação.",
  },
  {
    q: "Em quanto tempo recebo o atendimento?",
    a: "Para chamados padrão respondemos em até 2 horas e agendamos a visita técnica geralmente para o mesmo dia ou no dia seguinte. Para emergências (curto, queda de energia, vazamento de gás), temos plantão 24h.",
  },
  {
    q: "Vocês instalam ar-condicionado e fazem PMOC?",
    a: "Sim. Instalamos splits, multi-splits e VRF, fazemos higienização, troca de gás (R22, R32, R410A) e elaboramos o PMOC (Plano de Manutenção, Operação e Controle) exigido para ambientes comerciais.",
  },
  {
    q: "Trabalham com automação industrial?",
    a: "Sim. Programamos CLPs, instalamos inversores de frequência, sensores, soft-starters e montamos painéis de comando completos para indústrias e galpões.",
  },
  {
    q: "Como é feito o orçamento?",
    a: "Para serviços simples conseguimos fechar valor pelo WhatsApp. Para projetos maiores agendamos uma visita técnica gratuita, levantamos o que precisa ser feito e enviamos uma proposta detalhada.",
  },
  {
    q: "Vocês fazem instalação de energia solar?",
    a: "Sim. Fazemos análise de viabilidade, dimensionamento, instalação e homologação junto à concessionária do seu sistema fotovoltaico residencial ou comercial.",
  },
  {
    q: "Atendem aos finais de semana?",
    a: "Sim. Aos sábados temos atendimento normal das 8h às 19h. Aos domingos e feriados, atendemos somente em regime de plantão emergencial.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          Perguntas frequentes
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Dúvidas comuns,{" "}
          <span className="font-serif-italic text-gradient-blue">respostas claras.</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
