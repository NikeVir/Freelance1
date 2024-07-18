import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import WhySection from "@/components/WhySection";
import Features from "@/components/Features"
import FAQs from "@/components/FAQs";
import ContactUsSection from "@/components/ContactUsSection";
import Image from "next/image";
import DataScraping from "@/components/DataScraping";
import WhyToChoose from "@/components/whyToChoose";
import ProxyLocations from "@/components/ProxyLocations";
import UseCases from "@/components/UseCases";


interface HeroContainer {
  title: string;
  description: string;
  points: string[];
  pointsColor: string;
  image: string;
  alt: string;
}


const HomeContentHero:HeroContainer = {
  title: "Unlock the Power of Residential Proxies",
  description: "Reliable and Secure Proxies for Your Needs Avoid captcha blocks while scraping with the most reliable and fast Residential Proxies.",
  points:[],
  pointsColor: "blue",
  image: "/images/illustration/cat-illustration.svg",
  alt: "Hero Banner",
};



export default function Home() {
  return (
    <main className="font-sora">
      <div className="z-10 relative">
        <div className='absolute -z-10 w-full h-[980px]'>
          <Image src="/11heroBanner.svg" alt="" className="border-black  w-full h-[980px]" height={600} width={600} />
        </div>
        <HeroSection data={HomeContentHero} />
        <Features />
      </div>
      <LogoSection />
      <DataScraping/>
      {/* <PricingSection /> */}
      <WhySection />
      <WhyToChoose/>
      <ProxyLocations/>
      <FAQs />
      <ContactUsSection />
    </main>
  );
}
