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
    <div className={`flex justify-between w-[1150px] items-center gap-64 ${data.direction =='left'?"":"flex-row-reverse"}`}>
      <div className='flex flex-col gap-6'>
        <h1 className="text-[#121118] text-[34px] font-semibold">{data.title}</h1>
        <p className='text-[18px] leading-7 opacity-75'>{data.description}</p>
        {
          data.action ? <Button variant={'outline'} >{data.action}</Button>:""
        }
      </div>
      <div className='min-w-[450px] h-[450px]'>
        <Image src={data.image} alt={data.title} className='w-[450px] h-[450px] ' width={500} height={400} />
      </div>
    </div>
  )
}
export default LeftAndRight;