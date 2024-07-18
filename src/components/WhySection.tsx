"use client";
import { useState } from "react";
import Image from 'next/image';
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    icon: "/images/icons/web-scraping-icon.svg",
    question: "Web Scraping",
    answer:
      "Dive deep into each project with comprehensive case studies that outline challenges, strategies, and outcomes.",
  },
  {
    icon: "/images/icons/seo-icon.svg",
    question: "SEO Monitoring",
    answer:
      "Monitor your SEO efforts with our dedicated proxies. Track rankings and gather data from search engines with our reliable and anonymous proxy solutions.",
  },
  {
    icon: "/images/icons/ad-icon.svg",
    question: "Ad Tech",
    answer:
      "Optimize your ad campaigns using our high-performance proxies. Access ad platforms without limitations and enhance your targeting strategies.",
  },
  {
    icon: "/images/icons/ad-icon.svg",
    question: "Market Research",
    answer:
      "Conduct thorough market research with our anonymous proxies. Gather accurate data and insights while maintaining your privacy and security.",
  },
  {
    icon: "/images/icons/social-media-icon.svg",
    question: "Social Media Marketing",
    answer:
      "Boost your social media campaigns with our dedicated proxies. Ensure seamless access and manage multiple accounts without restrictions.",
  },
  {
    icon: "/images/icons/e-commerce-icon.svg",
    question: "Cybersecurity",
    answer:
      "Protect your online activities with our robust proxies. Safeguard your data and ensure anonymity with our secure and reliable proxy services.",
  },
];

export default function WhySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-secondary">
              <span style={{color: '#121118', fontFamily: 'Sora', fontWeight: '400', fontSize: '32px'}}>Popular</span> <span style={{color: '#121118', fontFamily: 'Sora', fontSize: '32px', fontWeight: '600'}}>Use Cases</span>
            </h3>
            <p className="flex-col max-w-xl mx-auto mt-4 text-2xl text-[#525252]">
            Explore how our customers use our proxies
            </p>

            <div className="sm:flex sm:justify-center lg:justify-start">
              <Image src="/images/illustration/three-cat-illustration.svg" alt="Cat Proxies Illustration" className="w-[500px] h-[500px]" height={400} width={400}/>
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="max-w-xl p-4 mx-auto bg-white border border-gray-200 rounded-md shadow-md"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button
                          className="flex items-center justify-between w-full"
                          onClick={() => handleToggle(index)}
                        >
                          <div className="flex items-center space-x-3">
                            <Image src={faq.icon} alt={faq.question} className="w-[48px] h-[48px]" height={400} width={400} />
                            <span className="text-xl font-light text-gray-900" >
                              {faq.question}
                            </span>
                          </div>
                          <span className="flex items-center ml-6 h-7">
                            {openIndex === index ? (
                              <ChevronUpIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <ChevronDownIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      {openIndex === index && (
                        <Disclosure.Panel
                          as="dd"
                          className="flex flex-col items-start pr-12 mt-4 space-y-4"
                        >
                          <p className="text-base font-normal text-gray-600">
                            {faq.answer}
                          </p>
                          <button className="px-4 py-2 w-full text-sm text-white rounded-lg bg-gradient-to-r from-[#05C067] to-[#50EA48]">
                            Contact Us Now
                          </button>
                        </Disclosure.Panel>
                      )}
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
