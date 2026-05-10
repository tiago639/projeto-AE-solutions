import { Link } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";
import { COMPANY } from "@/lib/contact";

const CookiesPage = () => {
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
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Política de Cookies</h1>
            <p className="text-sm text-muted-foreground">Como utilizamos cookies neste site</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem que o site lembre suas preferências e melhore sua experiência de navegação.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-4 mt-3">
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h3 className="text-foreground font-medium mb-1">🔒 Cookies Essenciais</h3>
                <p>Necessários para o funcionamento básico do site. Não podem ser desativados pois garantem a segurança e as funcionalidades principais.</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h3 className="text-foreground font-medium mb-1">📊 Cookies de Análise</h3>
                <p>Utilizamos ferramentas como Google Analytics (anonimizado) para entender como os visitantes interagem com o site e melhorar a experiência.</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h3 className="text-foreground font-medium mb-1">⚙️ Cookies de Preferência</h3>
                <p>Lembram suas configurações e preferências de navegação para personalizar sua experiência.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">Como Gerenciar os Cookies</h2>
            <p>
              Você pode controlar e/ou excluir cookies a qualquer momento através das configurações do seu navegador. Saiba mais em <a href="https://www.aboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Chrome: Configurações → Privacidade → Cookies</li>
              <li>Firefox: Preferências → Privacidade → Cookies</li>
              <li>Safari: Preferências → Privacidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">Cookies de Terceiros</h2>
            <p>
              Alguns serviços incorporados ao site (como o botão do WhatsApp) podem definir cookies de terceiros. Não temos controle sobre esses cookies — consulte as políticas de privacidade de cada serviço.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-3">Contato</h2>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <p>Dúvidas sobre nossa política de cookies? Entre em contato:</p>
              <p className="mt-1"><strong className="text-foreground">E-mail:</strong> {COMPANY.email}</p>
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

export default CookiesPage;
