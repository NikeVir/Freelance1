import { title } from 'process'
import React from 'react'

import Image from 'next/image'
import { Button } from './ui/Button'
import LeftAndRight from './resusables/LeftAndRight'

const plans = [
    'Unlimited concurrent sessions',
    'Rotating or Static',
    'Free geo-targeting',
    'Avg. 0.6s response time',
    'Avg. 99.9% success rates',
    'HTTP/HTTPS/SOCKS5 protocols'
]
const Explore = [
{
    plan:'Free Trial',
    pricePerGB:'FREE',
    totalCost:'FREE',
    action:'Contact Us',
    variant:'white'
},
{
    plan:'1GB',
    pricePerGB:'$3.5',
    totalCost:'$3.5',
    action:'Buy Now',
    variant:'blue'
},
{
    plan:'5GB',
    pricePerGB:'Price Per GB',
    totalCost:'$3',
    action:'$15',
    variant:'blue'
},
{
    plan:'25GB',
    pricePerGB:'Price Per GB',
    totalCost:'$2.7',
    action:'$67.5',
    variant:'blue'
},
{
    plan:'100GB',
    pricePerGB:'Price Per GB',
    totalCost:'$250',
    action:'Buy Now',
    variant:'blue'
},
]

const Pricing = () => {


    return (
        <div className='px-20 mt-40' >
            <div className='p-16 mx-auto  border shadow-flag '>
                <div className='text-center  flex  justify-center'>
                    <div className='max-w-[487px]'>
                        <h1 className='text-[32px] leading-9'>Clear Pricing, No Hidden <span className='font-bold'>Costs whatsoever</span></h1>
                    </div>
                </div>
                {/* font - Satoshi Variable */}
                <div className='flex justify-center mt-8'>
                    <div className='flex  max-w-5xl gap-8'>
                        <div className='w-[150px] text-[16px] font-medium'>All Plans Include:</div>
                        <div className='flex w-[808px] gap-5 flex-wrap '>
                            {plans.map((plan, index) => {
                                return (
                                    <div key={index} className='bg-[#DBF6FF]  font-medium rounded-[34px] px-[18px] py-[8px] text-[14px] w-fit'>{plan}</div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-16 '>

                    <div className='flex flex-col  max-w-6xl w-[1152px]  mt-12'>
                        <div className='flex border-b border-[#E4E4E4] pb-10 w-full'>
                            <div className='basis-1/4'></div>
                            <div className='basis-1/4 text-center'>Price Per GB</div>
                            <div className='basis-1/4 text-center'>Total Cost</div>
                            <div className='basis-1/4'></div>
                        </div>
                        <div className='flex flex-col'>
                            {Explore.map((item, index) => {
                                return (
                                    <div key={index} className='flex border-b border-[#E4E4E4] hover:bg-[#ECF5FF] hover:border-[#246BFD] hover:border-2 hover:rounded-xl p-10 text-xl w-full items-center'>
                                        <div className='basis-1/4 font-bold'>{item.plan}</div>
                                        <div className='basis-1/4 text-[#5089FD] text-center'>{item.pricePerGB}</div>
                                        <div className='basis-1/4 text-[#5089FD] text-center'>{item.totalCost}</div>
                                        <div className='basis-1/4 flex justify-end'><Button className='min-w-[180px]' variant={item.variant as 'blue'| 'white'}>{item.action}</Button></div>
                                    </div>
                                )
                            })
                            
                        }
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                        <Button variant='white' className='mt-10 min-w-[382px] font-medium text-[#2C2C2C] '>Explore more plans</Button>
                    </div>


            </div>
        </div>
    )
}
export default Pricing