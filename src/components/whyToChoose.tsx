import { title } from 'process'
import React from 'react'

import Image from 'next/image'
import { Button } from './ui/Button'
import LeftAndRight from './resusables/LeftAndRight'


const Data = [
    {
        image: '/images/illustration/green/CatNetwork.svg',
        title: 'Integrity',
        description: "We prioritize quality over quantity in every proxy we offer. Our commitment to excellence is not just a promise; it's a reflection of our genuine care for our customers.",
        action: 'Contact Us Now',
        color: 'primary',
        direction:"left"
    },
    {
        image:'/images/illustration/green/CatSecurity.svg',
        title: 'Privacy',
        description: "With our strict no-log policy, your usage remains completely private and untracked. Your online activities are your business, and we respect that.",
        action: 'Contact Us Now',
        color: 'primary',
        direction:"right"

    },
    {
        image: '/images/illustration/green/CatWithDesk.svg',
        title: 'Cat Care Support',
        description: "Our dedicated team is here to address your questions and requests, every day, even on holidays. Not only that, but we are donating a part of our profit every month to animal shelters.",
        action: 'Contact Us Now',
        color: 'primary',
        direction:"left"
    },
]

const WhyToChoose = () => {


    return (
        <div >
            <div className='p-6 mx-auto  '>
                <div className='text-center  flex justify-center'>
                    <div className='max-w-2xl'>
                        <h1 className='text-[32px] leading-9'>Why 2000+ clients choose  <span className='font-bold'>CatProxies</span></h1>
                    </div>
                </div>
                <div className='flex justify-center'>

                <div className='flex flex-col gap-7 max-w-6xl  mt-12'>
                    <LeftAndRight data={Data[0]} />
                    <LeftAndRight data={Data[1]} />
                    <LeftAndRight data={Data[2]}/>

                </div>


                </div>


            </div>
        </div>
    )
}
export default WhyToChoose