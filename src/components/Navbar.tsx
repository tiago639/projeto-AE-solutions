import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import { COMPANY } from "@/lib/contact";

const sections = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Preços", href: "/#precos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "FAQ", href: "/#faq" },
];

const legalPages = [
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "LGPD", href: "/lgpd" },
  { label: "Cookies", href: "/cookies" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll for hash links on homepage
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(220_55%_6%/0.95)] backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <AnimatedLogo size={42} />
          <div className="hidden sm:block">
            <p className="font-bold text-sm text-white leading-tight">{COMPANY.name}</p>
            <p className="text-[10px] text-blue-400 uppercase tracking-widest">Soluções técnicas</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={(e) => handleSectionClick(e, s.href)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {s.label}
            </a>
          ))}

          {/* Legal dropdown */}
          <div className="relative">
            <button
              onClick={() => setLegalOpen(!legalOpen)}
              className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Legal
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${legalOpen ? "rotate-180" : ""}`}
              />
            </button>
            {legalOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[hsl(220_45%_10%)] border border-blue-500/20 rounded-xl shadow-xl shadow-blue-900/30 overflow-hidden">
                {legalPages.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    onClick={() => setLegalOpen(false)}
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-blue-500/10 transition-colors border-b border-border last:border-0"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[hsl(220_55%_6%/0.98)] backdrop-blur-xl border-t border-blue-500/20">
          <div className="px-4 py-4 space-y-1">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={(e) => handleSectionClick(e, s.href)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {s.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <p className="px-4 py-2 text-xs text-blue-400 uppercase tracking-widest font-semibold">
                Jurídico
              </p>
              {legalPages.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Close legal dropdown on outside click */}
      {legalOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setLegalOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
