import Header from "@/components/Header";
import ProductPageLayout from "@/components/sections/ProductPageLayout";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const ingredients = [
  { nameKey: "ingredient.dates.name", descKey: "ingredient.dates.desc" },
  { nameKey: "ingredient.peanut.name", descKey: "ingredient.peanut.desc" },
];

export default function Energy() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductPageLayout
        productKey="energy"
        accentClass="text-energy"
        ingredients={ingredients}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
