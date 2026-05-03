"use client"
import Card from "@/components/ui/Card";
import { useQuery } from "@tanstack/react-query";
import { productService, ProductResponse } from "@/services/product.service";

export default function FeaturedProducts() {
  const { data, isLoading, isError } = useQuery<ProductResponse[]>({
    queryKey: ["products"],
    queryFn: () => productService.getProduct(), 
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="space-y-5 flex flex-col container">
      <h2 className="text-xl md:text-3xl font-semibold">Featured Products</h2>
      <div className="grid space-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-5">
        {data?.map((product: ProductResponse) => (
          <Card
            key={product._id}
            name={product.name}
            thumbnail={product?.thumbnail}
            description={product.description}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
}
