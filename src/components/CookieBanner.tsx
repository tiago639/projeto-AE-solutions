import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, Check, Settings } from "lucide-react";

const COOKIE_KEY = "ae-solutions-cookie-consent";

type ConsentStatus = "accepted" | "rejected" | "custom" | null;

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Pequeno delay para não aparecer imediatamente
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (status: ConsentStatus, prefs?: object) => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({ status, prefs, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  const acceptAll = () => save("accepted", { analytics: true, preferences: true });
  const rejectAll = () => save("rejected", { analytics: false, preferences: false });
  const saveCustom = () => save("custom", { analytics, preferences });

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6"
      style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}
    >
      <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-900/30 overflow-hidden">

        {!showCustom ? (
          /* Banner principal */
          <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground mb-1">
                Utilizamos cookies 🍪
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Usamos cookies essenciais para o funcionamento do site e, com sua permissão, cookies analíticos para melhorar sua experiência. Veja nossa{" "}
                <Link to="/cookies" className="text-primary hover:underline">
                  Política de Cookies
                </Link>{" "}
                e{" "}
                <Link to="/politica-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowCustom(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all"
              >
                <Settings className="w-3.5 h-3.5" />
                Personalizar
              </button>
              <button
                onClick={rejectAll}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all"
              >
                <X className="w-3.5 h-3.5" />
                Recusar
              </button>
              <button
                onClick={acceptAll}
                className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all glow-border"
              >
                <Check className="w-3.5 h-3.5" />
                Aceitar todos
              </button>
            </div>
          </div>
        ) : (
          /* Painel customizado */
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary" />
                Personalizar cookies
              </h3>
              <button
                onClick={() => setShowCustom(false)}
                className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-5">
              {/* Essenciais — sempre ativo */}
              <div className="flex items-start justify-between p-4 bg-secondary/40 rounded-xl border border-border">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-foreground mb-0.5">🔒 Cookies Essenciais</p>
                  <p className="text-xs text-muted-foreground">
                    Necessários para o site funcionar corretamente. Não podem ser desativados.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-6 rounded-full bg-primary flex items-center justify-end px-1 cursor-not-allowed opacity-70">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              {/* Analíticos */}
              <div className="flex items-start justify-between p-4 bg-secondary/40 rounded-xl border border-border">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-foreground mb-0.5">📊 Cookies Analíticos</p>
                  <p className="text-xs text-muted-foreground">
                    Ajudam a entender como os visitantes usam o site (Google Analytics anonimizado).
                  </p>
                </div>
                <button
                  onClick={() => setAnalytics(!analytics)}
                  className={`flex-shrink-0 mt-0.5 w-10 h-6 rounded-full transition-colors flex items-center px-1 ${
                    analytics ? "bg-primary justify-end" : "bg-secondary border border-border justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </button>
              </div>

              {/* Preferências */}
              <div className="flex items-start justify-between p-4 bg-secondary/40 rounded-xl border border-border">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-foreground mb-0.5">⚙️ Cookies de Preferência</p>
                  <p className="text-xs text-muted-foreground">
                    Lembram suas configurações e preferências de navegação.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(!preferences)}
                  className={`flex-shrink-0 mt-0.5 w-10 h-6 rounded-full transition-colors flex items-center px-1 ${
                    preferences ? "bg-primary justify-end" : "bg-secondary border border-border justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all"
              >
                Recusar todos
              </button>
              <button
                onClick={saveCustom}
                className="px-5 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all glow-border"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
