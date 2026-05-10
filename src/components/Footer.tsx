import { COMPANY, WA_LINK } from "@/lib/contact";
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={COMPANY.logo}
                alt={COMPANY.name}
                className="w-12 h-12 rounded-full object-cover border border-border"
              />
              <div>
                <p className="font-bold text-lg">{COMPANY.name}</p>
                <p className="text-xs text-muted-foreground">Soluções técnicas integradas</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a></li>
              <li><a href="#orcamento" className="hover:text-foreground transition-colors">Orçamento</a></li>
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Jurídico</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/politica-privacidade" className="hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/lgpd" className="hover:text-foreground transition-colors">
                  LGPD
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  FAQ completo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            Fale conosco no WhatsApp →
          </a>
        </div>

        {/* Crédito do desenvolvedor */}
        <div className="mt-4 pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="text-[11px] text-muted-foreground/60">Desenvolvido por</span>
          <a
            href="https://wa.me/5521977140933"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground/80 hover:text-primary transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-green-500 group-hover:text-green-400 transition-colors">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882l6.2-1.628A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.358-.213-3.722.976.996-3.634-.234-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            <span className="font-medium">Tiago Silva</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-mono tracking-wide">(21) 97714-0933</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
