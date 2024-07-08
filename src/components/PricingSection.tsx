export default function PricingSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden pt-32 pb-16">
      <div className="flex justify-center items-center text-black">
        <h1 className="text-[32px] sm:text-[24px] font-normal text-center px-4">
          Clear Pricing, No Hidden{" "}
          <a href="#" className="font-bold">
            Costs whatsoever
          </a>
        </h1>
      </div>

      <div className="container px-4 sm:px-6 py-8 sm:py-16 mx-auto max-w-7xl lg:px-8">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/4 mt-28 hidden lg:block">
            <div className="rounded-tl-lg rounded-bl-lg overflow-hidden space-y-11 text-center sm:text-left">
              <p className="text-[18px] text-gray-600 h-12">
                29 Network IP Pool size
              </p>
              <p className="text-gray-600 h-12 text-[18px]">
                Country Targeting
              </p>
              <p className="text-[18px] text-gray-600 h-12">
                2 IP Authentication
              </p>
              <p className="text-gray-600 h-12 text-[18px]">
                Country Targeting
              </p>
              <p className="text-[18px] text-gray-600 h-12">
                Backconnect Ports
              </p>
              <p className="text-gray-600 h-12 text-[18px]">
                HTTP Protocol Supported
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-3/4 w-full justify-center lg:justify-end rounded-lg">
            <div className="w-full sm:w-[260px] space-y-12 p-6 sm:p-12 lg:h-[850px] mt-10 sm:mt-0 mb-10 lg:mb-0 shadow-lg rounded-lg">
              <div className="text-center">
                <h3 className="tracking-widest text-[20px] font-normal">
                  Standard
                </h3>
                <h2 className="text-[30px] text-gray-900 font-medium leading-none mb-4 mt-2">
                  $162.50
                </h2>
                <span className="text-[20px] text-gray-600">Per month</span>
                <div className="p-6 text-center whitespace-nowrap space-y-4">
                  <p className="text-[20px] text-gray-500 mt-3">
                    at{" "}
                    <a className="font-semibold w-5 h-5 bg-white inline-block align-middle" style={{ border: '1.22px solid #EEEEEE', borderRadius: '6.1px'}}>
                      $3.25
                    </a>{" "}
                    per GB
                  </p>
                  <button className="text-black bg-[#FAFAFA] border-0 text-[13px] p-3 w-full focus:outline-none rounded">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[18px] text-gray-600 h-12 text-center">
                  50
                </p>
                <p className="text-gray-600 text-[18px] text-center h-12">
                  1 TB
                </p>
                <p className="text-[18px] text-gray-600 text-center h-12">
                  Unlimited
                </p>
                <p className="h-12 text-gray-600 text-center leading-relaxed">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
                <p className="text-gray-600 text-center h-12">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
                <p className="text-gray-600 text-center h-12">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[260px] space-y-12 shadow-lg lg:h-[850px] mt-10 sm:mt-0 mb-10 lg:mb-0 rounded-lg border-[#05C067] relative bg-[#F0FBF3] p-6 sm:p-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 z-10">
                <span className="bg-[#FFE70E] text-black px-3 py-2 tracking-widest text-xs rounded-md font-bold" style={{ boxShadow: '0px 4.88px 4.88px 0px #00000040' }}>
                  POPULAR
                </span>
              </div>
              <div className="text-center space-y-1">
                <h3 className="tracking-widest text-[20px]">Enterprise</h3>
                <h2 className="text-[30px] text-gray-900 font-medium leading-none mb-4 mt-2">
                  $199
                </h2>
                <span className="text-gray-600 text-[20px]">Per month</span>
                <div className="p-6 text-center space-y-3">
                  <p className="text-[20px] text-gray-500 mt-3">
                    at{" "}
                    <a className="font-semibold w-5 h-5 bg-white inline-block align-middle" style={{ border: '1.22px solid #EEEEEE', borderRadius: '6.1px'}}>
                      $3.25
                    </a>{" "}
                    per GB
                  </p>
                  <button className="text-white bg-[#05C067] border-0 text-[13px] p-3 w-full focus:outline-none rounded">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 h-12 text-center">
                  50
                </p>
                <p className="text-gray-600 text-center h-12">
                  1 TB
                </p>
                <p className="text-[18px] text-gray-600 text-center h-12">
                  Unlimited
                </p>
                <p className="h-12 text-gray-600 text-center leading-relaxed">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
                <p className="text-gray-600 text-center h-12">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
                <p className="text-gray-600 text-center h-12">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[260px] space-y-12 p-6 sm:p-12 lg:h-[850px] shadow-lg mt-10 sm:mt-0 lg:mt-px lg:border-none rounded-lg lg:rounded-none">
              <div className="text-center">
                <h3 className="tracking-widest text-[20px]">Custom</h3>
                <h2 className="text-[30px] whitespace-normal sm:whitespace-nowrap text-[#246BFD] font-medium leading-none mb-4 mt-2">
                  Let's Discuss
                </h2>
                <span className="text-gray-600 text-base text-[20px]">Per month</span>
                <div className="p-6 text-center space-y-4">
                  <p className="text-[20px] text-gray-500 mt-3 whitespace-normal sm:whitespace-nowrap">
                    at{" "}
                    <a className="font-semibold w-5 h-5 bg-white inline-block align-middle" style={{ border: '1.22px solid #EEEEEE', borderRadius: '6.1px'}}>
                      $3.25
                    </a>{" "}
                    per GB
                  </p>
                  <button className="text-black bg-[#FAFAFA] border-0 text-[13px] p-3 w-full focus:outline-none rounded">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[18px] text-gray-600 h-12 text-center">
                  50
                </p>
                <p className="text-gray-600 text-center text-[18px] h-12">
                  1 TB
                </p>
                <p className="text-[18px] text-gray-600 text-center h-12">
                  Unlimited
                </p>
                <p className="h-12 text-gray-600 text-center leading-relaxed">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
                <p className="text-gray-600 text-center h-12">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
                <p className="text-gray-600 text-center h-12">
                  <img src="/images/icons/green-tick-icon.svg" alt="Included" />
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
