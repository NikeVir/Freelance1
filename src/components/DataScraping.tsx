import { title } from 'process'
import React from 'react'
import Residental from './assets/DataScraping/Residental'
import Datacenter from './assets/DataScraping/Datacenter'
import Ipv6 from './assets/DataScraping/Ipv6'
import Staticisp from './assets/DataScraping/Staticisp'
import Image from 'next/image'
import { Button } from './ui/Button'


const Data = [
    {
        image: <Residental />,
        title: 'Residential Proxies',
        description: "Real IPs from ISPs for reliable and secure web scraping",
        rate: "$2/GB",
        action: 'Buy Now',
        color: 'pinkg'
    },
    {
        image: <Datacenter />,
        title: 'Datacenter Proxies',
        description: "High-speed, scalable proxies from data centers for bulk web scraping",
        rate: "$4.3/day",
        action: 'Buy Now',
        color: 'primary'

    },
    {
        image: <Ipv6 />,
        title: 'IPV6 Proxies',
        description: "Modern, high-availability proxies with vast address space for advanced needs",
        rate: "$3.1/day",
        action: 'Self-Checkout',
        color: 'purple'

    },
    {
        image: <Staticisp />,
        title: 'Static ISP Proxies',
        description: "Consistent IPs from ISPs for stable and uninterrupted connections",
        rate: "$2.5/IP",
        action: 'Self-Checkout',
        color: 'yellowg'

    }
]

const DataScraping = () => {


    return (
        <div className='relative z-0'>
            <Image src='/hero2.svg' alt="" width={1000} height={500} className=' w-full absolute -z-10 opacity-30' />
            <div className='p-6 mx-auto z-10  '>

                <div className='text-center  flex justify-center'>
                    <div className='max-w-3xl'>
                        <h1 className='text-[32px] leading-9'>Efficient Data Scraping For <span className='font-bold'>Projects Of Any Scale</span></h1>
                        <p className='text-[18px] text-[#A8A8A8] mt-2'>
                            From Premium Residential Proxies or responsive datacenter to static ISP solutions for any needs, experience the quality with CatProxies.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[956px] mt-12'>
                    {
                        Data.map((data, index) => (
                            <div key={index} className='flex max-w-[460px] flex-col h-[307px] p-7 bg-white rounded-2xl gap-2 shadow-custom'>
                                {data.image}
                                <div className='text-2xl '>{data.title}</div>
                                <div className='text-sm text-[#A8A8A8]'>{data.description}</div>
                                <div className='mt-4'>
                                    
                                    <div className='flex justify-between items-center'>
                                        <div className=''>
                                            <p className='relative -mt-4 text-[14px] text-[#A8A8A8]'>Starting from</p>
                                        <div className='text-2xl mt-2 font-semibold text-[#020611]'>
                                            {data.rate}</div>
                                        </div>
                                        <Button variant={data.color as "pinkg" | "primary" | "purple" | "yellowg"} className='py-[14px] px-[34px]'>{data.action}</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


                </div>


            </div>
        </div>
    )
}
export default DataScraping