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
interface HeroContainer {
    title: string;
    description: string;
    points: string[];
    pointsColor: string;
    image: string;
    alt: string;
}


const HomeContentHero: HeroContainer = {
    title: "Unlock the Power of Residential Proxies",
    description: "Reliable and Secure Proxies for Your Needs Avoid captcha blocks while scraping with the most reliable and fast Residential Proxies.",
    points: [],
    pointsColor: "blue",
    image: "/images/illustration/cat-illustration.svg",
    alt: "Hero Banner",
};
export default function page() {
    return (
        <div>
            <div className="z-10 relative">
                <div className='absolute -z-10 w-full h-[980px]'>
                    <Image src="/11heroBanner.svg" alt="" className="border-black  w-full h-[980px]" height={600} width={600} />
                </div>
                <HeroSection data={HomeContentHero} />
            </div>
            <ProxyLocations />
            <ResidentialProxies />
            <Pricing />
            <LogoSection />
            <WhyToChoose/>
            <FAQs />
        </div>
    )
}
