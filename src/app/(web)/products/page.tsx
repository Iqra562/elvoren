"use client"
import Card from "@/components/ui/Card";
import Image from "next/image";
import slide1 from '@/assets/homeImages/slide1.webp'
import { productService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { ProductResponse } from "@/services/product.service";
export default function Page(){
       type ProductsApiResponse = {
  products: ProductResponse[];
};
const { data, isLoading, isError } = useQuery<ProductsApiResponse>({
    queryKey: ["products"],
queryFn: async () => {
    const products = await productService.getProduct();
    return { products };
  },  }); 
 console.log(data,'product')
    return(
        <div className="space-y-20 flex flex-col container mt-20">
            <div className="rounded-xl overflow-hidden">
               <Image src={slide1} alt='banner image' className='h-full w-full'/>
            </div>
 
       <div className="grid space-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-5">
         
      {data?.products?.map((product:ProductResponse, index:number) => (
        <Card
          key={index}
          name={product.name}
          thumbnail={product?.thumbnail}
          description={product.description}
          price={product.price}
          stock={product.stock}
        />
      ))}      </div>
        </div>
    )
}