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
    title: "Unlock the Power of Residential Proxies",
    description: "Bypass limitations with our high-performance residential proxies.",
    points: ["10M+ residential IPs","Country, State, City & ISP Targeting","HTTP & SOCKS5 Support"],
    pointsColor: "blue",
    image: "/images/illustration/proxies/Residental.svg",
    alt: "Hero Banner",
    buttonColor: "blue",
};
type data ={
    image: string;
    color:'blueOutline' | 'greenOutline'  | 'purpleOutline'| 'outline';
  }
  const Data1:data={
    image: "/images/illustration/BlueUseCase.svg",
    color: 'blueOutline'
  }
  
export default function page() {
    return (
        <div>
            <div className="relative ">
                <div className='absolute -top-28 -z-10 w-full h-[980px]'>
                    <Image src="/11heroBanner.svg" alt="" className="border-black w-full h-[980px]" height={600} width={600} />
                </div>
                <HeroSection data={HomeContentHero} />
            </div>
            <ProxyLocations />
            <ResidentialProxies />
            <Pricing type='blue' />
            <LogoSection />
            <WhySection Data={Data1} />
            <FAQs />
        </div>
    )
}
