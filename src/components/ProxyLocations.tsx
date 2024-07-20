import React from 'react'
import AmericanFlag from './assets/AmericanFlag';
import UkFlag from './assets/UkFlag';
import CanadaFlag from './assets/CanadaFlag';
import ChinaFlag from './assets/ChinaFlag';
import FranceFlag from './assets/FranceFlag';
import GermanyFlag from './assets/GermanyFlag';
import BrazilFlag from './assets/BrazilFlag';
import IndiaFlag from './assets/IndiaFlag';
import JapanFlag from './assets/JapanFlag';
import AustraliaFlag from './assets/AustraliaFlag';

const data = [
  {
    flag: <AmericanFlag />,
    country: 'USA',
    ips: "2705989"
  },
  {
    flag: <UkFlag />,
    country: 'UK',
    ips: "810432"
  },
  {
    flag: <CanadaFlag />,
    country: 'Canada',
    ips: "659422"
  },
  {
    flag: <ChinaFlag />,
    country: 'China',
    ips: "1611670"
  },
  {
    flag: <FranceFlag />,
    country: 'France',
    ips: "568098"
  },
  {
    flag: <GermanyFlag />,
    country: 'Germany',
    ips: "883121"
  },
  {
    flag: <AustraliaFlag />,
    country: 'Australia',
    ips: "320621"
  },
  {
    flag: <BrazilFlag />,
    country: 'Brazil',
    ips: "563122"
  },
  {
    flag: <IndiaFlag />,
    country: 'India',
    ips: "397680"
  },
  {
    flag: <JapanFlag />,
    country: 'Japan',
    ips: "1342221"
  },


]

const ProxyLocations = () => {
  return (
    <div className='my-10 py-20   z-10'>
      <div>
      <div className='flex justify-center' >
        <div className='max-w-3xl'>
          <h1 className='text-[32px] font-bold leading-9'>Top Proxy Locations</h1>
          <p className='text-[18px] text-[#A8A8A8] mt-2'>
          Premium proxy IPs from 195 countries
          </p>
        </div>
        </div>
        <div className='flex justify-center mt-5'>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 max-w-6xl">
            {data.map((item, index) => (
              <div key={index} className="bg-[linear-gradient(180deg,#FAFAFA_0%,#FFF_100%)] border-white border rounded-sm shadow-flag px-10 py-5  justify-center ">
                <div className='flex items-center flex-col'>
                  {item.flag}
                  <h1 className="text-sm mt-2 ">{item.country}</h1>
                  <p className="text-[12px]  opacity-40">{item.ips} IPs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProxyLocations;