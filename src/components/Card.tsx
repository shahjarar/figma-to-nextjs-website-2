import React from 'react'
import Image from 'next/image'

 const Card = () => {
  return (
    <><div>
          <div className='flex justify-evenly-center p-4'></div>
          <Image src="/images/Frame 732.png" alt="Frame" width={1400} height={1400} className="mr-[50px]" />

      </div><div>
              <div className='flex justify-evenly-center p-1'></div>
              <Image src="/images/Frame 600.png" alt="Frame" width={2500} height={2500} className="w-[1250px]  h-[900px] " />

          </div></>
  )
}
 export default Card

 
  export const Card1 = () => {
   return (
     <div><div>
     <div className='flex justify-evenly-center p-1'></div>
     <Image src="/images/Frame 736.png" alt="Frame" width={2500} height={2500} className="w-[1200px]  h-[900px] " />
 </div>
 <div>
 <div className='flex justify-evenly-center p-1'></div>
     <Image src="/images/Frame 740.png" alt="Frame" width={2500} height={2500} className="w-[1200px]  h-[900px] " />
 </div>
 <div className='flex justify-evenly-center p-4'></div>
     <Image src="/images/Frame 702.png" alt="Frame" width={900} height={900} className="w-[px]  h-[jpx] " />
 </div>


   )
 }
 