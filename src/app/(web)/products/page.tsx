import Card from "@/components/ui/Card";
import Image from "next/image";
import slide1 from '@/assets/homeImages/slide1.webp'

export default function Page(){
    return(
        <div className="space-y-20 flex flex-col container mt-20">
            <div className="rounded-xl overflow-hidden">
               <Image src={slide1} alt='banner image' className='h-full w-full'/>
            </div>
 
       <div className="flex space-x-4">
        {
 
       ([...Array(3)]).map((_,i)=> <Card/>)
 }
        <Card/>
       </div>
        </div>
    )
}