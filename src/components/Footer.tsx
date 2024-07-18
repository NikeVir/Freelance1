"use client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

type IconProps = React.SVGProps<SVGSVGElement>;
export default function Footer() {
  const navigation = {
    proxies: [
      { name: "Residential Proxies", href: "#" },
      { name: "Data Center Proxies", href: "#" },
      { name: "IPv6 Proxies", href: "#" },
    ],
    company: [
      { name: "Contact us", href: "/contact-us" },
      { name: "Ethics", href: "/Ethics" },
      { name: "FAQ", href: "/FAQ" },
      { name: "Guides", href: "#" },
      { name: "Blog", href: "/Blog" },
      { name: "Integrations", href: "#" },
    ],
    services: [
      { name: "Web Scraping", href: "#" },
      { name: "SEO Monitoring", href: "#" },
      { name: "Ad Verification", href: "#" },
      { name: "Market Research", href: "#" },
      { name: "Social Media Management", href: "#" },
      { name: "E-commerce", href: "#" },
    ],
    legal: [
      { name: "terms and conditions", href: "/TermsAndCondition" },
      { name: "privacy policy", href: "/privacy-policy" },
      { name: "refund policy", href: "/refund-policy" },
      { name: "fair usage policy", href: "/FairUsagePolicy" },
      { name: "Shipping terms", href: "/terms-of-service" },
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
        icon: (props: IconProps) => <Image src="/images/icons/telegram-icon.svg" alt="Telegram"  height={400} width={400}/>,
      },
      {
        name: "Message",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/icons/message-icon.svg" alt="Message" height={400} width={400} />,
      },
      {
        name: "Discord",
        href: "#",
        icon: (props: IconProps) => <Image src="/images/icons/discord-icon.svg" alt="Discord" height={400} width={400} />,
      },
    ],
  };

  return (
    <footer aria-labelledby="footer-heading" className="bg-[#FAFAFA]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-2">
              <Image alt="Company name" src="/logo.svg" className="h-12" height={200} width={200} />
              <h1 className="font-bold text-2xl lg:text-3xl">CAT PROXIES</h1>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Technical Support</p>
              <p className="text-sm">support@catproxies.com</p>
            </div>
            <div className="flex justify-center space-x-6 lg:justify-start">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-normal leading-6 underline text-gray-400">
                  Proxies
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.proxies.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-normal leading-6 underline text-gray-400">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
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
                <h3 className="text-sm font-normal leading-6 underline text-gray-400">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-normal leading-6 underline text-gray-400">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
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
