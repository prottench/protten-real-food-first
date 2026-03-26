import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
];

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-xl tracking-tight text-foreground">
          THE SQUARE BAR
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          <Link
            to="/protein"
            className={`px-4 py-2 text-sm font-semibold rounded transition-colors ${
              location.pathname === "/protein"
                ? "bg-protein text-protein-foreground"
                : "bg-protein/10 text-foreground hover:bg-protein/20"
            }`}
          >
            {t("nav.protein")}
          </Link>
          <Link
            to="/energy"
            className={`px-4 py-2 text-sm font-semibold rounded transition-colors ${
              location.pathname === "/energy"
                ? "bg-energy text-energy-foreground"
                : "bg-energy/10 text-foreground hover:bg-energy/20"
            }`}
          >
            {t("nav.energy")}
          </Link>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("contact.label")}
          </a>
          {/* Language selector */}
          <div className="flex items-center gap-1 ml-2 border-l border-border pl-3">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`text-xs px-2 py-1 rounded transition-colors ${
                  language === l.code
                    ? "bg-foreground text-background font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          <Link
            to="/protein"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-sm font-semibold rounded bg-protein/10 text-foreground"
          >
            {t("nav.protein")}
          </Link>
          <Link
            to="/energy"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-sm font-semibold rounded bg-energy/10 text-foreground"
          >
            {t("nav.energy")}
          </Link>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 text-sm font-medium text-muted-foreground"
          >
            {t("contact.label")}
          </a>
          <div className="flex gap-1 pt-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`text-xs px-2 py-1 rounded ${
                  language === l.code
                    ? "bg-foreground text-background font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
