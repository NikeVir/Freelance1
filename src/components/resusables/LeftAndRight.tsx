import React from 'react'
import { Button } from '../ui/Button';
import Image from 'next/image';
type Props = {
  image: string;
  title: string;
  description: string;
  action?: string;
  color: string;
  direction: string;
}

const LeftAndRight = ({ data }: { data: Props }) => {
  return (
    <div className={`flex justify-between max-w-[1150px] items-center xl:gap-48 gap-4 flex-col md:flex-row  ${data.direction =="left"?"":"flex-row-reverse"}`}>
      <div className='flex flex-col gap-6 max-w-[544px] basis-1/2'>
        <h1 className="text-[#121118] text-[34px] font-semibold">{data.title}</h1>
        <p className='text-[18px] leading-7 opacity-75'>{data.description}</p>
        {
          data.action ? <Button variant={'outline'} >{data.action}</Button>:""
        }
      </div>
      <div className='xl:min-w-[450px] xl:min-h-[450px]'>
        <Image src={data.image} alt={data.title} className='w-[450px] h-[450px] ' width={500} height={400} />
      </div>
    </div>
  )
}
export default LeftAndRight;