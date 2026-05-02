"use client"

 import Image from 'next/image'
import slide1 from '@/assets/homeImages/slide1.webp'
import slide2 from '@/assets/homeImages/slide2.webp'
import slide3 from '@/assets/homeImages/slide3.jpg'
import slide4 from '@/assets/homeImages/slide4.webp'
import slide5 from '@/assets/homeImages/slide5.webp'
import slide6 from '@/assets/homeImages/slide6.avif'
import slide7 from '@/assets/homeImages/slide7.jpg'
import slide8 from '@/assets/homeImages/slide8.jpg' 
 

export default function HomeBanner() {
  return (
  <div className='container flex flex-col lg:flex-row  space-y-10 lg:space-y-0 lg:space-x-10 lg:h-screen  mt-20 lg:mt-0 '>
  <div className='w-full lg:w-7/12 flex flex-col justify-center '>
    <h1 className="text-3xl md:text-5xl  xl:text-7xl font-bold uppercase text-[#1f1f1f]">
Grace in Every Detail            </h1>
            <p className="my-5 text-gray-500 text-lg font-medium">
           Delicate designs that bring beauty, charm, and elegance to every occasion. Each piece is thoughtfully crafted to reflect timeless sophistication, helping you express your unique style with confidence and grace. Loved and trusted by 1000 of happy customers who choose our jewelry to celebrate life’s most meaningful moments.
            </p>
            <div className="xl:mt-10 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-3">
               <button className="bg-[#7eacb8] w-full lg:w-fit px-10 py-3 text-base font-bold text-gray-800 uppercase rounded-md">
                Shop Now
              </button>
               <button className=" border-[#7eacb8] border-2  w-full lg:w-fit px-10 py-3 text-base font-bold text-gray-800 uppercase rounded-md">
                View collections{" "}
              </button>
             </div>
  </div>
  <div className='w-full lg:w-5/12 h-full flex justify-center items-center  '>
  <div className='border-2 border-gray-200 rounded-2xl overflow-hidden  h-[30rem] w-[30rem]'>

 
   <Image src={slide7} alt='banner image' className='h-full w-full object-cover'/>
  </div>
   </div>
  </div>
  )
}