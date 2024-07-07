import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import WhySection from "@/components/WhySection";
import Features from "@/components/Features"
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUsSection";
import PricingSection from "@/components/PricingSection";
export default function Home() {
  return (
    <main className="font-giest">
     
      <Header />
      <HeroSection />
      <Features/>
      <LogoSection />
      <PricingSection/>
      <WhySection />
      <FAQs/>
      <ContactUsSection/>
      <Footer/>
    </main>
  );
}
