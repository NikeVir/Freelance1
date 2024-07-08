"use client";
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
      "With industry experience, we offer AI solutions tailored for startups to drive innovation and growth.",
  },
  {
    icon: "/images/icons/ad-icon.svg",
    question: "Ad Verification",
    answer:
      "No two businesses are the same. We create AI solutions tailored to your unique needs.",
  },
  {
    icon: "/images/icons/ad-icon.svg",
    question: "Market Research",
    answer:
      "Our AI integration solutions are designed to seamlessly integrate with your existing systems, ensuring minimal disruption while optimizing your operations.",
  },
  {
    icon: "/images/icons/social-media-icon.svg",
    question: "Social Media Management",
    answer:
      "Day or night, our dedicated support team ensures your AI solutions run smoothly and efficiently.",
  },
  {
    icon: "/images/icons/e-commerce-icon.svg",
    question: "E-commerce",
    answer:
      "Day or night, our dedicated support team ensures your AI solutions run smoothly and efficiently.",
  },
];

export default function WhySection() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-secondary">
              <span style={{color: '#121118', fontFamily: 'Sora', fontWeight: '400', fontSize: '32px'}}>Cat Proxies</span> <span style={{color: '#121118', fontFamily: 'Sora', fontSize: '32px', fontWeight: '600'}}>Solutions</span>
            </h3>
            <p className="max-w-xl mx-auto mt-4 text-base text-secondary/80">
              <span style={{color: '#525252', fontFamily: 'Sora', fontSize: '24px', fontWeight: '400'}}>Explore How Our Expertise Translates</span> <div style={{color: '#525252', fontFamily: 'Sora', fontSize: '24px', fontWeight: '400'}}>into Tangible Results.</div>
            </p>
            <p className="text-sm text-gray-400">
              Dive deep into each project with comprehensive case studies that
              outline challenges, strategies, and outcomes.
            </p>
            <div className="sm:flex sm:justify-center lg:justify-start">
              <img src="/images/illustration/three-cat-illustration.svg" />
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-8">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="max-w-xl p-4 mx-auto bg-white border border-gray-200 rounded-md shadow-md"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-3">
                            <img src={faq.icon} alt={faq.question} />
                            <span className="text-xl font-light text-gray-900">
                              {faq.question}
                            </span>
                          </div>
                          <span className="flex items-center ml-6 h-7">
                            {open ? (
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
                      <Disclosure.Panel
                        as="dd"
                        className="flex flex-col pr-12 mt-8 space-y-4"
                      >
                        <p className="text-base font-normal text-gray-600">
                          {faq.answer}
                        </p>
                        <button className="ml-2 px-4 py-4 w-full rounded-lg text-sm text-white bg-gradient-to-r from-[#05C067] to-[#50EA48]">
                          Contact Us Now
                        </button>
                      </Disclosure.Panel>
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
