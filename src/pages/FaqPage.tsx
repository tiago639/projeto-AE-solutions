import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
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
  {
    q: "Quais tipos de painéis elétricos vocês montam?",
    a: "Montamos painéis de distribuição, painéis de comando, CCMs (Centro de Controle de Motores), quadros de proteção e automação para instalações residenciais, comerciais e industriais.",
  },
  {
    q: "Realizam laudos e projetos elétricos?",
    a: "Sim. Elaboramos laudos de instalações elétricas (SPDA, aterramento, adequação NR-10), projetos elétricos conforme NBR 5410/5419 e laudos de conformidade com ART.",
  },
];

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao site
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
            <HelpCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">
              Perguntas frequentes
            </p>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Dúvidas comuns,{" "}
          <span className="font-serif-italic text-gradient-blue">respostas claras.</span>
        </h1>

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

        <div className="mt-12 glass-card rounded-2xl p-6 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="https://wa.me/5511945620927?text=Ol%C3%A1%20AE%20Solutions%2C%20tenho%20uma%20d%C3%BAvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm glow-border hover:scale-105 transition-transform"
          >
            Fale conosco no WhatsApp
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
