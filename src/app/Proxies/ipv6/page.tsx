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
    title: "IPv6 Proxies",
    description: "Extensive IP range. Scale your operations with our rotating IPv6 proxies",
    points: ["Billions of billions of IPv6 IPs available","Unlimited concurrent connections","Unlimited bandwidth"],
    pointsColor: "purple",
    image: "/images/illustration/proxies/Ipv6.svg",
    alt: "Hero Banner",
    buttonColor: "purpleg",
};
type data ={
    image: string;
    color:'blueOutline' | 'greenOutline'  | 'purpleOutline'| 'outline';
  }
  const Data1:data={
    image: "/images/illustration/purpleUseCase.svg",
    color: 'purpleOutline'
  }
  
export default function page() {
    return (
        <div>
            <div className=" relative lg:mb-24">
                <div className='absolute -z-10 -top-28 w-full h-[680px]'>
                    <Image src="/11heroBanner.svg" alt="" className="border-black  w-full h-[980px]" height={600} width={600} />
                </div>
                <HeroSection data={HomeContentHero} />
            </div>
            <ProxyLocations />
            <ResidentialProxies />
            <Pricing type='purple'/>
            <LogoSection />
            <WhySection Data={Data1} />
            <FAQs />
        </div>
    )
}
