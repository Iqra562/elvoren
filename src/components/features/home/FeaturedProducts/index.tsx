"use client"

import Card from "@/components/ui/Card";
import { productService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { ProductResponse } from "@/services/product.service";
export default function FeaturedProducts(){
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
        <div className="space-y-5 flex flex-col container">
            <h2 className="text-xl md:text-3xl font-semibold">Featured Products</h2>

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