import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { COMPANY } from "@/lib/contact";

const PoliticaPage = () => {
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

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Política de Privacidade</h1>
            <p className="text-sm text-muted-foreground">{COMPANY.name} — {COMPANY.city}</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">1. Quem Somos</h2>
            <p>
              A <strong className="text-foreground">{COMPANY.name}</strong> é uma empresa especializada em soluções técnicas de eletromecânica, automação, eletroeletrônica e refrigeração, com sede em {COMPANY.address}.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">2. Dados que Coletamos</h2>
            <p>Ao utilizar nosso site ou entrar em contato conosco, podemos coletar:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Dados de identificação (nome, e-mail, telefone)</li>
              <li>Dados de localização (endereço para atendimento técnico)</li>
              <li>Dados de navegação (via cookies analíticos, com consentimento)</li>
              <li>Mensagens enviadas via WhatsApp ou formulário de contato</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">3. Como Usamos seus Dados</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Elaborar e enviar orçamentos técnicos</li>
              <li>Agendar e executar serviços contratados</li>
              <li>Comunicar-se sobre andamento de atendimentos</li>
              <li>Enviar confirmações e notas fiscais</li>
              <li>Melhorar nossos serviços com base no feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar informações apenas quando exigido por lei ou autoridade competente.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">5. Armazenamento e Segurança</h2>
            <p>
              Seus dados são armazenados de forma segura e mantidos apenas pelo tempo necessário para a prestação dos serviços ou conforme exigido por obrigações legais. Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">6. Retenção de Dados</h2>
            <p>
              Mantemos seus dados enquanto houver relação contratual ativa ou obrigação legal. Após esse período, os dados são anonimizados ou eliminados com segurança.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">7. Seus Direitos (LGPD)</h2>
            <p>Em conformidade com a LGPD, você pode a qualquer momento:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Solicitar acesso aos seus dados</li>
              <li>Pedir a correção de dados incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento dado anteriormente</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">8. Links Externos</h2>
            <p>
              Nosso site pode conter links para sites de terceiros (como WhatsApp Business). Não nos responsabilizamos pelas políticas de privacidade desses serviços.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">9. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos a revisão regular desta página. Alterações significativas serão comunicadas de forma destacada.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">10. Contato</h2>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-1">
              <p><strong className="text-foreground">{COMPANY.name}</strong></p>
              <p>{COMPANY.address}</p>
              <p><strong className="text-foreground">E-mail:</strong> {COMPANY.email}</p>
              <p><strong className="text-foreground">Telefone:</strong> {COMPANY.phone}</p>
            </div>
          </section>

          <p className="text-xs pt-4 border-t border-border">
            Última atualização: Janeiro de 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPage;
