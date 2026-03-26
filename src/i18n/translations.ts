export type Language = "en" | "fr" | "de" | "it";

type TranslationMap = Record<string, Record<Language, string>>;

export const translations: TranslationMap = {
  // Nav
  "nav.protein": { en: "Protein", fr: "Protéine", de: "Protein", it: "Proteina" },
  "nav.energy": { en: "Energy", fr: "Énergie", de: "Energie", it: "Energia" },
  
  // Contact
  "contact.label": { en: "Contact", fr: "Contact", de: "Kontakt", it: "Contatto" },
  "contact.title": { en: "Get in Touch", fr: "Contactez-nous", de: "Kontaktieren Sie uns", it: "Contattaci" },
  "contact.name": { en: "Name", fr: "Nom", de: "Name", it: "Nome" },
  "contact.email": { en: "Email", fr: "Email", de: "E-Mail", it: "Email" },
  "contact.message": { en: "Message", fr: "Message", de: "Nachricht", it: "Messaggio" },
  "contact.send": { en: "Send Message", fr: "Envoyer le message", de: "Nachricht senden", it: "Invia messaggio" },
  "contact.sending": { en: "Sending...", fr: "Envoi...", de: "Senden...", it: "Invio..." },
  "contact.response": { en: "We typically respond within 24 hours.", fr: "Nous répondons généralement sous 24 heures.", de: "Wir antworten in der Regel innerhalb von 24 Stunden.", it: "Rispondiamo generalmente entro 24 ore." },
  "contact.success": { en: "Message sent successfully!", fr: "Message envoyé avec succès!", de: "Nachricht erfolgreich gesendet!", it: "Messaggio inviato con successo!" },

  // Hero
  "hero.title": { en: "THE SQUARE BAR", fr: "THE SQUARE BAR", de: "THE SQUARE BAR", it: "THE SQUARE BAR" },
  "hero.subtitle": { en: "Clean label bars. Real ingredients. Swiss Made.", fr: "Barres clean label. Ingrédients réels. Swiss Made.", de: "Clean Label Riegel. Echte Zutaten. Swiss Made.", it: "Barrette clean label. Ingredienti veri. Swiss Made." },

  // Products
  "product.protein.name": { en: "PROTTEN", fr: "PROTTEN", de: "PROTTEN", it: "PROTTEN" },
  "product.protein.tagline": { en: "15g of protein per bar", fr: "15g de protéines par barre", de: "15g Protein pro Riegel", it: "15g di proteine per barretta" },
  "product.protein.desc": { en: "High-protein, clean label. Made with real peanuts, whey protein, and natural ingredients. No compromises.", fr: "Riche en protéines, clean label. Fabriqué avec de vraies cacahuètes, des protéines de lactosérum et des ingrédients naturels.", de: "Proteinreich, clean label. Hergestellt mit echten Erdnüssen, Molkenprotein und natürlichen Zutaten.", it: "Ricco di proteine, clean label. Fatto con vere arachidi, proteine del siero e ingredienti naturali." },

  "product.energy.name": { en: "DATTEN", fr: "DATTEN", de: "DATTEN", it: "DATTEN" },
  "product.energy.tagline": { en: "Natural energy from dates", fr: "Énergie naturelle des dattes", de: "Natürliche Energie aus Datteln", it: "Energia naturale dai datteri" },
  "product.energy.desc": { en: "All-natural energy bar. Powered by dates, nuts, and nothing artificial. Pure fuel for your day.", fr: "Barre énergétique 100% naturelle. Alimentée par des dattes, des noix et rien d'artificiel.", de: "Natürlicher Energieriegel. Angetrieben von Datteln, Nüssen und nichts Künstlichem.", it: "Barretta energetica naturale. Alimentata da datteri, frutta secca e niente di artificiale." },

  // Ingredients
  "ingredient.peanut.name": { en: "Peanuts", fr: "Cacahuètes", de: "Erdnüsse", it: "Arachidi" },
  "ingredient.peanut.desc": { en: "The foundation. Rich in healthy fats, natural protein, and the satisfying taste that makes every bar irresistible.", fr: "La fondation. Riche en graisses saines et ce goût qui rend chaque barre irrésistible.", de: "Das Fundament. Reich an gesunden Fetten und dem Geschmack, der jeden Riegel unwiderstehlich macht.", it: "La base. Ricco di grassi sani, proteine naturali e il gusto che rende ogni barretta irresistibile." },
  "ingredient.dates.name": { en: "Dates", fr: "Dattes", de: "Datteln", it: "Datteri" },
  "ingredient.dates.desc": { en: "Nature's caramel. A rich source of natural energy, fiber, and essential minerals.", fr: "Le caramel de la nature. Source riche en énergie naturelle, fibres et minéraux essentiels.", de: "Natur-Karamell. Eine reiche Quelle natürlicher Energie, Ballaststoffe und essentieller Mineralien.", it: "Il caramello della natura. Una ricca fonte di energia naturale, fibre e minerali essenziali." },
  "ingredient.whey.name": { en: "Whey Protein", fr: "Protéine de lactosérum", de: "Molkenprotein", it: "Proteine del siero" },
  "ingredient.whey.desc": { en: "Premium whey for muscle recovery and sustained energy throughout your day.", fr: "Lactosérum premium pour la récupération musculaire et une énergie soutenue.", de: "Premium-Molke für Muskelregeneration und anhaltende Energie.", it: "Siero di latte premium per il recupero muscolare e l'energia sostenuta." },

  // Footer
  "footer.swiss": { en: "Swiss Made", fr: "Swiss Made", de: "Swiss Made", it: "Swiss Made" },
  "footer.rights": { en: "All rights reserved.", fr: "Tous droits réservés.", de: "Alle Rechte vorbehalten.", it: "Tutti i diritti riservati." },

  // Discover
  "discover": { en: "Discover", fr: "Découvrir", de: "Entdecken", it: "Scopri" },
};
