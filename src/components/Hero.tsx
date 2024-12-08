import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';

 const Hero = () => {
  return (
  <div className='flex p-6'>
      <div className='flex md:text-left'>
        <div className='w-[217px] h-[344px] gap-[16px]  ml-[150px]'>
        <div><span className='flex gap-1'><p className='font-poppins w-[217px]font-normal'></p><FaAngleRight /></span>
        <span className='flex gap-1'><p className='font-poppins w-[217px] font-normal'></p><FaAngleRight /></span>
       <p className='font-poppins w-[87px]font-normal text-[16px] h-[24px] text-left'>Electroics</p>
       <p className='font-poppins w-[132px]font-normal text-[16px] h-[24px] text-left'>Home & Lifestyle</p>
       <p className='font-poppins w-[73px]font-normal text-[16px] h-[24px] text-left'>Medicine</p>
       <p className='font-poppins w-[137px]font-normal text-[16px] h-[24px] text-left'>Sport & Outdoor</p>
       <p className='font-poppins w-[109px]font-normal text-[16px] h-[24px] text-left'>Baby's & Toys</p>
       <p className='font-poppins w-[131px]font-normal text-[16px] h-[24px] text-left'>Groceries & Pets</p>
       <p className='font-poppins w-[128px]font-normal text-[16px] h-[24px] text-left'>Hralth & Beauty</p>
       </div>
       <div className='mt-[-2px] h-[35px] bg-black opacity-[30%]'></div>
      </div>
      <div>
       <Image src="/images/Frame 560.png" alt="hero" width={600} height={600} className="mr-[150px]"/>
      </div>
    </div>
  </div>
    
  )
}

export default Hero

export const Hero1 =() =>{
  return (
    <><div>
      <Image src="/images/Frame 728.png" alt="Frame" width={1000} height={800} className='mr-[302px] h-[600px] mr-[30px] w-[400]' />
    </div><div className='flex justify-evenly'>
        <Image src="/images/Frame 601.png" alt="frame" width={300} height={300} className='mr-evenly' />
      </div>
      <div>
   
        </div></>
  )
}
export const Hero2=() =>{
  return (
    <div>
         <div>
         <div className='flex justify-evenly-center'>
        <Image src="/images/frame5.png" alt="Frame" width={1200} height={1200} className="mr-evenly"/>
    </div>
    </div>
    </div>
  )
}


