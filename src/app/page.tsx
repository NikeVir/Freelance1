import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import WhySection from "@/components/WhySection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <LogoSection />
      <WhySection />
    </main>
  );
}
