import { ApiService } from "@/lib/Api.service";
import {
  ProductApiResponseSchema,
  type ProductPayload,
  type ProductResponse
} from '@/schemas/product.schema'
const productServiceUrl = {
     product:"/product"
}







const createProduct = async(payload : ProductPayload) : Promise<ProductResponse>=>{
 const response = await  ApiService.post<ProductResponse>(`${productServiceUrl.product}`,payload);
 return response.data;
}


const getProduct = async (): Promise<ProductResponse[]> => {
  const response = await ApiService.get(`${productServiceUrl.product}`);
  // console.log(response.data,'api rseponse')
  const parsed = ProductApiResponseSchema.parse(response.data)
  // console.log(parsed,'parsed data')
  return parsed.products;
};

export const productService = {
    createProduct,
    getProduct
}
