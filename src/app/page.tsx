import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import WhySection from "@/components/WhySection";
import Features from "@/components/Features"


export default function Home() {
  return (
    <main className="font-giest">
     
      <Header />
      <HeroSection />
      <LogoSection />
      <Features/>
      <WhySection />
    </main>
  );
}
