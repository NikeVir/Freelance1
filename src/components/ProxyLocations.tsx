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

const data =[
  {
    flag:<AmericanFlag/>,
    country:'United States',
    ips:"2,505,230"
  },
  {
    flag:<UkFlag/>,
    country:'United Kingdom',
    ips:"2,505,230"
  },
  {
    flag:<CanadaFlag/>,
    country:'Canada',
    ips:"2,505,230"
  },
  {
    flag:<ChinaFlag/>,
    country:'China',
    ips:"2,505,230"
  },
  {
    flag:<FranceFlag/>,
    country:'France',
    ips:"2,505,230"
  },
  {
    flag:<GermanyFlag/>,
    country:'Germany',
    ips:"2,505,230"
  },
  {
    flag:<AustraliaFlag/>,
    country:'Australia',
    ips:"2,505,230"
  },
  {
    flag:<BrazilFlag/>,
    country:'Brazil',
    ips:"2,505,230"
  },
  {
    flag:<IndiaFlag/>,
    country:'India',
    ips:"2,505,230"
  },
  {
    flag:<JapanFlag/>,
    country:'Japan',
    ips:"2,505,230"
  },


]

const ProxyLocations=()=> {
  return (
    <div className='mt-44'>
      <div>
        <h1 className="text-3xl font-bold text-center">Proxy Locations</h1>
        <div className='flex justify-center'>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 max-w-6xl">
          {data.map((item,index)=>(
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
export default  ProxyLocations;