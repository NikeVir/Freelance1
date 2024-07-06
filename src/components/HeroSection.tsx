export default function HeroSection() {
  return (
    <div className="pt-32 pb-16 overflow-hidden bg-white font-giest">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-4">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:flex-auto">
              <div className="flex items-center text-base text-gray-600 gap-x-4">
                <span className="flex items-center justify-center gap-x-1">
                  <img
                    src="/images/icons/single-star.svg"
                    className="w-5 h-5 "
                  />
                  <p className="mt-1 font-medium text-gray-900">Trustpilot</p>
                  <img
                    src="/images/icons/five-stars.svg"
                    alt=""
                    className="mt-1"
                  />
                </span>
                <span className="flex items-center justify-center gap-x-1 text-gray-900">
                  <img src="/images/icons/red-star.svg" className="w-5 h-5" />
                  <p className="mt-1 font-medium text-gray-900 ">G2</p>
                  <img src="/images/icons/red-5-stars.svg" className="mt-1" />
                </span>
              </div>
              <h1 className="max-w-xl mt-10 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Unlock the Power of Residential Proxies
              </h1>
              <p className="mt-6 text-lg font-normal leading-8 text-gray-600">
                Reliable and Secure Proxies for Your Needs Avoid captcha blocks
                while scraping with the most reliable and fast Residential
                Proxies.
              </p>
              <div className="flex flex-col items-center gap-6 mt-10 sm:flex-row ">
                <a
                  href="#"
                  className="justify-center w-full px-10 py-4 text-base font-semibold text-center text-white rounded-md shadow-sm bg-[#05C067]  hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:w-fit"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-md gap-x-2 hover:bg-gray-50 lg:w-fit"
                >
                  <img src="/images/icons/google-icon.svg" alt="" /> Sign up
                  with Google
                </a>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <p className="inline-flex gap-4 items-center text-base text-gray-600">
                  <img src="/images/icons/tick.svg" alt="" /> Start free trial
                </p>
                <p className="inline-flex items-center gap-4 text-base text-gray-600">
                  <img src="/images/icons/tick.svg" alt="" /> 3-day money-back
                  option
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mx-auto max-w-7xl">
            <img src="/images/illustration/cat-illustration.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
