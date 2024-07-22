"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

type IconProps = React.SVGProps<SVGSVGElement>;
export default function Footer() {
  const navigation = {
    proxies: [
      { name: "Residential Proxies", href: "/Proxies/residential" },
      { name: "Data Center Proxies", href: "/Proxies/datacenter" },
      { name: "IPv6 Proxies", href: "/Proxies/ipv6" },
    ],
    company: [
      { name: "Contact us", href: "/contact-us" },
      { name: "Ethics", href: "/Ethics" },
      { name: "FAQ", href: "/FAQ" },
      { name: "Guides", href: "/Blog?text=guide" },
      { name: "Blog", href: "/Blog" },
      { name: "Integrations", href: "/Blog?text=integrations" },
    ],
    services: [
      { name: "E-commerce", href: "/Solutions/ad-verification" },
      { name: "Social Media Marketing", href: "/Solutions/social-media" },
      { name: "Cybersecurity", href: "/Solutions/cyber-security" },
      { name: "Market Research", href: "/Solutions/market-research" },
      { name: "SEO Monitoring", href: "/Solutions/seo-monitoring" },
      { name: "Ad Verification", href: "/Solutions/ad-tech" },
    ],
    legal: [
      { name: "terms and conditions", href: "/terms-of-service" },
      { name: "privacy policy", href: "/privacy-policy" },
      { name: "refund policy", href: "/refund-policy" },
      { name: "fair usage policy", href: "/FairUsagePolicy" },
      { name: "Shipping terms", href: "/delivery-agreement" },
      { name: "Cookies Policy", href: "/Cookies" },
    ],
    social: [
      {
        name: "Gmail",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/icons/email-icon.svg" alt="Gmail" height={400} width={400} />,
      },
      {
        name: "Telegram",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/icons/Telegram-icon.svg" alt="Telegram"  height={400} width={400}/>,
      },
      {
        name: "Message",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/icons/message-icon.svg" alt="Message" height={400} width={400} />,
      },
      {
        name: "Discord",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/icons/Discord-icon.svg" alt="Discord" height={400} width={400} />,
      },
    ],
  };

  return (
    <footer aria-labelledby="footer-heading" className="bg-[#FAFAFA]">

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className=" text-center lg:text-left">
            <div className="flex items-center gap-2">
              <Image alt="Company name" src="/logo.svg" className="h-12 w-12" height={200} width={200} />
              <h1 className="font-bold text-2xl lg:text-2xl">CAT PROXIES</h1>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <p className="text-sm text-gray-500">Technical Support</p>
              <p className="text-sm">support@catproxies.com</p>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-5 lg:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-40  hover:text-gray-500 h-9 w-9 p-2 flex items-center "
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-normal leading-6 underline text-[#6F6F6F]">
                  Proxies
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.proxies.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize  leading-6 text-[#020611] hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-normal leading-6 underline text-[#6F6F6F]">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-6 text-[#020611] hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-normal leading-6 underline text-[#6F6F6F]">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-6 text-[#020611] hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-normal leading-6 underline text-[#6F6F6F]">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm capitalize leading-6 text-[#020611] hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
