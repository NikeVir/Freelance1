export default function PricingSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden pt-32 pb-16">
      <div className=" flex justify-center items-center text-black ">
        <h1 className="text-[32px] sm:text-[24px] font-normal whitespace-nowrap">
          Clear Pricing, No Hidden{" "}
          <a href="#" className="font-bold">
            Costs whatsoever
          </a>{" "}
        </h1>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/4 mt-48 hidden lg:block">
          <div className="mt-28 rounded-tl-lg rounded-bl-lg overflow-hidden space-y-11 ">
            <p className=" text-[18px] text-gray-600 h-12 text-center px-4 flex items-center justify-start -mt-px">
              29 Network IP Pool size
            </p>
            <p className="text-gray-600 h-12 text-[18px] text-center px-4 flex items-center justify-start">
              Country Targeting
            </p>
            <p className=" text-[18px] text-gray-600 h-12 text-center px-4 flex items-center justify-start">
              2 IP Authentication
            </p>
            <p className="text-gray-600 h-12 text-[18px] text-center px-4 flex items-center justify-start">
              Country Targeting
            </p>
            <p className="text-[18px] text-gray-600 h-12 text-center px-4 flex items-center justify-start">
              Backconnect Ports
            </p>
            <p className="text-gray-600 h-12 text-[18px] text-center px-4 flex items-center justify-start">
              HTTP Protocol Supported
            </p>
          </div>
        </div>
        <div className="flex lg:w-3/4 w-full flex-wrap  rounded-lg">
          <div className="lg:w-[260px] space-y-12 p-12  lg:h-[850px] lg:mt-px w-full mb-10 lg:mb-0 lg:border-none rounded-lg lg:rounded-none shadow-lg">
            <div className="px-2 text-center h-48 flex space-y-1 flex-col items-center justify-center ">
              <h3 className="tracking-widest text-[20px] font-normal">
                Standard
              </h3>
              <h2 className="text-[30px] text-gray-900 font-medium leading-none mb-4 mt-2">
                $162.50
              </h2>

              <span className="text-[20px] text-gray-600">Per month</span>

              <div className="p-6 text-center rounded-bl-lg whitespace-nowrap space-y-4">
                <p className="text-[20px] text-gray-500 mt-3">
                  at{" "}
                  <a href="#" className="font-semibold w-5 h-5 bg-white ">
                    $3.25
                  </a>{" "}
                  per GB
                </p>
                <button className=" flex flex-col  justify-center items-center mt-auto text-black bg-[#FAFAFA] border-0 text-[13px] p-3 w-full focus:outline-none rounded">
                  Get Started
                </button>
              </div>
            </div>

            <p className=" text-[18px] text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center ">
              50
            </p>
            <p className="text-gray-600 text-[18px] text-center h-12 flex items-center justify-center">
              1 TB
            </p>
            <p className=" text-[18px] text-gray-600 text-center h-12 flex items-center justify-center">
              Unlimited
            </p>
            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
            <p className=" text-gray-600 text-center h-12 flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
          </div>
          <div className="lg:w-[260px] space-y-12  shadow-lg lg:h-[850px] lg:-mt-px w-full mb-10 lg:mb-0  rounded-lg border-[#05C067] relative">
            <span className="bg-[#FFE70E] text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
              POPULAR
            </span>
            <div className="px-2 text-center space-y-1 h-48 flex flex-col items-center justify-center">
              <h3 className="tracking-widest text-[20px]">Enterprise</h3>
              <h2 className="text-[30px] text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                $199
              </h2>
              <span className="text-gray-600 text-[20px] ml-1">Per month</span>

              <div className="  p-6 text-center rounded-bl-lg space-y-3">
                <p className="text-[20px] text-gray-500 mt-3">
                  at{" "}
                  <a href="#" className="font-semibold w-5 h-5 bg-white ">
                    $3.25
                  </a>{" "}
                  per GB
                </p>
                <button className=" flex flex-col justify-center items-center mt-auto text-white bg-[#05C067] border-0 text-[13px] p-3 w-full focus:outline-none rounded">
                  Get Started
                </button>
              </div>
            </div>
            <p className=" text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              50
            </p>
            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
              1 TB
            </p>
            <p className=" text-gray-600 text-center h-12 flex items-center justify-center">
              Unlimited
            </p>
            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
            <p className=" text-gray-600 text-center h-12 flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
          </div>
          <div className="lg:w-[260px] space-y-12 p-12  lg:h-[850px] shadow-lg lg:mt-px  lg:border-none rounded-lg lg:rounded-none">
            <div className="px-2 text-center h-48 flex space-y-1 flex-col items-center justify-center">
              <h3 className="tracking-widest text-[20px]">Custom</h3>
              <h2 className="text-[30px] whitespace-nowrap text-[#246BFD] font-medium flex items-center justify-center leading-none mb-4 mt-2">
                Let"s Discuss
              </h2>
              <span className="text-gray-600 text-base ml-1 text-[20px]">
                Per month
              </span>
              <div className="  p-6 text-center rounded-bl-lg space-y-4">
                <p className="text-[20px] text-gray-500 mt-3  whitespace-nowrap ">
                  at{" "}
                  <a href="#" className="font-semibold w-5 h-5  bg-white ">
                    $3.25
                  </a>{" "}
                  per GB
                </p>
                <button className=" flex flex-col justify-center items-center mt-auto text-black bg-[#FAFAFA] border-0 text-[13px] p-3 w-full focus:outline-none rounded">
                  Get Started
                </button>
              </div>
            </div>

            <p className=" text-[18px] text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
              50
            </p>
            <p className="text-gray-600 text-center text-[18px] h-12 flex items-center justify-center">
              1 TB
            </p>
            <p className=" text-[18px] text-gray-600 text-center h-12 flex items-center justify-center">
              Unlimited
            </p>
            <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
            <p className=" text-gray-600 text-center h-12 flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
            <p className="text-gray-600 text-center h-12 flex items-center justify-center">
              <img src="/images/icons/green-tick-icon.svg" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
