import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-6xl sm:text-8xl font-black tracking-tighter text-foreground"
      >
        {t("hero.title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl"
      >
        {t("hero.subtitle")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/protein"
          className="px-8 py-4 bg-protein text-protein-foreground font-bold text-lg rounded hover:opacity-90 transition-opacity"
        >
          PROTTEN
        </Link>
        <Link
          to="/energy"
          className="px-8 py-4 bg-energy text-energy-foreground font-bold text-lg rounded hover:opacity-90 transition-opacity"
        >
          DATTEN
        </Link>
      </motion.div>
    </section>
  );
}
