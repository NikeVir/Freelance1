export default function LogoSection() {
    return (
      <div className="bg-white lg:py-24 lg:px-16 sm:px-8  sm:py-24">
        <div className="flex divide-x lg:p-6 sm:p-2  divide-gray-300 border border-gray-300 rounded-2xl">
      <div className="flex-1 p-4 sm:p-2 sm:mt-3">
        <div className="flex space-x-8 sm:space-x-3 ">
        <img src="/images/icons/database.svg"/>
        <p className="text-[16px] sm:text-[12px] text-gray-500">10M Global <br></br>
Residential IPs</p>
        </div>
      </div>
      <div className="flex-1 p-4 sm:p-2">
      <div className="flex space-x-8 sm:space-x-3">
        <img src="/images/icons/location-icon.svg"/>
        <p className="text-[16px] sm:text-[12px] text-gray-500">Free Country, state,<br></br>
city & ISP targeting</p>
        </div>
      </div>
      <div className="flex-1 p-4 sm:p-2">
      <div className="flex space-x-8 sm:space-x-3 lg:mt-0 sm:mt-3 ">
        <img src="/images/icons/battery-full-icon.svg"/>
        <p className="text-[16px] sm:text-[12px] text-gray-500">99.9% Uptime <br></br>
Reliable IPs</p>
        </div>
      </div>
      <div className="flex-1 p-4 sm:p-2"><div className="flex  sm:mt-2 space-x-8 sm:space-x-3">
        <img src="/images/icons/lightening-icon.svg"/>
        <p className="text-[16px] sm:text-[12px] text-gray-500">~0.5s response time<br></br>
on average</p>
        </div></div>
    </div>
      </div>
    )
  }
  