"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    icon: "/images/icons/cutting-edge.svg",
    question: "Cutting-Edge Technology",
    answer:
      "Stay ahead with our top-notch AI and machine learning solutions, always evolving to bring you the latest advancements.",
  },
  {
    icon: "/images/icons/industry.svg",
    question: "Industry Expertise",
    answer:
      "With industry experience, we offer AI solutions tailored for startups to drive innovation and growth.",
  },
  {
    icon: "/images/icons/custom.svg",
    question: "Custom Solutions",
    answer:
      "No two businesses are the same. We create AI solutions tailored to your unique needs.",
  },
  {
    icon: "/images/icons/effortless.svg",
    question: "Effortless Integration",
    answer:
      "Our AI integration solutions are designed to seamlessly integrate with your existing systems, ensuring minimal disruption while optimizing your operations.",
  },
  {
    icon: "/images/icons/247.svg",
    question: "24/7 Support",
    answer:
      "Day or night, our dedicated support team ensures your AI solutions run smoothly and efficiently.",
  },
];

export default function WhySection() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
          <h3 className="text-2xl lg:text-left text-center sm:text-4xl font-semibold tracking-tight text-secondary">
            Why Pick WordWorks AI?
            </h3>
            <p className="max-w-xl text-center lg:text-left mx-auto mt-4 text-base text-secondary/80">
              Dive deep into each project with comprehensive case studies that
              outline challenges, strategies, and outcomes.
            </p>
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
                            <span className="text-xl font-medium text-gray-900">
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