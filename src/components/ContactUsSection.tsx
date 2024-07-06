"use client";
import Header from "./Header";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center mb-4">
        <img src="/images/illustration/gray-cat.svg" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="font-bold text-[32px]">Contact Us</h1>
        <p className="text-[18px] text-gray-500 ">
          Reach out to us anytime, and we'll get back you as soon as possible!
        </p>
      </div>
      <div className="relative isolate pt-1">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex flex-col gap-10 lg:items-center lg:px-8">
          <form
            action="#"
            method="POST"
            className="bg-[#ffffff]  w-full shadow-lg rounded-2xl p-12 mx-auto  max-w-5xl"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  FULL NAME*
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="So we know how to address you"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  COMPANY NAME
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="So we can tailor the services to your business needs"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  EMAIL*
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="So we can respond promptly to your enquiry"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  WHO REFERRED YOU TO US?
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="So we can say thank you"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  Any Document to upload for us
                </label>
                <div className="mt-2.5">
                  <input
                    placeholder="Click here to upload document"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-4">
              <div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-blue-600" : "bg-gray-200",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="lg:text-sm sm:text-[12px] leading-6 text-gray-500 whitespace-nowrap">
                    I agree and consent to the{" "}
                    <a href="#" className="font-semibold ">
                      privacy&nbsp;policy
                    </a>
                    , its terms of processing of my personal data. .
                  </Switch.Label>
                </Switch.Group>
              </div>

              <div className="lg:flex lg:justify-end sm:mt-12 lg:mt-0 sm:justify-end sm:flex">
                <button
                  type="submit"
                  className="inline-flex w-32 text-center items-center text-sm justify-end bg-[#05C067] p-2 shadow-lg shadow-black/30 rounded-md font-semibold leading-6 text-gray-900"
                >
                  <p className="w-full text-center items-center gap-2  text-white rounded-lg">
                    Contact Us
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
