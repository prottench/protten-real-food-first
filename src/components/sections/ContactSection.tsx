import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";

export default function ContactSection() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xbdzvqqn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSent(true);
      form.reset();
    } catch {
      // silent fail
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
          {t("contact.title")}
        </h2>
        <p className="text-muted-foreground mb-8">{t("contact.response")}</p>

        {sent ? (
          <div className="p-6 bg-card rounded border border-border text-center">
            <p className="text-foreground font-medium">{t("contact.success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full px-6 py-3 bg-foreground text-background font-semibold rounded hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {sending ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
