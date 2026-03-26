import Header from "@/components/Header";
import ProductPageLayout from "@/components/sections/ProductPageLayout";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const ingredients = [
  { nameKey: "ingredient.peanut.name", descKey: "ingredient.peanut.desc" },
  { nameKey: "ingredient.whey.name", descKey: "ingredient.whey.desc" },
];

export default function Protein() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductPageLayout
        productKey="protein"
        accentClass="text-protein"
        ingredients={ingredients}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
