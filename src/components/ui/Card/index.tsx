import slide1 from '@/assets/homeImages/slide1.webp'
  import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";

type CardProps = {
  name: string;
  thumbnail:string,
  description: string;
  price: number;
  stock: number;
};

 function Card({name,description,thumbnail , price, stock}:CardProps) {
  return (
    <>
      <div className="  border-gray-300 border  rounded-2xl shadow overflow-hidden w-full h-full flex flex-col justify-between">
        <div className="px-3 py-2">
          <div className="h-60  md:h-60 lg:h-60 overflow-hidden  rounded-xl relative">
           
               <Image             src={thumbnail || "/fallback.webp"} width={100} height={100}
 alt='banner image' className='h-full w-full object-cover'/>
          </div>
        </div>
        <div className=" flex flex-1 flex-col justify-between pt-3 space-y-2  px-5 md:p-4 py-3 ">
          <div className="">
            <div className="flex justify-between items-baseline ">
              <p className="font-bold text-xl md:text-2xl capitalize text-paragraphDark">
                {name}
              </p> 

             </div>
             <p className="text-sm font-semibold capitalize my-2 line-clamp-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minima.
            </p>
          </div>
          <div className="flex flex-col justify-between space-y-2 ">
            <div className="flex justify-between items-center space-x-2">
           

            <span className={`block  font-bold text-secondary text-lg `}>
              ${price}           </span >

              <span>
<FaRegHeart />

              </span>
              </div>
            <button className='bg-[#561a33] w-full px-2 py-2 text-base font-bold text-white rounded-md '>Add to cart</button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Card;