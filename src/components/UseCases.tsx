import React from 'react'
import Webscraping from './assets/usecases/Webscraping'
import MarketResearch from './assets/usecases/MarketResearch'
import SocialMedia from './assets/usecases/SocialMedia'
import AdVerification from './assets/usecases/AdVerification'
import SeoMonitoring from './assets/usecases/SeoMonitoring'
import AdTech from './assets/usecases/AdTech'
type DataItem = {
    image: JSX.Element;
    title: string;
}

const data = [
    {
        image: <AdVerification />,
        title: 'E-Commerce',
    },
    {
        image: <MarketResearch />,
        title: 'Social Media Marketing',
    },
    {
        image: <SocialMedia />,
        title: 'Market Research',
    },
    {
        image: <Webscraping />,
        title: 'Cybersecurity',
    },
    {
        image: <AdTech />,
        title: 'SEO Monitoring',
    },
    {
        image: <SeoMonitoring />,
        title: 'Ad Tech',
    },
]
const UseCases = ({type}:{type:string}) => {
    const filteredData = data.filter(item => item.title !== type);
    return (
        <div className='my-40'>
            <div>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className='text-[32px] '>Popular use cases</h1>
                    <p className='text-[#A8A8A8] text-[18px]'>Explore how our customers use our proxies</p>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <div className="flex flex-wrap justify-center gap-5 max-w-7xl">
                    {filteredData.map((item, index) => (
                        <div key={index} className="bg-[linear-gradient(180deg,#FAFAFA_0%,#FFF_100%)] border-2 flex items-center group hover:border-2 hover:border-[#05C067] hover:bg-[#F0FBF3] w-[368px] h-[250px] border-white  rounded-xl shadow-custom px-10 py-5  justify-center ">
                            <div className='flex items-center flex-col'>
                                {item.image}
                                <h1 className="text-2xl mt-2 text-center ">{item.title}</h1>
                                <p className="text-[16px] mt-4 hidden group-hover:flex  text-[#05C067]   underline decoration-[#05C067]">Read More</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default UseCases

