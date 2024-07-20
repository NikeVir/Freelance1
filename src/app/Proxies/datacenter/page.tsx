import React from 'react'
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProxyLocations from '@/components/ProxyLocations';
import Residental from '@/components/assets/DataScraping/Residental';
import ResidentialProxies from '@/components/ResidentialProxies';
import Pricing from '@/components/Pricing';
import LogoSection from '@/components/LogoSection';
import FAQs from '@/components/FAQs';
import WhyToChoose from '@/components/whyToChoose';
import WhySection from '@/components/WhySection';

interface HeroContainer {
    title: string;
    description: string;
    points: string[];
    pointsColor: string;
    image: string;
    alt: string;
    buttonColor: "primary" | "blue" | "white" | "purple" | "purpleg" | "pinkg" | "yellowg" | "greendg" | "greenlg" | "outline";
}


const HomeContentHero:HeroContainer = {
    title: "Datacenter Proxies",
    description: "A vast IP pool. Scale your tasks with our rotating Datacenter IPs.",
    points: ["20.000+ ethical datacenter proxies","Unlimited concurrent connections","Unlimited bandwidth"],
    pointsColor: "green",
    image: "/images/illustration/proxies/Datacenter.svg",
    alt: "Hero Banner",
    buttonColor: "greenlg",
};
type data ={
    image: string;
    color:'blueOutline' | 'greenOutline'  | 'purpleOutline'| 'outline';
  }
  const Data1:data={
    image: "/images/illustration/DarkGreenUse.svg",
    color: 'greenOutline'
  }
  
export default function page() {
    return (
        <div>
            <div className=" relative lg:mb-24">
                <div className='absolute -top-28 -z-10 w-full h-[80vh]'>
                    <Image src="/11heroBanner.svg" alt="" className="border-black  w-full h-screen" height={600} width={600} />
                </div>
                <HeroSection data={HomeContentHero} />
            </div>
            <ProxyLocations />
            <ResidentialProxies />
            <Pricing type='green'/>
            <LogoSection />
            <WhySection Data={Data1} />
            <FAQs />
        </div>
    )
}
