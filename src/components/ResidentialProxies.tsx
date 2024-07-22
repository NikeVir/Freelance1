import exp from 'constants'
import Image from 'next/image'
import React from 'react'








const data = [
    {
        color: '/RectanglePurple.svg',
        title: 'Clean Residential Proxy IP Pool',
        description: "There are 10M+ clean residential IPs in our network"
    },
    {
        color: '/RectangleDGreen.svg',
        title: 'Precise Geo Targeting',
        description: "Option to target any city ,state and ISP in 195 countries available"
    },
    {
        color: '/RectangleYellow.svg',
        title: 'Good compatibility',
        description: "Our proxies support both HTTP and SOCKS5 protocols"
    },
    {
        color: '/RectangleBlue.svg',
        title: 'Stable performance',
        description: "99.9% Uptime. Proven performance, not just words"
    },
    {
        color: 'RectangleGreen.svg',
        title: 'Rotating and Static',
        description: "Rotating by default and option for static IPs"
    },
    {
        color: '/RectanglePink.svg',
        title: 'Top Residential Proxy Speeds',
        description: "99.9% success rate , ready for any task available"
    }
]

const ResidentialProxies = () => {
    return (
        <div className=' my-10 relative overflow-hidden  mx-auto'>
            <Image src='/hero2.svg' alt="" width={1000} height={500} className=' w-full absolute -z-10 opacity-30' />
            <div className='py-28   z-0 mx-auto '>
                <div className='flex justify-center' >
                    <h1 className="text-4xl font-bold text-center max-w-xl">Discover our residential proxies network</h1>
                </div>
                <div className='flex justify-center mt-5'>
                    <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 p-4 '>
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="flex justify-center shadow-flag min-w-[368px] min-h-[282px] rounded-[3.2px] gap-4 p-7 z-10 bg-[linear-gradient(180deg,#FAFAFA_0%,#FFF_100%)]">
                                        <div className='flex-col flex gap-2'>
                                            <Image src={`/images/illustration/reactangle/${item.color}`} alt="" className='relative -left-2' width={60} height={60} />
                                            <h2 className="text-2xl font-bold text-[#121118]">{item.title}</h2>
                                            <p className='text-[16px] opacity-50'>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResidentialProxies

