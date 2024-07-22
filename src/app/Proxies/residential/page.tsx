import React from 'react'
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProxyLocations from '@/components/ProxyLocations';
import ResidentialProxies from '@/components/ResidentialProxies';
import Pricing from '@/components/Pricing';
import LogoSection from '@/components/LogoSection';
import FAQs from '@/components/FAQs';
import WhySection from '@/components/WhySection';
import { HeroContainer } from '@/types/types';
import { Explore1,plans1 } from '@/utils/Data';


const HomeContentHero:HeroContainer = {
    title: "Residential Proxies",
    description: "Bypass limitations with our high-performance residential proxies.",
    points: ["10M+ residential IPs","Country, State, City & ISP Targeting","HTTP & SOCKS5 Support"],
    pointsColor: "blue",
    image: "/images/illustration/proxies/Residential.svg",
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
            <div className="relative  lg:mb-24 ">
                <div className='absolute -top-28 -z-10 w-full h-[980px]'>
                    <Image src="/11heroBanner.svg" alt="" className="border-black w-full h-[980px]" height={600} width={600} />
                </div>
                <HeroSection data={HomeContentHero} />
            </div>
            <ProxyLocations />
            <ResidentialProxies />
            <Pricing type='blue' plans={plans1} Explore={Explore1} />
            <LogoSection />
            <WhySection Data={Data1} />
            <FAQs />
        </div>
    )
}
