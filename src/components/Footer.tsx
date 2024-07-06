"use client";
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;
export default function Footer() {
  const navigation = {
    proxies: [
      { name: "Residential Proxies", href: "#" },
      { name: "Data Center Proxies", href: "#" },
      { name: "IPv6 Proxies", href: "#" },
    ],
    company: [
      { name: "Contact us", href: "#" },
      { name: "Ethics", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Blog", href: "#" },
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
      { name: "terms and conditions", href: "#" },
      { name: "privacy policy", href: "#" },
      { name: "refund policy", href: "#" },
      { name: "fair usage policy", href: "#" },
      { name: "Shipping terms ", href: "#" },
    ],
    social: [
      {
        name: "Gmail",
        href: "#",
        icon: (props: IconProps) => <img src="/images/icons/email-icon.svg" />,
      },
      {
        name: "Telegram",
        href: "#",
        icon: (props: IconProps) => (
          <img src="/images/icons/telegram-icon.svg" />
        ),
      },
      {
        name: "Message",
        href: "#",
        icon: (props: IconProps) => (
          <img src="/images/icons/message-icon.svg" />
        ),
      },
      {
        name: "Discord",
        href: "#",
        icon: (props: IconProps) => (
          <img src="/images/icons/discord-icon.svg" />
        ),
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
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img alt="Company name" src="/logo.svg" className="h-12" />
              <h1 className="font-bold">CAT PROXIES</h1>
            </div>

            <div className="space-y-2">
              <p className="text-sm  text-gray-500">Technical Support</p>
              <p className="text-sm ">support@catproxies.com</p>
            </div>

            <div className="flex space-x-6">
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
                <h3 className="text-sm font-normal underline leading-6 text-gray-400">
                  Services
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