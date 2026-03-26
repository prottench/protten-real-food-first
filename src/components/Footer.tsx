import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display font-bold text-foreground">THE SQUARE BAR</p>
        <p>{t("footer.swiss")} · © {year} {t("footer.rights")}</p>
      </div>
    </footer>
  );
}
