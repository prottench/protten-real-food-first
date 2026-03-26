import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

interface ProductPageLayoutProps {
  productKey: "protein" | "energy";
  accentClass: string;
  ingredients: { nameKey: string; descKey: string }[];
}

export default function ProductPageLayout({ productKey, accentClass, ingredients }: ProductPageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl sm:text-7xl font-black tracking-tighter text-foreground">
            {t(`product.${productKey}.name`)}
          </h1>
          <p className={`mt-3 text-xl font-medium ${accentClass}`}>
            {t(`product.${productKey}.tagline`)}
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t(`product.${productKey}.desc`)}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.nameKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="font-display font-bold text-lg text-foreground">
                {t(ing.nameKey)}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {t(ing.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
