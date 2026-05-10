import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { COMPANY } from "@/lib/contact";

const LgpdPage = () => {
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
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">LGPD</h1>
            <p className="text-sm text-muted-foreground">Lei Geral de Proteção de Dados</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">1. Comprometimento com a LGPD</h2>
            <p>
              A <strong className="text-foreground">{COMPANY.name}</strong> está comprometida com a proteção dos dados pessoais de seus clientes e parceiros, em conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">2. Dados Coletados</h2>
            <p>Coletamos apenas os dados necessários para a prestação de nossos serviços técnicos:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Nome completo</li>
              <li>Telefone e/ou WhatsApp</li>
              <li>Endereço de e-mail</li>
              <li>Endereço do local de atendimento</li>
              <li>Descrição do serviço solicitado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">3. Finalidade do Tratamento</h2>
            <p>Os dados pessoais coletados são utilizados exclusivamente para:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Realização de orçamentos e prestação de serviços técnicos</li>
              <li>Comunicação sobre agendamentos e atendimentos</li>
              <li>Emissão de notas fiscais e documentos fiscais</li>
              <li>Melhoria contínua dos nossos serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">4. Base Legal</h2>
            <p>
              O tratamento dos dados ocorre com base no consentimento do titular (art. 7º, I da LGPD) e na execução de contrato (art. 7º, V da LGPD), conforme a natureza dos serviços prestados.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">5. Seus Direitos</h2>
            <p>Você possui os seguintes direitos garantidos pela LGPD:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados pessoais</li>
              <li>Correção de dados incompletos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados</li>
              <li>Portabilidade dos dados</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">6. Contato do Encarregado (DPO)</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados, entre em contato:
            </p>
            <div className="mt-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
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

export default LgpdPage;
