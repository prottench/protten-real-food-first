import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
